using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ClientesCrud.DAO;
using ClientesCrud.Models;
using ClientesCrud.Helper;
using Validators;

namespace ClientesCrud.Strategy
{
    public class GerarLogTransacao : IStrategy
    {
        public GerarLogTransacao()
        {
        }
        public string? Processar(EntidadeDominio entidade)
        {
            Usuario usuarioResponsavel = (Usuario)entidade;
            if (usuarioResponsavel.Id == null)
            {
                return "Não foi possível gerar o log de transação";
            }
            RegistradorArquivo registradorArquivo = new("log.txt");

            registradorArquivo.Registrar($"Usuário: {usuarioResponsavel.Nome}, Hora: {DateTime.Now}\n");


            return null;
        }
    }
}