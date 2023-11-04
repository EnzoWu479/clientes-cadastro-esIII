using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClientesCrud.Models
{
    public class CartaoCredito : EntidadeDominio
    {
        public CartaoCredito(long id, string numero, string nomeTitular, string validade, string cvv, BandeiraCartao bandeira) : base(id)
        {
            this.Numero = numero;
            this.NomeTitular = nomeTitular;
            this.Validade = validade;
            this.Cvv = cvv;
            this.Bandeira = bandeira;
        }
        /// <summary> 
        /// Empty constructor for EF
        public CartaoCredito()
        {

        }
        /// </summary>
        public string Numero { get; set; }
        public string NomeTitular { get; set; }
        public string Validade { get; set; }
        public string Cvv { get; set; }
        public BandeiraCartao Bandeira { get; set; }
    }
}