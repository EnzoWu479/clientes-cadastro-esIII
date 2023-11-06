using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ClientesCrud.Models;
using Validators;

namespace ClientesCrud.Strategy
{
    public class CPFValidator : IStrategy
    {
        public string? Processar(EntidadeDominio entidade)
        {
            Cliente cliente = (Cliente)entidade;
            string cpf = cliente.Cpf;

            if (cliente.Cpf.Length != 11)
            {
                return "CPF deve ter 11 dígitos";
            }

            cpf = cpf.Replace(".", "").Replace("-", "");

            // Checar se não são sequências inválidas comuns
            if (cpf.Equals("00000000000") ||
                cpf.Equals("11111111111") ||
                cpf.Equals("22222222222") ||
                cpf.Equals("33333333333") ||
                cpf.Equals("44444444444") ||
                cpf.Equals("55555555555") ||
                cpf.Equals("66666666666") ||
                cpf.Equals("77777777777") ||
                cpf.Equals("88888888888") ||
                cpf.Equals("99999999999"))
                return "CPF inválido";

            // Calculando o primeiro dígito verificador
            int soma = 0;
            for (int i = 0; i < 9; i++)
                soma += (cpf[i] - '0') * (10 - i);

            int resto = soma % 11;
            if (resto < 2)
                resto = 0;
            else
                resto = 11 - resto;

            if (cpf[9] != resto + '0')
                return "CPF inválido";

            // Calculando o segundo dígito verificador
            soma = 0;
            for (int i = 0; i < 10; i++)
                soma += (cpf[i] - '0') * (11 - i);

            resto = soma % 11;
            if (resto < 2)
                resto = 0;
            else
                resto = 11 - resto;

            if (cpf[10] != resto + '0')
                return "CPF inválido";

            return null;



        }
    }
}