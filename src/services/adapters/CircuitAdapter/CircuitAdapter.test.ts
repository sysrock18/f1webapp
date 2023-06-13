import { CircuitAdapter } from '.';
import { TRACK_IMAGES } from './constants';
import { CIRCUIT_LIST } from './mock';

describe('CircuitAdapter', () => {
  describe('adaptCircuitList', () => {
    it('should return list of circuits', () => {
      const circuits = CircuitAdapter.adaptCircuitList(CIRCUIT_LIST);
      expect(circuits).toEqual(
        CIRCUIT_LIST.map((circuitItem) => ({
          id: circuitItem.circuitId,
          name: circuitItem.circuitName,
          imageUrl: TRACK_IMAGES[circuitItem.circuitId],
          url: circuitItem.url,
        }))
      );
    });
  });

  describe('adaptCircuitItem', () => {
    it('should return a circuit', () => {
      const circuit = CircuitAdapter.adaptCircuitItem(CIRCUIT_LIST[0]);
      expect(circuit).toEqual({
        id: CIRCUIT_LIST[0].circuitId,
        name: CIRCUIT_LIST[0].circuitName,
        imageUrl: TRACK_IMAGES[CIRCUIT_LIST[0].circuitId],
        url: CIRCUIT_LIST[0].url,
      });
    });
  });
});
