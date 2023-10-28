using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ClientesCrud.DAO;
using ClientesCrud.Models;
using Validators;

namespace ClientesCrud.Facade
{
    public class Facade : IFacade
    {
        private readonly Dictionary<string, List<IValidatorStrategy>> _validators;
        private readonly Dictionary<string, IDAO> _daos;

        public Facade() {
            _validators = new Dictionary<string, List<IValidatorStrategy>>();
            _daos = new Dictionary<string, IDAO>();

            List<IValidatorStrategy> validatorsCliente = new();

            _validators.Add(nameof(Cliente), validatorsCliente);

            _daos.Add(nameof(Cliente), new ClienteDAO());
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

            foreach (IValidatorStrategy validator in validators)
            {
                string mensagem = validator.Processar(entidade);
                if (mensagem != null)
                {
                    return mensagem;
                }
            }
            dao.Salvar(entidade);

            throw new NotImplementedException();
        }
    }
}