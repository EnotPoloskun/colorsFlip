import { StyleSheet } from 'react-native'
import Dimensions from 'Dimensions'

export default StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.3)'
  },

  menu: {
    height: Dimensions.get('window').height,
    backgroundColor: '#1b1b35',
    position: 'absolute',
    right: 0,
    paddingRight: 10,
    paddingTop: 10,
  },

  menuItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
  },

  closeIcon: {
    fontFamily: 'sqcolor',
    fontSize: 50,
    textAlign: 'center',
    color: '#fff',
  }
})
