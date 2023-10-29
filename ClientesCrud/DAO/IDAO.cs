using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ClientesCrud.Models;

namespace ClientesCrud.DAO
{
    public interface IDAO
    {
        public void Salvar(EntidadeDominio entidade);
        public void Alterar(EntidadeDominio entidade);
        public void Excluir(EntidadeDominio entidade);
        public List<EntidadeDominio> Consultar();
        public EntidadeDominio Consultar(string id);
    }
}