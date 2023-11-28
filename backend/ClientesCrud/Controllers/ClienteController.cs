using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using ClientesCrud.Context;
using ClientesCrud.DTO;
using ClientesCrud.Facade;
using ClientesCrud.Filter;
using ClientesCrud.Helper;
using ClientesCrud.Models;
using ClientesCrud.Strategy;
using ClientesCrud.utils;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace ClientesCrud.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ClienteController : Controller
    {
        readonly IFacade _facade;
        public ClienteController(ClienteContext context)
        {
            _facade = new Facade.Facade(context);
        }

        [HttpPost]
        public IActionResult Cadastrar([FromBody] Cliente cliente)
        {

            Telefone newTelefone = new(null, cliente.Telefone.Ddd, cliente.Telefone.Numero);

            List<Endereco> enderecosResidencial = new List<Endereco>();
            List<Endereco> enderecosCobranca = new List<Endereco>();
            List<Endereco> enderecosEntrega = new List<Endereco>();
            List<CartaoCredito> cartaoCredito = new List<CartaoCredito>();

            foreach (Endereco endereco in cliente.EnderecosResidencial)
            {
                TipoLogradouro tipoLogradouro = new(endereco.TipoLogradouro.Id, endereco.TipoLogradouro.Nome);
                enderecosResidencial.Add(new Endereco(
                    null,
                    tipoLogradouro,
                    endereco.Logradouro,
                    endereco.Numero,
                    endereco.Observacoes,
                    endereco.Bairro,
                    endereco.Cidade,
                    endereco.Estado,
                    endereco.Pais,
                    endereco.TipoResidencia,
                    endereco.Cep
                ));
            }

            foreach (Endereco endereco in cliente.EnderecosCobranca)
            {
                TipoLogradouro tipoLogradouro = new(endereco.TipoLogradouro.Id, endereco.TipoLogradouro.Nome);
                enderecosCobranca.Add(new Endereco(
                    null,
                    tipoLogradouro,
                    endereco.Logradouro,
                    endereco.Numero,
                    endereco.Observacoes,
                    endereco.Bairro,
                    endereco.Cidade,
                    endereco.Estado,
                    endereco.Pais,
                    endereco.TipoResidencia,
                    endereco.Cep
                ));
            }

            foreach (Endereco endereco in cliente.EnderecosEntrega)
            {
                TipoLogradouro tipoLogradouro = new(endereco.TipoLogradouro.Id, endereco.TipoLogradouro.Nome);
                enderecosEntrega.Add(new Endereco(
                    null,
                    tipoLogradouro,
                    endereco.Logradouro,
                    endereco.Numero,
                    endereco.Observacoes,
                    endereco.Bairro,
                    endereco.Cidade,
                    endereco.Estado,
                    endereco.Pais,
                    endereco.TipoResidencia,
                    endereco.Cep
                ));
            }

            foreach (CartaoCredito cartao in cliente.CartaoCredito)
            {
                cartaoCredito.Add(new CartaoCredito(null, cartao.Numero, cartao.NomeTitular, cartao.Validade, cartao.Cvv, cartao.Bandeira, cartao.Preferencial));
            }

            string data = cliente.DataNascimento.ToString();

            Cliente newCliente = new(null, cliente.Nome, cliente.Senha, cliente.DataNascimento, cliente.Cpf, cliente.Email, newTelefone, enderecosResidencial, enderecosCobranca, enderecosEntrega, cartaoCredito, cliente.Status, cliente.Genero);
            try
            {
                Console.WriteLine("passei");
                _facade.Salvar(newCliente);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }

        }
        [HttpPatch("{id}")]
        public IActionResult Alterar(long id, [FromBody] ClienteDTO cliente)
        {
            try
            {
                Cliente cliente1 = (Cliente?)_facade.Consultar(id, typeof(Cliente).Name) ?? throw new Exception("Cliente não encontrado");

                cliente1.Nome = cliente.Nome;
                if (cliente1.DataNascimento != null)
                {

                    cliente1.DataNascimento = (DateOnly)cliente.DataNascimento;
                }
                cliente1.Cpf = cliente.Cpf;
                cliente1.Email = cliente.Email;
                cliente1.Telefone.Ddd = cliente.Telefone.Ddd;
                cliente1.Telefone.Numero = cliente.Telefone.Numero;
                if (cliente1.Status != null)
                {
                    cliente1.Status = (Status)cliente.Status;
                }
                if (cliente1.Genero != null)
                {
                    cliente1.Genero = (Generos)cliente.Genero;
                }


                _facade.Alterar(cliente1);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }

        }
        [HttpPatch("cartao/{id}")]
        public IActionResult AlterarCartoes(long id, [FromBody] ClienteDTO cliente)
        {
            try
            {
                Cliente cliente1 = (Cliente?)_facade.Consultar(id, typeof(Cliente).Name) ?? throw new Exception("Cliente não encontrado");

                List<CartaoCredito> cartaoCredito = new List<CartaoCredito>();

                foreach (CartaoCredito cartao in cliente.CartaoCredito)
                {
                    cartaoCredito.Add(new CartaoCredito(cartao.Id, cartao.Numero, cartao.NomeTitular, cartao.Validade, cartao.Cvv, cartao.Bandeira, cartao.Preferencial));
                }

                cliente1.CartaoCredito = cartaoCredito;


                _facade.Alterar(cliente1);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }

        }
        [HttpPatch("enderecos/{id}")]
        public IActionResult AlterarEnderecos(long id, [FromBody] ClienteDTO cliente)
        {
            try
            {
                Cliente cliente1 = (Cliente?)_facade.Consultar(id, typeof(Cliente).Name) ?? throw new Exception("Cliente não encontrado");

                List<Endereco> enderecosResidencial = new List<Endereco>();
                List<Endereco> enderecosCobranca = new List<Endereco>();
                List<Endereco> enderecosEntrega = new List<Endereco>();

                foreach (Endereco endereco in cliente.EnderecosResidencial)
                {
                    TipoLogradouro tipoLogradouro = new(endereco.TipoLogradouro.Id, endereco.TipoLogradouro.Nome);
                    enderecosResidencial.Add(new Endereco(
                        endereco.Id,
                        tipoLogradouro,
                        endereco.Logradouro,
                        endereco.Numero,
                        endereco.Observacoes,
                        endereco.Bairro,
                        endereco.Cidade,
                        endereco.Estado,
                        endereco.Pais,
                        endereco.TipoResidencia,
                        endereco.Cep
                    ));
                }

                foreach (Endereco endereco in cliente.EnderecosCobranca)
                {
                    TipoLogradouro tipoLogradouro = new(endereco.TipoLogradouro.Id, endereco.TipoLogradouro.Nome);
                    enderecosCobranca.Add(new Endereco(
                        endereco.Id,
                        tipoLogradouro,
                        endereco.Logradouro,
                        endereco.Numero,
                        endereco.Observacoes,
                        endereco.Bairro,
                        endereco.Cidade,
                        endereco.Estado,
                        endereco.Pais,
                        endereco.TipoResidencia,
                        endereco.Cep
                    ));
                }

                foreach (Endereco endereco in cliente.EnderecosEntrega)
                {
                    TipoLogradouro tipoLogradouro = new(endereco.TipoLogradouro.Id, endereco.TipoLogradouro.Nome);
                    enderecosEntrega.Add(new Endereco(
                        endereco.Id,
                        tipoLogradouro,
                        endereco.Logradouro,
                        endereco.Numero,
                        endereco.Observacoes,
                        endereco.Bairro,
                        endereco.Cidade,
                        endereco.Estado,
                        endereco.Pais,
                        endereco.TipoResidencia,
                        endereco.Cep
                    ));
                }

                cliente1.EnderecosResidencial = enderecosResidencial;
                cliente1.EnderecosCobranca = enderecosCobranca;
                cliente1.EnderecosEntrega = enderecosEntrega;


                _facade.Alterar(cliente1);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }

        }
        [HttpPatch("status/{id}")]
        public IActionResult AtualizarStatus(long id, [FromBody] StatusToggleBody statusToggleBody)
        {
            try
            {
                Cliente? cliente1 = (Cliente?)_facade.Consultar(id, typeof(Cliente).Name) ?? throw new Exception("Cliente não encontrado");
                cliente1.Status = statusToggleBody.Status;
                _facade.Alterar(cliente1);
                return Ok();
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                return BadRequest(e.Message);
            }
        }

        [HttpGet]
        public IActionResult Consultar(int page = 1, int limit = 10, string? nome = null, int? status = null, string? email = null, string? dataNascimento = null, string? cpf = null, string? telefone = null, int? genero = null)
        {
            PaginationFilter pagination = new(page, limit);
            ClienteDTO cliente = new();
            cliente.Nome = nome;
            cliente.Status = status != null ? (Status?)Enum.ToObject(typeof(Status), status ?? 0) : null;
            cliente.Email = email;
            cliente.DataNascimento = dataNascimento != null ? DateOnly.Parse(dataNascimento) : null;
            cliente.Cpf = cpf;
            cliente.Telefone = new Telefone();
            cliente.Telefone.Numero = telefone;
            cliente.Genero = genero != null ? (Generos)Enum.ToObject(typeof(Generos), genero ?? 0) : null;

            GetFilters filters = new(pagination, cliente);
            try
            {
                (Cliente[], int) clientes = ((Cliente[], int))_facade.Consultar(nameof(Cliente), filters);

                int skip = (int)(page - 1) * (int)limit;
                int take = (int)limit;
                int total = clientes.Item2;
                int totalPage = (int)Math.Ceiling((double)total / (double)limit);

                return Ok(new PaginatedResponse<Cliente>(clientes.Item1, page, totalPage, total));
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }

        }
        [HttpGet("{id}")]
        public IActionResult Consultar(long id)
        {
            try
            {
                return Ok((Cliente?)_facade.Consultar(id, typeof(Cliente).Name)) ?? throw new Exception("Cliente não encontrado");
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
        [HttpPatch("senha/{id}")]
        public IActionResult AlterarSenha(long id, [FromBody] PasswordChangeBody passwordChangeBody)
        {
            try
            {
                Cliente cliente = (Cliente?)_facade.Consultar(id, typeof(Cliente).Name) ?? throw new Exception("Cliente não encontrado");
                cliente.Senha = passwordChangeBody.NewPassword;
                // if (EncriptadorSenha.Validar(passwordChangeBody.NewPassword, cliente.Senha))
                // {
                //     throw new Exception("A nova senha não pode ser igual a antiga");
                // }
                // Console.WriteLine("Passei 2");
                // if (!EncriptadorSenha.Validar(passwordChangeBody.OldPassword, cliente.Senha))
                // {
                //     throw new Exception("Senha antiga incorreta");
                // }
                Console.WriteLine("Passei 3");
                Console.WriteLine(cliente.Senha);
                SenhaValidator senhaValidator = new();
                string? erro = senhaValidator.Processar(cliente);
                if (erro != null)
                {
                    throw new Exception(erro);
                }
                Console.WriteLine(erro);
                cliente.Senha = EncriptadorSenha.Encriptar(passwordChangeBody.NewPassword);
                _facade.Alterar(cliente);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpOptions]
        public IActionResult Options()
        {
            return Ok();
        }
    }
}