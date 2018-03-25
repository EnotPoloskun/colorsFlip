import React from "react"
import PropTypes from "prop-types"
import { View } from 'react-native'
import styles from "../styles/actions"
import Action from "./action"
 
const Actions = ({ undoTurn, history }) => (
  <View style={styles.actions}>
    <Action action={undoTurn} disabled={history.length == 0}/>
  </View>
)
 
Actions.propTypes = {
  undoTurn: PropTypes.func.isRequired,
}
 
export default Actions
