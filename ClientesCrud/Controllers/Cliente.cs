using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using ClientesCrud.Facade;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace ClientesCrud.Controllers
{
    [Route("[controller]")]
    public class Cliente : Controller
    {
        readonly IFacade _facade;
        public Cliente()
        {
            _facade = new Facade.Facade();
        }

        [HttpPost]
        [Route("Cadastrar")]
        public IActionResult Cadastrar(Cliente cliente) {

        }
        [HttpPut]
        public IActionResult Alterar(Cliente cliente) {

        }
        [HttpDelete("{id}")]
        public IActionResult Excluir(string id) {


        }
        [HttpGet]
        public IActionResult Consultar(Cliente cliente) {

        }
        [HttpGet("{id}")]
        public IActionResult Consultar(string id) {

        }
    }
}