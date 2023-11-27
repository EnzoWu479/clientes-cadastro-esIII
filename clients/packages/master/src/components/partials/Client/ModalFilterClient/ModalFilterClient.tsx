import {
  InputCheckbox,
  InputText,
  Modal,
  ModalProps,
  Select,
  TitleModel
} from '@ecommerce/ui';
import {
  Content,
  Detail,
  FieldLine,
  Form,
  SubmitButton,
  Title
} from './styles';
import { ClientFilter, IClient } from '@/types/client';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import changePasswordSchema from '@/validations/changePasswordSchema';
import { clientService } from '@/services/clientService';
import { notifyError } from '@/utils/toast';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { GENDER_OPTIONS, STATUS_OPTIONS } from '@/config/constants';
import { masks } from '@ecommerce/shared';

interface Props extends ModalProps {
  onConfirm?: () => void;
  filter: ClientFilter;
  setFilter: Dispatch<SetStateAction<ClientFilter>>;
}

export const ModalFilterClient = ({
  onConfirm,
  filter,
  setFilter,
  ...rest
}: Props) => {
  const {
    control,
    formState: { isDirty },
    register,
    reset,
    handleSubmit,
    watch
  } = useForm<ClientFilter>();
  const onSubmit = handleSubmit(async data => {
    if (!isDirty) return handleClear();
    try {
      setFilter(data);
      rest.close();
      onConfirm?.();
    } catch (error: any) {
      notifyError(error.response.data);
    }
  });
  const handleClear = () => {
    setFilter({
      nome: null,
      email: null,
      telefone: null,
      cpf: null,
      dataNascimento: null,
      status: null,
      genero: null
    });
    rest.close();
  };
  console.log(watch());

  useEffect(() => {
    reset({
      nome: filter.nome || null,
      email: filter.email || null,
      telefone: filter.telefone || null,
      cpf: filter.cpf || null,
      dataNascimento: filter.dataNascimento || null,
      status: filter.status || null,
      genero: filter.genero || null
    });
  }, [rest.isOpen, filter]);
  return (
    <Modal {...rest}>
      <Content>
        <Title>Filtrar clientes</Title>
        <Form onSubmit={onSubmit}>
          <InputText label="Nome" {...register('nome')} />
          <InputText label="Email" type="email" {...register('email')} />
          <InputText
            label="Telefone"
            inputMode="numeric"
            type="tel"
            mask={masks.telephone}
            {...register('telefone')}
          />
          <InputText label="CPF" mask={masks.cpf} {...register('cpf')} />
          <InputText
            label="Data de nascimento"
            type="date"
            {...register('dataNascimento')}
          />
          <Controller
            control={control}
            name="status"
            render={({ field: { value, onChange } }) => (
              <Select
                label="Status"
                options={[{ value: '', label: 'Nenhum' }, ...STATUS_OPTIONS]}
                value={value ? value.toString() : ''}
                onChange={(e: any) => onChange(e.value)}
              />
            )}
          />
          <Controller
            control={control}
            name="genero"
            render={({ field: { value, onChange } }) => (
              <Select
                label="Gênero"
                options={[{ value: '', label: 'Nenhum' }, ...GENDER_OPTIONS]}
                value={value || ''}
                onChange={(e: any) => onChange(e.value)}
              />
            )}
          />

          <SubmitButton type="submit">
            {isDirty ? 'Filtrar' : 'Limpar'}
          </SubmitButton>
        </Form>
      </Content>
    </Modal>
  );
};
