using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ClientesCrud.Helper;
using ClientesCrud.Models;
using Validators;

namespace ClientesCrud.Strategy
{
    public class EncriptarSenha : IStrategy
    {
        public string? Processar(EntidadeDominio entidade)
        {
            Usuario usuario = (Usuario)entidade;
            usuario.Senha = EncriptadorSenha.Encriptar(usuario.Senha);
            return null;
        }
    }
}