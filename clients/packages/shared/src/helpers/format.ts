import { ITelephone } from '../types/telephone';
import { masks } from './masks';
import { format as dateFormat, parseISO } from 'date-fns';
export const formater = {
  telefone: (value: ITelephone) => {
    return `(${parseInt(value.ddd)}) ${masks.telephone(value.numero)}`;
  },
  date: (value: string, format?: string) => {
    try {
      return dateFormat(parseISO(value), format || 'dd/MM/yyyy');
    } catch {
      return value;
    }
  },
  cpf: (value: string) => {
    return masks.cpf(value);
  }
};
