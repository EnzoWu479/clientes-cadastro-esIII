using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClientesCrud.Models
{
    public class Estado
    {
        public Estado(string _nome, string _sigla, Pais _pais)
        {
            this.Nome = _nome;
            this.Sigla = _sigla;
            this.Pais = _pais;
        }
        public string Nome { get; set; }
        public string Sigla { get; set; } 
        public Pais Pais { get; set; }  
    }
}