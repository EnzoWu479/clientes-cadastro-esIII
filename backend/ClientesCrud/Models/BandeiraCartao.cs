using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClientesCrud.Models
{
    public class BandeiraCartao : EntidadeDominio
    {
        public BandeiraCartao(long id, string nome) : base(id)
        {
            this.Nome = nome;
        }
        /// <summary> 
        /// Empty constructor for EF
        public BandeiraCartao()
        {

        }
        /// </summary>
        
        public string Nome { get; set; }

    }
}