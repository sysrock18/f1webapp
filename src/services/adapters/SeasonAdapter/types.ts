import { Circuit, RawCircuit } from '../CircuitAdapter/types';
import { Constructor, RawConstructor } from '../ConstructorAdapter/types';
import { Driver, RawDriver } from '../DriverAdapter/types';

export type RawSeasonRace = {
  season: string;
  round: string;
  url: string;
  raceName: string;
  date: string;
  time: string;
  Circuit: RawCircuit;
};

export type SeasonRace = {
  url: string;
  round: string;
  raceName: string;
  date: Date;
  circuit: Circuit;
};

export type RawRaceWinner = {
  season: string;
  round: string;
  Results: RawResult[];
};

export type RawResult = {
  Driver: RawDriver;
  Constructor: RawConstructor;
};

export type RaceWinner = {
  season: string;
  round: string;
  driver: Driver;
  constructor: Constructor;
};
