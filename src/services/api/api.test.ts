import axios from 'axios';
import { api } from '.';
import { F1_BASE_URL } from './api';

jest.mock('axios');

describe('api', () => {
  describe('getCircuits', () => {
    beforeEach(() => {
      jest.resetAllMocks();
      (axios.get as jest.Mock).mockReturnValue({ data: {} });
    });

    it('should call axios with correct url', async () => {
      await api.getCircuits();
      expect(axios.get).toHaveBeenCalledWith(`${F1_BASE_URL}/current/circuits.json`);
    });
  });

  describe('getCircuit', () => {
    it('should call axios with correct url', async () => {
      const mockCircuitId = 'monaco';
      await api.getCircuit(mockCircuitId);
      expect(axios.get).toHaveBeenCalledWith(`${F1_BASE_URL}/current/circuits/${mockCircuitId}.json`);
    });
  });
});
