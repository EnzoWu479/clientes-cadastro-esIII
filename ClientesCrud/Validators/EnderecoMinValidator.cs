using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ClientesCrud.Models;
using Validators;

namespace ClientesCrud.Validators
{
    public class EnderecoMinValidator : IValidatorStrategy
    {
        public string? Processar(EntidadeDominio entidade)
        {
            StringBuilder sb = new();

            Cliente cliente = (Cliente)entidade;
            List<Endereco> enderecoCobranca = cliente.EnderecosCobranca;
            List<Endereco> enderecoEntrega = cliente.EnderecosEntrega;

            if (enderecoCobranca == null)
            {
                sb.Append("\nEndereço de cobrança inválido. ");
            }
            else if (enderecoCobranca.Count < 1)
            {
                sb.Append("\nMínimo de um endereço de cobrança. ");
            }

            if (enderecoEntrega == null)
            {
                sb.Append("\nEndereço de entrega inválido. ");
            }
            else if (enderecoEntrega.Count < 1)
            {
                sb.Append("\nMínimo de um endereço de entrega. ");
            }

            if (sb.ToString() == "") return null;

            return sb.ToString();
        }
    }
}