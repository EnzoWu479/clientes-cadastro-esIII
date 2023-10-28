using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClientesCrud.Models
{
    public class TipoLogradouro
    {
        public TipoLogradouro(string _nome)
        {
            this.Nome = _nome;
        }
        public string Nome { get; set; }
    }
}