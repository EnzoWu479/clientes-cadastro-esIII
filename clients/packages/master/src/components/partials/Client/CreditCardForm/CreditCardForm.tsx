import { InputText } from '@ecommerce/ui';
import {
  CardHeader,
  CreditCardContainer,
  CreditCardItem,
  PreferredCard,
  TrashButton
} from './styles';
import { CartaoCreditoDTO } from '@/validations/creditCardSchema';
import { BsTrashFill } from 'react-icons/bs';
import { IError, detectarBandeira, masks } from '@ecommerce/shared';
interface Props {
  value: CartaoCreditoDTO | null;
  onChange: (value: CartaoCreditoDTO) => void;
  onDelete?: () => void;
  errors?: IError<CartaoCreditoDTO>;
  isMain: boolean;
  defineAsMain: () => void;
}
export const CreditCardForm = ({
  value,
  onChange,
  onDelete,
  errors,
  isMain,
  defineAsMain
}: Props) => {
  const handleChange = (name: keyof CartaoCreditoDTO, curValue: string) => {
    if (value) {
      const built = { ...value, [name]: curValue };
      if (name === 'numero' && curValue.length >= 6) {
        built.bandeira = detectarBandeira(curValue).toString();
      }
      onChange(built);
    } else {
      onChange({
        ...{
          numero: '',
          nomeTitular: '',
          validade: '',
          cvv: '',
          bandeira: ''
        },
        [name]: curValue
      });
    }
  };
  return (
    <CreditCardItem>
      <CardHeader>
        <PreferredCard>
          <input
            type="radio"
            name="preferredCard"
            checked={isMain}
            onChange={defineAsMain}
          />
          <span>{isMain ? 'Preferencial' : 'Escolher como preferencial'}</span>
        </PreferredCard>
        <TrashButton onClick={onDelete}>
          <BsTrashFill />
        </TrashButton>
      </CardHeader>
      <CreditCardContainer>
        <div>
          <InputText
            label="Número"
            mask={masks.creditCardNumber}
            error={errors?.numero?.message}
            inputMode="numeric"
            value={value?.numero}
            onChange={e => handleChange('numero', e.target.value)}
          />
          <InputText
            label="Nome do titular"
            error={errors?.nomeTitular?.message}
            value={value?.nomeTitular}
            onChange={e => handleChange('nomeTitular', e.target.value)}
          />
        </div>
        <div>
          <InputText
            label="Validade"
            error={errors?.validade?.message}
            mask={masks.creditCardExpirationDate}
            inputMode="numeric"
            value={value?.validade}
            onChange={e => handleChange('validade', e.target.value)}
          />
          <InputText
            label="CVV"
            error={errors?.cvv?.message}
            mask={masks.creditCardCvv}
            inputMode="numeric"
            value={value?.cvv}
            onChange={e => handleChange('cvv', e.target.value)}
          />
          <InputText
            label="Bandeira"
            error={errors?.bandeira?.message}
            readOnly
            value={value?.bandeira}
          />
        </div>
      </CreditCardContainer>
    </CreditCardItem>
  );
};
