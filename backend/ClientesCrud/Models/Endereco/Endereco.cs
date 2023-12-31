using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClientesCrud.Models
{
    public class Endereco : EntidadeDominio
    {
        public Endereco(long? id, TipoLogradouro TipoLogradouro, string Logradouro, string Numero, string Observacoes, string Bairro, string Cidade, string Estado, string Pais, TipoResidencia tipoResidencia, string Cep) : base(id)
        {
            this.TipoLogradouro = TipoLogradouro;
            this.Logradouro = Logradouro;
            this.Numero = Numero;
            this.Observacoes = Observacoes;
            this.Bairro = Bairro;
            this.Cidade = Cidade;
            this.Estado = Estado;
            this.Pais = Pais;

            this.TipoResidencia = tipoResidencia;
            this.Cep = Cep;
        }
        /// <summary> 
        /// Empty constructor for EF
        public Endereco()
        {

        }
        /// </summary>
        public string Numero { get; set; }
        public string Observacoes { get; set; }
        public string Bairro { get; set; }
        public string Cep { get; set; }
        public string Logradouro { get; set; }
        public TipoLogradouro TipoLogradouro { get; set; }
        public TipoResidencia TipoResidencia { get; set; }
        public string Cidade { get; set; }
        public string Estado { get; set; }
        public string Pais { get; set; }
    }
}