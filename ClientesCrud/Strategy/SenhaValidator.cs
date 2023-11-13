using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ClientesCrud.Models;
using Validators;

namespace ClientesCrud.Strategy
{
    public class SenhaValidator : IStrategy
    {
        public string? Processar(EntidadeDominio entidade)
        {
            Usuario usuario = (Usuario)entidade;
            if (usuario.Senha == null)
            {
                return "Senha não pode ser nula";
            }
            if (usuario.Senha.Length < 8)
            {
                return "Senha deve ter no mínimo 8 caracteres";
            }
            if (usuario.Senha.All(char.IsLower))
            {
                return "Senha deve ter pelo menos uma letra maiúscula";
            }
            if (usuario.Senha.All(char.IsUpper))
            {
                return "Senha deve ter pelo menos uma letra minúscula";
            }
            if (usuario.Senha.All(char.IsLetterOrDigit))
            {
                return "Senha deve ter pelo menos um caractere especial";
            }
            return null;
        }
    }
}