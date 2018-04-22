import { StyleSheet } from 'react-native'
import Dimensions from 'Dimensions'

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'row',
    margin: 4,
    bottom: Dimensions.get('window').height * 0.15
  },

  dot: {
    backgroundColor: 'white',
    borderRadius: 6,
    width: 12,
    height: 12,
    margin: 4,
  },
});
