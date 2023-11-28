import { BackButton } from '@ecommerce/ui';
import { AddressListForm } from '@/components/partials/Client/AddressListForm/AddressListForm';
import { Title } from './styles';
import { CreditCardListForm } from '@/components/partials/Client/CreditCardListForm/CreditCardListForm';
import { useParams } from 'react-router-dom';
import { useQueries } from '@tanstack/react-query';
import { clientService } from '@/services/clientService';

export const ClientsCreditCard = () => {
  const params = useParams();
  const id = (params.id || 0) as number;
  const [{ data: client }] = useQueries({
    queries: [
      {
        enabled: !!id,
        queryKey: ['clients', id],
        queryFn: async () => await clientService.get(id)
      }
    ]
  });
  // TODO: Criar opção preferencial de cartão de crédito
  return (
    <div>
      <Title>
        <BackButton />
        Cartões de crédito de {client?.nome}
      </Title>
      <CreditCardListForm client={client} />
    </div>
  );
};
