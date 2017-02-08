import Index from "./router"

import React, {Component} from 'react'
import {StyleSheet,Text,View} from 'react-native'
import topicsStore from './mobx/topicsStore'

class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <View style={{flex:1}}>
        <Index store={topicsStore}  />
      </View>
    )
  }
}

export default App
