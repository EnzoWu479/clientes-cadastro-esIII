using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using ClientesCrud.Context;
using ClientesCrud.Facade;
using ClientesCrud.Models;
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
            try
            {
                _facade.Salvar(cliente);
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
            try
            {
                _facade.Alterar(cliente);
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
        public IActionResult Consultar()
        {
            try
            {
                return Ok(_facade.Consultar(nameof(Cliente)));
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
    }
}