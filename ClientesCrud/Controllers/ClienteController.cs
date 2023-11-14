using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using ClientesCrud.Context;
using ClientesCrud.Facade;
using ClientesCrud.Filter;
using ClientesCrud.Models;
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
        public IActionResult Cadastrar(Cliente cliente)
        {

            Telefone newTelefone = new(null, cliente.Telefone.Ddd, cliente.Telefone.Numero);

            List<Endereco> enderecosResidencial = new List<Endereco>();
            List<Endereco> enderecosCobranca = new List<Endereco>();
            List<Endereco> enderecosEntrega = new List<Endereco>();
            List<CartaoCredito> cartaoCredito = new List<CartaoCredito>();

            foreach (Endereco endereco in cliente.EnderecosResidencial)
            {
                enderecosResidencial.Add(new Endereco(
                    null,
                    endereco.TipoLogradouro,
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
                enderecosCobranca.Add(new Endereco(
                    null,
                    endereco.TipoLogradouro,
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
                enderecosEntrega.Add(new Endereco(
                    null,
                    endereco.TipoLogradouro,
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



            Cliente newCliente = new(null, cliente.Nome, cliente.Senha, new DateTime(cliente.DataNascimento.Ticks), cliente.Cpf, cliente.Email, newTelefone, enderecosResidencial, enderecosCobranca, enderecosEntrega, cartaoCredito);
            try
            {
                _facade.Salvar(newCliente);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }

        }
        [HttpPut]
        public IActionResult Alterar(Cliente cliente)
        {
            Telefone newTelefone = new(null, cliente.Telefone.Ddd, cliente.Telefone.Numero);

            List<Endereco> enderecosResidencial = new List<Endereco>();
            List<Endereco> enderecosCobranca = new List<Endereco>();
            List<Endereco> enderecosEntrega = new List<Endereco>();
            List<CartaoCredito> cartaoCredito = new List<CartaoCredito>();

            foreach (Endereco endereco in cliente.EnderecosResidencial)
            {
                enderecosResidencial.Add(new Endereco(
                    null,
                    endereco.TipoLogradouro,
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
                enderecosCobranca.Add(new Endereco(
                    null,
                    endereco.TipoLogradouro,
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
                enderecosEntrega.Add(new Endereco(
                    null,
                    endereco.TipoLogradouro,
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



            Cliente newCliente = new(null, cliente.Nome, cliente.Senha, cliente.DataNascimento, cliente.Cpf, cliente.Email, newTelefone, enderecosResidencial, enderecosCobranca, enderecosEntrega, cartaoCredito);
            try
            {
                _facade.Alterar(newCliente);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }

        }
        [HttpDelete("{id}")]
        public IActionResult Excluir(long id)
        {
            try
            {
                _facade.Excluir(id);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
        [HttpGet]
        public IActionResult Consultar(int page = 1, int limit = 10, string search = null)
        {
            PaginationFilter pagination = new(page, limit);
            try
            {
                Cliente[] clientes = (Cliente[])_facade.Consultar(nameof(Cliente), pagination);

                if (search != null)
                {
                    clientes = clientes.Where(c => c.Nome.Contains(search)).ToArray();
                }

                int skip = (int)(page - 1) * (int)limit;
                int take = (int)limit;
                int total = clientes.Length;
                int totalPage = (int)Math.Ceiling((double)total / (double)limit);
                clientes = clientes.Skip(skip).Take(take).ToArray();

                return Ok(new PaginatedResponse<Cliente>(clientes, page, totalPage, total));
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
                return Ok(_facade.Consultar(id, nameof(Cliente)));
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