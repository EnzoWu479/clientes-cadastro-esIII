import { Link } from 'react-router-dom';
import { Button, ButtonsContainer, Title } from './styles';
import { useQuery } from '@tanstack/react-query';
import { clientService } from '@/services/clientService';
import { Pagination, useModalState } from '@ecommerce/ui';
import { usePage } from '@/hooks/usePage';
import { ClientTable } from '@/components/partials/Client/ClientTable/ClientTable';
import { ClientFilter, Status } from '@/types/client';
import { notifyError } from '@/utils/toast';
import { useState } from 'react';
import { ModalFilterClient } from '@/components/partials/Client/ModalFilterClient/ModalFilterClient';

export const Clients = () => {
  const { page } = usePage();
  const modalFilter = useModalState(false);
  const [filter, setFilter] = useState<ClientFilter>({
    nome: null,
    email: null,
    telefone: null,
    cpf: null,
    dataNascimento: null,
    status: null,
    genero: null
  });
  const { data: clientsPagination, refetch } = useQuery({
    queryKey: ['clients', page, filter],
    queryFn: async () => clientService.getList({ page, limit: 10, filter })
  });
  const clients = clientsPagination?.data || [];

  const toggleStatus = async (id: number, status: Status) => {
    try {
      await clientService.toggleStatus(id, status);
      refetch();
    } catch (err: any) {
      notifyError(err.response.data.message);
    }
  };

  console.log(filter);

  return (
    <>
      <Title>Clientes</Title>
      <ButtonsContainer>
        <Button as={Link} to="/clientes/cadastrar">
          Cadastrar
        </Button>
        <Button onClick={() => modalFilter.open(true)}>Filtrar</Button>
      </ButtonsContainer>
      <ClientTable clients={clients} onToggleStatus={toggleStatus} />
      <Pagination pageCount={clientsPagination?.totalPage || 1} />
      <ModalFilterClient
        {...modalFilter}
        filter={filter}
        setFilter={setFilter}
      />
    </>
  );
};
