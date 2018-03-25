import React from "react"
import PropTypes from "prop-types"
import { View, Text } from 'react-native'
import styles from "../styles/actions"
import Action from "./action"
 
const Actions = ({ undoTurn, restartGame, history }) => (
  <View style={styles.actions}>
    <Action action={undoTurn} disabled={history.length == 0}>
      <Text style={styles.action}>&#xf0e2;</Text>
    </Action>
    <Action action={restartGame}>
      <Text style={styles.action}>&#xf021;</Text>
    </Action>
  </View>
)
 
Actions.propTypes = {
  undoTurn: PropTypes.func.isRequired,
}
 
export default Actions
