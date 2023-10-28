using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClientesCrud.Models
{
    public class Endereco
    {
        public Endereco(TipoLogradouro _TipoLogradouro, string _Logradouro, string _Numero, string _Observacoes, string _Bairro, Cidade _Cidade, Pais _Pais, string _Cep)
        {
            this.TipoLogradouro = _TipoLogradouro;
            this.Logradouro = _Logradouro;
            this.Numero = _Numero;
            this.Observacoes = _Observacoes;
            this.Bairro = _Bairro;
            this.Cidade = _Cidade;
            this.Pais = _Pais;
            this.Cep = _Cep;
        }
        public string Numero { get; set; }
        public string Observacoes { get; set; }
        public string Bairro { get; set; }
        public string Cep { get; set; }
        public string Logradouro { get; set; }
        public TipoLogradouro TipoLogradouro { get; set; }
        public Cidade Cidade { get; set; }
        public Pais Pais { get; set; }
    }
}