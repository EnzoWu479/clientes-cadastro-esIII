import { Generos, Status } from '@/types/client';
import { IOption } from '@ecommerce/ui';
import { BsFillPersonFill } from 'react-icons/bs';
import { DefaultTheme } from 'styled-components';
import { v5 } from 'uuid';

interface INavbarOption {
  label: string;
  to: string;
  icon: () => JSX.Element;
}
interface INavbarOptionWithId extends INavbarOption {
  id: string;
}

const NAVBAR_OPTIONS_NO_ID: INavbarOption[] = [
  {
    label: 'Clientes',
    to: '/clientes',
    icon: () => <BsFillPersonFill />
  }
];
export const NAVBAR_OPTIONS: INavbarOptionWithId[] = NAVBAR_OPTIONS_NO_ID.map(
  o => ({
    ...o,
    id: v5(o.to, v5.URL)
  })
);
export const STATUS_OPTIONS: IOption[] = [
  {
    label: 'Ativo',
    value: Status.ATIVO.toString()
  },
  {
    label: 'Inativo',
    value: Status.INATIVO.toString()
  }
];
export const GENDER_OPTIONS: IOption[] = [
  {
    label: 'Masculino',
    value: Generos.MASCULINO.toString()
  },
  {
    label: 'Feminino',
    value: Generos.FEMININO.toString()
  }
];
export const STATUS_COLOR: { [arg in Status]: string } = {
  [Status.ATIVO]: 'dark1',
  [Status.INATIVO]: 'error'
};
