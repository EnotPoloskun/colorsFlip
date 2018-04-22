import { AsyncStorage } from 'react-native'
import levelsData from 'ColorsFlip/levelsData.json'
import {
  SET_DATA,
} from "../actions/list"

const setData = (state, action) => {
  const lastSolvedRound = action.lastSolvedRoundNumber ? parseInt(action.lastSolvedRoundNumber) : 0

  if (state.isDataLoaded) {
    return {
      ...state,
      lastSolvedRound: lastSolvedRound,
    }
  } else {
    return {
      roundsCount: levelsData.length,
      currentPage: lastSolvedRound % 20,
      lastSolvedRound: lastSolvedRound,
      isDataLoaded: true
    }
  }
}

const ACTION_HANDLERS = {
  [SET_DATA] : setData,
}

const reducer = (state = {}, action) => {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

export default reducer
