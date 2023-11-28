using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ClientesCrud.Models;
using Validators;

namespace ClientesCrud.Strategy
{
    public class ClienteValidator : IStrategy
    {
        public string? Processar(EntidadeDominio entidade)
        {
            Cliente cliente = (Cliente)entidade;
            StringBuilder sb = new();

            if (cliente.Nome == null || cliente.Nome.Length < 3)
            {
                sb.Append("\nNome inválido. ");
            }
            if (cliente.Cpf == null || cliente.Cpf == "")
            {
                sb.Append("\nCPF inválido. ");
            }
            if (cliente.Email == null || !cliente.Email.Contains("@") || !cliente.Email.Contains(".com") || cliente.Email.Length < 5)
            {
                sb.Append("\nEmail inválido. ");
            }
            if (cliente.Telefone == null || cliente.Telefone.Ddd == null || cliente.Telefone.Numero == null || cliente.Telefone.Ddd.Length < 2 || cliente.Telefone.Numero.Length < 8)
            {
                sb.Append("\nTelefone inválido. ");
            }
            if (cliente.Status == null)
            {
                sb.Append("\nStatus inválido. ");
            }
            if (sb.ToString() == "") return null;

            return sb.ToString();
        }
    }
}