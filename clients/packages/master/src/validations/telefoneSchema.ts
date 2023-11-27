import * as yup from 'yup';

export const telefoneSchema = yup.object().shape({
  id: yup.number().nullable(),
  ddd: yup
    .string()
    .required('DDD é obrigatório')
    .length(3, 'DDD deve ter 3 dígitos'),
  numero: yup
    .string()
    .required('Número é obrigatório')
    .matches(/^\d{5}\-\d{4}$/g, 'CPF inválido')
});
export type TelefoneDTO = yup.InferType<typeof telefoneSchema>;