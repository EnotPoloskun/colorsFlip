import { StyleSheet } from 'react-native'
import Dimensions from 'Dimensions'

export default StyleSheet.create({
  wrapper: {
  },

  actions: {
    width: Dimensions.get('window').width * 0.9,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    padding: 5,
  },

  action: {
    fontFamily: 'sqcolor',
    fontSize: 50,
    textAlign: 'center',
    color: '#767686',
  }
})
