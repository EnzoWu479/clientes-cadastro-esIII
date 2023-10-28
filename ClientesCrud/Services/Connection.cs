using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using Npgsql;

namespace ClientesCrud.Services
{
    internal class Connection
    {
        const string uName = "wzikldia";
        const string psw = "2Vrvd3X4kStGnosyWbu0TjxzljDp4c6I";
        const string db = "wzikldia";
        private static readonly NpgsqlConnection _connection = new($"Host=silly.db.elephantsql.com;Username={uName};Password={psw};Database={db}");
        public static NpgsqlConnection GetConnection()
        {
            if (_connection.State != ConnectionState.Open)
            {
                try
                {
                    _connection.Open();
                    return _connection;
                }
                catch (Exception e)
                {
                    Console.WriteLine(e.Message);
                }
            }
            return _connection;
        }
        public static void CloseConnection()
        {
            _connection.Close();
        }
    }
}