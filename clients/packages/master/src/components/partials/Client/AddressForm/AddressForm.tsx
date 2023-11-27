import { IError, masks, viacepService } from '@ecommerce/shared';
import { AddressContainer, AddressItem, TrashButton } from './styles';
import { EnderecoDTO } from '@/validations/addressSchema';
import { BsTrashFill } from 'react-icons/bs';
import { IOption, InputText, Select, Textarea } from '@ecommerce/ui';

const TIPO_RESIDENCIA_OPTIONS: IOption[] = [
  {
    value: '0',
    label: 'Casa'
  },
  {
    value: '1',
    label: 'Apartamento'
  },
  {
    value: '2',
    label: 'Sobrado'
  }
];

interface Props {
  value: EnderecoDTO | null;
  onChange: (value: EnderecoDTO) => void;
  onDelete?: () => void;
  errors?: IError<EnderecoDTO>;
}
export const AddressForm = ({ value, onChange, onDelete, errors }: Props) => {
  console.log(value);

  const getAddressValue = async (cep: string) => {
    try {
      const data = await viacepService.getCep(cep);
      if (value) {
        onChange({
          ...value,
          tipoLogradouro: data.logradouro.split(' ')[0],
          cep: cep,
          logradouro: data.logradouro,
          bairro: data.bairro,
          cidade: data.localidade,
          estado: data.localidade,
          pais: 'Brasil'
        });
      }
    } catch (error) {}
  };

  const handleChange = (name: keyof EnderecoDTO, curValue: string) => {
    if (value) {
      onChange({ ...value, [name]: curValue });
    } else {
      onChange({
        ...{
          cep: '',
          logradouro: '',
          tipoLogradouro: '',
          numero: '',
          observacoes: '',
          bairro: '',
          tipoResidencia: '',
          cidade: '',
          estado: '',
          pais: 'Brasil'
        },
        [name]: curValue
      });
    }
    if (name === 'cep' && masks.number(curValue).length === 8) {
      getAddressValue(curValue);
    }
  };

  return (
    <AddressItem>
      <TrashButton onClick={onDelete}>
        <BsTrashFill />
      </TrashButton>
      <AddressContainer>
        <div>
          <InputText
            label="CEP"
            value={value?.cep}
            onChange={e => handleChange('cep', e.target.value)}
            mask={masks.cep}
            error={errors?.cep?.message}
            inputMode="numeric"
          />
          <InputText
            label="Logradouro"
            value={value?.logradouro}
            error={errors?.logradouro?.message}
            onChange={e => handleChange('logradouro', e.target.value)}
          />
          <InputText
            label="Tipo de logradouro"
            value={value?.tipoLogradouro}
            error={errors?.tipoLogradouro?.message}
            onChange={e => handleChange('tipoLogradouro', e.target.value)}
          />
        </div>
        <div>
          <InputText
            label="Número"
            value={value?.numero}
            error={errors?.numero?.message}
            onChange={e => handleChange('numero', e.target.value)}
            inputMode="numeric"
            mask={masks.number}
          />
          <InputText
            label="Bairro"
            value={value?.bairro}
            error={errors?.bairro?.message}
            onChange={e => handleChange('bairro', e.target.value)}
          />
          <Select
            label="Tipo de residência"
            options={TIPO_RESIDENCIA_OPTIONS}
            error={errors?.tipoResidencia?.message}
            value={value?.tipoResidencia}
            onChange={(e: any) => handleChange('tipoResidencia', e.value)}
          />
        </div>
        <div>
          <InputText
            label="Cidade"
            value={value?.cidade}
            error={errors?.cidade?.message}
            onChange={e => handleChange('cidade', e.target.value)}
            readOnly
          />
          <InputText
            label="Estado"
            value={value?.estado}
            error={errors?.estado?.message}
            onChange={e => handleChange('estado', e.target.value)}
            readOnly
          />
          <InputText
            label="País"
            value={value?.pais}
            error={errors?.pais?.message}
            onChange={e => handleChange('pais', e.target.value)}
            readOnly
          />
        </div>
        <div>
          <Textarea
            label="Observações"
            value={value?.observacoes || ''}
            error={errors?.observacoes?.message}
            onChange={e => handleChange('observacoes', e.target.value)}
          />
        </div>
      </AddressContainer>
    </AddressItem>
  );
};
