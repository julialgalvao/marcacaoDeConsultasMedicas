import React, { createContext, useContext, useState, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type UserType = 'paciente' | 'medico' | 'admin';

interface User {
  id: string;
  nome: string;
  email: string;
  senha: string;
  tipo: UserType;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, senha: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, senha: string) => {
    try {
      const storedUsers = await AsyncStorage.getItem('usuarios');
      const usuarios: User[] = storedUsers ? JSON.parse(storedUsers) : [];

      const foundUser = usuarios.find(
        u => u.email === email && u.senha === senha
      );

      if (foundUser) {
        setUser(foundUser);
        await AsyncStorage.setItem('usuarioLogado', JSON.stringify(foundUser));
      } else {
        throw new Error('Usuário não encontrado');
      }
    } catch (error) {
      console.error('Erro no login:', error);
    }
  };

  const logout = async () => {
    setUser(null);
    await AsyncStorage.removeItem('usuarioLogado');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
