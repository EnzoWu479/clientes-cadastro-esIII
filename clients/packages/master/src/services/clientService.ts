import { EnderecoDTO } from '@/validations/addressSchema';
import { ClienteDTO } from '@/validations/clientSchema';
import api from '@ecommerce/axios-config';
import { masks } from '@ecommerce/shared';

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
  cidade: {
    nome: data.cidade,
    estado: {
      nome: data.estado,
      pais: {
        nome: data.pais
      }
    }
  }
});

export const clientService = {
  register: async (data: ClienteDTO) => {
    try {
      await api.post('/Cliente', {
        nome: data.nome,
        senha: data.senha,
        email: data.email,
        dataNascimento: data.dataNascimento,
        cpf: masks.number(data.cpf),
        telefone: {
          ddd: data.telefone.ddd,
          numero: data.telefone.numero
        },
        enderecosResidencial: data.enderecosResidencial.map(proccessAddress),
        enderecosCobranca: data.enderecosCobranca.map(proccessAddress),
        enderecosEntrega: data.enderecosEntrega.map(proccessAddress),
        cartaoCredito: data.cartaoCredito.map(card => ({
          preferencial: false,
          numero: card.numero,
          nomeTitular: card.nomeTitular,
          validade: card.validade,
          cvv: card.cvv,
          bandeira: {
            nome: card.bandeira
          }
        }))
      });
    } catch {}
  }
};
