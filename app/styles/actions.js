import { StyleSheet } from 'react-native'
import Dimensions from 'Dimensions'

export default StyleSheet.create({
  actions: {
    marginTop: 10,
    width: Dimensions.get('window').width * 0.9,
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    backgroundColor: "#f1c40f",
    padding: 10,
  }
})
