import Table from '@/components/_ui/Table/Table';
import { formater } from '@ecommerce/shared';
import { FaAddressBook, FaPencil, FaRegCreditCard } from 'react-icons/fa6';
import { RiLockPasswordLine } from 'react-icons/ri';
import { IconButton, ModalWarning, useModalState } from '@ecommerce/ui';
import { IClient, Status } from '@/types/client';
import { IconWrapper } from './styles';
import { Link } from 'react-router-dom';
import { StatusButton } from '../../StatusButton/StatusButton';
import { ModalChangePassword } from '../ModalChangePassword/ModalChangePassword';

interface Props {
  clients: IClient[];
  onToggleStatus: (id: number, status: Status) => void;
}
export const ClientTable = ({ clients, onToggleStatus }: Props) => {
  const modalChangePassword = useModalState('');
  const clientSelect = clients.find(
    client => client.id == modalChangePassword.value
  );
  return (
    <Table.Wrapper>
      <Table.Table>
        <Table.Head>
          <Table.HeadRow>
            <Table.HeadCell>Nome</Table.HeadCell>
            <Table.HeadCell>Email</Table.HeadCell>
            <Table.HeadCell>CPF</Table.HeadCell>
            <Table.HeadCell>Telefone</Table.HeadCell>
            <Table.HeadCell>Data de nascimento</Table.HeadCell>
            <Table.HeadCell>Status</Table.HeadCell>
            <Table.HeadCell>Ações</Table.HeadCell>
          </Table.HeadRow>
        </Table.Head>
        <Table.Body>
          {clients?.map(client => (
            <Table.BodyRow key={client.id}>
              <Table.BodyCell>{client.nome}</Table.BodyCell>
              <Table.BodyCell>{client.email}</Table.BodyCell>
              <Table.BodyCell>{formater.cpf(client.cpf)}</Table.BodyCell>
              <Table.BodyCell
                style={{
                  whiteSpace: 'nowrap'
                }}
              >
                {formater.telefone(client.telefone)}
              </Table.BodyCell>
              <Table.BodyCell>
                {formater.date(client.dataNascimento)}
              </Table.BodyCell>
              <Table.BodyCell>
                <StatusButton
                  status={client.status}
                  onClick={() =>
                    onToggleStatus(
                      client.id,
                      client.status == Status.ATIVO
                        ? Status.INATIVO
                        : Status.ATIVO
                    )
                  }
                />
              </Table.BodyCell>
              <Table.BodyCell>
                <IconWrapper>
                  <IconButton
                    to={`/clientes/${client.id}/cartao-de-credito`}
                    tip="Cartões de crédito"
                  >
                    <FaRegCreditCard />
                  </IconButton>
                  <IconButton
                    to={`/clientes/${client.id}/enderecos`}
                    tip="Endereços"
                  >
                    <FaAddressBook />
                  </IconButton>
                  <IconButton
                    tip="Alterar senha"
                    onClick={() => modalChangePassword.open(client.id)}
                  >
                    <RiLockPasswordLine />
                  </IconButton>
                  <IconButton to={`/clientes/${client.id}`} tip="Editar">
                    <FaPencil />
                  </IconButton>
                </IconWrapper>
              </Table.BodyCell>
            </Table.BodyRow>
          ))}
        </Table.Body>
      </Table.Table>
      <ModalChangePassword
        {...modalChangePassword}
        client={clientSelect}
        onConfirm={() => {
          modalChangePassword.close();
        }}
      />
    </Table.Wrapper>
  );
};
