import React from "react"
import PropTypes from "prop-types"
import { View, TouchableHighlight } from 'react-native'
import styles from "../styles/action"
 
const Action = ({ action, disabled }) => (
  <TouchableHighlight onPress={action} disabled={disabled}>
    <View style={styles.action}/>
  </TouchableHighlight>
)
 
Action.propTypes = {
  action: PropTypes.func.isRequired,
  disabled: PropTypes.bool
}
 
export default Action
