# Fluxo de atendimento

Um cliente através do seu login e senha,  deseja ser atendido em uma clínica para realizar alguns serviços, cada serviço tem um valor especifico (em R$) e uma quantidade de minutos a ser realizados e pode ser atendido por um profissional, esse profissional recebe uma comissão percentual pela realização do serviço.

# Informações sobre o projeto

* O projeto se encontra com uma exibição de pessoas, cadastro, e busca.

* Essas operações podem ser acessadas a partir do menu de navegação.

# Informações sobre execução

## Backend

* O banco de dados utilizado foi o postgres. Dê uma olhada no arquivo `/src/orm.config.ts` para configurar as credenciais conforme o seu postgres, e então crie o banco de dados com o nome fluxo_atendimento.

* instale as dependências com `npm install`

* execute o projeto com `npm run start:dev`

## Frontend

* instale as dependências com `npm install`

* execute o projeto com `npm start`
