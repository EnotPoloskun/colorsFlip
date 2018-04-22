import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Pages, Indicator } from 'react-native-pages'
import { loadData } from 'ColorsFlip/app/actions/list'
import { connect } from 'react-redux'
import { View, StatusBar, Text } from 'react-native'
import Page from 'ColorsFlip/app/components/page'
import PagesIndicator from 'ColorsFlip/app/components/pagesIndicator'
import Dimensions from 'Dimensions'

class LevelsList extends Component {
  componentWillMount() {
    this.props.loadData()
  }

  loadLevel(levelNumber) {
    this.props.navigator.push({
      screen: 'game.Level',
      passProps: {
        levelNumber: levelNumber,
      },
      animationType: 'slide-horizontal'
    })
  }

  pages() {
    const pagesCount = Math.ceil(this.props.roundsCount / 20)
    var pages = []

    for (var i = 0; i < pagesCount; i++) {
      pages.push(<Page roundsCount={this.props.roundsCount} lastSolvedRound={this.props.lastSolvedRound} pageNumber={i} loadLevel={(levelNumber) => this.loadLevel(levelNumber)} key={i}/>)
    }

    return pages
  }

  renderPager({ pages, progress, indicatorPosition }) {
    if ('none' === indicatorPosition) {
      return null;
    }

    return (
      <PagesIndicator pages={pages} progress={progress} indicatorPosition={indicatorPosition} indicatorOpacity={0.30} indicatorColor={"#fff"} />
    );
  }

  render() {
    // const lastSolvedRound = this.props.lastSolvedRound || 0
    // console.log(Math.floor((lastSolvedRound + 1) / 20))
    if (this.props.lastSolvedRound) {
      return (
        <Pages startPage={Math.floor((this.props.lastSolvedRound + 1) / 20)} renderPager={this.renderPager.bind(this)}>
          {this.pages()}
        </Pages>
      )
    } else  {
     return <View/>
    }
  }
}

const mapDispatchToProps = (dispatch) => ({
  loadData: (number) => dispatch(loadData())
})

const mapStateToProps = (state) => {
  return {
    roundsCount: state.list.roundsCount,
    lastSolvedRound: state.list.lastSolvedRound,
  }
}

LevelsList.propTypes = {
  loadData: PropTypes.func.isRequired,
  roundsCount: PropTypes.number,
  lastSolvedRound: PropTypes.number,
  navigator: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(LevelsList)
