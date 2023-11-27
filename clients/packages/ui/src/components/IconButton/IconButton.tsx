import {
  HtmlHTMLAttributes,
  InputHTMLAttributes,
  PropsWithChildren
} from 'react';
import { Btn } from './styles';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

interface Props extends InputHTMLAttributes<HTMLButtonElement> {
  tip?: JSX.Element | string;
  to?: string;
}
export const IconButton = ({ children, tip, to, ...rest }: Props) => {
  return (
    <Tippy content={tip} placement="bottom" duration={0}>
      <Btn as={to ? Link : undefined} to={to ? to : undefined} {...rest}>
        {children}
      </Btn>
    </Tippy>
  );
};
