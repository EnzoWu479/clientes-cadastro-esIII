using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClientesCrud.Models
{
    public class TipoLogradouro : EntidadeDominio
    {
        public TipoLogradouro(long id, string nome) : base(id)
        {
            this.Nome = nome;
        }
        /// <summary> 
        /// Empty constructor for EF
        public TipoLogradouro()
        {

        }
        /// </summary>
        public string Nome { get; set; }
    }
}