import * as yup from 'yup';

export interface TelefoneDTO {
  ddd: string;
  numero: string;
}
export const telefoneSchema = yup.object().shape({
  ddd: yup.string().required('DDD é obrigatório'),
  numero: yup.string().required('Número é obrigatório')
});
