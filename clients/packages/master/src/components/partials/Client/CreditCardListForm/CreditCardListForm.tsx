import { ErrorMessage } from '@ecommerce/ui';
import { AddButton, AddressList, SectionTitle, SubmitButton } from './styles';
import { AiOutlinePlus } from 'react-icons/ai';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { cartaoCreditoOnly } from '@/validations/clientSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { emptyCartaoCredito } from '@/validations/creditCardSchema';
import { CreditCardForm } from '../CreditCardForm/CreditCardForm';
import { useEffect } from 'react';
import { IClient } from '@/types/client';
import { notifyError, notifySuccess } from '@/utils/toast';
import { useNavigate } from 'react-router-dom';
import { clientService } from '@/services/clientService';
interface Props {
  client?: IClient;
}
export const CreditCardListForm = ({ client }: Props) => {
  const navigate = useNavigate();
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm({
    resolver: yupResolver(cartaoCreditoOnly),
    defaultValues: {
      cartaoCredito: []
    }
  });
  const cartoes = useFieldArray({
    control,
    name: 'cartaoCredito'
  });
  const handleAdd = () => {
    cartoes.append(emptyCartaoCredito);
  };
  const handleDelete = (index: number) => {
    cartoes.remove(index);
  };

  const onSubmit = handleSubmit(async data => {
    try {
      if (client) {
        await clientService.updateCreditCard(
          {
            ...data
          },
          client.id
        );
      }
      notifySuccess('Cartões de crédito salvos com sucesso!');
      navigate(-1);
    } catch (error: any) {
      notifyError(error.response.data);
      console.log(error);
    }
  });

  useEffect(() => {
    if (client) {
      reset({
        cartaoCredito: client.cartaoCredito.map(card => ({
          id: card.id,
          bandeira: card.bandeira.nome,
          cvv: card.cvv,
          nomeTitular: card.nomeTitular,
          numero: card.numero,
          preferencial: card.preferencial,
          validade: card.validade
        }))
      });
    }
  }, [client]);
  return (
    <form onSubmit={onSubmit}>
      <SectionTitle>Cartões de crédito</SectionTitle>{' '}
      <AddButton onClick={handleAdd}>
        <AiOutlinePlus /> Adicionar cartão
      </AddButton>
      <ErrorMessage>{errors.cartaoCredito?.message}</ErrorMessage>
      <AddressList>
        {cartoes.fields.map((field, index) => {
          const onDelete = () => handleDelete(index);
          return (
            <Controller
              key={field.id}
              control={control}
              name={`cartaoCredito.${index}`}
              render={({ field: { value, onChange } }) => (
                <CreditCardForm
                  value={value}
                  onChange={onChange}
                  onDelete={onDelete}
                  errors={errors.cartaoCredito?.[index]}
                />
              )}
            />
          );
        })}
      </AddressList>
      <SubmitButton type="submit">Salvar</SubmitButton>
    </form>
  );
};
