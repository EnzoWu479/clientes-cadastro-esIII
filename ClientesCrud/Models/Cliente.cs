using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClientesCrud.Models
{
    public class Cliente : Usuario
    {
        public Cliente(long? id, string nome, string senha, DateOnly dataNascimento, string cpf, string email, Telefone telefone, List<Endereco> enderecosResidencial, List<Endereco> enderecosCobranca, List<Endereco> enderecosEntrega, List<CartaoCredito> cartaoCredito, Status status, Generos genero) : base(id, nome, senha, email, status)
        {
            this.DataNascimento = dataNascimento;
            this.Cpf = cpf;
            this.Telefone = telefone;
            this.EnderecosResidencial = enderecosResidencial;
            this.EnderecosCobranca = enderecosCobranca;
            this.EnderecosEntrega = enderecosEntrega;
            this.CartaoCredito = cartaoCredito;
            this.Genero = genero;
        }
        /// <summary> 
        /// Empty constructor for EF
        public Cliente()
        {

        }
        /// </summary> 
        public DateOnly DataNascimento { get; set; }
        public string Cpf { get; set; }
        public Telefone Telefone { get; set; }
        public Generos Genero { get; set; }
        public List<Endereco> EnderecosResidencial { get; set; }
        public List<Endereco> EnderecosCobranca { get; set; }
        public List<Endereco> EnderecosEntrega { get; set; }
        public List<CartaoCredito> CartaoCredito { get; set; }

        
    }
}