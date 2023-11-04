using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClientesCrud.Models
{
    public class Estado : EntidadeDominio
    {
        public Estado(long id, string nome, string sigla, Pais pais) : base(id)
        {
            this.Nome = nome;
            this.Sigla = sigla;
            this.Pais = pais;
        }
        /// <summary> 
        /// Empty constructor for EF
        public Estado()
        {

        }
        /// </summary>
        public string Nome { get; set; }
        public string Sigla { get; set; } 
        public Pais Pais { get; set; }  
    }
}