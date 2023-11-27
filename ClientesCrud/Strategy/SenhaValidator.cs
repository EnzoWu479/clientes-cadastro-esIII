using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
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
            if (!Regex.IsMatch(usuario.Senha, @"[A-Z]"))
            {
                return "Senha deve ter pelo menos uma letra maiúscula";
            }
            if (!Regex.IsMatch(usuario.Senha, @"[a-z]"))
            {
                return "Senha deve ter pelo menos uma letra minúscula";
            }
            if (!Regex.IsMatch(usuario.Senha, @"[!@#$%^&*()_+{}\:;'<>?,./]"))
            {
                return "Senha deve ter pelo menos um caractere especial";
            }
            return null;
        }
    }
}