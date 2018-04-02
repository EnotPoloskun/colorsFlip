import React from "react"
import PropTypes from "prop-types"
import { View } from 'react-native'
import styles from "../styles/row"
import Cell from "./cell"
 
const Row = ({ onClick, row, rowIndex, highlighted }) => (
  <View style={styles.row}>
    {row.map((color, index) =>
      <Cell
        key={index}
        color={color}
        highlighted={highlighted != undefined && highlighted.row == rowIndex && highlighted.column == index}
        onClick={() => onClick(index)}
      />
    )}
  </View>
)
 
Row.propTypes = {
  onClick: PropTypes.func.isRequired,
  row: PropTypes.array.isRequired,
  rowIndex: PropTypes.number.isRequired,
  highlighted: PropTypes.object
}
 
export default Row
