using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClientesCrud.Models
{
    public class Telefone : EntidadeDominio
    {
        public Telefone(long id, string ddd, string numero) : base(id)
        {
            this.Ddd = ddd;
            this.Numero = numero;
        }
        /// <summary> 
        /// Empty constructor for EF
        public Telefone()
        {

        }
        /// </summary>
        public string Ddd { get; set; }
        public string Numero { get; set; }

    }
}