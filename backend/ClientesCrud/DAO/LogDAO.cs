using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ClientesCrud.Context;
using ClientesCrud.Filter;
using ClientesCrud.Models;

namespace ClientesCrud.DAO
{
    public class LogDAO : DAO
    {
        public LogDAO(ClienteContext context) : base(context)
        {
        }
        public override void Alterar(EntidadeDominio entidade)
        {
            throw new NotImplementedException();
        }

        public override (EntidadeDominio[], int) Consultar(GetFilters filters)
        {
            var paginationFilter = filters.paginationFilter;
            return (Context.Logs.Skip((paginationFilter.PageNumber - 1) * paginationFilter.PageSize)
                .Take(paginationFilter.PageSize).ToArray(), Context.Logs.Count());
        }

        public override EntidadeDominio? Consultar(long id)
        {
            throw new NotImplementedException();
        }

        public override void Excluir(long id)
        {
            throw new NotImplementedException();
        }

        public override void Salvar(EntidadeDominio entidade)
        {
            Log log = (Log)entidade;
            Context.Add(log);
            Context.SaveChanges();
        }
    }
}