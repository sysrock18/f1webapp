import { DriverAdapter } from './DriverAdapter';
import { RAW_DRIVER } from './mock';

describe('DriverAdapter', () => {
  describe('adaptDriver', () => {
    it('should return an adapted driver', () => {
      const constructor = DriverAdapter.adaptDriver(RAW_DRIVER);
      expect(constructor).toEqual({
        id: RAW_DRIVER.driverId,
        code: RAW_DRIVER.code,
        url: RAW_DRIVER.url,
        name: `${RAW_DRIVER.givenName} ${RAW_DRIVER.familyName}`,
      });
    });
  });
});
