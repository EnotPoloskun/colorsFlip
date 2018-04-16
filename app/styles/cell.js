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
    backgroundColor: '#6db55b',
  },

  red: {
    backgroundColor: '#f95f5f',
  },

  orange: {
    backgroundColor: '#ff8622',
  },

  blue: {
    backgroundColor: '#768be5'
  }
})
