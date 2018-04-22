// import React, { Component } from 'react'
// import { Indicator } from 'react-native-pages'
// import { View } from 'react-native'
// import Dimensions from 'Dimensions'

// class PagesIndicator extends Component {
//   render() {
//     return (
//       <View style={{ justifyContent: 'center', margin: 4, bottom: Dimensions.get('window').height * 0.1}}>
//         <Indicator {...this.props} style={{backgroundColor: "red"}}  />
//       </View>
//     )
//   }
// }

// export default PagesIndicator
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { View, Animated, ViewPropTypes } from 'react-native';
import Dimensions from 'Dimensions'
import styles from "ColorsFlip/app/styles/pagesIndicator"

export default class PagesIndicator extends PureComponent {
  static propTypes = {
    style: ViewPropTypes.style,

    pages: PropTypes.number.isRequired,
    progress: PropTypes.instanceOf(Animated.Value).isRequired,
    indicatorColor: PropTypes.string.isRequired,
    indicatorOpacity: PropTypes.number.isRequired,
    indicatorPosition: PropTypes.oneOf([
      'top',
      'right',
      'bottom',
      'left',
    ]).isRequired,
  };

  render() {
    let {
      pages,
      progress,
      indicatorColor: backgroundColor,
      indicatorOpacity,
      indicatorPosition,
      style,
      ...props
    } = this.props;

    let dots = Array.from(new Array(pages), (page, index) => {
      let opacity = progress
        .interpolate({
          inputRange: [
            -Infinity,
            index - 1,
            index,
            index + 1,
            Infinity,
          ],
          outputRange: [
            indicatorOpacity,
            indicatorOpacity,
            1.0,
            indicatorOpacity,
            indicatorOpacity,
          ],
        });

      let style = { opacity, backgroundColor };

      return (
        <Animated.View style={[styles.dot, style]} key={index} />
      );
    });

    let flexDirection = /^(top|bottom)$/
      .test(indicatorPosition)?
        'row':
        'column';

    return (
      <View style={[styles.container, style]}>
        {dots}
      </View>
    );
  }
}
