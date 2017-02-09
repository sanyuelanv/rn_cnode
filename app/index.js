import Router from './router'

import React, {Component} from 'react'
import {StyleSheet,Text,View,StatusBar} from 'react-native'

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={{flex:1}}>
        <StatusBar
          backgroundColor="#444"
          barStyle="light-content"
        />
        <Router />
      </View>
    )
  }
}

export default App
