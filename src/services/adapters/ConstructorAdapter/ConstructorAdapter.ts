import { Constructor, RawConstructor } from './types';

export class ConstructorAdapter {
  static adaptConstructor(rawConstructor: RawConstructor): Constructor {
    const { url, constructorId, name } = rawConstructor || {};

    return {
      id: constructorId,
      url,
      name,
    };
  }
}
