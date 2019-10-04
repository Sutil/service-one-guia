import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import { Container, Title } from './styles';

export default function Header({ navigation }) {
  async function handleLogout() {
    await AsyncStorage.clear();

    navigation.navigate('AuthStack');
  }

  return (
    <Container>
      <Title>Meus Serviços</Title>
      <TouchableOpacity onPress={handleLogout}>
        <Icon name="logout" size={30} color="#fff" />
      </TouchableOpacity>
    </Container>
  );
}
