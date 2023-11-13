using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClientesCrud.Models
{
    public abstract class Usuario : EntidadeDominio
    {
        public Usuario (long? id, string nome, string senha, string email) : base(id)
        {
            this.Nome = nome;
            this.Senha = senha;
            this.Email = email;
        }
        /// <summary> 
        /// Empty constructor for EF
        public Usuario()
        {

        }
        /// </summary>
        public string Nome { get; set; }
        public string Senha { get; set; }
        public string Email { get; set; }
    }
}