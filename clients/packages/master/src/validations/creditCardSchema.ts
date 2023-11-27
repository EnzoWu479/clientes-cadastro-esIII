import * as yup from 'yup';


export const cartaoCreditoSchema = yup.object().shape({
  id: yup.number().nullable(),
  preferencial: yup.boolean().nullable(), 
  numero: yup.string().required('Número é obrigatório'),
  nomeTitular: yup.string().required('Nome do titular é obrigatório'),
  validade: yup.string().required('Validade é obrigatório'),
  cvv: yup.string().required('CVV é obrigatório'),
  bandeira: yup.string().required('Bandeira é obrigatório'),
});
export type CartaoCreditoDTO = yup.InferType<typeof cartaoCreditoSchema>;
export const emptyCartaoCredito: CartaoCreditoDTO = {
  preferencial: false,
  numero: '',
  nomeTitular: '',
  validade: '',
  cvv: '',
  bandeira: ''
};
