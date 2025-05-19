- Julia Leite Galvão - RM: 550201

# Aplicativo Mobile para Marcação de Consultas Médicas

## Descrição

Este é um aplicativo mobile simples para marcação de consultas médicas. Ele permite que usuários façam login, visualizem informações do perfil e realizem ações de acordo com seu tipo de usuário (Paciente, Médico ou Administrador).
Foi desenvolvido utilizando React Native com Expo, e armazenando os dados localmente via AsyncStorage.

## Funcionalidades

- Login com armazenamento local
- Diferenciação de perfis (Paciente, Médico, Administrador)
- Tela de perfil dinâmica com nome, e-mail, tipo e imagem do usuário
- Exibição condicional de informações com base no tipo de perfil
- Interface estilizada e responsiva

## Estrutura do Projeto

- AuthContext para controle de autenticação e dados do usuário
- Navegação entre telas com React Navigation
- Tela de perfil com exibição dos dados reais do usuário logado
- Temas e estilos centralizados via styled-components e theme.ts

## Tecnologias Utilizadas

- **React Native**: Framework para desenvolvimento de aplicativos móveis.
- **Expo**: Ferramenta para facilitar o desenvolvimento e deploy de aplicativos React Native.
- **AsyncStorage**: Armazenamento local para dados persistentes.

## Como Rodar o Projeto

1. Clone este repositório.
2. Instale as dependências:
   ```bash
   npm install
3. Execute a aplicação:
   ```bash
   npx expo start
4. Verifique com a extensão "Mobile View" no VSCode, colocando a URL fornecida ao rodar o projeto
   ![image](https://github.com/user-attachments/assets/d94941d4-3ae5-40d3-a469-5593f7549bb6)
