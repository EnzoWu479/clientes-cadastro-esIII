import { useState } from 'react';
import {
  AddressAddButton,
  AddressContainer,
  PersonalDataContainer,
  PersonalDataLine,
  PhoneInput,
  PhoneWrapper,
  SectionTitle,
  Title
} from './styles';
import {
  BackButton,
  InputLabelText,
  InputText,
  Select,
  Textarea
} from '@ecommerce/shared';
import { AiOutlinePlus } from 'react-icons/ai';

interface IAddressNumber {
  residencial: number;
  entrega: number;
  cobranca: number;
}
const TIPO_LOGRADOURO_OPTIONS = [
  {
    value: 'RUA',
    label: 'Rua'
  },
  {
    value: 'AVENIDA',
    label: 'Avenida'
  },
  {
    value: 'ALAMEDA',
    label: 'Alameda'
  },
  {
    value: 'RODOVIA',
    label: 'Rodovia'
  },
  {
    value: 'ESTRADA',
    label: 'Estrada'
  },
  {
    value: 'TRAVESSA',
    label: 'Travessa'
  },
  {
    value: 'PRAÇA',
    label: 'Praça'
  }
];
export const ClientsRegister = () => {
  const [addressNumber, setAddressNumber] = useState<IAddressNumber>({
    residencial: 0,
    entrega: 0,
    cobranca: 0
  });
  const handleAddAddress = (type: keyof IAddressNumber) => {
    setAddressNumber(prevState => ({
      ...prevState,
      [type]: prevState[type] + 1
    }));
  };
  return (
    <>
      <Title>
        <BackButton />
        Cadastrar cliente
      </Title>
      <SectionTitle>Informações pessoais</SectionTitle>
      <PersonalDataContainer>
        <PersonalDataLine>
          <InputText label="Nome" />
          <InputText label="Email" />
          <InputText label="Data de nascimento" />
        </PersonalDataLine>
        <PersonalDataLine>
          <InputText label="Senha" />
          <InputText label="CPF" />
        </PersonalDataLine>
        <PhoneWrapper>
          <InputLabelText>Telefone</InputLabelText>
          <PhoneInput>
            <InputText />
            <InputText />
          </PhoneInput>
        </PhoneWrapper>
      </PersonalDataContainer>
      <SectionTitle>Endereços residenciais</SectionTitle>
      <AddressAddButton onClick={() => handleAddAddress('residencial')}>
        <AiOutlinePlus /> Adicionar endereço
      </AddressAddButton>
      {Array.from(Array(addressNumber.residencial).keys()).map((_, index) => (
        <AddressContainer key={_}>
          <div>
            <InputText label="CEP" />
            <InputText label="Logradouro" />
            <Select
              label="Tipo de logradouro"
              options={TIPO_LOGRADOURO_OPTIONS}
            />
          </div>
          <div>
            <InputText label="Número" />
            <InputText label="Bairro" />
          </div>
          <div>
            <InputText label="Cidade" />
            <InputText label="Estado" />
            <InputText label="País" />
          </div>
          <div>
            <Textarea label="Observações" />
          </div>
        </AddressContainer>
      ))}
      <SectionTitle>Endereços de cobrança</SectionTitle>
      <AddressAddButton onClick={() => handleAddAddress('cobranca')}>
        <AiOutlinePlus /> Adicionar endereço
      </AddressAddButton>
      <SectionTitle>Endereços de entrega</SectionTitle>
      <AddressAddButton onClick={() => handleAddAddress('entrega')}>
        <AiOutlinePlus /> Adicionar endereço
      </AddressAddButton>
    </>
  );
};
