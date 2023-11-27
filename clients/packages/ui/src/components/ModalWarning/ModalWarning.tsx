import Modal, { ModalProps } from '../Modal/Modal';
import {
  Button,
  ButtonContainer,
  Content,
  Description,
  Title
} from './_modalwarning';

export interface ModalWarningProps extends ModalProps {
  title?: string;
  description?: string;
  confirmText?: string;
  onConfirm?: () => void;
}

export const ModalWarning = ({
  title = 'Atenção',
  description = 'Você tem certeza que deseja excluir esse registro?',
  confirmText = 'Confirmar',
  onConfirm,
  ...rest
}: ModalWarningProps) => {
  return (
    <Modal {...rest}>
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <ButtonContainer>
          <Button>Cancelar</Button>
          <Button onClick={onConfirm}>{confirmText}</Button>
        </ButtonContainer>
      </Content>
    </Modal>
  );
};
