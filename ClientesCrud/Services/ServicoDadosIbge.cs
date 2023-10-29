using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClientesCrud.Services
{
    public class ServicoDadosIbge
    {

    }

    //     {
    // "id": {
    // "M49": 4,
    // "ISO-ALPHA-2": "AF",
    // "ISO-ALPHA-3": "AFG"
    // },
    // "nome": "Afeganistão",
    // "regiao-intermediaria": null,
    // "sub-regiao": {
    //     "id": {
    //         "M49": 34
    //     },
    // "nome": "Ásia meridional (Sul da Ásia)",
    // "regiao": {
    //         "id": {
    //             "M49": 142
    //         },
    // "nome": "Ásia"
    // }
    // }
    // } 

    public class Id
    {
        public int M49 { get; set; }
        public string ISOALPHA2 { get; set; }
        public string ISOALPHA3 { get; set; }
    }
    public class Regiao
    {
        public Id id { get; set; }
        public string nome { get; set; }
    }
    public class RegiaoIntermediaria
    {
        public Id id { get; set; }
        public string nome { get; set; }
        public Regiao regiao { get; set; }
    }

    public class SubRegiao
    {
        public Id id { get; set; }
        public string nome { get; set; }
        public Regiao regiao { get; set; }
    }

    public class Pais
    {
        public Id id { get; set; }
        public string nome { get; set; }
        public RegiaoIntermediaria regiaoIntermediaria { get; set; }
        public SubRegiao subRegiao { get; set; }

    }
}