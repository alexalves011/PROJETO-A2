# API de Gerenciamento de Pedidos

Projeto prático avaliativo desenvolvido para a disciplina de Tópicos Avançados em Sistemas de Informação II. Consiste em uma API REST desenvolvida em Node.js e Express para gerenciar pedidos de uma pequena loja.

## Tecnologias Utilizadas
- Node.js
- Express (JavaScript)[cite: 1]
- Jest (Testes automatizados)[cite: 1]
- Postman (Testes manuais e evidências)

## Arquitetura
O projeto segue uma **arquitetura em camadas**[cite: 1]:
- `src/routes/`: Define os endpoints e métodos HTTP[cite: 1].
- `src/controllers/`: Controladores responsáveis por receber requisições e retornar os códigos HTTP corretos[cite: 1, 2].
- `src/services/`: Camada de regra de negócio, validações e armazenamento em memória[cite: 1, 2].

## Instalação e Execução

1. Clone o repositório:
   ```bash
   git clone [https://github.com/alexalves011/PROJETO-A2.git](https://github.com/alexalves011/PROJETO-A2.git)
