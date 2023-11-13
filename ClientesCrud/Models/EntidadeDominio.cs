using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ClientesCrud.Models
{
    public abstract class EntidadeDominio
    {
        [Key]
        public long Id { get; set; }
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