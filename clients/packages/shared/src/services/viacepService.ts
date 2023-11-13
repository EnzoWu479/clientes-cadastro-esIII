import axios from 'axios';
import { masks } from '../helpers/masks';

export interface ICep {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

export const viacepService = {
  async getCep(cep: string): Promise<ICep> {
    const treatedCep = masks.number(cep);
    const { data } = await axios.get(
      `https://viacep.com.br/ws/${treatedCep}/json/`
    );
    if (data.erro) {
      throw new Error('CEP não encontrado');
    }
    return data;
  }
};
