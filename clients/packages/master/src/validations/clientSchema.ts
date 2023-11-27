import * as yup from 'yup';
import { EnderecoDTO, addressSchema } from './addressSchema';
import { CartaoCreditoDTO, cartaoCreditoSchema } from './creditCardSchema';
import { TelefoneDTO, telefoneSchema } from './telefoneSchema';
import { Generos, Status } from '@/types/client';

// export interface ClienteDTO {
//   nome: string;
//   senha: string;
//   confirmarSenha: string;
//   dataNascimento: string;
//   cpf: string;
//   email: string;
//   genero: Generos;
//   status: Status;
//   telefone: TelefoneDTO;
//   enderecosResidencial: EnderecoDTO[];
//   enderecosCobranca: EnderecoDTO[];
//   enderecosEntrega: EnderecoDTO[];
//   cartaoCredito: CartaoCreditoDTO[];
// }
export const cartaoCreditoFieldSchema = yup
  .array()
  .of(cartaoCreditoSchema)
  .required('Cartão de crédito é obrigatório');

export const enderecoOnlySchema = yup.object().shape({
  id: yup.number().nullable(),
  enderecosResidencial: yup.array().of(addressSchema).required(),
  enderecosCobranca: yup
    .array()
    .of(addressSchema)
    .required('Deve ter ao menos 1 endereço de cobrança')
    .min(1, 'Deve ter ao menos 1 endereço de cobrança'),
  enderecosEntrega: yup
    .array()
    .of(addressSchema)
    .required('Deve ter ao menos 1 endereço de entrega')
    .min(1, 'Deve ter ao menos 1 endereço de entrega')
});
export type EnderecoOnlyDTO = yup.InferType<typeof enderecoOnlySchema>;

export const cartaoCreditoOnly = yup.object().shape({
  id: yup.number().nullable(),
  cartaoCredito: cartaoCreditoFieldSchema
});
export type CartaoCreditoOnlyDTO = yup.InferType<typeof cartaoCreditoOnly>;

export const clienteSchema = yup.object().shape({
  id: yup.number().nullable(),
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
  status: yup.string().required('Status é obrigatório'),
  genero: yup.string().required('Gênero é obrigatório'),
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
  enderecosResidencial: yup.array().of(addressSchema).required(),
  enderecosCobranca: yup
    .array()
    .of(addressSchema)
    .required('Deve ter ao menos 1 endereço de cobrança')
    .min(1, 'Deve ter ao menos 1 endereço de cobrança'),
  enderecosEntrega: yup
    .array()
    .of(addressSchema)
    .required('Deve ter ao menos 1 endereço de entrega')
    .min(1, 'Deve ter ao menos 1 endereço de entrega'),
  cartaoCredito: cartaoCreditoFieldSchema
});
export const clienteEditSchema = yup.object().shape({
  id: yup.number().nullable(),
  nome: yup
    .string()
    .required('Nome é obrigatório')
    .matches(/^[a-zA-Z ]*$/, 'Nome deve conter apenas letras'),
  senha: yup.string(),
  confirmarSenha: yup.string(),
  status: yup.string().required('Status é obrigatório'),
  genero: yup.string().required('Gênero é obrigatório'),
  dataNascimento: yup.string().required('Data de nascimento é obrigatório'),
  cpf: yup
    .string()
    .required('CPF é obrigatório')
    .matches(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/g, 'CPF inválido'),
  email: yup.string().email('Email inválido').required('Email é obrigatório'),
  telefone: telefoneSchema
});
export type ClientEditDTO = yup.InferType<typeof clienteEditSchema>;
export type ClienteDTO = yup.InferType<typeof clienteSchema>;
