import { ErrorMessage } from '@ecommerce/ui';
import { AddButton, AddressList, SectionTitle, SubmitButton } from './styles';
import { AiOutlinePlus } from 'react-icons/ai';
import { Control, Controller, useFieldArray, useForm } from 'react-hook-form';
import {
  ClienteDTO,
  cartaoCreditoOnly,
  enderecoOnlySchema
} from '@/validations/clientSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { emptyCartaoCredito } from '@/validations/creditCardSchema';
import { CreditCardForm } from '../CreditCardForm/CreditCardForm';
import { emptyAddress } from '@/validations/addressSchema';
import { AddressForm } from '../AddressForm/AddressForm';
import { IClient } from '@/types/client';
import { useEffect } from 'react';
import { IAddress } from '@/types/address';
import { masks } from '@ecommerce/shared';
import { clientService } from '@/services/clientService';
import { notifyError, notifySuccess } from '@/utils/toast';
import { useNavigate } from 'react-router-dom';

type FieldTypes = 'residencial' | 'cobranca' | 'entrega' | 'cartaoCredito';
interface Props {
  client?: IClient;
}
const addressConvert = (endereco: IAddress) => ({
  id: endereco.id,
  cep: masks.cep(endereco.cep),
  observacoes: endereco.observacoes,
  numero: endereco.numero,
  bairro: endereco.bairro,
  cidade: endereco.cidade,
  estado: endereco.estado,
  logradouro: endereco.logradouro,
  pais: endereco.pais,
  tipoResidencia: endereco.tipoResidencia.toString(),
  tipoLogradouro: endereco.tipoLogradouro?.nome
});
export const AddressListForm = ({ client }: Props) => {
  const navigate = useNavigate();
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
    reset
  } = useForm({
    resolver: yupResolver(enderecoOnlySchema),
    defaultValues: {
      enderecosCobranca: [],
      enderecosEntrega: [],
      enderecosResidencial: []
    }
  });
  const residencial = useFieldArray({
    control,
    name: 'enderecosResidencial'
  });
  const cobranca = useFieldArray({
    control,
    name: 'enderecosCobranca'
  });
  const entrega = useFieldArray({
    control,
    name: 'enderecosEntrega'
  });
  const onSubmit = handleSubmit(async data => {
    try {
      if (client) {
        await clientService.updateAddress(
          {
            ...data
          },
          client.id
        );
      }
      notifySuccess('Endereços salvos com sucesso!');
      navigate(-1);
    } catch (error: any) {
      notifyError(error.response.data);
      console.log(error);
    }
  });
  const handleAdd = (type: FieldTypes) => {
    switch (type) {
      case 'residencial':
        residencial.append(emptyAddress);
        break;
      case 'cobranca':
        cobranca.append(emptyAddress);
        break;
      case 'entrega':
        entrega.append(emptyAddress);
        break;
    }
  };
  const handleDelete = (type: FieldTypes, index: number) => {
    switch (type) {
      case 'residencial':
        residencial.remove(index);
        break;
      case 'cobranca':
        cobranca.remove(index);
        break;
      case 'entrega':
        entrega.remove(index);
        break;
    }
  };
  useEffect(() => {
    if (client) {
      reset({
        enderecosEntrega: client.enderecosEntrega.map(addressConvert),
        enderecosCobranca: client.enderecosCobranca.map(addressConvert),
        enderecosResidencial: client.enderecosResidencial.map(addressConvert)
      });
    }
  }, [client]);
  return (
    <form onSubmit={onSubmit}>
      <SectionTitle>Endereços residenciais</SectionTitle>
      <ErrorMessage>{errors.enderecosResidencial?.message}</ErrorMessage>
      <AddButton onClick={() => handleAdd('residencial')}>
        <AiOutlinePlus /> Adicionar endereço
      </AddButton>
      <AddressList>
        {residencial.fields.map((field, index) => {
          const onDelete = () => handleDelete('residencial', index);
          console.log(field.id);

          return (
            <Controller
              key={field.id}
              control={control}
              name={`enderecosResidencial.${index}`}
              render={({ field: { value, onChange } }) => (
                <AddressForm
                  value={value}
                  onChange={onChange}
                  onDelete={onDelete}
                  errors={errors.enderecosResidencial?.[index]}
                />
              )}
            />
          );
        })}
      </AddressList>
      <SectionTitle>Endereços de cobrança</SectionTitle>
      <ErrorMessage>{errors.enderecosCobranca?.message}</ErrorMessage>
      <AddButton onClick={() => handleAdd('cobranca')}>
        <AiOutlinePlus /> Adicionar endereço
      </AddButton>{' '}
      <AddressList>
        {cobranca.fields.map((field, index) => {
          const onDelete = () => handleDelete('cobranca', index);
          return (
            <Controller
              control={control}
              key={field.id}
              name={`enderecosCobranca.${index}`}
              render={({ field: { value, onChange } }) => (
                <AddressForm
                  value={value}
                  onChange={onChange}
                  onDelete={onDelete}
                  errors={errors.enderecosCobranca?.[index]}
                />
              )}
            />
          );
        })}
      </AddressList>
      <SectionTitle>Endereços de entrega</SectionTitle>
      <ErrorMessage>{errors.enderecosEntrega?.message}</ErrorMessage>
      <AddButton onClick={() => handleAdd('entrega')}>
        <AiOutlinePlus /> Adicionar endereço
      </AddButton>
      <AddressList>
        {entrega.fields.map((field, index) => {
          const onDelete = () => handleDelete('entrega', index);
          return (
            <Controller
              key={field.id}
              control={control}
              name={`enderecosEntrega.${index}`}
              render={({ field: { value, onChange } }) => (
                <AddressForm
                  value={value}
                  onChange={onChange}
                  onDelete={onDelete}
                  errors={errors.enderecosEntrega?.[index]}
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
