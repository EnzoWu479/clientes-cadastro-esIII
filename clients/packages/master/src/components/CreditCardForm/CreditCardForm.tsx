import { InputText } from '@ecommerce/ui';
import { CreditCardContainer, CreditCardItem, TrashButton } from './styles';
import { CartaoCreditoDTO } from '@/validations/creditCardSchema';
import { BsTrashFill } from 'react-icons/bs';
interface Props {
  value: CartaoCreditoDTO | null;
  onChange: (value: CartaoCreditoDTO) => void;
  onDelete?: () => void;
}
export const CreditCardForm = ({ value, onChange, onDelete }: Props) => {
  return (
    <CreditCardItem>
      <TrashButton onClick={onDelete}>
        <BsTrashFill />
      </TrashButton>
      <CreditCardContainer>
        <div>
          <InputText label="Número" />
          <InputText label="Nome do titular" />
        </div>
        <div>
          <InputText label="Validade" />
          <InputText label="CVV" />
          <InputText label="Bandeira" />
        </div>
      </CreditCardContainer>
    </CreditCardItem>
  );
};
