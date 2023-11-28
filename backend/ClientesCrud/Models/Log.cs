using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClientesCrud.Models
{
    public class Log : EntidadeDominio
    {
        public Log(long? id, Usuario usuarioResponsavel) : base(id)
        {

            DataRegistro = DateTime.Now;
            UsuarioResponsavel = usuarioResponsavel;
        }
        /// <summary> 
        /// Empty constructor for EF
        public Log()
        {

        }
        /// </summary>
        public Usuario UsuarioResponsavel { get; set; }
        public DateTime DataRegistro { get; set; }
    }
}