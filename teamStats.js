const team = {
  _players: [
    {
      firstName: "Pablo",
      lastName: "Sanchez",
      age: 18,
    },
    {
      firstName: "Ismail",
      lastName: "Kemmoune",
      age: 25,
    },
    {
      firstName: "Ronaldo",
      lastName: "Popola",
      age: 24,
    },
  ],
  _games: [
    {
      opponent: "Broncos",
      teamPoints: 35,
      opponentPoints: 27,
    },
    {
      opponent: "Raja",
      teamPoints: 42,
      opponentPoints: 40,
    },
    {
      opponent: "Widad",
      teamPoints: 40,
      opponentPoints: 51,
    },
  ],
  get players() {
    this._players.forEach((player) => {
      const { firstName, lastName, age } = player;
      console.log(`Player full name: ${firstName} ${lastName} -- age: ${age}`);
    });
  },
  get games() {
    this._games.forEach((game) => {
      const { opponent, teamPoints, opponentPoints } = game;
      console.log(
        `The game was VS ${opponent} -- Team score: ${teamPoints} - Opponent score: ${opponentPoints}`
      );
    });
  },
  addPlayer(firstName, lastName, age) {
    const player = {
      firstName,
      lastName,
      age,
    };
    this._players.push(player);
  },
  addGame(opponent, teamPoints, opponentPoints) {
    const game = {
      opponent,
      teamPoints,
      opponentPoints,
    };
    this._games.push(game);
  },
};

// console.log(team.players)
team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs", "Bunny", 76);
team.addGame("Reyal maydi3", 90, 2);
team.players;
team.games;
