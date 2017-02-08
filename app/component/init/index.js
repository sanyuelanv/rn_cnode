import React, {Component} from 'react'
import styles from './style'
import {Animated,StyleSheet,Text,View,NavigationExperimental} from 'react-native'
const {Card} = NavigationExperimental
const {PagerPanResponder,PagerStyleInterpolator} = Card

class Init extends Component {
  constructor(props){
    super(props)
  }
  render() {
    let {scene,navigate,progress} = this.props
    let {route} = scene

    const panHandlers = PagerPanResponder.forHorizontal({
      ...this.props,
      onNavigateBack: () => navigate('back'),
      onNavigateForward: () => navigate('forward'),
    })

    const style = [
      styles.container,
      {backgroundColor: route.color},
      PagerStyleInterpolator.forHorizontal(this.props),
    ]

    return (
      <Animated.View {...panHandlers} style={style}>
        <View style={styles.textContainer}>
          <Text style={styles.welcome}>{this.props.scene.index}页</Text>
        </View>
      </Animated.View>
    )
  }
}

export default Init
