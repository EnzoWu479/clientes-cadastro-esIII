import * as yup from 'yup';

export const addressSchema = yup.object().shape({
  id: yup.number().nullable(),
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
export type EnderecoDTO = yup.InferType<typeof addressSchema>;
export const emptyAddress = {
  id: null,
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
