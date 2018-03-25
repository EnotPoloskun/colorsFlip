import { connect } from 'react-redux'
import { undoTurn, restart } from '../actions/field'
import Actions from '../components/actions'
 
const mapStateToProps = (state) => {
  return {
    history: state.history
  }
}
 
const mapDispatchToProps = (dispatch) => ({
  undoTurn: () => dispatch(undoTurn()),
  restartGame: () => dispatch(restart()),
})
 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Actions)
