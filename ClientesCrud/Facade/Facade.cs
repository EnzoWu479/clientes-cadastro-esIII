using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ClientesCrud.Context;
using ClientesCrud.DAO;
using ClientesCrud.Filter;
using ClientesCrud.Models;
using ClientesCrud.Strategy;
using Npgsql;
using Validators;

namespace ClientesCrud.Facade
{
    public class Facade : IFacade
    {
        private readonly Dictionary<string, List<IStrategy>> _validators;
        private readonly Dictionary<string, IDAO> _daos;

        public Facade(ClienteContext context)
        {
            _validators = new Dictionary<string, List<IStrategy>>();
            _daos = new Dictionary<string, IDAO>();

            List<IStrategy> regrasCliente = new();

            regrasCliente.Add(new ClienteValidator());
            regrasCliente.Add(new CPFValidator());
            regrasCliente.Add(new EnderecoMinValidator());
            regrasCliente.Add(new EnderecoValidator());
            regrasCliente.Add(new SenhaValidator());
            regrasCliente.Add(new EncriptarSenha());
            regrasCliente.Add(new GerarLogTransacao(new LogDAO(context)));

            _validators.Add(nameof(Cliente), regrasCliente);

            _daos.Add(nameof(Cliente), new ClienteDAO(context));
        }

        public void Alterar(EntidadeDominio entidade)
        {
            IDAO dao = _daos[entidade.GetType().Name];
            List<IStrategy> validators = _validators[entidade.GetType().Name];

            StringBuilder sb = new StringBuilder();

            foreach (IStrategy validator in validators)
            {
                string mensagem = validator.Processar(entidade);

                if (mensagem != null)
                {
                    sb.Append(mensagem);
                }
            }
            if (sb.Length > 0)
            {
                throw new Exception(sb.ToString());
            }


            _daos[nameof(entidade)].Alterar(entidade);
        }

        public EntidadeDominio[] Consultar(string nameOfEntidade, PaginationFilter filter)
        {
            return _daos[nameOfEntidade].Consultar(filter);
        }

        public EntidadeDominio? Consultar(long id, string nameOfEntidade)
        {
            return _daos[nameOfEntidade].Consultar(id);
        }

        public void Excluir(long id)
        {
            _daos[nameof(Cliente)].Excluir(id);
        }

        public void Salvar(EntidadeDominio entidade)
        {
            IDAO dao = _daos[entidade.GetType().Name];
            List<IStrategy> validators = _validators[entidade.GetType().Name];

            StringBuilder sb = new StringBuilder();

            foreach (IStrategy validator in validators)
            {
                string mensagem = validator.Processar(entidade);

                if (mensagem != null)
                {
                    sb.Append(mensagem);
                }
            }
            if (sb.Length > 0)
            {
                throw new Exception(sb.ToString());
            }

            dao.Salvar(entidade);
        }
    }
}