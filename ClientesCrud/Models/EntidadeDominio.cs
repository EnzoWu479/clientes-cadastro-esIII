using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClientesCrud.Models
{
    public abstract class EntidadeDominio
    {
        public long Id { get; set; }
        public DateTime DataCadastro { get; set; }
        public DateTime DataAlteracao { get; set; }
        public EntidadeDominio(long? id)
        {
            if (id != null)
            {
                this.Id = (long)id;
            }
        }
        /// <summary> 
        /// Empty constructor for EF
        public EntidadeDominio()
        {

        }
        /// </summary>


    }
}