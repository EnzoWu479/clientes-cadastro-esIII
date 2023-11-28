using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ClientesCrud.Models;

namespace ClientesCrud.DTO
{
    public class ClienteDTO : EntidadeDominio
    {
        public string? Nome { get; set; }
        public Status? Status { get; set; }
        public string? Senha { get; set; }
        public string? Email { get; set; }
        public DateOnly? DataNascimento { get; set; }
        public string? Cpf { get; set; }
        public Telefone? Telefone { get; set; }
        public Generos? Genero { get; set; }
        public List<Endereco>? EnderecosResidencial { get; set; }
        public List<Endereco>? EnderecosCobranca { get; set; }
        public List<Endereco>? EnderecosEntrega { get; set; }
        public List<CartaoCredito>? CartaoCredito { get; set; }
    }
}