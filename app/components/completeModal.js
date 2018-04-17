import React from "react"
import PropTypes from "prop-types"
import { Text, TouchableOpacity, Modal } from 'react-native'
import { connect } from 'react-redux'
import styles from "../styles/completeModal"
 
const CompleteModal = ({ visible, levelNumber, loadNextLevel }) => (
  <Modal
    animationType="fade"
    transparent={true}
    visible={visible}
    style={{opacity: 0.9}}
  >
    <TouchableOpacity onPress={() => { loadNextLevel() }} activeOpacity={0.8} style={styles.modal}>
      <Text style={styles.icon}>&#xe801;</Text>
    </TouchableOpacity>
  </Modal>
)
 
CompleteModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  levelNumber: PropTypes.number.isRequired,
  loadNextLevel: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    visible: state.level.isGameSolved,
    levelNumber: state.level.levelNumber,
  }
}

export default connect(
  mapStateToProps,
  null,
)(CompleteModal)
