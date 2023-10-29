using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ClientesCrud.DAO;
using ClientesCrud.Models;
using ClientesCrud.Services;
using Npgsql;
using Validators;

namespace ClientesCrud.Facade
{
    public class Facade : IFacade
    {
        private readonly Dictionary<string, List<IValidatorStrategy>> _validators;
        private readonly Dictionary<string, IDAO> _daos;

        public Facade()
        {
            _validators = new Dictionary<string, List<IValidatorStrategy>>();
            _daos = new Dictionary<string, IDAO>();
            NpgsqlConnection _connection = Connection.GetConnection();

            List<IValidatorStrategy> validatorsCliente = new();

            _validators.Add(nameof(Cliente), validatorsCliente);

            _daos.Add(nameof(Cliente), new ClienteDAO(_connection));
        }

        public string Alterar(EntidadeDominio entidade)
        {
            throw new NotImplementedException();
        }

        public List<EntidadeDominio> Consultar()
        {
            throw new NotImplementedException();
        }

        public EntidadeDominio Consultar(string id)
        {
            throw new NotImplementedException();
        }

        public string Excluir(EntidadeDominio entidade)
        {
            throw new NotImplementedException();
        }

        public string Salvar(EntidadeDominio entidade)
        {
            IDAO dao = _daos[entidade.GetType().Name];
            List<IValidatorStrategy> validators = _validators[entidade.GetType().Name];

            StringBuilder sb = new StringBuilder();

            foreach (IValidatorStrategy validator in validators)
            {
                string mensagem = validator.Processar(entidade);

                if (mensagem != null)
                {
                    sb.Append(mensagem);
                }
            }
            if (sb.Length > 0)
            {
                return sb.ToString();
            }
            
            dao.Salvar(entidade);
            return null;
        }
    }
}