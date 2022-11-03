export const DEFAULT_GRID = 3;
export const PLAYER1_MARK = "O";
export const PLAYER2_MARK = "X";
export const PLAYER1 = 1;
export const PLAYER2 = 2;
export const PLAYER1_LABEL = "player1";
export const PLAYER2_LABEL = "player2";
export const GAME_PLAYER_TO_MARK: { [key: number]: string } = {
    1: PLAYER1_MARK,
    2: PLAYER2_MARK,
};
export const GAME_MARK_TO_PLAYER: { [key: string]: number } = {
    O: PLAYER1,
    X: PLAYER2,
};
export const GRID_SIZE_SELECT_OPTIONS = [
    { label: "3x3", value: 3 },
    { label: "4x4", value: 4 },
    { label: "5x5", value: 5 },
    { label: "6x6", value: 6 },
];
export const GAME_NAME = "tic tac toe";
export const GRID_SIZE_SELECT_LABEL = "select grid size";
export const RESTART = "restart";
export const GAME_DRAW = "game drawn!";
