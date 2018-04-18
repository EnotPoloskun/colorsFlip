import { StyleSheet } from 'react-native'
import Dimensions from 'Dimensions'

export default StyleSheet.create({
  wrapper: {
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    position: 'absolute',
    top: 0,
    padding: 14,
  },

  icon: {
    fontFamily: 'sqcolor',
    fontSize: 50,
    textAlign: 'center',
    color: '#fff',
  }
})
