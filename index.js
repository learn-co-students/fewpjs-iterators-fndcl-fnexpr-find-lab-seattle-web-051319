function superbowlWin(record) {
  let winningGame = record.find(game => game.result === "W");
  if (winningGame) {
    return winningGame.year;
  }
}