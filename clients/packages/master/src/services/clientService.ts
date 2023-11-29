import { ClientFilter, IClient, Status } from '@/types/client';
import { EnderecoDTO } from '@/validations/addressSchema';
import { changePasswordDTO } from '@/validations/changePasswordSchema';
import {
  CartaoCreditoOnlyDTO,
  ClientEditDTO,
  ClienteDTO,
  EnderecoOnlyDTO
} from '@/validations/clientSchema';
import api from '@ecommerce/axios-config';
import { IPagination, IPaginationFilter, masks } from '@ecommerce/shared';

const proccessAddress = (data: EnderecoDTO) => ({
  numero: data.numero,
  observacoes: data.observacoes,
  bairro: data.bairro,
  cep: masks.number(data.cep),
  logradouro: data.logradouro,
  tipoLogradouro: {
    nome: data.tipoLogradouro
  },
  tipoResidencia: Number(data.tipoResidencia),
  cidade: data.cidade,
  estado: data.estado,
  pais: data.pais
});
const proccessAddressId = (data: EnderecoDTO) => ({
  ...(data.id && { id: data.id }),
  ...proccessAddress(data)
});
export interface IClientList extends IPaginationFilter {
  filter?: ClientFilter;
}
export const clientService = {
  register: async (data: ClienteDTO) => {
    console.log(data.cartaoCredito);
    console.log(data.preferredCard);

    await api.post('/Cliente', {
      nome: data.nome,
      senha: data.senha,
      email: data.email,
      dataNascimento: data.dataNascimento,
      status: Number(data.status),
      genero: Number(data.genero),
      cpf: masks.number(data.cpf),
      telefone: {
        ddd: data.telefone.ddd,
        numero: data.telefone.numero
      },
      enderecosResidencial: data.enderecosResidencial.map(proccessAddress),
      enderecosCobranca: data.enderecosCobranca.map(proccessAddress),
      enderecosEntrega: data.enderecosEntrega.map(proccessAddress),
      cartaoCredito: data.cartaoCredito.map(card => ({
        preferencial:
          data.preferredCard === card.id || data.cartaoCredito.length === 1,
        numero: card.numero,
        nomeTitular: card.nomeTitular,
        validade: card.validade,
        cvv: card.cvv,
        bandeira: {
          nome: card.bandeira
        }
      }))
    });
  },
  updateClientInfo: async (data: ClientEditDTO, id: number) => {
    await api.patch(`/Cliente/${id}`, {
      id: data.id,
      nome: data.nome,
      senha: data.senha,
      email: data.email,
      dataNascimento: data.dataNascimento,
      status: Number(data.status),
      genero: Number(data.genero),
      cpf: masks.number(data.cpf),
      telefone: {
        id: data.telefone.id,
        ddd: data.telefone.ddd,
        numero: data.telefone.numero
      }
    });
  },
  updateAddress: async (data: EnderecoOnlyDTO, id: number) => {
    await api.patch(`/Cliente/enderecos/${id}`, {
      id: data.id,
      enderecosResidencial: data.enderecosResidencial.map(proccessAddressId),
      enderecosCobranca: data.enderecosCobranca.map(proccessAddressId),
      enderecosEntrega: data.enderecosEntrega.map(proccessAddressId)
    });
  },
  updateCreditCard: async (data: CartaoCreditoOnlyDTO, id: number) => {
    console.log(data.cartaoCredito);
    console.log(data.preferredCard);
    await api.patch(`/Cliente/cartao/${id}`, {
      id: data.id,
      cartaoCredito: data.cartaoCredito.map(card => ({
        id: card.id,
        preferencial:
          data.preferredCard === card.id || data.cartaoCredito.length === 1,
        numero: card.numero,
        nomeTitular: card.nomeTitular,
        validade: card.validade,
        cvv: card.cvv,
        bandeira: {
          nome: card.bandeira
        }
      }))
    });
  },
  getList: async ({ page, limit, search, filter }: IClientList) => {
    const { data } = await api.get<IPagination<IClient>>('/Cliente', {
      params: {
        page: page,
        limit: limit,
        search: search,
        nome: filter?.nome || null,
        email: filter?.email || null,
        status: filter?.status,
        genero: filter?.genero,
        dataNascimento: filter?.dataNascimento || null,
        cpf: filter?.cpf ? masks.number(filter.cpf) : null,
        telefone: filter?.telefone || null
      }
    });
    return data;
  },
  get: async (id: number) => {
    const { data } = await api.get<IClient>(`/Cliente/${id}`);
    return data;
  },
  toggleStatus: async (id: number, status: Status) => {
    await api.patch(`/Cliente/status/${id}`, {
      status: Number(status)
    });
  },
  changePassword: async (id: number, data: changePasswordDTO) => {
    await api.patch(`/Cliente/senha/${id}`, {
      // oldPassword: data.oldPassword,
      newPassword: data.newPassword
    });
  }
};
