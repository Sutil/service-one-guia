import React, { useState } from 'react';

import {
  Container,
  Title,
  Input,
  Button,
  TextButton,
} from '../../components/global';

import api from '../../services/api';

export default function SignUp({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function goToLogin() {
    navigation.goBack();
  }

  async function handleSignUp() {
    try {
      await api.post('users', {
        name,
        email,
        password,
      });

      goToLogin();
    } catch (err) {
      console.log(err.response);
    }
  }

  return (
    <Container>
      <Title>Meus Serviços</Title>
      <Input placeholder="Nome completo" value={name} onChangeText={setName} />
      <Input placeholder="Seu e-mail" value={email} onChangeText={setEmail} />
      <Input
        placeholder="Sua senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button onPress={handleSignUp}>
        <TextButton>Criar conta</TextButton>
      </Button>
      <Button link onPress={goToLogin}>
        <TextButton>Voltar ao login</TextButton>
      </Button>
    </Container>
  );
}
