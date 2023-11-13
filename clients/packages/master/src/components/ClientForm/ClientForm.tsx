import { masks } from '@ecommerce/shared';
import {
  AddButton,
  AddressList,
  CreditCardList,
  PersonalDataContainer,
  PersonalDataLine,
  PhoneInput,
  PhoneWrapper,
  SectionTitle,
  SubmitButton
} from './styles';
import { AiOutlinePlus } from 'react-icons/ai';
import { AddressForm } from '../AddressForm/AddressForm';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { clienteSchema } from '@/validations/clientSchema';
import { emptyAddress } from '@/validations/addressSchema';
import { ErrorMessage, InputLabelText, InputText } from '@ecommerce/ui';
import { emptyCartaoCredito } from '@/validations/creditCardSchema';
import { CreditCardForm } from '../CreditCardForm/CreditCardForm';

type FieldTypes = 'residencial' | 'cobranca' | 'entrega' | 'cartaoCredito';

export const ClientForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register
  } = useForm({
    resolver: yupResolver(clienteSchema)
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
  const cartoes = useFieldArray({
    control,
    name: 'cartaoCredito'
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
      case 'cartaoCredito':
        cartoes.append(emptyCartaoCredito);
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
      case 'cartaoCredito':
        cartoes.remove(index);
        break;
    }
  };

  const onSubmit = handleSubmit(data => {
    console.log(data);
  });

  return (
    <form onSubmit={onSubmit}>
      <SectionTitle>Informações pessoais</SectionTitle>
      <PersonalDataContainer>
        <PersonalDataLine>
          <InputText
            label="Nome"
            {...register('nome')}
            error={errors.nome?.message}
          />
          <InputText
            label="Email"
            {...register('email')}
            error={errors.email?.message}
          />
          <InputText
            label="Data de nascimento"
            type="date"
            {...register('dataNascimento')}
            error={errors.dataNascimento?.message}
          />
        </PersonalDataLine>
        <PersonalDataLine>
          <InputText
            label="Senha"
            type="password"
            {...register('senha')}
            error={errors.senha?.message}
          />
          <InputText
            label="Confirmar senha"
            type="password"
            {...register('confirmarSenha')}
            error={errors.confirmarSenha?.message}
          />
          <InputText
            label="CPF"
            {...register('cpf')}
            inputMode="numeric"
            error={errors.cpf?.message}
            mask={masks.cpf}
          />
        </PersonalDataLine>
        <PhoneWrapper>
          <InputLabelText>Telefone</InputLabelText>
          <PhoneInput
            data-error={String(
              !!errors.telefone?.ddd || !!errors.telefone?.numero
            )}
          >
            <InputText
              {...register('telefone.ddd')}
              inputMode="numeric"
              mask={masks.ddd}
            />
            <InputText
              {...register('telefone.numero')}
              inputMode="numeric"
              mask={masks.telephone}
            />
          </PhoneInput>
          <ErrorMessage>
            {errors.telefone?.ddd?.message || errors.telefone?.numero?.message}
          </ErrorMessage>
        </PhoneWrapper>
      </PersonalDataContainer>
      <SectionTitle>Cartões de crédito</SectionTitle>{' '}
      <AddButton onClick={() => handleAdd('cartaoCredito')}>
        <AiOutlinePlus /> Adicionar cartão
      </AddButton>
      <ErrorMessage>{errors.cartaoCredito?.message}</ErrorMessage>
      <CreditCardList>
        {cartoes.fields.map((field, index) => {
          const onDelete = () => handleDelete('cartaoCredito', index);
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
                />
              )}
            />
          );
        })}
      </CreditCardList>
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
                />
              )}
            />
          );
        })}
      </AddressList>
      <SubmitButton type="submit">Cadastrar</SubmitButton>
    </form>
  );
};
