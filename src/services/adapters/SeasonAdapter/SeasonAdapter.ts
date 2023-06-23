import { CircuitAdapter } from '../CircuitAdapter';
import { RaceWinner, RawRaceWinner, RawSeasonRace, SeasonRace } from './types';
import isArray from 'lodash/isArray';
import { DriverAdapter } from '../DriverAdapter';
import { ConstructorAdapter } from '../ConstructorAdapter';
import { Dictionary } from 'lodash';

export class SeasonAdapter {
  static adaptSeasonRaces(rawSeasonRaces: RawSeasonRace[], indexedRacesWinners?: Dictionary<RaceWinner>): SeasonRace[] {
    const seasonRaces: SeasonRace[] = [];

    if (isArray(rawSeasonRaces)) {
      rawSeasonRaces.forEach((rawSeasonRace) => {
        const { round } = rawSeasonRace || {};
        const raceWinner = indexedRacesWinners ? indexedRacesWinners[round] : undefined;
        seasonRaces.push(SeasonAdapter.adaptSeasonRace(rawSeasonRace, raceWinner));
      });
    }

    return seasonRaces;
  }

  static adaptSeasonRace(rawSeasonRace: RawSeasonRace, raceWinner?: RaceWinner): SeasonRace {
    const { round, raceName, date, Circuit, url } = rawSeasonRace || {};

    return {
      url,
      round,
      raceName,
      date: new Date(date),
      circuit: CircuitAdapter.adaptCircuitItem(Circuit),
      raceWinner,
    };
  }

  static adaptRacesWinners(rawRacesWinners: RawRaceWinner[]): RaceWinner[] {
    const racesWinners: RaceWinner[] = [];

    if (isArray(rawRacesWinners)) {
      rawRacesWinners.forEach((rawRaceWinner) => {
        racesWinners.push(SeasonAdapter.adaptRaceWinner(rawRaceWinner));
      });
    }

    return racesWinners;
  }

  static adaptRaceWinner(rawRaceWinner: RawRaceWinner): RaceWinner {
    const { season, round, Results } = rawRaceWinner || {};

    return {
      season,
      round,
      driver: DriverAdapter.adaptDriver(Results[0].Driver),
      constructor: ConstructorAdapter.adaptConstructor(Results[0].Constructor),
    };
  }
}
