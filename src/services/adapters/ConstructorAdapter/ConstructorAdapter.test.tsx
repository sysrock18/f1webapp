import { ConstructorAdapter } from './ConstructorAdapter';
import { RAW_CONSTRUCTOR } from './mock';

describe('ConstructorAdapter', () => {
  describe('adaptConstructor', () => {
    it('should return an adapted constructor', () => {
      const constructor = ConstructorAdapter.adaptConstructor(RAW_CONSTRUCTOR);
      expect(constructor).toEqual({
        id: RAW_CONSTRUCTOR.constructorId,
        url: RAW_CONSTRUCTOR.url,
        name: RAW_CONSTRUCTOR.name,
      });
    });
  });
});
