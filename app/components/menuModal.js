import React, { Component } from "react"
import PropTypes from "prop-types"
import { Text, TouchableOpacity, Modal, View, Animated, Easing } from 'react-native'
import { toggleMenu } from 'ColorsFlip/app/actions/field'
import { connect } from 'react-redux'
import Dimensions from 'Dimensions'
import styles from "ColorsFlip/app/styles/menuModal"
 
class MenuModal extends Component {
  constructor() {
    super()
    this.animatedWidthValue = new Animated.Value(0)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.visible != this.props.visible && this.props.visible) {
      this.animateOpen()
    }
  }

  animateOpen() {
    Animated.timing(
      this.animatedWidthValue,
      {
        toValue: 1,
        duration: 200,
        easing: Easing.linear
      }
    ).start()
  }

  animateClose() {
    Animated.timing(
      this.animatedWidthValue,
      {
        toValue: 2,
        duration: 200,
        easing: Easing.linear
      }
    ).start(() => {
      this.animatedWidthValue.setValue(0)
      this.props.toggleMenu()
    })
  }

  render() {
    const movingRight = this.animatedWidthValue.interpolate({
      inputRange: [0, 1, 2],
      outputRange: [-Dimensions.get('window').width * 0.66, 0, -Dimensions.get('window').width * 0.66]
    })

    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={this.props.visible}
      >
        <View style={styles.overlay}>
          <Animated.View style={[{ right: movingRight }, styles.menu]}>
            <View style={styles.menuItem}>
              <TouchableOpacity onPress={() => this.animateClose()}>
                <Text style={styles.closeIcon}>&#xe800;</Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        </View>
      </Modal>
    )
  }
}
 
MenuModal.propTypes = {
  visible: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => {
  return {
    visible: state.level.isMenuOpen,
  }
}

const mapDispatchToProps = (dispatch) => ({
  toggleMenu: () => dispatch(toggleMenu()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MenuModal)
