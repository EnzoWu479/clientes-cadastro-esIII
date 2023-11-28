using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ClientesCrud.Filter;
using ClientesCrud.Models;

namespace ClientesCrud.DAO
{
    public interface IDAO
    {
        public void Salvar(EntidadeDominio entidade);
        public void Alterar(EntidadeDominio entidade);
        public void Excluir(long id);
        public (EntidadeDominio[], int) Consultar(GetFilters filters);
        public EntidadeDominio? Consultar(long id);
    }
}