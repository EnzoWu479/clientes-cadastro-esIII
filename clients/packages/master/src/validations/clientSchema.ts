import * as yup from 'yup';
import { EnderecoDTO, addressSchema } from './addressSchema';
import { CartaoCreditoDTO, cartaoCreditoSchema } from './creditCardSchema';
import { TelefoneDTO, telefoneSchema } from './telefoneSchema';

export interface ClienteDTO {
  nome: string;
  senha: string;
  confirmarSenha: string;
  dataNascimento: string;
  cpf: string;
  email: string;
  telefone: TelefoneDTO;
  enderecosResidencial: EnderecoDTO[];
  enderecosCobranca: EnderecoDTO[];
  enderecosEntrega: EnderecoDTO[];
  cartaoCredito: CartaoCreditoDTO[];
}
export const clienteSchema = yup.object().shape({
  nome: yup
    .string()
    .required('Nome é obrigatório')
    .matches(/^[a-zA-Z ]*$/, 'Nome deve conter apenas letras'),
  senha: yup
    .string()
    .required('Senha é obrigatório')
    .min(8, 'Senha deve ter no mínimo 8 caracteres')
    .matches(/(?=.*[A-Z])/g, 'Senha deve conter pelo menos uma letra maiúscula')
    .matches(/(?=.*[a-z])/g, 'Senha deve conter pelo menos uma letra minúscula')
    .matches(
      /(?=.*[!@#$%^&*(),.?":{}|<>])/g,
      'Senha deve conter pelo menos um caractere especial'
    ),
  confirmarSenha: yup
    .string()
    .required('Confirmação de senha é obrigatório')
    .oneOf([yup.ref('senha'), ''], 'Senhas devem ser iguais'),
  dataNascimento: yup.string().required('Data de nascimento é obrigatório'),
  cpf: yup
    .string()
    .required('CPF é obrigatório')
    .matches(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/g, 'CPF inválido'),
  email: yup.string().email('Email inválido').required('Email é obrigatório'),
  telefone: telefoneSchema,
  enderecosResidencial: yup.array().of(addressSchema),
  enderecosCobranca: yup
    .array()
    .of(addressSchema)
    .min(1, 'Deve ter ao menos 1 endereço de cobrança'),
  enderecosEntrega: yup
    .array()
    .of(addressSchema)
    .min(1, 'Deve ter ao menos 1 endereço de entrega'),
  cartaoCredito: yup.array().of(cartaoCreditoSchema)
});
