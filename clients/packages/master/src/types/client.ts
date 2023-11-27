import { ITelephone } from '@ecommerce/shared';
import { IAddress } from './address';

export interface IClient {
  dataNascimento: string;
  cpf: string;
  telefone: ITelephone;
  enderecosResidencial: IAddress[];
  enderecosCobranca: IAddress[];
  enderecosEntrega: IAddress[];
  status: Status;
  genero: Generos;
  cartaoCredito: ICreditCard[];
  nome: string;
  senha: string;
  email: string;
  id: number;
}

export enum Status {
  ATIVO = 0,
  INATIVO = 1
}
export enum Generos {
  MASCULINO = 0,
  FEMININO = 1
}
export interface ICreditCard {
  preferencial: boolean;
  numero: string;
  nomeTitular: string;
  validade: string;
  cvv: string;
  bandeira: {
    nome: string;
    id: number;
  };
  id: number;
}
export interface ClientFilter {
  nome: string | null;
  email: string | null;
  telefone: string | null;
  cpf: string | null;
  dataNascimento: string | null;
  genero: string | null;
  status: string | null;
}
