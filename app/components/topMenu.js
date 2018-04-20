import React from "react"
import PropTypes from "prop-types"
import { connect } from 'react-redux'
import { toggleMenu } from 'ColorsFlip/app/actions/field'
import { View, TouchableOpacity, Text } from 'react-native'
import styles from "ColorsFlip/app/styles/topMenu"

const TopMenu = ({ toggleMenu, disabled }) => (
  <View style={styles.wrapper}>
    <TouchableOpacity onPress={toggleMenu} disabled={disabled}>
      <Text style={styles.icon}>&#xe803;</Text>
    </TouchableOpacity>
  </View>
)
 
TopMenu.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
  disabled: PropTypes.bool
}

const mapDispatchToProps = (dispatch) => ({
  toggleMenu: () => dispatch(toggleMenu()),
})

const mapStateToProps = (state) => {
  return {
    disabled: state.level.userEventsDisabled
  }
}
 
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TopMenu)
