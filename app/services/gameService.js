class GameService {
  constructor(fieldSize, field, colors) {
    this.field = field
    this.colors = colors
    this.fieldSize = fieldSize
  }

  makeTurn(row, column) {
    for(var i = column; i < this.fieldSize; i++) {
      if (this.field[row][i] !== 0) {
        this.field[row][i] = this.field[row][i] % this.colors.length + 1;
      } else {
        break;
      }
    }

    for(var i = column - 1; i >= 0; i--) {
      if (this.field[row][i] !== 0) {
        this.field[row][i] = this.field[row][i] % this.colors.length + 1;
      } else {
        break;
      }
    }

    for(var i = row + 1; i < this.fieldSize; i++) {
      if (this.field[i][column] !== 0) {
        this.field[i][column] = this.field[i][column] % this.colors.length + 1;
      } else {
        break;
      }
    }

    for(var i = row - 1; i >= 0; i--) {
      if (this.field[i][column] !== 0) {
        this.field[i][column] = this.field[i][column] % this.colors.length + 1;
      } else {
        break;
      }
    }

    return this;
  }

  undoTurn(row, column) {
    for(var i = column; i < this.fieldSize; i++) {
      if (this.field[row][i] !== 0) {
        this.field[row][i] = (this.field[i][column] - 1) || this.colors.length;
      } else {
        break;
      }
    }

    for(var i = column - 1; i >= 0; i--) {
      if (this.field[row][i] !== 0) {
        this.field[row][i] = (this.field[i][column] - 1) || this.colors.length;
      } else {
        break;
      }
    }

    for(var i = row + 1; i < this.fieldSize; i++) {
      if (this.field[i][column] !== 0) {
        this.field[i][column] = (this.field[i][column] - 1) || this.colors.length;
      } else {
        break;
      }
    }

    for(var i = row - 1; i >= 0; i--) {
      if (this.field[i][column] !== 0) {
        this.field[i][column] = (this.field[i][column] - 1) || this.colors.length;
      } else {
        break;
      }
    }

    return this;
  }

  isGameSolved(goal) {
    for(var i = 0; i < this.fieldSize; i++) {
      for(var j = 0; j < this.fieldSize; j++) {
        if (this.field[i][j] == 0) {
          continue;
        }

        if (!goal) {
          goal = this.field[i][j]
          continue
        }

        if (goal != this.field[i][j]) {
          return false
        }
      }
    }

    return true
  }
}

export default GameService;
