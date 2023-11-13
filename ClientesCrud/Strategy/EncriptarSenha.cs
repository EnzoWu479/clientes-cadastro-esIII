using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ClientesCrud.Models;
using Validators;

namespace ClientesCrud.Strategy
{
    public class EncriptarSenha : IStrategy
    {
        public string? Processar(EntidadeDominio entidade)
        {
            Usuario usuario = (Usuario)entidade;
            usuario.Senha = BCrypt.Net.BCrypt.HashPassword(usuario.Senha);
            return null;
        }
    }
}