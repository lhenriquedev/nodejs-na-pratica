# 🚀 Desafio Node.js - Rocketseat

API REST para gerenciamento de cursos construída com Node.js, Fastify e PostgreSQL.

## 📋 Sobre o Projeto

Esta aplicação é uma API REST que permite criar, listar e buscar cursos. Foi desenvolvida como parte do desafio prático da Rocketseat, utilizando as melhores práticas e tecnologias modernas do ecossistema Node.js.

## 🛠️ Tecnologias Utilizadas

- **Node.js** - Runtime JavaScript
- **Fastify** - Framework web rápido e eficiente
- **TypeScript** - Superset do JavaScript com tipagem estática
- **PostgreSQL** - Banco de dados relacional
- **Drizzle ORM** - ORM type-safe para TypeScript
- **Zod** - Validação de esquemas TypeScript-first
- **Docker** - Containerização do banco de dados
- **Swagger/OpenAPI** - Documentação da API

## ⚙️ Funcionalidades

- ✅ Criar novos cursos
- ✅ Listar todos os cursos
- ✅ Buscar curso por ID
- ✅ Documentação automática da API
- ✅ Validação de dados com Zod
- ✅ Banco de dados PostgreSQL com Drizzle ORM

## 📁 Estrutura do Projeto

```
src/
├── database/
│   ├── client.ts      # Configuração do cliente do banco
│   └── schema.ts      # Esquemas das tabelas
├── routes/
│   ├── create-course.ts     # Rota para criar curso
│   ├── get-course-by-id.ts  # Rota para buscar curso por ID
│   └── get-courses.ts       # Rota para listar cursos
└── server.ts          # Configuração do servidor
```

## 🚀 Como Executar

### Pré-requisitos

- Node.js (versão 18 ou superior)
- Docker e Docker Compose
- npm ou yarn

### Passo a passo

1. **Clone o repositório:**
```bash
git clone <url-do-repositorio>
cd rocketseat-node-na-pratica
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Configure o banco de dados:**
```bash
# Inicie o PostgreSQL com Docker
docker-compose up -d

# Gere as migrações
npm run db:generate

# Execute as migrações
npm run db:migrate
```

4. **Crie o arquivo `.env`:**
```env
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/desafio
NODE_ENV=development
```

5. **Inicie o servidor de desenvolvimento:**
```bash
npm run dev
```

A API estará disponível em `http://localhost:3333`

## 📚 Documentação da API

### Endpoints Disponíveis

#### 📖 Documentação Interativa
- **GET** `/docs` - Documentação da API com Scalar

#### 🎯 Cursos
- **GET** `/courses` - Lista todos os cursos
- **GET** `/courses/:id` - Busca um curso por ID
- **POST** `/courses` - Cria um novo curso

### Exemplos de Uso

#### Listar todos os cursos
```http
GET http://localhost:3333/courses
```

#### Buscar curso por ID
```http
GET http://localhost:3333/courses/a2b3f3ef-45ae-4c78-92eb-5898af7a2fcf
```

#### Criar um novo curso
```http
POST http://localhost:3333/courses
Content-Type: application/json

{
  "title": "Curso de Docker"
}
```

## 🗄️ Scripts Disponíveis

- `npm run dev` - Inicia o servidor em modo de desenvolvimento
- `npm run db:generate` - Gera as migrações do banco de dados
- `npm run db:migrate` - Executa as migrações
- `npm run db:studio` - Abre o Drizzle Studio para visualizar o banco

## 🧪 Testando a API

Você pode usar o arquivo `requisicoes.http` incluído no projeto para testar os endpoints da API diretamente no VS Code com a extensão REST Client.

## 📄 Licença

Este projeto está sob a licença ISC.

---

Desenvolvido com ❤️ durante o desafio da Rocketseat