import CircuitAdapter from "./services/adapters/CircuitAdapter"
import _ from "lodash"
import fetch from "isomorphic-unfetch"

const BASE_URL = 'https://ergast.com/api/f1';

const api = {
  getCircuits: () => {
    return fetch(`${BASE_URL}/current/circuits.json`)
      .then(res => res.json())
      .then(data => {
        const adaptedCircuits = CircuitAdapter.adaptCircuitList(_.get(data, 'MRData.CircuitTable.Circuits'))
        return adaptedCircuits
      })
  },
  getCircuit: (id) => {
    return fetch(`${BASE_URL}/current/circuits/${id}.json`)
      .then(res => res.json())
      .then(data => {
        const adaptedCircuit = CircuitAdapter.adaptCircuitItem(_.get(data, 'MRData.CircuitTable.Circuits[0]'))
        return adaptedCircuit
      })
  }
}

export default api
