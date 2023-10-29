using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ClientesCrud.Models;
using Npgsql;

namespace ClientesCrud.DAO
{
    public abstract class DAO : IDAO
    {
        public NpgsqlConnection connection { get; private set; }
        public DAO(NpgsqlConnection _connection)
        {
            this.connection = _connection;
        }

        public abstract void Alterar(EntidadeDominio entidade);
        public abstract List<EntidadeDominio> Consultar();
        public abstract EntidadeDominio Consultar(string id);
        public abstract void Excluir(EntidadeDominio entidade);
        public abstract void Salvar(EntidadeDominio entidade);
    }
}