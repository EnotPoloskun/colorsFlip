import { connect } from 'react-redux'
import { undoTurn } from '../actions/field'
import Actions from '../components/actions'
 
const mapStateToProps = (state) => {
  return {
    history: state.history
  }
}
 
const mapDispatchToProps = (dispatch) => ({
  undoTurn: () => dispatch(undoTurn())
})
 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Actions)
