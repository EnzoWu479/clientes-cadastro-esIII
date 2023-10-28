using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ClientesCrud.Models;
using Validators;

namespace ClientesCrud.Validators
{
    public class ClienteValidator : IValidatorStrategy
    {
        public string? Processar(EntidadeDominio entidade)
        {
            Cliente cliente = (Cliente)entidade;
            StringBuilder sb = new();

            if (cliente.Nome == null || cliente.Nome.Length < 3)
            {
                sb.Append("\nNome inválido. ");
            }
            if (cliente.Cpf == null)
            {
                sb.Append("\nCPF inválido. ");
            }
            if (cliente.Email == null)
            {
                sb.Append("\nEmail inválido. ");
            }
            if (cliente.Telefone == null)
            {
                sb.Append("\nTelefone inválido. ");
            }
            if (sb.ToString() == "") return null;
            
            return sb.ToString();
        }
    }
}