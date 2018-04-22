import { StyleSheet } from 'react-native'
import Dimensions from 'Dimensions'

export default StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: "row",
    flexWrap: 'wrap',
    justifyContent: "space-evenly",
    padding: 5,
    marginTop: Dimensions.get('window').height * 0.08,
  },
})
