using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClientesCrud.Models
{
    public class Administrador : Usuario
    {
        public Administrador(long? id, string nome, string senha, string email, Status status) : base(id, nome, senha, email, status)
        {
        }
    }
}