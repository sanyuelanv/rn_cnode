import React, {Component} from 'react'
import styles from './style'
import { observer } from 'mobx-react/native';
import {StyleSheet,Text,View,TouchableWithoutFeedback} from 'react-native'

@observer
class Index extends Component {
  constructor(props){
    super(props)
  }
  componentWillMount(){
    let {fetchOperate} = this.props.store
    fetchOperate(1)
  }
  _onPress(){
  }
  _renderText(){
    let {fetchOperate,data,state} = this.props.store
    if(state == 0){return "没有请求"}
    else if(state == 1){return "开始请求"}
    else if(state == 2){return "请求成功"}
    else if(state == -1){return "请求失败"}
  }
  render() {
    return (
      <View
        onPress = {this._onPress.bind(this)}
        style={styles.container}
      >
        <View style={styles.textContainer}>
          <Text style={styles.welcome}>{this._renderText()}</Text>
        </View>
      </View>
    )
  }
}

export default Index
