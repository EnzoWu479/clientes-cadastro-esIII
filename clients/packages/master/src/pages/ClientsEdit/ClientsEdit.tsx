import { Title } from './styles';
import { BackButton } from '@ecommerce/ui';
import { useQueries } from '@tanstack/react-query';
import { useLocation, useParams } from 'react-router-dom';
import { clientService } from '@/services/clientService';
import { ClientForm } from '@/components/partials/Client/ClientForm/ClientForm';
import { ClientEditForm } from '@/components/partials/Client/ClientEditForm/ClientEditForm';

export const ClientsEdit = () => {
  const params = useParams();
  const id = (params.id || 0) as number;
  const [{ data: client }] = useQueries({
    queries: [
      {
        enabled: !!id,
        queryKey: ['clients', id],
        queryFn: async () => clientService.get(id)
      }
    ]
  });
  return (
    <>
      <div>
        <Title>
          <BackButton />
          Editar cliente
        </Title>
        <ClientEditForm client={client} />
      </div>
    </>
  );
};
