// Generated by https://quicktype.io

export interface ICountry {
  id: ICountryID;
  nome: string;
  'regiao-intermediaria': null;
  'sub-regiao': ISubRegiao;
}

export interface ICountryID {
  M49: number;
  'ISO-ALPHA-2': string;
  'ISO-ALPHA-3': string;
}

export interface ISubRegiao {
  id: ISubRegiaoID;
  nome: string;
  regiao: IRegiao;
}

export interface ISubRegiaoID {
  M49: number;
}

export interface IRegiao {
  id: ISubRegiaoID;
  nome: string;
}
export interface IState {
  id: number;
  sigla: string;
  nome: string;
  regiao: IRegion;
}
export interface IRegion {
  id: number;
  sigla: string;
  nome: string;
}
export interface ICity {
  id: number;
  nome: string;
  microrregiao: IMicrorregiao;
  'regiao-imediata': IRegiaoImediata;
}

export interface IMicrorregiao {
  id: number;
  nome: string;
  mesorregiao: IMesorregiao;
}

export interface IMesorregiao {
  id: number;
  nome: string;
  UF: IUf;
}

export interface IUf {
  id: number;
  sigla: string;
  nome: string;
  regiao: IRegion;
}

export interface IRegiaoImediata {
  id: number;
  nome: string;
  'regiao-intermediaria': IMesorregiao;
}
