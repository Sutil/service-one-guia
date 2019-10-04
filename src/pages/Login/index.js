import React, { useState } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {
  Container,
  Title,
  Input,
  Button,
  TextButton,
} from '../../components/global';
import api from '../../services/api';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function goToSignUp() {
    navigation.navigate('SignUp');
  }

  async function handleLogin() {
    try {
      const response = await api.post('login', {
        email,
        password,
      });

      const { token } = response.data;
      await AsyncStorage.setItem('token', token);

      api.defaults.headers.Authorization = `Bearer ${token}`;

      navigation.navigate('AppStack');
    } catch (err) {
      console.log(err.response.error);
      Alert.alert('Erro', 'Não possível efetuar login');
    }
  }

  return (
    <Container>
      <Title>Meus Serviços</Title>
      <Input placeholder="Seu e-mail" value={email} onChangeText={setEmail} />
      <Input
        placeholder="Sua senha"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />
      <Button onPress={handleLogin}>
        <TextButton>Entrar</TextButton>
      </Button>
      <Button link onPress={goToSignUp}>
        <TextButton>Criar conta</TextButton>
      </Button>
    </Container>
  );
}
