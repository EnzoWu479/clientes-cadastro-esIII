import { ClientForm } from '@/components/ClientForm/ClientForm';
import { Title } from './styles';
import { BackButton } from '@ecommerce/ui';

export const ClientsRegister = () => {
  return (
    <>
      <div>
        <Title>
          <BackButton />
          Cadastrar cliente
        </Title>
        <ClientForm />
      </div>
    </>
  );
};
