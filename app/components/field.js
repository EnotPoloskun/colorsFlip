import React from "react"
import PropTypes from "prop-types"
import { View } from 'react-native'
import styles from "ColorsFlip/app/styles/field"
import Row from "ColorsFlip/app/components/row"
 
const Field = ({ onClick, field, highlighted, isGameSolved }) => (
  <View style={styles.field}>
    {field.map((row, index) =>
      <Row
        key={index}
        row={row}
        rowIndex={index}
        highlighted={highlighted}
        isGameSolved={isGameSolved}
        onClick={(column) => onClick(index, column)}
      />
    )}
  </View>
)
 
Field.propTypes = {
  onClick: PropTypes.func.isRequired,
  field: PropTypes.array.isRequired,
  highlighted: PropTypes.object,
  isGameSolved: PropTypes.bool.isRequired,
}
 
export default Field
