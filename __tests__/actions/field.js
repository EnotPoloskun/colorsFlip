import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import {
  solveGame
} from "../../app/actions/field"

const mockStore = configureStore([thunk])

describe('(Actions) Field', () => {
  describe('solveGame', () => {

    it('should call correct actions', () => {
      const store = mockStore({
        solution: [{row: 1, column: 1}, { row: 2, column: 2 }, { row: 0, column: 0}],
      })

      jest.useFakeTimers()
      store.dispatch(solveGame())
      jest.runAllTimers()

      const actions = store.getActions()

      expect(actions).toEqual([
        { type: 'DISABLE_USER_EVENTS', disabled: true },
        { type: 'RESTART' },
        { type: 'HIGHLIGHT', row: 1, column: 1 },
        { type: 'MAKE_TURN', row: 1, column: 1 },
        { type: 'HIGHLIGHT', row: 2, column: 2 },
        { type: 'MAKE_TURN', row: 2, column: 2 },
        { type: 'HIGHLIGHT', row: 0, column: 0 },
        { type: 'MAKE_TURN', row: 0, column: 0 },
        { type: 'DISABLE_USER_EVENTS', disabled: false },
        { type: 'HIGHLIGHT', row: undefined, column: undefined }
      ])
    })
  })
})
