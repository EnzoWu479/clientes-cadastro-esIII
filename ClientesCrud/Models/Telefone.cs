using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClientesCrud.Models
{
    public class Telefone : EntidadeDominio
    {
        public Telefone(string _ddd, string _numero)
        {
            this.Ddd = _ddd;
            this.Numero = _numero;
        }
        public string Ddd { get; set; }
        public string Numero { get; set; }

    }
}