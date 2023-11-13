import * as yup from 'yup';

export interface CartaoCreditoDTO {
  preferencial?: boolean | null;
  numero: string;
  nomeTitular: string;
  validade: string;
  cvv: string;
  bandeira: string;
}
export const cartaoCreditoSchema = yup.object().shape({
  preferencial: yup.boolean(),
  numero: yup.string().required('Número é obrigatório'),
  nomeTitular: yup.string().required('Nome do titular é obrigatório'),
  validade: yup.string().required('Validade é obrigatório'),
  cvv: yup.string().required('CVV é obrigatório'),
  bandeira: yup.string().required('Bandeira é obrigatório')
});
export const emptyCartaoCredito = {
  preferencial: false,
  numero: '',
  nomeTitular: '',
  validade: '',
  cvv: '',
  bandeira: ''
};
