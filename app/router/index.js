import React, {Component} from 'react'
import {StyleSheet,Text,View,Navigator} from 'react-native'
import Index from "./topic"
import Item from "./page"
import Header from '../component/header'
import topicsStore from '../mobx/topicsStore'

class App extends Component {
  constructor(props) {
    super(props)
  }
  renderScene(route, navigator) {
    switch (route.id) {
      case "Item":
        return (<Item navigator={navigator} />)
        break
      default:
        return (<Index navigator={navigator} store={topicsStore} />)
    }
  }
  render() {
    return (
      <Navigator
        configureScene={(route) => {
          if (route.sceneConfig) {
            return route.sceneConfig;
          }
          return Navigator.SceneConfigs.FloatFromRight;
        }}
        initialRoute={{ id: 'home',name: "话题"}}
        renderScene = {this.renderScene.bind(this)}
        navigationBar={Header()}
      />
    )
  }
}

export default App
