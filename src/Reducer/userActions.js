export const playerActions = {
  SET_USER: "SET_USER",
};

export const setUser = (user) => ({
  type: playerActions.SET_USER,
  player,
});