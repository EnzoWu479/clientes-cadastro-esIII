using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClientesCrud.Models
{
    public class Cliente : EntidadeDominio
    {
        public Cliente(long? id, string nome, string senha, DateTime dataNascimento, string cpf, string email, Telefone telefone, List<Endereco> enderecosResidencial, List<Endereco> enderecosCobranca, List<Endereco> enderecosEntrega, CartaoCredito cartaoCredito) : base(id)
        {
            this.Nome = nome;
            this.Senha = senha;
            this.DataNascimento = dataNascimento;
            this.Cpf = cpf;
            this.Email = email;
            this.Telefone = telefone;
            this.EnderecosResidencial = enderecosResidencial;
            this.EnderecosCobranca = enderecosCobranca;
            this.EnderecosEntrega = enderecosEntrega;
            this.CartaoCredito = cartaoCredito;
        }
        /// <summary> 
        /// Empty constructor for EF
        public Cliente()
        {

        }
        /// </summary>
        public string Nome { get; set; }
        public string Senha { private get; set; }
        public DateTime DataNascimento { get; set; }
        public string Cpf { get; set; }
        public string Email { get; set; }
        public Telefone Telefone { get; set; }

        public List<Endereco> EnderecosResidencial { get; set; }
        public List<Endereco> EnderecosCobranca { get; set; }
        public List<Endereco> EnderecosEntrega { get; set; }
        public CartaoCredito CartaoCredito { get; set; }
    }
}