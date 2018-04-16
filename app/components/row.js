import React from "react"
import PropTypes from "prop-types"
import { View } from 'react-native'
import styles from "../styles/row"
import Cell from "./cell"
 
const Row = ({ onClick, row, rowIndex, highlighted, isGameSolved }) => (
  <View style={styles.row}>
    {row.map((color, index) =>
      <Cell
        key={index}
        color={color}
        highlighted={highlighted != undefined && highlighted.row == rowIndex && highlighted.column == index}
        isGameSolved={isGameSolved}
        onClick={() => onClick(index)}
      />
    )}
  </View>
)
 
Row.propTypes = {
  onClick: PropTypes.func.isRequired,
  row: PropTypes.array.isRequired,
  rowIndex: PropTypes.number.isRequired,
  isGameSolved: PropTypes.bool.isRequired,
  highlighted: PropTypes.object
}
 
export default Row
