import { Driver, RawDriver } from './types';

export class DriverAdapter {
  static adaptDriver(rawDriver: RawDriver): Driver {
    const { url, driverId, code, givenName, familyName } = rawDriver || {};

    return {
      id: driverId,
      url,
      code,
      name: `${givenName} ${familyName}`,
    };
  }
}
