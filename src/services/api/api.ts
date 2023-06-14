import axios from 'axios';
import { CircuitAdapter } from '../adapters/CircuitAdapter';
import get from 'lodash/get';
import { SeasonAdapter } from '../adapters/SeasonAdapter/SeasonAdapter';

export const F1_BASE_URL = 'https://ergast.com/api/f1';

export const api = {
  getCircuits: async function () {
    const { data } = await axios.get(`${F1_BASE_URL}/current/circuits.json`);
    const adaptedCircuits = CircuitAdapter.adaptCircuitList(get(data, 'MRData.CircuitTable.Circuits'));

    return adaptedCircuits;
  },
  getCircuit: async function (id: string) {
    const { data } = await axios.get(`${F1_BASE_URL}/current/circuits/${id}.json`);
    const adaptedCircuit = CircuitAdapter.adaptCircuitItem(get(data, 'MRData.CircuitTable.Circuits[0]'));

    return adaptedCircuit;
  },
  getSeasonRaces: async function () {
    const { data } = await axios.get(`${F1_BASE_URL}/current.json`);
    const adaptedSeasonRaces = SeasonAdapter.adaptSeasonRaces(get(data, 'MRData.RaceTable.Races'));

    return adaptedSeasonRaces;
  },
  getRacesWinners: async function () {
    const { data } = await axios.get(`${F1_BASE_URL}/current/results/1.json`);
    const adaptedRacesWinners = SeasonAdapter.adaptRacesWinners(get(data, 'MRData.RaceTable.Races'));

    return adaptedRacesWinners;
  },
};
