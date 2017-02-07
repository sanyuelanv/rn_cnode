import React, {Component} from 'react'
import {StyleSheet,Text,View,NavigationExperimental} from 'react-native'
import Init from "./component/init"
const {PropTypes,StateUtils,Transitioner,Card} = NavigationExperimental

function reducer(state,action){
  // state是否存在，如果不存在就返回一个state
  if(!state){
    return {
      index: 0,
      routes: [
        {key: 'Step 1', color: '#ff0000'},
        {key: 'Step 2', color: '#ff7f00'},
        {key: 'Step 3', color: '#ffff00'},
        {key: 'Step 4', color: '#00ff00'},
        {key: 'Step 5', color: '#0000ff'},
        {key: 'Step 6', color: '#4b0082'},
        {key: 'Step 7', color: '#8f00ff'},
      ],
    }
  }
  // 判断动作，定义前后行为
  switch (action) {
    case 'back':
      return StateUtils.back(state);
    case 'forward':
      return StateUtils.forward(state);
  }
  return state
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = reducer()
    console.log(this.state)
  }
  _renderScene(sceneProps){
    return(
      <Init
        {...sceneProps}
        key={sceneProps.scene.key + 'scene'}
        navigate={(action)=>{
          const state = reducer(this.state, action);
          if (state === this.state) {return false;}
          this.setState(state)
          return true
        }}
      />
    )
  }
  render(){
    return(
      <Transitioner
        navigationState={this.state}
        render={(transitionProps)=>{
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
        }}
      />
    )
  }
}

export default App
