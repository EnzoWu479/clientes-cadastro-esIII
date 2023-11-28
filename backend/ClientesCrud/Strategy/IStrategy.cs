using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ClientesCrud.Models;
namespace Validators
{
    public interface IStrategy
    {
        public string? Processar(EntidadeDominio entidade);
    }
}