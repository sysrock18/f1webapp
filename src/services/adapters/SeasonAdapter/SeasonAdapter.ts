import { CircuitAdapter } from '../CircuitAdapter';
import { RaceWinner, RawRaceWinner, RawSeasonRace, SeasonRace } from './types';
import isArray from 'lodash/isArray';
import { DriverAdapter } from '../DriverAdapter';
import { ConstructorAdapter } from '../ConstructorAdapter';

export class SeasonAdapter {
  static adaptSeasonRaces(rawSeasonRaces: RawSeasonRace[]): SeasonRace[] {
    const seasonRaces: SeasonRace[] = [];

    if (isArray(rawSeasonRaces)) {
      rawSeasonRaces.forEach((rawSeasonRace) => {
        seasonRaces.push(SeasonAdapter.adaptSeasonRace(rawSeasonRace));
      });
    }

    return seasonRaces;
  }

  static adaptSeasonRace(rawSeasonRace: RawSeasonRace): SeasonRace {
    const { round, raceName, date, Circuit, url } = rawSeasonRace || {};

    return {
      url,
      round,
      raceName,
      date: new Date(date),
      circuit: CircuitAdapter.adaptCircuitItem(Circuit),
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
