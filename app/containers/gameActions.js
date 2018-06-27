import { connect } from 'react-redux'
import { Alert } from 'react-native'
import { undoTurn, restart, solveGame } from '../actions/field'
import Actions from 'ColorsFlip/app/components/actions'
import { AdMobRewarded } from 'react-native-admob'
 
const mapStateToProps = (state) => {
  return {
    history: state.level.history,
    userEventsDisabled: state.level.userEventsDisabled
  }
}
 
const mapDispatchToProps = (dispatch) => ({
  undoTurn: () => dispatch(undoTurn()),
  restartGame: () => dispatch(restart()),
  solveGame: () => {
    Alert.alert(
      'Solution',
      'To see the solution you need to watch Ad. This directly supports developer. Thanks in advance :)',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Sure',
          onPress: () => {
            AdMobRewarded.isReady((isReady) => {
              if (isReady) {
                AdMobRewarded.showAd().catch(() => dispatch(solveGame()))
              } else {
                dispatch(solveGame())
              }
            })
          },
        }
      ],
      { cancelable: false }
    )
  }
})
 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Actions)
