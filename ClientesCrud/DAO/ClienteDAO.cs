using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ClientesCrud.Models;
using Npgsql;

namespace ClientesCrud.DAO
{
    public class ClienteDAO : DAO
    {
        public ClienteDAO(NpgsqlConnection _connection) : base(_connection)
        {
        }

        public override void Alterar(EntidadeDominio entidade)
        {
            throw new NotImplementedException();
        }

        public override List<EntidadeDominio> Consultar()
        {
            throw new NotImplementedException();
        }

        public override EntidadeDominio Consultar(string id)
        {
            throw new NotImplementedException();
        }

        public override void Excluir(EntidadeDominio entidade)
        {
            throw new NotImplementedException();
        }

        public override void Salvar(EntidadeDominio entidade)
        {
            Cliente cliente = (Cliente)entidade;

            string sql = "INSERT INTO clientes (nome, cpf, email, telefone, data_nascimento) VALUES (@nome, @cpf, @email,"
                         + " @telefone, @data_nascimento)";

            NpgsqlCommand command = new(sql, connection);

            command.Parameters.AddWithValue("@nome", cliente.Nome);
            command.Parameters.AddWithValue("@cpf", cliente.Cpf);
            command.Parameters.AddWithValue("@email",
                cliente.Email);
            command.Parameters.AddWithValue("@telefone", cliente.Telefone);
            command.Parameters.AddWithValue("@data_nascimento", cliente.DataNascimento);

        }

        private string GetQueryEndereco(Endereco endereco) {
            return "INSERT INTO enderecos (cliente_id, logradouro, numero, bairro, cidade, estado, cep) VALUES (@cliente_id, @logradouro, @numero, @bairro, @cidade, @estado, @cep)";
        }
        
    }
}