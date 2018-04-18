import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import styles from 'ColorsFlip/app/styles/actions'
import Action from 'ColorsFlip/app/components/action'
 
const Actions = ({ undoTurn, restartGame, solveGame, history, userEventsDisabled }) => (
  <View style={styles.actions}>
    <Action action={undoTurn} disabled={history.length == 0 || userEventsDisabled}>
      <Text style={styles.action}>&#xe804;</Text>
    </Action>
    <Action action={solveGame} disabled={userEventsDisabled}>
      <Text style={styles.action}>&#xe802;</Text>
    </Action>
  </View>
)
 
Actions.propTypes = {
  undoTurn: PropTypes.func.isRequired,
  restartGame: PropTypes.func.isRequired,
  solveGame: PropTypes.func.isRequired,
  userEventsDisabled: PropTypes.bool.isRequired,
}
 
export default Actions
