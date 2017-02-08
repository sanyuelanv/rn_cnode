import React, {Component} from 'react'
import {StyleSheet,Text,View,NavigationExperimental} from 'react-native'
import Init from "./component/init"
const {StateUtils,Transitioner} = NavigationExperimental
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
      routes: [
        {key: '1', color: '#ff0000'},
        {key: '2', color: '#ff7f00'},
        {key: '3', color: '#ffff00'},
        {key: '4', color: '#00ff00'},
        {key: '5', color: '#0000ff'},
        {key: '6', color: '#4b0082'},
        {key: '7', color: '#8f00ff'},
      ]
    }
  }
  _navigate(action){
    let state = null
    
    if(action == 'back'){state = StateUtils.back(this.state)}
    else {state = StateUtils.forward(this.state)}

    if (state === this.state) {return false}
    this.setState(state)
    return true
  }
  _renderScene(sceneProps){
    return(
      <Init
        {...sceneProps}
        key={sceneProps.scene.key}
        navigate={this._navigate.bind(this)}
      />
    )
  }
  _renderView(transitionProps){
    // 创建scenes
    const scenes = transitionProps.scenes.map((scene)=>{
      const sceneProps = {
        ...transitionProps,
        scene,
      }
      // 调用_renderScene渲染
      return this._renderScene(sceneProps);
    })
    // 渲染组件
    return (
      <View style={{flex: 1}}>
        {scenes}
      </View>
    )
  }
  render(){
    return(
      <Transitioner
        // 这个东西会给带进render的第一个参数里面：transitionProps.navigationState
        navigationState={this.state}
        render={this._renderView.bind(this)}
      />
    )
  }
}

export default App
