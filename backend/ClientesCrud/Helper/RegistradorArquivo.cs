using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClientesCrud.Helper
{
    public class RegistradorArquivo
    {
        public string Path { get; set; }
        public RegistradorArquivo(string path)
        {
            Path = path;
            if (!ArquivoExiste())
            {
                Criar();
            }
        }
        public void Registrar(string mensagem)
        {
            using (var streamWriter = new StreamWriter(Path, true))
            {
                streamWriter.WriteLine(mensagem);
            }
        }
        public void Limpar()
        {
            using (var streamWriter = new StreamWriter(Path, false))
            {
                streamWriter.WriteLine("");
            }
        }
        public string Ler()
        {
            using (var streamReader = new StreamReader(Path))
            {
                return streamReader.ReadToEnd();
            }
        }
        public bool ArquivoExiste()
        {
            return File.Exists(Path);
        }
        public void Criar()
        {
            File.Create(Path).Close();
        }

    }
}