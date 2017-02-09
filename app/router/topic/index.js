import React, {Component} from 'react'
import styles from './style'
import { observer } from 'mobx-react/native';
import {StyleSheet,Text,View,ScrollView,Image} from 'react-native'

@observer
class Index extends Component {
  constructor(props){
    super(props)
  }
  componentWillMount(){
    let {fetchOperate} = this.props.store
    // fetchOperate(1)
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
      <ScrollView
        style={styles.container}
      >
        <View style={styles.itemContainer}>
          <View style={styles.itemHeader}>
            <Image
              style={styles.itemAvatar}
              source={{uri:'https://avatars.githubusercontent.com/u/4624?v=3&s=120'}}
            />
            <View style={styles.itemHeaderUser}>
                <Text style={styles.userName}>nswbmw</Text>
                <View style={styles.topicInfor}>
                  <Text style={styles.userInfo}>15天前</Text>
                  <View style={styles.topicTag}>
                    <Text style={styles.tagName}>分享</Text>
                  </View>
                </View>
            </View>
          </View>
          <Text style={styles.itemTitle}>《一起学 Node.js》彻底重写完毕</Text>
          <View style={styles.itemFooter}>
            <View style={styles.itemFooterBox}>
              <Text style={styles.footBoxtext}>2001</Text>
            </View>
            <View style={styles.itemFooterBox}>
              <Text style={styles.footBoxtext}>11</Text>
            </View>
            <View style={styles.itemFooterBoxLast}>
              <Text style={styles.footBoxtext}>42分钟前</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }
}

export default Index
