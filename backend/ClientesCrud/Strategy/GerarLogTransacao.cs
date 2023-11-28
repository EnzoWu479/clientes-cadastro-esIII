using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ClientesCrud.DAO;
using ClientesCrud.Models;
using Validators;

namespace ClientesCrud.Strategy
{
    public class GerarLogTransacao : IStrategy
    {
        private readonly IDAO _dao;
        public GerarLogTransacao(IDAO dao)
        {
            _dao = dao;
        }
        public string? Processar(EntidadeDominio entidade)
        {
            Usuario usuarioResponsavel = (Usuario)entidade;
            Log log = new Log(null, usuarioResponsavel);
            _dao.Salvar(log);

            if (usuarioResponsavel.Id == null)
            {
                return "Não foi possível gerar o log de transação";
            }

            return null;
        }
    }
}