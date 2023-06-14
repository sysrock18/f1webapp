export const RAW_RACES_WINNERS = [
  {
    season: '2023',
    round: '1',
    url: 'https://en.wikipedia.org/wiki/2023_Bahrain_Grand_Prix',
    raceName: 'Bahrain Grand Prix',
    Circuit: {
      circuitId: 'bahrain',
      url: 'http://en.wikipedia.org/wiki/Bahrain_International_Circuit',
      circuitName: 'Bahrain International Circuit',
      Location: {
        lat: '26.0325',
        long: '50.5106',
        locality: 'Sakhir',
        country: 'Bahrain',
      },
    },
    date: '2023-03-05',
    time: '15:00:00Z',
    Results: [
      {
        number: '1',
        position: '1',
        positionText: '1',
        points: '25',
        Driver: {
          driverId: 'max_verstappen',
          permanentNumber: '33',
          code: 'VER',
          url: 'http://en.wikipedia.org/wiki/Max_Verstappen',
          givenName: 'Max',
          familyName: 'Verstappen',
          dateOfBirth: '1997-09-30',
          nationality: 'Dutch',
        },
        Constructor: {
          constructorId: 'red_bull',
          url: 'http://en.wikipedia.org/wiki/Red_Bull_Racing',
          name: 'Red Bull',
          nationality: 'Austrian',
        },
        grid: '1',
        laps: '57',
        status: 'Finished',
        Time: {
          millis: '5636736',
          time: '1:33:56.736',
        },
        FastestLap: {
          rank: '6',
          lap: '44',
          Time: {
            time: '1:36.236',
          },
          AverageSpeed: {
            units: 'kph',
            speed: '202.452',
          },
        },
      },
    ],
  },
  {
    season: '2023',
    round: '2',
    url: 'https://en.wikipedia.org/wiki/2023_Saudi_Arabian_Grand_Prix',
    raceName: 'Saudi Arabian Grand Prix',
    Circuit: {
      circuitId: 'jeddah',
      url: 'http://en.wikipedia.org/wiki/Jeddah_Street_Circuit',
      circuitName: 'Jeddah Corniche Circuit',
      Location: {
        lat: '21.6319',
        long: '39.1044',
        locality: 'Jeddah',
        country: 'Saudi Arabia',
      },
    },
    date: '2023-03-19',
    time: '17:00:00Z',
    Results: [
      {
        number: '11',
        position: '1',
        positionText: '1',
        points: '25',
        Driver: {
          driverId: 'perez',
          permanentNumber: '11',
          code: 'PER',
          url: 'http://en.wikipedia.org/wiki/Sergio_P%C3%A9rez',
          givenName: 'Sergio',
          familyName: 'Pérez',
          dateOfBirth: '1990-01-26',
          nationality: 'Mexican',
        },
        Constructor: {
          constructorId: 'red_bull',
          url: 'http://en.wikipedia.org/wiki/Red_Bull_Racing',
          name: 'Red Bull',
          nationality: 'Austrian',
        },
        grid: '1',
        laps: '50',
        status: 'Finished',
        Time: {
          millis: '4874894',
          time: '1:21:14.894',
        },
        FastestLap: {
          rank: '2',
          lap: '38',
          Time: {
            time: '1:32.188',
          },
          AverageSpeed: {
            units: 'kph',
            speed: '241.098',
          },
        },
      },
    ],
  },
];

export const RAW_SEASON_RACES = [
  {
    season: '2023',
    round: '1',
    url: 'https://en.wikipedia.org/wiki/2023_Bahrain_Grand_Prix',
    raceName: 'Bahrain Grand Prix',
    Circuit: {
      circuitId: 'bahrain',
      url: 'http://en.wikipedia.org/wiki/Bahrain_International_Circuit',
      circuitName: 'Bahrain International Circuit',
      Location: {
        lat: '26.0325',
        long: '50.5106',
        locality: 'Sakhir',
        country: 'Bahrain',
      },
    },
    date: '2023-03-05',
    time: '15:00:00Z',
    FirstPractice: {
      date: '2023-03-03',
      time: '11:30:00Z',
    },
    SecondPractice: {
      date: '2023-03-03',
      time: '15:00:00Z',
    },
    ThirdPractice: {
      date: '2023-03-04',
      time: '11:30:00Z',
    },
    Qualifying: {
      date: '2023-03-04',
      time: '15:00:00Z',
    },
  },
  {
    season: '2023',
    round: '2',
    url: 'https://en.wikipedia.org/wiki/2023_Saudi_Arabian_Grand_Prix',
    raceName: 'Saudi Arabian Grand Prix',
    Circuit: {
      circuitId: 'jeddah',
      url: 'http://en.wikipedia.org/wiki/Jeddah_Street_Circuit',
      circuitName: 'Jeddah Corniche Circuit',
      Location: {
        lat: '21.6319',
        long: '39.1044',
        locality: 'Jeddah',
        country: 'Saudi Arabia',
      },
    },
    date: '2023-03-19',
    time: '17:00:00Z',
    FirstPractice: {
      date: '2023-03-17',
      time: '13:30:00Z',
    },
    SecondPractice: {
      date: '2023-03-17',
      time: '17:00:00Z',
    },
    ThirdPractice: {
      date: '2023-03-18',
      time: '13:30:00Z',
    },
    Qualifying: {
      date: '2023-03-18',
      time: '17:00:00Z',
    },
  },
];
