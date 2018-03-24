import React from "react"
import PropTypes from "prop-types"
import { View } from 'react-native'
import styles from "../styles/field"
import Row from "./row"
 
const Field = ({ onClick, field }) => (
  <View style={styles.field}>
    {field.map((row, index) =>
      <Row
        key={index}
        row={row}
        onClick={(column) => onClick(index, column)}
      />
    )}
  </View>
)
 
Field.propTypes = {
  onClick: PropTypes.func.isRequired,
  field: PropTypes.array.isRequired,
}
 
export default Field
