using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
namespace ClientesCrud.Models
{
    public class Estado : EntidadeDominio
    {
        public Estado(long? id, string nome, Pais pais) : base(id)
        {
            this.Nome = nome;
            this.Pais = pais;
        }
        /// <summary> 
        /// Empty constructor for EF
        public Estado()
        {

        }
        /// </summary>
        public string Nome { get; set; }
        public Pais Pais { get; set; }
    }
}