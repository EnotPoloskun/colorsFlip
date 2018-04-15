import React from "react"
import PropTypes from "prop-types"
import { Text, TouchableOpacity, Modal } from 'react-native'
import { connect } from 'react-redux'
import styles from "../styles/completeModal"
 
const CompleteModal = ({ visible }) => (
  <Modal
    animationType="fade"
    transparent={true}
    visible={visible}
    style={{opacity: 0.9}}
  >
    <TouchableOpacity onPress={() => { console.log("qwe")}} activeOpacity={0.8} style={styles.modal}>
      <Text style={styles.icon}>&#xf00c;</Text>
    </TouchableOpacity>
  </Modal>
)
 
CompleteModal.propTypes = {
  visible: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => {
  return {
    visible: state.level.isGameSolved,
  }
}

export default connect(
  mapStateToProps,
  null,
)(CompleteModal)
