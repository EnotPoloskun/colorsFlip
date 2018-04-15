import React from "react"
import { View, StatusBar } from 'react-native'
import { connect } from 'react-redux'
import styles from "../../styles/gameLevel"
import GameField from "../../containers/gameField"
import GameActions from "../../containers/gameActions"
import CompleteModal from "../completeModal"
 
const GameLevel = () => {
  return (
    <View style={styles.gameLevel}>
      <CompleteModal />
      <GameField/>
      <GameActions/>
    </View>
  )
}

export default connect()(GameLevel)
