import { SeasonAdapter } from '.';
import { CircuitAdapter } from '../CircuitAdapter';
import { ConstructorAdapter } from '../ConstructorAdapter';
import { DriverAdapter } from '../DriverAdapter';
import { RAW_RACES_WINNERS, RAW_SEASON_RACES } from './mock';

describe('SeasonAdapter', () => {
  describe('adaptSeasonRaces', () => {
    it('should return list of season races', () => {
      const seasonRaces = SeasonAdapter.adaptSeasonRaces(RAW_SEASON_RACES);
      expect(seasonRaces).toEqual(
        RAW_SEASON_RACES.map((seasonRace) => ({
          url: seasonRace.url,
          round: seasonRace.round,
          raceName: seasonRace.raceName,
          date: new Date(seasonRace.date),
          circuit: CircuitAdapter.adaptCircuitItem(seasonRace.Circuit),
        }))
      );
    });
  });

  describe('adaptSeasonRace', () => {
    it('should return a season race', () => {
      const seasonRace = SeasonAdapter.adaptSeasonRace(RAW_SEASON_RACES[0]);
      expect(seasonRace).toEqual({
        url: RAW_SEASON_RACES[0].url,
        round: RAW_SEASON_RACES[0].round,
        raceName: RAW_SEASON_RACES[0].raceName,
        date: new Date(RAW_SEASON_RACES[0].date),
        circuit: CircuitAdapter.adaptCircuitItem(RAW_SEASON_RACES[0].Circuit),
      });
    });

    it('should return a season race with a race winner', () => {
      const mockRaceWinner = {
        season: '2023',
        round: '8',
        driver: {
          id: 'max_verstappen',
          url: 'http://en.wikipedia.org/wiki/Max_Verstappen',
          code: 'VER',
          name: 'Max Verstappen',
        },
        constructor: {
          id: 'red_bull',
          url: 'http://en.wikipedia.org/wiki/Red_Bull_Racing',
          name: 'Red Bull',
        },
      };
      const seasonRace = SeasonAdapter.adaptSeasonRace(RAW_SEASON_RACES[0], mockRaceWinner);
      expect(seasonRace).toEqual({
        url: RAW_SEASON_RACES[0].url,
        round: RAW_SEASON_RACES[0].round,
        raceName: RAW_SEASON_RACES[0].raceName,
        date: new Date(RAW_SEASON_RACES[0].date),
        circuit: CircuitAdapter.adaptCircuitItem(RAW_SEASON_RACES[0].Circuit),
        raceWinner: mockRaceWinner,
      });
    });
  });

  describe('adaptRacesWinners', () => {
    it('should return a list of races winners', () => {
      const racesWinners = SeasonAdapter.adaptRacesWinners(RAW_RACES_WINNERS);
      expect(racesWinners).toEqual(
        RAW_RACES_WINNERS.map((raceWinner) => ({
          season: raceWinner.season,
          round: raceWinner.round,
          driver: DriverAdapter.adaptDriver(raceWinner.Results[0].Driver),
          constructor: ConstructorAdapter.adaptConstructor(raceWinner.Results[0].Constructor),
        }))
      );
    });
  });

  describe('adaptRaceWinner', () => {
    it('should return a race winner', () => {
      const raceWinner = SeasonAdapter.adaptRaceWinner(RAW_RACES_WINNERS[0]);
      expect(raceWinner).toEqual({
        season: RAW_RACES_WINNERS[0].season,
        round: RAW_RACES_WINNERS[0].round,
        driver: DriverAdapter.adaptDriver(RAW_RACES_WINNERS[0].Results[0].Driver),
        constructor: ConstructorAdapter.adaptConstructor(RAW_RACES_WINNERS[0].Results[0].Constructor),
      });
    });
  });
});
