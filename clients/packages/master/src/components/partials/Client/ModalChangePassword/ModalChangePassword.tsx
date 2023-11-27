import { InputText, Modal, ModalProps, TitleModel } from '@ecommerce/ui';
import { Content, Detail, Form, SubmitButton, Title } from './styles';
import { IClient } from '@/types/client';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import changePasswordSchema from '@/validations/changePasswordSchema';
import { clientService } from '@/services/clientService';
import { notifyError } from '@/utils/toast';
import { useEffect } from 'react';

interface Props extends ModalProps {
  onConfirm?: () => void;
  client?: IClient;
}

export const ModalChangePassword = ({ client, onConfirm, ...rest }: Props) => {
  const {
    formState: { errors },
    register,
    reset,
    handleSubmit
  } = useForm({
    resolver: yupResolver(changePasswordSchema)
  });
  const onSubmit = handleSubmit(async data => {
    try {
      if (!client) return;
      await clientService.changePassword(client.id, data);
      onConfirm?.();
    } catch (error: any) {
      notifyError(error.response.data);
    }
  });
  useEffect(() => {
    reset();
  }, [rest.isOpen]);
  return (
    <Modal {...rest}>
      <Content>
        <Title>Alterar senha</Title>
        <Detail>{client?.nome}</Detail>
        <Form onSubmit={onSubmit}>
          {/* <InputText
            label="Senha antiga"
            type="password"
            {...register('oldPassword')}
            error={errors.oldPassword?.message}
          /> */}
          <InputText
            label="Nova senha"
            type="password"
            {...register('newPassword')}
            error={errors.newPassword?.message}
          />
          <InputText
            label="Confirmar nova senha"
            type="password"
            {...register('confirmNewPassword')}
            error={errors.confirmNewPassword?.message}
          />
          <SubmitButton type="submit">Salvar</SubmitButton>
        </Form>
      </Content>
    </Modal>
  );
};
