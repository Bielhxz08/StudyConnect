# 📋 Documentação de Requisitos — StudyConnect

> Documento de requisitos funcionais e não funcionais do aplicativo mobile StudyConnect.

---

## 1. Visão Geral do Sistema

O **StudyConnect** é um aplicativo mobile desenvolvido em React Native que permite a estudantes criar, buscar e participar de grupos de estudo, além de se comunicar com os membros do grupo por meio de um chat integrado.

---

## 2. Partes Interessadas

| Parte Interessada | Descrição | Interesse no Sistema |
|---|---|---|
| Estudantes de graduação | Usuários principais do app | Encontrar grupos e estudar em equipe |
| Representantes de turma | Organizam atividades da turma | Criar grupos e coordenar horários |
| Professores | Orientam os estudos | Acompanhar engajamento dos alunos |
| Equipe de desenvolvimento | Desenvolvedores do projeto | Entregar o sistema funcional |

---

## 3. Requisitos Funcionais

Requisitos funcionais descrevem o que o sistema deve fazer.

| ID | Requisito | Prioridade |
|---|---|---|
| RF01 | O sistema deve permitir que o usuário se cadastre com nome, e-mail e senha | Alta |
| RF02 | O sistema deve permitir login com e-mail e senha | Alta |
| RF03 | O sistema deve permitir que o usuário crie um grupo de estudo informando disciplina, modalidade, data, horário e número máximo de membros | Alta |
| RF04 | O sistema deve exibir uma lista de grupos disponíveis para o usuário entrar | Alta |
| RF05 | O sistema deve permitir que o usuário entre e saia de grupos de estudo | Alta |
| RF06 | O sistema deve disponibilizar um chat interno para cada grupo | Alta |
| RF07 | O sistema deve permitir busca de grupos por nome de disciplina | Média |
| RF08 | O sistema deve exibir o perfil do usuário com seus dados e grupos ativos | Média |
| RF09 | O sistema deve enviar notificações quando houver novas mensagens no grupo | Média |
| RF10 | O sistema deve permitir que o criador do grupo edite ou encerre o grupo | Média |
| RF11 | O sistema deve exibir o número de membros e vagas disponíveis em cada grupo | Baixa |
| RF12 | O sistema deve permitir recuperação de senha por e-mail | Baixa |

---

## 4. Requisitos Não Funcionais

Requisitos não funcionais descrevem como o sistema deve se comportar.

| ID | Requisito | Categoria |
|---|---|---|
| RNF01 | O aplicativo deve funcionar nos sistemas Android e iOS | Portabilidade |
| RNF02 | O tempo de resposta das telas não deve ultrapassar 3 segundos | Desempenho |
| RNF03 | As senhas dos usuários devem ser armazenadas de forma criptografada | Segurança |
| RNF04 | O sistema deve suportar pelo menos 100 usuários simultâneos | Escalabilidade |
| RNF05 | A interface deve ser intuitiva e de fácil uso para estudantes | Usabilidade |
| RNF06 | O código deve ser versionado no GitHub com commits organizados | Manutenibilidade |
| RNF07 | O sistema deve utilizar autenticação via Firebase Auth | Segurança |
| RNF08 | Os dados dos usuários devem ser armazenados no Firebase Firestore | Confiabilidade |

---

## 5. Casos de Uso Principais

### UC01 — Cadastrar usuário
- **Ator:** Estudante
- **Pré-condição:** Usuário não possui conta
- **Fluxo principal:**
  1. Usuário acessa a tela de cadastro
  2. Informa nome, e-mail e senha
  3. Confirma o cadastro
  4. Sistema cria a conta e redireciona para a Home
- **Pós-condição:** Usuário autenticado no sistema

---

### UC02 — Criar grupo de estudo
- **Ator:** Estudante autenticado
- **Pré-condição:** Usuário logado no sistema
- **Fluxo principal:**
  1. Usuário acessa "Novo grupo"
  2. Preenche disciplina, modalidade, data, horário e número de vagas
  3. Confirma a criação
  4. Sistema cria o grupo e adiciona o usuário como administrador
- **Pós-condição:** Grupo criado e visível para outros usuários

---

### UC03 — Entrar em um grupo
- **Ator:** Estudante autenticado
- **Pré-condição:** Grupo com vagas disponíveis
- **Fluxo principal:**
  1. Usuário busca ou visualiza grupos disponíveis
  2. Seleciona um grupo
  3. Clica em "Entrar"
  4. Sistema adiciona o usuário ao grupo
- **Pós-condição:** Usuário membro do grupo, com acesso ao chat

---

### UC04 — Enviar mensagem no chat
- **Ator:** Membro do grupo
- **Pré-condição:** Usuário pertence ao grupo
- **Fluxo principal:**
  1. Usuário abre o chat do grupo
  2. Digita a mensagem
  3. Clica em enviar
  4. Mensagem aparece para todos os membros em tempo real
- **Pós-condição:** Mensagem registrada e visível no chat

---

## 6. Regras de Negócio

| ID | Regra |
|---|---|
| RN01 | Um usuário pode participar de no máximo 10 grupos simultaneamente |
| RN02 | O criador do grupo é automaticamente o administrador |
| RN03 | Apenas o administrador pode encerrar ou editar o grupo |
| RN04 | Um grupo só pode ser encontrado na busca se tiver vagas disponíveis |
| RN05 | O e-mail de cadastro deve ser único no sistema |

---

## 7. Tecnologias Utilizadas

| Tecnologia | Finalidade |
|---|---|
| React Native + Expo | Desenvolvimento do app mobile |
| Firebase Authentication | Autenticação de usuários |
| Firebase Firestore | Banco de dados em tempo real |
| React Navigation | Navegação entre telas |
| GitHub | Versionamento do código |

---

*StudyConnect — ADS Estácio de Sá*
