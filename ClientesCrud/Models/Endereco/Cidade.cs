using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClientesCrud.Models
{
    public class Cidade : EntidadeDominio
    {
        public Cidade(long id, string nome, Estado estado) : base(id)
        {
            this.Nome = nome;
            this.Estado = estado;
        }
        /// <summary> 
        /// Empty constructor for EF
        public Cidade()
        {

        }
        /// </summary>
        public string Nome { get; set; }
        public Estado Estado { get; set; }
    }
}