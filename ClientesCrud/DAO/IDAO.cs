using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ClientesCrud.Models;

namespace ClientesCrud.DAO
{
    public interface IDAO
    {
        public string Salvar(EntidadeDominio entidade);
        public string Alterar(EntidadeDominio entidade);
        public string Excluir(EntidadeDominio entidade);
        public List<EntidadeDominio> Consultar();
        public EntidadeDominio Consultar(string id);
    }
}