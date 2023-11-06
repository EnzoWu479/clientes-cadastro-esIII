using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClientesCrud.utils
{
    public class PaginatedResponse<T>
    {
        public T[] data { get; set; }
        public int page { get; set; }
        public int totalPage { get; set; }
        public int totalItems { get; set; }

        public PaginatedResponse()
        {

        }

        public PaginatedResponse(T[] data, int page, int totalPage, int totalItems)
        {
            this.data = data;
            this.page = page;
            this.totalPage = totalPage;
            this.totalItems = totalItems;
        }
    }
}