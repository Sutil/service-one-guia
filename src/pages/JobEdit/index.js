import React, { useState } from 'react';
import { ActivityIndicator, Alert } from 'react-native';
// import DateTimeInput from 'simple-datetime-picker';
import { parseISO, format } from 'date-fns';
import { Input, Button, TextButton } from '../../components/global';
import { Container, DateTimeInputC } from './styles';
import InputMoney from '../../components/InputMoney';
import api from '../../services/api';
import DateTimeInput from '../../components/DateTimeInput';

export default function JobEdit({ navigation }) {
  const job = navigation.getParam('job', {});

  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState(job.title);
  const [price, setPrice] = useState(job.price);
  const [date, setDate] = useState(job.date ? parseISO(job.date) : null);

  async function update(newJob) {
    await api.put(`jobs/${newJob.id}`, newJob);
  }

  async function create(newJob) {
    await api.post('jobs', newJob);
  }

  async function handleSave() {
    setLoading(true);
    const newJob = {
      id: job.id,
      title,
      price,
      date: format(date, 'yyyy-MM-dd HH:mm:ss'),
    };
    try {
      if (newJob.id) {
        await update(newJob);
      } else {
        await create(newJob);
      }
      navigation.goBack();
    } catch (err) {
      setLoading(false);
      Alert.alert('Erro', 'Falha ao salvar!');
    }
  }

  return (
    <Container>
      <Input
        placeholder="Qual é o job?"
        value={title}
        onChangeText={setTitle}
      />

      <DateTimeInputC
        format="dd-MM-yyyy 'às' HH:mm"
        placeholder="Quando vai ser?"
        date={date}
        onValueChange={setDate}
      />
      <InputMoney value={price} onChange={setPrice} />
      <Button onPress={handleSave}>
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <TextButton>Salvar</TextButton>
        )}
      </Button>
    </Container>
  );
}

JobEdit.navigationOptions = {
  title: 'Job',
};
