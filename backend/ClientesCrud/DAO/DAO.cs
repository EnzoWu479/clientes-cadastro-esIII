using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ClientesCrud.Context;
using ClientesCrud.Filter;
using ClientesCrud.Models;
using Npgsql;

namespace ClientesCrud.DAO
{
    public abstract class DAO : IDAO
    {
        public ClienteContext Context { get; private set; }
        public DAO(ClienteContext _context)
        {
            this.Context = _context;
        }

        public abstract void Alterar(EntidadeDominio entidade);
        public abstract (EntidadeDominio[], int) Consultar(GetFilters paginationFilter);
        public abstract EntidadeDominio? Consultar(long id);
        public abstract void Excluir(long id);
        public abstract void Salvar(EntidadeDominio entidade);
    }
}