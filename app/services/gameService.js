class GameService {
  static makeTurn(initialField, colors, row, column) {
    let field = initialField.map((row) => { return [...row] })

    for(var i = column; i < field.length; i++) {
      if (field[row][i] !== 0) {
        field[row][i] = field[row][i] % colors.length + 1
      } else {
        break
      }
    }

    for(var i = column - 1; i >= 0; i--) {
      if (field[row][i] !== 0) {
        field[row][i] = field[row][i] % colors.length + 1
      } else {
        break
      }
    }

    for(var i = row + 1; i < field.length; i++) {
      if (field[i][column] !== 0) {
        field[i][column] = field[i][column] % colors.length + 1
      } else {
        break
      }
    }

    for(var i = row - 1; i >= 0; i--) {
      if (field[i][column] !== 0) {
        field[i][column] = field[i][column] % colors.length + 1
      } else {
        break
      }
    }

    return field
  }

  static undoTurn(initialField, colors, row, column) {
    let field = initialField.map((row) => { return [...row] })

    for(var i = column; i < field.length; i++) {
      if (field[row][i] !== 0) {
        field[row][i] = (field[i][column] - 1) || colors.length
      } else {
        break
      }
    }

    for(var i = column - 1; i >= 0; i--) {
      if (field[row][i] !== 0) {
        field[row][i] = (field[i][column] - 1) || colors.length
      } else {
        break
      }
    }

    for(var i = row + 1; i < field.length; i++) {
      if (field[i][column] !== 0) {
        field[i][column] = (field[i][column] - 1) || colors.length
      } else {
        break
      }
    }

    for(var i = row - 1; i >= 0; i--) {
      if (field[i][column] !== 0) {
        field[i][column] = (field[i][column] - 1) || colors.length
      } else {
        break
      }
    }

    return field
  }

  static isGameSolved(field, goal) {
    for(var i = 0; i < field.length; i++) {
      for(var j = 0; j < field.length; j++) {
        if (field[i][j] == 0) {
          continue
        }

        if (!goal) {
          goal = field[i][j]
          continue
        }

        if (goal != field[i][j]) {
          return false
        }
      }
    }

    return true
  }
}

export default GameService
