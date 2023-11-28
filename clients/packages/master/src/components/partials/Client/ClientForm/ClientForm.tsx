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
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  ClienteDTO,
  clienteEditSchema,
  clienteSchema
} from '@/validations/clientSchema';
import { emptyAddress } from '@/validations/addressSchema';
import { ErrorMessage, InputLabelText, InputText, Select } from '@ecommerce/ui';
import { emptyCartaoCredito } from '@/validations/creditCardSchema';
import { clientService } from '@/services/clientService';
import { notifyError, notifySuccess } from '@/utils/toast';
import { IClient } from '@/types/client';
import { useEffect } from 'react';
import { CreditCardForm } from '../CreditCardForm/CreditCardForm';
import { AddressForm } from '../AddressForm/AddressForm';
import { GENDER_OPTIONS, STATUS_OPTIONS } from '@/config/constants';
import { useNavigate } from 'react-router-dom';
import { IAddress } from '@/types/address';

type FieldTypes = 'residencial' | 'cobranca' | 'entrega' | 'cartaoCredito';

export const ClientForm = () => {
  const navigate = useNavigate();
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
    reset,
    setValue,
    watch
  } = useForm({
    resolver: yupResolver(clienteSchema),
    defaultValues: {
      enderecosCobranca: [],
      enderecosEntrega: [],
      enderecosResidencial: [],
      cartaoCredito: []
    }
  });

  console.log(errors);

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

  console.log(errors);

  const onSubmit = handleSubmit(async data => {
    try {
      await clientService.register({
        ...data
      });
      notifySuccess('Cliente cadastrado com sucesso!');
      navigate(-1);
    } catch (error: any) {
      notifyError(error.response.data);
      console.log(error);
    }
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
            type="email"
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
        <PersonalDataLine>
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
                type="tel"
                mask={masks.telephone}
              />
            </PhoneInput>
            <ErrorMessage>
              {errors.telefone?.ddd?.message ||
                errors.telefone?.numero?.message}
            </ErrorMessage>
          </PhoneWrapper>
          <Controller
            control={control}
            name="status"
            render={({ field: { value, onChange } }) => (
              <Select
                label="Status"
                value={value?.toString()}
                error={errors.status?.message}
                onChange={(e: any) => onChange(e.value)}
                options={STATUS_OPTIONS}
              />
            )}
          />
          <Controller
            control={control}
            name="genero"
            render={({ field: { value, onChange } }) => (
              <Select
                label="Gênero"
                value={value?.toString()}
                error={errors.genero?.message}
                onChange={(e: any) => onChange(e.value)}
                options={GENDER_OPTIONS}
              />
            )}
          />
        </PersonalDataLine>
      </PersonalDataContainer>
      <SectionTitle>Cartões de crédito</SectionTitle>{' '}
      <AddButton onClick={() => handleAdd('cartaoCredito')}>
        <AiOutlinePlus /> Adicionar cartão
      </AddButton>
      <ErrorMessage>{errors.cartaoCredito?.message}</ErrorMessage>
      <CreditCardList>
        {cartoes.fields.map((field, index) => {
          const onDelete = () => handleDelete('cartaoCredito', index);
          const defineAsMain = () => {
            setValue('preferredCard', field.id);
          };
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
                  isMain={watch('preferredCard') === field.id}
                  defineAsMain={defineAsMain}
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
      <SubmitButton type="submit">Cadastrar</SubmitButton>
    </form>
  );
};
