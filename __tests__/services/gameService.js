import GameService from '../../app/services/gameService';

describe("makeTurn", () => {
  let field = [
    [3, 3, 3],
    [3, 3, 3],
    [3, 3, 3]
  ];

  let expectedField = [
    [3, 1, 3],
    [1, 1, 1],
    [3, 1, 3]
  ];

  it("should make turn", () => {
    expect(new GameService(3, field, [1, 2, 3]).makeTurn(1, 1).field).toEqual(expectedField);
  });
});

describe("undoTurn", () => {
  let field = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1]
  ];

  let expectedField = [
    [1, 3, 1],
    [3, 3, 3],
    [1, 3, 1]
  ];

  it("should undo turn", () => {
    expect(new GameService(3, field, [1, 2, 3]).undoTurn(1, 1).field).toEqual(expectedField);
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
        expect(new GameService(3, field, [1, 2, 3]).isGameSolved()).toEqual(false);
      });
    });

    describe("game is solved", () => {
      let field = [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1]
      ];

      it("should be truthy", () => {
        expect(new GameService(3, field, [1, 2, 3]).isGameSolved()).toEqual(true);
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
        expect(new GameService(3, field, [1, 2, 3]).isGameSolved(2)).toEqual(false);
      });
    });

    describe("goal is satisfied", () => {
      it("should be truthy", () => {
        expect(new GameService(3, field, [1, 2, 3]).isGameSolved(1)).toEqual(true);
      });
    });
  });
});
