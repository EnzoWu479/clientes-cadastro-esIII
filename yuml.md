[Cliente| - nome: String; - senha: String; - dataNascimento:  String; - cpf: String; - email: String;]
[Telefone| - ddd: String; - numero: String]
[<<enum>> TipoTelefone| FIXO; MOVEL]
[<<enum>> Generos| MASCULINO; FEMININO]
[<<enum>> Status| ATIVO; INATIVO]

[Endereco| - numero: String; - bairro: String; - cep: String; - observacoes: String; - logradouro: String]
[TipoLogradouro| - Nome: String;]
[<<enum>> TipoResidencia| CASA; APARTAMENTO]

[Cidade| - nome: String;]
[Estado| - nome: String; - sigla: String]
[Pais| - nome: String;]

[CartaoCredito| - numero: String; - nomeImpresso: String; - codigoSeguranca: String; dataValidade Date]
[BandeiraCartao| - nome: String]

[Endereco]0..*-1[TipoLogradouro]
[Endereco]0..*-1[<<enum>> TipoResidencia]
[Cliente]-1[<<enum>> Generos]
[Cliente]1-1[Telefone]
[Cliente]-1[<<enum>> Status]

[Cidade]0..*-1[Estado]
[Estado]0..*-1[Pais]
[Endereco]1..*-1[Cidade]

[CartaoCredito]0..*-1[BandeiraCartao]

[Telefone]-[<<enum>> TipoTelefone]

[Cliente]0..*-Residencial[Endereco]
[Cliente]1..*-Entrega[Endereco]
[Cliente]1..*-Cobranca[Endereco]
[Cliente]0..*-1[CartaoCredito]
