import { masks } from '@ecommerce/shared';
import {
  PersonalDataContainer,
  PersonalDataLine,
  PhoneInput,
  PhoneWrapper,
  SectionTitle,
  SelectWrapper,
  SubmitButton
} from './styles';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { clienteEditSchema } from '@/validations/clientSchema';
import { ErrorMessage, InputLabelText, InputText, Select } from '@ecommerce/ui';
import { clientService } from '@/services/clientService';
import { notifyError, notifySuccess } from '@/utils/toast';
import { IClient } from '@/types/client';
import { useEffect } from 'react';
import { GENDER_OPTIONS, STATUS_OPTIONS } from '@/config/constants';
import { useNavigate } from 'react-router-dom';

interface Props {
  client?: IClient;
}
export const ClientEditForm = ({ client }: Props) => {
  const navigate = useNavigate();
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
    reset
  } = useForm({
    resolver: yupResolver(clienteEditSchema)
  });

  console.log(errors);

  console.log(errors);

  const onSubmit = handleSubmit(async data => {
    try {
      if (client) {
        await clientService.updateClientInfo(
          {
            id: client.id,
            ...data
          },
          client.id
        );
      }
      notifySuccess('Cliente salvo com sucesso!');
      navigate(-1);
    } catch (error: any) {
      notifyError(error.response.data);
      console.log(error);
    }
  });

  useEffect(() => {
    if (client) {
      reset({
        id: client.id,
        nome: client.nome,
        email: client.email,
        cpf: masks.cpf(client.cpf),
        dataNascimento: client.dataNascimento,
        telefone: client.telefone,
        status: client.status.toString(),
        genero: client.genero?.toString()
      });
    }
  }, [client]);

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
        <PersonalDataLine></PersonalDataLine>
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
                mask={masks.telephone}
              />
            </PhoneInput>
            <ErrorMessage>
              {errors.telefone?.ddd?.message ||
                errors.telefone?.numero?.message}
            </ErrorMessage>
          </PhoneWrapper>
          <InputText
            label="CPF"
            {...register('cpf')}
            inputMode="numeric"
            error={errors.cpf?.message}
            mask={masks.cpf}
          />
          <SelectWrapper>
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
          </SelectWrapper>
          <SelectWrapper>
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
          </SelectWrapper>
        </PersonalDataLine>
      </PersonalDataContainer>

      <SubmitButton type="submit">
        {client ? 'Salvar' : 'Cadastrar'}
      </SubmitButton>
    </form>
  );
};
