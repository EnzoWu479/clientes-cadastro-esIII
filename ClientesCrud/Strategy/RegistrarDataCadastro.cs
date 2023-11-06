using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ClientesCrud.Models;
using Validators;

namespace ClientesCrud.Strategy
{
    public class RegistrarDataCadastro : IStrategy
    {
        public string? Processar(EntidadeDominio entidade)
        {
            entidade.DataCadastro = DateTime.Now;
            return null;
        }
    }
}