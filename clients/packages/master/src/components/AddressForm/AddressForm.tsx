import { masks, viacepService } from '@ecommerce/shared';
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
}
export const AddressForm = ({ value, onChange, onDelete }: Props) => {
  console.log(value);

  const getAddressValue = async (cep: string) => {
    try {
      const data = await viacepService.getCep(cep);
      if (value) {
        onChange({
          ...value,
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
            inputMode="numeric"
          />
          <InputText
            label="Logradouro"
            value={value?.logradouro}
            onChange={e => handleChange('logradouro', e.target.value)}
          />
          <InputText
            label="Tipo de logradouro"
            value={value?.tipoLogradouro}
            onChange={e => handleChange('tipoLogradouro', e.target.value)}
          />
        </div>
        <div>
          <InputText
            label="Número"
            value={value?.numero}
            onChange={e => handleChange('numero', e.target.value)}
            inputMode="numeric"
            mask={masks.number}
          />
          <InputText
            label="Bairro"
            value={value?.bairro}
            onChange={e => handleChange('bairro', e.target.value)}
          />
          <Select
            label="Tipo de residência"
            options={TIPO_RESIDENCIA_OPTIONS}
            value={value?.tipoResidencia}
            onChange={(e: any) => handleChange('tipoResidencia', e.value)}
          />
        </div>
        <div>
          <InputText
            label="Cidade"
            value={value?.cidade}
            onChange={e => handleChange('cidade', e.target.value)}
          />
          <InputText
            label="Estado"
            value={value?.estado}
            onChange={e => handleChange('estado', e.target.value)}
          />
          <InputText
            label="País"
            value={value?.pais}
            onChange={e => handleChange('pais', e.target.value)}
          />
        </div>
        <div>
          <Textarea
            label="Observações"
            value={value?.observacoes || ''}
            onChange={e => handleChange('observacoes', e.target.value)}
          />
        </div>
      </AddressContainer>
    </AddressItem>
  );
};
