import { BackButton } from '@ecommerce/ui';
import { Title } from './styles';
import { AddressListForm } from '@/components/partials/Client/AddressListForm/AddressListForm';
import { useParams } from 'react-router-dom';
import { useQueries } from '@tanstack/react-query';
import { clientService } from '@/services/clientService';

export const ClientsAddress = () => {
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
  return (
    <div>
      <Title>
        <BackButton />
        Endereços de {client?.nome}
      </Title>
      <AddressListForm client={client} />
    </div>
  );
};
