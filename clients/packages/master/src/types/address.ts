export interface IAddress {
  numero: string;
  observacoes: string;
  bairro: string;
  cep: string;
  logradouro: string;
  tipoLogradouro: {
    nome: string;
    id: number;
  };
  tipoResidencia: number;
  cidade: string;
  estado: string;
  pais: string;
  id: number;
}
