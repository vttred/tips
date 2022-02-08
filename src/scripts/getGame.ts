/**
 * @exports getGame
 */
function getGame(): Game {
  if (!(game instanceof Game)) {
    throw new Error("Foundry Tips module | Couldn't register modules settings because game is not initialized!");
  }
  return game;
}

export { getGame };
