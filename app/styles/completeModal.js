import { StyleSheet } from 'react-native'
import Dimensions from 'Dimensions'

export default StyleSheet.create({
  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0)'
  },

  icon: {
    fontSize: 100,
    color: "#fff",
    fontFamily: 'sqcolor',
    marginBottom: Dimensions.get('window').height * 0.25
  }
})
