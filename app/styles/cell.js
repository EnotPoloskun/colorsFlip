import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  cell: {
    margin: 5,
    flex: 1,
  },

  highlighted: {
    flex: 1,
    backgroundColor: "#FFF",
    zIndex: 10,
    opacity: 0.4,
    borderRadius: 5,
  },

  content: {
    flex: 1,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',

  },

  green: {
    backgroundColor: "#2ecc71",
  },

  red: {
    backgroundColor: "#e74c3c",
  },

  yellow: {
    backgroundColor: "#f1c40f",
  },
})
