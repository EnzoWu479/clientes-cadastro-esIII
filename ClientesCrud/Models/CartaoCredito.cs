using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClientesCrud.Models
{
    public class CartaoCredito : EntidadeDominio
    {
        public CartaoCredito(string _numero, string _nomeTitular, string _validade, string _cvv, BandeiraCartao _bandeira)
        {
            this.Numero = _numero;
            this.NomeTitular = _nomeTitular;
            this.Validade = _validade;
            this.Cvv = _cvv;
            this.Bandeira = _bandeira;
        }
        public string Numero { get; set; }
        public string NomeTitular { get; set; }
        public string Validade { get; set; }
        public string Cvv { get; set; }
        public BandeiraCartao Bandeira { get; set; }
    }
}