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
    width: Dimensions.get('window').width * 0.66,
    paddingTop: 10,
    flexDirection: 'column',
    flex: 1,
  },

  menuClose: {
    marginRight: 10,
    flexDirection: 'row',
    height: 50,
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
  },

  menuButtonWrapper: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center'
  },

  menuButton: {
    flexDirection: 'column',
    justifyContent: 'center',
    flexWrap: 'wrap',
    height: 46,
    width: Dimensions.get('window').width * 0.55,
    borderWidth: 3,
    borderRadius: 23,
    borderColor: '#767686',
  },

  menuButtonText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#fff',
  },

  closeIcon: {
    fontFamily: 'sqcolor',
    fontSize: 50,
    textAlign: 'center',
    color: '#fff',
  }
})
