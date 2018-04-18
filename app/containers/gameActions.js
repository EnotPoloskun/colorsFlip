import { connect } from 'react-redux'
import { undoTurn, restart, solveGame } from '../actions/field'
import Actions from 'ColorsFlip/app/components/actions'
 
const mapStateToProps = (state) => {
  return {
    history: state.level.history,
    userEventsDisabled: state.level.userEventsDisabled
  }
}
 
const mapDispatchToProps = (dispatch) => ({
  undoTurn: () => dispatch(undoTurn()),
  restartGame: () => dispatch(restart()),
  solveGame: () => dispatch(solveGame())
})
 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Actions)
