# CRUD Cadastro de clientes

Projeto desenvolvido para a aula de Engenharia de Software III sob orientação do professor Rodrigo

Diagrama de classes:
https://yuml.me/enzowu479/cadastro-cliente.svg

## Padrão de arquitetura

MVC

## Padrões de projetos

- DAO
- Fachada

## Requisitos funcionais

### Grupo: Cadastro de Clientes

- <strong>RF0021 Cadastrar cliente</strong>: O sistema deve possibilitar o cadastro de clientes.
- <strong>RF0022 Alterar cliente</strong>: O sistema deve possibilitar a alteração de dados cadastrais de clientes.
- <strong>RF0023 Inativar cadastro</strong>: de cliente O sistema deve possibilitar que clientes sejam inativados.
- <strong>RF0024 Consulta de clientes</strong>: O sistema deve possibilitar que um cliente seja consultado com base em um filtro definido pelo usuário. Todos os campos utilizados para identificação do cliente podem ser utilizados como filtro, tanto de forma combinada como de forma isolada.
- <strong>RF0026 Cadastro de endereços de entrega</strong>: Deve ser possível associar diversos endereços de entrega ao cadastro de um cliente. Cada cadastro de endereço deve ser identificado com um nome composto de uma frase curta.
- <strong>RF0027 Cadastro de cartões de crédito</strong>: Deve ser possível associar diversos cartões de crédito ao cadastro de um cliente. Deve haver um cartão de crédito configurado como preferencial.
- <strong>RF0028 Alteração apenas de senha</strong>: O sistema deve possibilitar que a senha do usuário seja alterada sem que seja necessária a alteração de todos os dados cadastrais.

## Requisitos não funcionais

### Grupo: Geral

- <strong>RNF0011 Tempo de resposta para consultas:</strong> Toda consulta de usuário deve ter resposta em no máximo 1 segundo.

// TODO
- <strong>RNF0012 Log de transação:</strong> Para toda operação de escrita (Inserção ou Alteração) deve ser registado data, hora, usuário responsável além de manter os dados alterados.

### Grupo: Cadastro de Clientes

- <strong>RNF0031 Senha forte:</strong> A senha cadastrada pelo usuário deve ser composta de pelo menos 8 caracteres, ter letras maiúsculas e minúsculas além de conter caracteres especiais.
- <strong>RNF0032 Confirmação de senha:</strong> O usuário obrigatoriamente deve digitar duas vezes a mesma senha no momento do registro da mesma.
- <strong>RNF0033 Senha criptografada:</strong> A senha deve ser criptografada
- <strong>RF0034 Alteração apenas de endereços:</strong> O sistema deve possibilitar que endereços de entrega ou cobrança possam ser alterados ou adicionados de forma simples sem a necessidade da edição dos demais dados cadastrais.

//TODO
- <strong>RNF0035 Código de cliente:</strong> Todo cliente cadastrado deve receber um código único no sistema.

## Regras de negócio

- <strong>RN0021 Cadastro de endereço de cobrança:</strong> Para todo cliente cadastrado é obrigatório o registro de ao menos um endereço de cobrança.
- <strong>RN0022 Cadastro de endereço de entrega:</strong> Para todo cliente cadastrado é obrigatório o registro de ao menos um endereço de entrega.
- <strong>RN0023 Composição do registro de endereços:</strong> Todo cadastro de endereços associados a clientes deve ser composto dos seguintes dados: Tipo de residência (Casa, Apartamento, etc), Tipo Logradouro, Logradouro, Número, Bairro, CEP, Cidade, Estado e País. Todos os campos anteriores são de preenchimento obrigatório. Opcionalmente pode ser preenchido um campo observações.
- <strong>RN0024 Composição do registro de cartões de crédito:</strong> Todo cartão de crédito associado a um cliente deverá ser composto pelos seguintes campos: Nº do Cartão, Nome impresso no Cartão, Bandeira do Cartão e Código de Segurança.

//TODO
- <strong>RN0025 Bandeiras permitidas para registro de cartões de crédito:</strong> Todo cartão de crédito associado a um cliente deverá ser de alguma bandeira registrada no sistema.
- <strong>RN0026 Dados obrigatórios para o cadastro de um cliente:</strong> Para todo cliente cadastrado é obrigatório o cadastro dos seguintes dados: Gênero, Nome, Data de Nascimento, CPF, Telefone (deve ser composto pelo tipo, DDD e número), e- []mail, senha, endereço residencial.
