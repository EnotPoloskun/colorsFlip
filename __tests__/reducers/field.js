import deepFreeze from 'deep-freeze'
import reducer from 'ColorsFlip/app/reducers/field'
import {
  MAKE_TURN,
  UNDO_TURN,
  RESTART,
  HIGHLIGHT,
  DISABLE_USER_EVENTS
} from '../../app/actions/field'

describe('MAKE_TURN action', () => {
  const action = {
    type: MAKE_TURN,
    row: 1,
    column: 1,
  }

  it('should handle MAKE_TURN', () => {
    const initialState = {
      colors: [1, 2, 3],
      field: [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
      ],
      isGameSolved: false,
      history: []
    }

    let state = reducer(deepFreeze(initialState), action)

    expect(state).toEqual({
      ...initialState,
      field: [
        [1, 2, 1],
        [2, 2, 2],
        [1, 2, 1],
      ],
      history: [{row: 1, column: 1}]
    })
  })

  it('should handle MAKE_TURN and solve game', () => {
    const initialState = {
      colors: [1, 2, 3],
      field: [
        [1, 3, 1],
        [3, 3, 3],
        [1, 3, 1]
      ],
      isGameSolved: false,
      history: []
    }

    let state = reducer(deepFreeze(initialState), action)

    expect(state).toEqual({
      ...initialState,
      field: [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
      ],
      isGameSolved: true,
      history: [{row: 1, column: 1}]
    })
  })
})

describe('UNDO_TURN action', () => {
  it('should handle UNDO_TURN', () => {
    const action = {
      type: UNDO_TURN,
    }

    const initialState = {
      colors: [1, 2, 3],
      field: [
        [1, 3, 1],
        [3, 3, 3],
        [1, 3, 1]
      ],
      history: [{row: 1, column: 1}]
    }

    let state = reducer(deepFreeze(initialState), action)

    expect(state).toEqual({
      ...initialState,
      field: [
        [1, 2, 1],
        [2, 2, 2],
        [1, 2, 1],
      ],
      history: []
    })
  })
})

describe('RESTART action', () => {
  it('should handle UNDO_TURN', () => {
    const action = {
      type: RESTART,
    }

    const initialState = {
      initialField: [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1]
      ],
      colors: [1, 2, 3],
      field: [
        [1, 3, 1],
        [3, 3, 3],
        [1, 3, 1]
      ],
      history: [{row: 1, column: 1}]
    }

    let state = reducer(deepFreeze(initialState), action)

    expect(state).toEqual({
      ...initialState,
      field: [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
      ],
      history: []
    })
  })
})

describe('HIGHLIGHT action', () => {
  const initialState = {
    highlighted: { row: 1, column: 1 }
  }

  it('should handle HIGHLIGHT with row and column', () => {
    const action = {
      type: HIGHLIGHT,
      row: 2,
      column: 2
    }

    let state = reducer(deepFreeze(initialState), action)

    expect(state).toEqual({
      ...initialState,
      highlighted: { row: 2, column: 2 }
    })
  })

  it('should handle HIGHLIGHT without row and column', () => {
    const action = {
      type: HIGHLIGHT,
    }

    let state = reducer(deepFreeze(initialState), action)

    expect(state).toEqual({
      ...initialState,
      highlighted: undefined
    })
  })
})

describe('DISABLE_USER_EVENTS', () => {
  const initialState = {
    userEventsDisabled: false
  }

  it('should handle DISABLE_USER_EVENTS', () => {
    const action = {
      type: DISABLE_USER_EVENTS,
      disabled: true
    }

    let state = reducer(deepFreeze(initialState), action)

    expect(state).toEqual({
      ...initialState,
      userEventsDisabled: true
    })
   })
})

describe('TOGGLE_MENU action', () => {
  const initialState = {
    isMenuOpen: false
  }

  it('should handle TOGGLE_MENU', () => {
    const action = {
      type: TOGGLE_MENU,
    }

    let state = reducer(deepFreeze(initialState), action)

    expect(state).toEqual({
      ...initialState,
      isMenuOpen: true
    })
   })
})
