using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClientesCrud.Models
{
    public class Cliente : EntidadeDominio
    {
        public Cliente(string _nome, string _senha, DateTime _dataNascimento, string _cpf, string _email, Telefone _telefone, List<Endereco> _enderecosResidencial, List<Endereco> _enderecosCobranca, List<Endereco> _enderecosEntrega, CartaoCredito _cartaoCredito)
        {
            this.Nome = _nome;
            this.Senha = _senha;
            this.DataNascimento = _dataNascimento;
            this.Cpf = _cpf;
            this.Email = _email;
            this.Telefone = _telefone;
            this.EnderecosResidencial = _enderecosResidencial;
            this.EnderecosCobranca = _enderecosCobranca;
            this.EnderecosEntrega = _enderecosEntrega;
            this.CartaoCredito = _cartaoCredito;
        }
        public string Nome { get; set; }
        public string Senha { get; set; }
        // DataNascimento
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