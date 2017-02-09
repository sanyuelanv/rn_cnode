import React, {Component} from 'react'
import {StyleSheet,Text,View,Navigator} from 'react-native'
import Index from "./topic"
import Header from '../component/header'
import topicsStore from '../mobx/topicsStore'

const routeStack = [
  {
    name: "全部",
    index:0,
    component: Index,
    params:{}
  },
]

class App extends Component {
  constructor(props) {
    super(props)
  }
  renderScene(route, navigator) {
    let Item = route.component
    return <Item store={topicsStore} navigator={navigator} route={route} routes ={routeStack} />
  }
  render() {
    return (
      <Navigator
        initialRouteStack = {routeStack}
        initialRoute = {routeStack[0]}
        renderScene = {this.renderScene.bind(this)}
        navigationBar={Header()}
      />
    )
  }
}

export default App
