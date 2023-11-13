import * as yup from 'yup';

export interface CidadeDTO {
  nome: string;
  estado: EstadoDTO;
}
export interface EstadoDTO {
  nome: string;
  sigla: string;
  pais: PaisDTO;
}
export interface PaisDTO {
  nome: string;
}
export interface EnderecoDTO {
  numero: string;
  observacoes?: string | null;
  bairro: string;
  cep: string;
  logradouro: string;
  tipoLogradouro: string;
  tipoResidencia: string;
  cidade: string;
  estado: string;
  pais: string;
}
export interface TipoLogradouroDTO {
  nome: string;
}

export const addressSchema = yup.object().shape({
  numero: yup.string().required('Número é obrigatório'),
  observacoes: yup.string().nullable(),
  bairro: yup.string().required('Bairro é obrigatório'),
  cep: yup.string().required('CEP é obrigatório'),
  logradouro: yup.string().required('Logradouro é obrigatório'),
  tipoLogradouro: yup.string().required('Tipo de logradouro é obrigatório'),
  tipoResidencia: yup.string().required('Tipo de residência é obrigatório'),
  cidade: yup.string().required('Cidade é obrigatório'),
  estado: yup.string().required('Estado é obrigatório'),
  pais: yup.string().required('País é obrigatório')
});
export const emptyAddress = {
  cep: '',
  logradouro: '',
  tipoLogradouro: '',
  numero: '',
  observacoes: '',
  bairro: '',
  tipoResidencia: '',
  cidade: '',
  estado: '',
  pais: 'Brasil'
};
