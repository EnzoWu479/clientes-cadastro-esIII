using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ClientesCrud.Settings;

namespace ClientesCrud.Helper
{
    public class EncriptadorSenha
    {
        public static string Encriptar(string senha)
        {
            var salt = BCrypt.Net.BCrypt.GenerateSalt(Options.Salt);
            return BCrypt.Net.BCrypt.HashPassword(senha, salt);
        }
        public static bool Validar(string senha, string hash)
        {
            return BCrypt.Net.BCrypt.EnhancedVerify(senha, hash);
        }
    }
}