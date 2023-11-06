import axios from 'axios';
import { ICity, ICountry, IState } from '../types/address';

export const addressService = {
  getCountries: async () => {
    const { data } = await axios.get<ICountry[]>(
      'https://servicodados.ibge.gov.br/api/v1/localidades/paises'
    );
    return data;
  },
  getStatesFromCountry: async (countryId: number) => {
    try {
      const { data } = await axios.get<IState[]>(
        `https://servicodados.ibge.gov.br/api/v1/localidades/paises/${countryId}/estados`
      );
      return data;
    } catch {
      return [];
    }
  },
  getStates: async () => {
    const { data } = await axios.get<IState[]>(
      'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
    );
    return data;
  },
  getCitiesFromState: async (stateId: number) => {
    try {
      const { data } = await axios.get<ICity[]>(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${stateId}/municipios`
      );
      return data;
    } catch {
      return [];
    }
  },
  getCities: async () => {
    const { data } = await axios.get<ICity[]>(
      'https://servicodados.ibge.gov.br/api/v1/localidades/municipios'
    );
    return data;
  }
};
