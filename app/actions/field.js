import { AdMobRewarded } from 'react-native-admob'

export const MAKE_TURN = "MAKE_TURN"
export const UNDO_TURN = "UNDO_TURN"
export const RESTART = "RESTART"
export const HIGHLIGHT = "HIGHLIGHT"
export const DISABLE_USER_EVENTS = "DISABLE_USER_EVENTS"
export const LOAD_LEVEL = "LOAD_LEVEL"
export const TOGGLE_MENU = "TOGGLE_MENU"
export const RECEIVE_REWARD = "RECEIVE_REWARD"

export const makeTurn = (row, column) => ({
  type: MAKE_TURN,
  row,
  column,
})

export const undoTurn = () => ({
  type: UNDO_TURN
})

export const restart = () => ({
  type: RESTART
})

export const highlight = (row, column) => ({
  type: HIGHLIGHT,
  row,
  column,
})

export const disableUserEvents = (disabled) => ({
  type: DISABLE_USER_EVENTS,
  disabled: disabled
})

export const solveGame = () => (dispatch, getState) => {
  dispatch(disableUserEvents(true))
  dispatch(restart())

  let solution = getState().level.solution

  setTimeout(() => {
    for (var i = 0; i < solution.length; i++) {
      setTimeout((index) => {
        let turn = solution[index]

        dispatch(highlight(turn.row, turn.column))
        dispatch(makeTurn(turn.row, turn.column))
      }, 500 * i, i)
    }

    setTimeout(() => {
      dispatch(disableUserEvents(false))
      dispatch(highlight())
    }, 500 * solution.length)
  }, 500)
}

export const loadRewardAd = () => (dispatch, getState) => {
  AdMobRewarded.setAdUnitID('ca-app-pub-3940256099942544/1712485313')
  AdMobRewarded.setTestDevices([AdMobRewarded.simulatorId])

  AdMobRewarded.addEventListener('rewarded', () => {
    dispatch(receiveReward())
  })
  AdMobRewarded.addEventListener('adClosed', () => {
    if (getState().level.rewardAdWatched) {
      dispatch(solveGame())
    }
  })
  AdMobRewarded.addEventListener('adFailedToLoad', () => {
    dispatch(receiveReward())
  })

  AdMobRewarded.requestAd().catch((error) => dispatch(receiveReward()))
}

export const loadLevel = (levelNumber) => ({
  type: LOAD_LEVEL,
  number: levelNumber,
})

export const toggleMenu = () => ({
  type: TOGGLE_MENU,
})

export const receiveReward = () => ({
  type: RECEIVE_REWARD,
})
