import React, {Component} from 'react'
import {StyleSheet, Text, View, PanResponder,Animated} from 'react-native'
import styles from './styles'
import Markdown from 'react-native-simple-markdown'

const content = '# test\n\n## test \n\nhahahahahahahahahahahahahahahahahahahahahahahahahah'

class PanresAnimate extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={styles.page}>
        <View style={styles.itemContainer}>
          <Markdown style={markdownStyles}>{content}</Markdown>
        </View>
      </View>
    )
  }
}


const markdownStyles = {
  heading1: {
    fontSize: 24,
  },
  link: {
    color: '#03a9f4',
  },
  paragraph: {
    fontSize: 14,
  },
}
export default PanresAnimate
