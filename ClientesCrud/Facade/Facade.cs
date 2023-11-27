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
        private readonly Dictionary<string, List<IStrategy>> _validatorsRegister;
        private readonly Dictionary<string, IDAO> _daos;

        public Facade(ClienteContext context)
        {
            _validators = new Dictionary<string, List<IStrategy>>();
            _validatorsRegister = new Dictionary<string, List<IStrategy>>();
            _daos = new Dictionary<string, IDAO>();

            List<IStrategy> regrasCliente = new();
            List<IStrategy> regrasClienteSalvar = new();

            regrasCliente.Add(new ClienteValidator());
            regrasClienteSalvar.Add(new ClienteValidator());

            regrasCliente.Add(new CPFValidator());
            regrasClienteSalvar.Add(new CPFValidator());

            regrasCliente.Add(new EnderecoMinValidator());
            regrasClienteSalvar.Add(new EnderecoMinValidator())
            ;
            regrasCliente.Add(new EnderecoValidator());
            regrasClienteSalvar.Add(new EnderecoValidator());
            
            regrasClienteSalvar.Add(new SenhaValidator());
            regrasClienteSalvar.Add(new EncriptarSenha());
            // regrasCliente.Add(new GerarLogTransacao(new LogDAO(context)));

            _validators.Add(typeof(Cliente).Name, regrasCliente);
            _validatorsRegister.Add(typeof(Cliente).Name, regrasClienteSalvar);

            _daos.Add(typeof(Cliente).Name, new ClienteDAO(context));
        }

        public void Alterar(EntidadeDominio entidade)
        {
            Console.WriteLine(entidade.GetType().Name);
            IDAO dao = _daos[entidade.GetType().Name];
            List<IStrategy> validators = _validators[entidade.GetType().Name];

            StringBuilder sb = new StringBuilder();

            foreach (IStrategy validator in validators)
            {
                string mensagem = validator.Processar(entidade);

                if (mensagem != null)
                {
                    sb.Append(mensagem + "\n");
                }
            }
            if (sb.Length > 0)
            {
                throw new Exception(sb.ToString());
            }


            _daos[entidade.GetType().Name].Alterar(entidade);
        }

        public (EntidadeDominio[], int) Consultar(string nameOfEntidade, GetFilters filter)
        {
            return _daos[nameOfEntidade].Consultar(filter);
        }

        public EntidadeDominio? Consultar(long id, string nameOfEntidade)
        {
            return _daos[nameOfEntidade].Consultar(id);
        }

        public void Excluir(long id)
        {
            _daos[typeof(Cliente).Name].Excluir(id);
        }

        public void Salvar(EntidadeDominio entidade)
        {
            IDAO dao = _daos[entidade.GetType().Name];
            List<IStrategy> validators = _validatorsRegister[entidade.GetType().Name];

            StringBuilder sb = new StringBuilder();

            foreach (IStrategy validator in validators)
            {
                Console.WriteLine(validator.GetType().Name);
                string mensagem = validator.Processar(entidade);
                Console.WriteLine(mensagem);
                if (mensagem != null)
                {
                    sb.Append(mensagem + "\n");
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