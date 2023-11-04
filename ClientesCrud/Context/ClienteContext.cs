using Microsoft.EntityFrameworkCore;
using ClientesCrud.Models;

namespace ClientesCrud.Context
{
    public class ClienteContext : DbContext
    {

        public ClienteContext(DbContextOptions<ClienteContext> options) : base(options)
        {
        }

        public DbSet<Cliente> Clientes { get; set; }
    }
}