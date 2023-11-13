export type IMask = (value: string) => string;
type MaskFunctions = { [K in keyof typeof masksFunctions]: IMask };

const masksFunctions = {
  cpf: (value: string) => {
    if (!value) return value;
    return value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1')
      .slice(0, 14);
  },
  ddd: (value: string) => {
    if (!value) return value;
    return value.replace(/\D/g, '').slice(0, 3);
  },
  telephone: (value: string) => {
    if (!value) return value;
    return value.replace(/\D/g, '').replace(/\d{5}/, '$&-').slice(0, 10);
  },
  cep: (value: string) => {
    if (!value) return value;
    return value
      .replace(/\D/g, '')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .slice(0, 9);
  },
  number: (value: string) => {
    if (!value) return value;
    return value.replace(/\D/g, '');
  }
};
export const masks: MaskFunctions = masksFunctions;
