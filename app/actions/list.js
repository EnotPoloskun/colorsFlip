import { AsyncStorage } from 'react-native'
export const SET_DATA = "SET_DATA"

export const loadData = () => async (dispatch) => {
  const lastSolvedRoundNumber =  await AsyncStorage.getItem('@LocalStore:lastSolvedRoundNumber')

  dispatch(setData(lastSolvedRoundNumber))
}

export const setData = (lastSolvedRoundNumber) => ({
  type: SET_DATA,
  lastSolvedRoundNumber
})
