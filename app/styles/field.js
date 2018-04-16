import { StyleSheet } from 'react-native'
const Dimensions = require('Dimensions')

export default StyleSheet.create({
  field: {
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').width * 0.9,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
    overflow: 'hidden',
    borderRadius: 8,
  },
})
