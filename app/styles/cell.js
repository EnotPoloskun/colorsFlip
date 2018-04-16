import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  cell: {
    margin: 5,
    flex: 1,
  },

  highlighted: {
    flex: 1,
    backgroundColor: '#FFF',
    zIndex: 10,
    opacity: 0.4,
    borderRadius: 8,
  },

  content: {
    flex: 1,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },

  green: {
    backgroundColor: '#47ab4d',
  },

  red: {
    backgroundColor: '#f06b66',
  },

  orange: {
    backgroundColor: '#f38b33',
  },
})
