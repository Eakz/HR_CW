// https://www.codewars.com/kata/582e0e592029ea10530009ce/train/javascript

function duckDuckGoose(players, goose) {
    return players[(goose-1)%players.length].name
  }