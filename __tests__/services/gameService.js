import GameService from '../../app/services/gameService';

describe("makeTurn", () => {
  let field = [
    [3, 3, 3],
    [3, 3, 3],
    [3, 3, 3]
  ];

  let expectedField = [
    [1, 1, 1],
    [3, 3, 1],
    [3, 3, 1]
  ];

  it("should make turn", () => {
    expect(GameService.makeTurn(field, [1, 2, 3], 0, 2)).toEqual(expectedField);
  });
});

describe("undoTurn", () => {
  let field = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1]
  ];

  let expectedField = [
    [3, 3, 3],
    [1, 1, 3],
    [1, 1, 3]
  ];

  it("should undo turn", () => {
    expect(GameService.undoTurn(field, [1, 2, 3], 0, 2)).toEqual(expectedField);
  });
});

describe("isGameSolved", () => {
  describe("without goal", () => {
    describe("game is not solved", () => {
      let field = [
        [1, 1, 1],
        [1, 2, 1],
        [1, 1, 1]
      ];

      it("should be falsey", () => {
        expect(GameService.isGameSolved(field)).toEqual(false);
      });
    });

    describe("game is solved", () => {
      let field = [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1]
      ];

      it("should be truthy", () => {
        expect(GameService.isGameSolved(field)).toEqual(true);
      });
    });
  });

  describe("with goal", () => {
    let field = [
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1]
    ];

    describe("goal is not satisfied", () => {
      it("should be falsey", () => {
        expect(GameService.isGameSolved(field, 2)).toEqual(false);
      });
    });

    describe("goal is satisfied", () => {
      it("should be truthy", () => {
        expect(GameService.isGameSolved(field, 1)).toEqual(true);
      });
    });
  });
});
