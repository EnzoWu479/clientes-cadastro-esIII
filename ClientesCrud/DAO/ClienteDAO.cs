using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ClientesCrud.Context;
using ClientesCrud.Filter;
using ClientesCrud.Models;
using Microsoft.AspNetCore.Http.HttpResults;
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
            Context.Clientes.Update(cliente);
            Context.SaveChanges();
        }

        public override EntidadeDominio[] Consultar(PaginationFilter paginationFilter)
        {
            return Context.Clientes.ToArray();
        }

        public override EntidadeDominio? Consultar(long id)
        {
            return Context.Clientes.Find(id);
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