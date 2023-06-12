import axios from "axios";
import { CircuitAdapter } from "../adapters/CircuitAdapter";
import get from 'lodash/get';

const F1_BASE_URL = 'https://ergast.com/api/f1';

const api = {
  getCircuits: async function () {
    const { data } = await axios(`${F1_BASE_URL}/current/circuits.json`);
    const adaptedCircuits = CircuitAdapter.adaptCircuitList(get(data, 'MRData.CircuitTable.Circuits'))

    return adaptedCircuits;
  },
  getCircuit: async function (id: string) {
    const { data } = await axios(`${F1_BASE_URL}/current/circuits/${id}.json`);
    const adaptedCircuit = CircuitAdapter.adaptCircuitItem(get(data, 'MRData.CircuitTable.Circuits[0]'))

    return adaptedCircuit;
  },
}

export default api;