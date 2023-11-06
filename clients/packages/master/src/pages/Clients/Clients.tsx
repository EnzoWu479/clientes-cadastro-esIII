import { Link } from 'react-router-dom';
import { Button, Title } from './styles';
import { BackButton } from '@ecommerce/shared';

export const Clients = () => {
  return (
    <>
      <Title>
         Clientes
      </Title>
      <Button as={Link} to="/clientes/cadastrar">
        Cadastrar
      </Button>
    </>
  );
};
