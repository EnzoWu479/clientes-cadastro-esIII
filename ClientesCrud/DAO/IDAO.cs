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
        public void Excluir(long id);
        public EntidadeDominio[] Consultar();
        public EntidadeDominio? Consultar(long id);
    }
}