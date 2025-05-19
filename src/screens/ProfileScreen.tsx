import React from 'react';
import styled from 'styled-components/native';
import { Button } from 'react-native-elements';
import { HeaderContainer, HeaderTitle } from '../components/Header';
import theme from '../styles/theme';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAuth } from '../context/AuthContext';

type RootStackParamList = {
  Home: undefined;
  CreateAppointment: undefined;
  Profile: undefined;
};

type ProfileScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Profile'>;
};

const ProfileScreen: React.FC<ProfileScreenProps> = ({ navigation }) => {
  const { user, logout } = useAuth();

  if (!user) return null;

  const renderContentByRole = () => {
    switch (user.tipo) {
      case 'paciente':
        return <InfoText>Você pode agendar novas consultas e ver seu histórico.</InfoText>;
      case 'medico':
        return <InfoText>Você pode visualizar suas consultas e ajustar horários.</InfoText>;
      case 'admin':
        return <InfoText>Você pode gerenciar usuários e acompanhar o sistema.</InfoText>;
      default:
        return null;
    }
  };

  return (
    <Container>
      <HeaderContainer>
        <HeaderTitle>Meu Perfil</HeaderTitle>
      </HeaderContainer>

      <Content>
        <Button
          title="Sair"
          buttonStyle={{
            backgroundColor: theme.colors.secondary,
            borderRadius: 8,
            marginBottom: 20,
          }}
          onPress={logout}
        />

        <ProfileInfo>
          <Avatar source={{ uri: 'https://via.placeholder.com/150' }} />
          <Name>{user.nome}</Name>
          <Email>{user.email}</Email>
          <Role>{user.tipo.toUpperCase()}</Role>

          {renderContentByRole()}
        </ProfileInfo>
      </Content>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
`;

const Content = styled.View`
  flex: 1;
  padding: ${theme.spacing.medium}px;
`;

const ProfileInfo = styled.View`
  align-items: center;
  margin-top: ${theme.spacing.large}px;
`;

const Avatar = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  margin-bottom: ${theme.spacing.medium}px;
`;

const Name = styled.Text`
  font-size: ${theme.typography.title.fontSize}px;
  font-weight: ${theme.typography.title.fontWeight};
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.small}px;
`;

const Email = styled.Text`
  font-size: ${theme.typography.body.fontSize}px;
  color: ${theme.colors.text};
  opacity: 0.8;
`;

const Role = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${theme.colors.primary};
  margin-top: 8px;
`;

const InfoText = styled.Text`
  text-align: center;
  color: ${theme.colors.text};
  margin-top: 16px;
`;

export default ProfileScreen;
