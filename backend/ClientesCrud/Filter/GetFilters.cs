using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ClientesCrud.Models;

namespace ClientesCrud.Filter
{
    public class GetFilters
    {
        public PaginationFilter paginationFilter { get; set; }
        public EntidadeDominio entidadeBusca { get; set; }
        public GetFilters(PaginationFilter paginationFilter, EntidadeDominio entidadeBusca)
        {
            this.paginationFilter = paginationFilter;
            this.entidadeBusca = entidadeBusca;
        }

    }
}