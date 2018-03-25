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
    borderWidth: 2,
    borderColor: "#ecf0f1",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1
  },
})
