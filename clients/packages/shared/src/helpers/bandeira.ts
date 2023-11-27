import { BandeirasCartao } from '../types/bandeiraCartao';
import { masks } from './masks';

export const detectarBandeira = (numeroCartao: string) => {
  const numero = masks.number(numeroCartao);
  console.log(numero);

  if (/^4[0-9]{12}(?:[0-9]{3})?$/.test(numero)) {
    return BandeirasCartao.VISA;
  } else if (/^5[1-5][0-9]{14}$/.test(numero)) {
    return BandeirasCartao.MASTERCARD;
  } else if (/^3[47][0-9]{13}$/.test(numero)) {
    return BandeirasCartao.AMERICAN_EXPRESS;
  } else if (/^3(?:0[0-5]|[68][0-9])[0-9]{11}$/.test(numero)) {
    return BandeirasCartao.DINERS_CLUB;
  } else if (/^6(?:011|5[0-9]{2})[0-9]{12}$/.test(numero)) {
    return BandeirasCartao.DISCOVER;
  } else if (/^(?:2131|1800|35\d{3})\d{11}$/.test(numero)) {
    return BandeirasCartao.JCB;
  } else {
    return BandeirasCartao.DESCONHECIDA;
  }
};
