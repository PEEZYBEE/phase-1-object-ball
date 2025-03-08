function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1,
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7,
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15,
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5,
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1,
          },
        },
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2,
          },
          "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10,
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5,
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0,
          },
          "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12,
          },
        },
      },
    };
  }

  function numPointsScored(playerName) {
    let game = gameObject();
    for (let team in game) {
      let players = game[team].players;
      if (players[playerName]) {
        return players[playerName].points;
      }
    }
  }

  function shoeSize(playerName) {
    let game = gameObject();
    for (let team in game) {
      let players = game[team].players;
      if (players[playerName]) {
        return players[playerName].shoe;
      }
    }
  }

  function teamColors(teamName) {
    let game = gameObject();
    for (let team in game) {
      if (game[team].teamName === teamName) {
        return game[team].colors;
      }
    }
  }

  
  function teamNames() {
    let game = gameObject();
    return [game.home.teamName, game.away.teamName];
  }

  function playerNumbers(teamName) {
    let game = gameObject();
    let numbers = [];
    for (let team in game) {
      if (game[team].teamName === teamName) {
        let players = game[team].players;
        for (let player in players) {
          numbers.push(players[player].number);
        }
      }
    }
    return numbers;
  }

  function playerStats(playerName) {
    let game = gameObject();
    for (let team in game) {
      let players = game[team].players;
      if (players[playerName]) {
        return players[playerName];
      }
    }
  }

  function bigShoeRebounds() {
    let game = gameObject();
    let largestShoe = 0;
    let playerWithLargestShoe;
    
    for (let team in game) {
      let players = game[team].players;
      for (let player in players) {
        if (players[player].shoe > largestShoe) {
          largestShoe = players[player].shoe;
          playerWithLargestShoe = player;
        }
      }
    }
  
    return game.home.players[playerWithLargestShoe].rebounds || game.away.players[playerWithLargestShoe].rebounds;
  }

  function mostPointsScored() {
    let game = gameObject();
    let maxPoints = 0;
    let playerWithMostPoints;
    
    for (let team in game) {
      let players = game[team].players;
      for (let player in players) {
        if (players[player].points > maxPoints) {
          maxPoints = players[player].points;
          playerWithMostPoints = player;
        }
      }
    }
  
    return playerWithMostPoints;
  }

  function winningTeam() {
    let game = gameObject();
    let homePoints = 0;
    let awayPoints = 0;
  
    for (let player in game.home.players) {
      homePoints += game.home.players[player].points;
    }
  
    for (let player in game.away.players) {
      awayPoints += game.away.players[player].points;
    }
  
    return homePoints > awayPoints ? game.home.teamName : game.away.teamName;
  }

  