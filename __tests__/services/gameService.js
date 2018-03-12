import GameService from '../../app/services/gameService';


test("makeTurn", () => {
  let field = [
    [3, 3, 3],
    [3, 3, 3],
    [3, 3, 3]
  ];
  let fieldSize = 3;
  let colors = [1, 2, 3]

  let expectedField = [
    [3, 1, 3],
    [1, 1, 1],
    [3, 1, 3]
  ]

  expect(new GameService(fieldSize, field, colors).makeTurn(1, 1)).toEqual(expectedField);
});

test("undoTurn", () => {
  let field = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1]
  ];
  let fieldSize = 3;
  let colors = [1, 2, 3]

  let expectedField = [
    [1, 3, 1],
    [3, 3, 3],
    [1, 3, 1]
  ]

  expect(new GameService(fieldSize, field, colors).undoTurn(1, 1)).toEqual(expectedField);
});
