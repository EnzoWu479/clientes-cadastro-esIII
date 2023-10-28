using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClientesCrud.Models
{
    public class Cidade
    {
        public Cidade(string _nome, Estado _estado)
        {
            this.Nome = _nome;
            this.Estado = _estado;
        }
        public string Nome { get; set; }
        public Estado Estado { get; set; }
    }
}