export class GameService {
    public static createGrid = (size: number, val = "") => {
        return new Array(size).fill(val).map(() => new Array(size).fill(val));
    };

    public static extractColumn = (grid: string[][], index: number) => {
        return grid.map((x) => x[index]).filter((item) => item);
    };

    public static extractRow = (grid: string[][], index: number) => {
        return grid[index].filter((item) => item);
    };

    public static extractRightDiagonal = (grid: string[][]) => {
        return grid.map((row, index, self) => row[self.length - 1 - index]).filter((item) => item);
    };

    public static extractLeftDiagonal = (grid: string[][]) => {
        return grid.map((row, index) => row[index]).filter((item) => item);
    };

    public static gameStatus = (grid: string[][], player1: string, player2: string) => {
        const combinations = [];
        let winnerMark = "";
        let isdraw = false;
        let checkedCombinations = 0;
        for (let index = 0; index < grid.length; index++) {
            combinations.push(this.extractColumn(grid, index));
            combinations.push(this.extractRow(grid, index));
        }
        combinations.push(this.extractLeftDiagonal(grid));
        combinations.push(this.extractRightDiagonal(grid));
        for (const item of combinations) {
            if (item.length === grid.length) {
                checkedCombinations += 1;
                if (item.includes(player1) && item.includes(player2)) continue;
                else {
                    winnerMark = item.includes(player1) ? player1 : item.includes(player2) ? player2 : "";
                    break;
                }
            }
        }
        isdraw = checkedCombinations === combinations.length ? true : false;
        return { isdraw, winnerMark };
    };
}
