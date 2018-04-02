import { connect } from 'react-redux'
import { makeTurn } from '../actions/field'
import Field from '../components/field'
 
const mapStateToProps = (state) => {
  return {
    field: state.field,
    highlighted: state.highlighted
  }
}
 
const mapDispatchToProps = (dispatch) => ({
  onClick: (row, column) => dispatch(makeTurn(row, column))
})
 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Field)
