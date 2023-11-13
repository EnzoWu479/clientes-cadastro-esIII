using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClientesCrud.Filter
{
    public class PaginationFilter
    {
        public int PageNumber { get; set; }
        public int PageSize { get; set; }

        public PaginationFilter(int _pageNumber, int _pageSize)
        {
            this.PageNumber = Math.Max(_pageNumber, 1);
            this.PageSize = Math.Max(_pageSize, 1);
        }
    }
}