using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ClientesCrud.Context;
using ClientesCrud.DTO;
using ClientesCrud.Filter;
using ClientesCrud.Models;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.EntityFrameworkCore;
using Npgsql;

namespace ClientesCrud.DAO
{
    public class ClienteDAO : DAO
    {
        public ClienteDAO(ClienteContext context) : base(context)
        {
        }

        public override void Alterar(EntidadeDominio entidade)
        {
            Cliente cliente = (Cliente)entidade;


            var clienteBanco = Context.Clientes.Find(cliente.Id) ?? throw new Exception("Cliente não encontrado");

            clienteBanco.Nome = cliente.Nome;
            clienteBanco.Cpf = cliente.Cpf;
            clienteBanco.Email = cliente.Email;
            clienteBanco.Telefone = cliente.Telefone;
            clienteBanco.Status = cliente.Status;
            clienteBanco.Genero = cliente.Genero;
            clienteBanco.DataNascimento = cliente.DataNascimento;

            foreach (var endereco in cliente.EnderecosResidencial)
            {
                if (endereco.Id == null)
                {
                    clienteBanco.EnderecosResidencial.Add(endereco);
                }
            }

            foreach (var endereco in cliente.EnderecosCobranca)
            {
                if (endereco.Id == null)
                {
                    clienteBanco.EnderecosCobranca.Add(endereco);

                }
            }

            foreach (var endereco in cliente.EnderecosEntrega)
            {
                if (endereco.Id == null)
                {
                    clienteBanco.EnderecosEntrega.Add(endereco);

                }
            }

            foreach (var cartao in cliente.CartaoCredito)
            {
                if (cartao.Id == null)
                {
                    clienteBanco.CartaoCredito.Add(cartao);
                }
            }


            Context.Clientes.Update(cliente);
            Context.SaveChanges();
        }

        public override (EntidadeDominio[], int) Consultar(GetFilters filter)
        {
            var paginationFilter = filter.paginationFilter;
            var entidadeBusca = (ClienteDTO)filter.entidadeBusca;

            var query = Context.Clientes
            .Where(c => entidadeBusca.Nome == null || c.Nome.Contains(entidadeBusca.Nome))
            .Where(c => entidadeBusca.Cpf == null || c.Cpf.Contains(entidadeBusca.Cpf))
            .Where(c => entidadeBusca.Email == null || c.Email.Contains(entidadeBusca.Email))
            .Where(c => entidadeBusca.Telefone.Numero == null || c.Telefone.Numero.Contains(entidadeBusca.Telefone.Numero))
            .Where(c => entidadeBusca.Status == null || c.Status == entidadeBusca.Status)
            .Where(c => entidadeBusca.Genero == null || c.Genero == entidadeBusca.Genero)
            .Where(c => entidadeBusca.DataNascimento == null || c.DataNascimento == entidadeBusca.DataNascimento);

            return (query
            .Include("Telefone")
            .Skip((paginationFilter.PageNumber - 1) * paginationFilter.PageSize)
            .Take(paginationFilter.PageSize)
            .OrderBy(c => c.Id)
            .ToArray(), query.Count());
        }

        public override EntidadeDominio? Consultar(long id)
        {
            return Context.Clientes
            .Include("Telefone")
            .Include(x => x.EnderecosResidencial).ThenInclude(x => x.TipoLogradouro)
            .Include(x => x.EnderecosCobranca).ThenInclude(x => x.TipoLogradouro)
            .Include(x => x.EnderecosEntrega).ThenInclude(x => x.TipoLogradouro)
            .Include(x => x.CartaoCredito)
            .ThenInclude(x => x.Bandeira)
            .FirstOrDefault(c => c.Id == id);
        }

        public override void Excluir(long id)
        {
            var cliente = Context.Clientes.Find(id) ?? throw new Exception("Cliente não encontrado");
            Context.Clientes.Remove(cliente);
            Context.SaveChanges();
        }

        public override void Salvar(EntidadeDominio entidade)
        {
            Cliente cliente = (Cliente)entidade;
            Context.Add(cliente);
            Context.SaveChanges();
        }
    }
}