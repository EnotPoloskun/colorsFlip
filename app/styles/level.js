import { StyleSheet } from 'react-native'
import Dimensions from 'Dimensions'

export default StyleSheet.create({
  level: {
    width: Dimensions.get('window').width * 0.20,
    height: Dimensions.get('window').width * 0.20,
    margin: 5,
    justifyContent: "center",
    borderRadius: 8,
  },

  disabled: {
    borderWidth: 4,
    borderRadius: 8,
    borderColor: '#767686',
  },

  current: {
    borderWidth: 4,
    borderRadius: 8,
    borderColor: '#fff',
  },

  levelText: {
    textAlign: "center",
    fontSize: 30,
    color: '#fff',
  },

  levelTextDisabled: {
    color: '#767686',
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
