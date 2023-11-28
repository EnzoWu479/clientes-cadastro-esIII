using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ClientesCrud.Models;
using Validators;

namespace ClientesCrud.Strategy
{
    public class EnderecoValidator : IStrategy
    {
        public string? Processar(EntidadeDominio entidade)
        {
            Cliente cliente = (Cliente)entidade;
            List<Endereco> enderecoCobranca = cliente.EnderecosCobranca;
            List<Endereco> enderecoEntrega = cliente.EnderecosEntrega;
            List<Endereco> enderecoResidencial = cliente.EnderecosResidencial;
            StringBuilder sb = new();

            foreach (Endereco endereco in enderecoCobranca)
            {
                string mensagem = ValidarEndereco(endereco, "de cobranca");
                if (mensagem != "")
                {
                    sb.Append(mensagem);
                }
            }
            foreach (Endereco endereco in enderecoEntrega)
            {
                string mensagem = ValidarEndereco(endereco, "de entrega");
                if (mensagem != "")
                {
                    sb.Append(mensagem);
                }
            }
            foreach (Endereco endereco in enderecoResidencial)
            {
                string mensagem = ValidarEndereco(endereco, "residencial");
                if (mensagem != "")
                {
                    sb.Append(mensagem);
                }
            }

            if (sb.ToString() == "") return null;
            return sb.ToString();
        }
        public string ValidarEndereco(Endereco endereco, string tipoEndereco = "cobranca")
        {
            StringBuilder sb = new();
            if (endereco.Logradouro == null || endereco.Logradouro == "")
            {
                sb.Append($"Logradouro do endereço {tipoEndereco} não pode ser vazio");
            }
            if (endereco.Numero == null || endereco.Numero == "")
            {
                sb.Append($"Número do endereço {tipoEndereco} não pode ser vazio");
            }
            if (endereco.Cep == null || endereco.Cep == "")
            {
                sb.Append($"CEP do endereço {tipoEndereco} não pode ser vazio");
            }
            if (endereco.TipoResidencia == null)
            {
                sb.Append($"Tipo de residência do endereço {tipoEndereco} não pode ser vazio");
            }
            if (endereco.Cidade == null || endereco.Cidade == null || endereco.Cidade == "")
            {
                sb.Append($"Cidade do endereço {tipoEndereco} não pode ser vazio");
            }
            if (endereco.Cidade != null && (endereco.Estado == null || endereco.Estado == null || endereco.Estado == ""))
            {
                sb.Append($"Estado do endereço {tipoEndereco} não pode ser vazio");
            }
            if (endereco.Cidade != null && endereco.Cidade != null && (endereco.Pais == null || endereco.Pais == null || endereco.Pais == ""))
            {
                sb.Append($"País do endereço {tipoEndereco} não pode ser vazio");
            }
            return sb.ToString();
        }
    }
}