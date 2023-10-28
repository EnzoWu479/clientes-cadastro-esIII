using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ClientesCrud.Models;
using Validators;

namespace ClientesCrud.Validators
{
    public class EnderecoValidator : IValidatorStrategy
    {
        public string? Processar(EntidadeDominio entidade)
        {
            Cliente cliente = (Cliente)entidade;
            List<Endereco> enderecoCobranca = cliente.EnderecosCobranca;
            List<Endereco> enderecoEntrega = cliente.EnderecosEntrega;
            List<Endereco> enderecoResidencial = cliente.EnderecosResidencial;
        }
    }
}