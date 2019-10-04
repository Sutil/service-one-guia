import React, { useState, useEffect, useMemo } from 'react';
import { Alert } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { moneyFormat } from '../../utils/moneyFormat';
import Header from '../../components/Header';
import {
  Container,
  JobList,
  JobContainer,
  JobTitle,
  JobInfos,
  JobDate,
  JobValue,
  ResumeCard,
  TotalJobs,
  TotalValue,
  DeleteButton,
  AddButton,
} from './styles';

import api from '../../services/api';

function Home({ navigation, isFocused }) {
  const [jobs, setJobs] = useState([]);

  function formatJob(job) {
    return {
      ...job,
      formattedDate: format(parseISO(job.date), "dd 'de' MMMM, 'às' HH:mm'h'", {
        locale: pt,
      }),
      formattedValue: moneyFormat(job.price),
    };
  }

  async function loadJobs() {
    try {
      const response = await api.get('jobs');

      const jobList = response.data.map(formatJob);

      setJobs(jobList);
    } catch (err) {
      console.log(err);
      Alert.alert('Erro', 'Falha ao buscar seus Jobs');
    }
  }

  useEffect(() => {
    loadJobs();
  }, [isFocused]);

  const totalJobs = useMemo(() => {
    return jobs.length;
  }, [jobs]);

  const totalValue = useMemo(() => {
    const total = jobs.reduce((sum, job) => sum + job.price, 0);
    return moneyFormat(total);
  }, [jobs]);

  async function handleDelete(job) {
    try {
      await api.delete(`jobs/${job.id}`);

      loadJobs();
    } catch (err) {
      Alert.alert('Erro', `Não foi possível deletar o job ${job.title}`);
    }
  }

  function handleDeleteRequest(job) {
    const btNot = { text: 'Não' };
    const btYes = { text: 'Sim', onPress: () => handleDelete(job) };

    Alert.alert('Atenção', `Deseja excluir ${job.title}?`, [btNot, btYes]);
  }

  function renderJob({ item }) {
    return (
      <JobContainer
        onPress={() => navigation.navigate('JobEdit', { job: item })}
      >
        <JobTitle>{item.title}</JobTitle>
        <JobInfos>
          <JobDate>{item.formattedDate}</JobDate>
          <JobValue>{item.formattedValue}</JobValue>
        </JobInfos>
        <DeleteButton onPress={() => handleDeleteRequest(item)}>
          <Icon name="delete" size={30} color="#ff8b0d" />
        </DeleteButton>
      </JobContainer>
    );
  }

  return (
    <Container>
      <JobList
        data={jobs}
        renderItem={renderJob}
        keyExtractor={item => String(item.id)}
      />
      <ResumeCard>
        <TotalJobs>{totalJobs} Jobs</TotalJobs>
        <TotalValue>{totalValue}</TotalValue>
        <AddButton onPress={() => navigation.navigate('JobEdit')}>
          <Icon name="add" size={40} color="#fff" />
        </AddButton>
      </ResumeCard>
    </Container>
  );
}

Home.navigationOptions = ({ navigation }) => {
  return {
    header: <Header navigation={navigation} />,
  };
};

export default withNavigationFocus(Home);
