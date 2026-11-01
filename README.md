# API de Gerenciamento de Pedidos

Projeto prático avaliativo desenvolvido para a disciplina de Tópicos Avançados em Sistemas de Informação II. Consiste em uma API REST desenvolvida em Node.js e Express para gerenciar pedidos de uma pequena loja.

---

## 🚀 Tecnologias Utilizadas

- **Node.js**
- **Express** (framework web em JavaScript)
- **Jest** (testes automatizados e unitários)
- **Postman** (testes manuais e geração de evidências)

---

## 🏛️ Arquitetura do Projeto

O projeto segue uma **arquitetura em camadas** bem definida para separar responsabilidades:

- `src/routes/`: define os endpoints e os métodos HTTP da aplicação.
- `src/controllers/`: controladores responsáveis por receber as requisições, interagir com os serviços e retornar os códigos de status HTTP corretos.
- `src/services/`: camada de regra de negócio, validações de dados e armazenamento em memória.

---

## ⚙️ Pré-requisitos

Antes de começares, certifica-te de que tens instalado no teu computador:

- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- Git

---

## 📦 Instalação e Execução

Segue o guia passo a passo para clonar e executar o projeto localmente na tua máquina:

### 1. Clonar o Repositório

Abre o teu terminal e executa o comando para clonar o repositório:

```bash
git clone https://github.com/alexalves011/PROJETO-A2.git
```

### 2. Aceder à Pasta do Projeto

```bash
cd PROJETO-A2
```

### 3. Instalar as Dependências

Instala os pacotes necessários (Express e Jest) executando:

```bash
npm install
```

### 4. Executar o Servidor

Inicia a aplicação em modo de desenvolvimento/produção:

```bash
npm start
```

O servidor estará a rodar em `http://localhost:3000`.

---

## 🧪 Executando os Testes Automatizados

Para rodar os testes unitários configurados com o Jest, executa o comando:

```bash
npm test
```

---

## 📡 Endpoints da API

### `POST /pedidos`

Cria um novo pedido válido.

Exemplo de corpo (JSON):

```json
{
  "cliente": "Carlos Silva",
  "tipo": "entrega",
  "valor": 350,
  "prioridade": "normal"
}
```

### `GET /pedidos`

Retorna a lista completa de todos os pedidos cadastrados.

### `GET /pedidos/:id`

Consulta um pedido específico através do identificador (`id`).

### `PATCH /pedidos/:id/status`

Atualiza o status de um pedido existente.

Exemplo de corpo (JSON):

```json
{
  "status": "em_preparacao"
}
```

Estados válidos aceitos: `recebido`, `em_preparacao`, `enviado`, `entregue` e `cancelado`.

---

## 📂 Evidências

As capturas de tela dos testes manuais realizados no Postman encontram-se armazenadas na pasta `evidencias/` na raiz do repositório.
