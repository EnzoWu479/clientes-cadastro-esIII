using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace ClientesCrud.Models
{
    public abstract class Usuario : EntidadeDominio
    {
        public Usuario(long? id, string nome, string senha, string email, Status status) : base(id)
        {
            this.Nome = nome;
            this.Senha = senha;
            this.Email = email;
            this.Status = status;
        }
        /// <summary> 
        /// Empty constructor for EF
        public Usuario()
        {

        }
        /// </summary>
        public string Nome { get; set; }
        public Status Status { get; set; }
        public string Senha { get; set; }
        public string Email { get; set; }
    }
}