import React, {Component} from 'react'
import styles from './style'
import {StyleSheet,Text,View,Image,TouchableOpacity} from 'react-native'

class Item extends Component {
  constructor(props){
    super(props)
  }
  componentWillMount(){
  }
  _onPress(){
    let {article,navigator} = this.props
    let {id} = article
  }
  render() {
    let {isLast,article} = this.props
    let {name,avatar,time,tag,title,seeNumber,cmtNumber,lastCmtTime} = article
    return (
      <TouchableOpacity onPress={this._onPress.bind(this)} style={isLast?styles.itemContainerLast:styles.itemContainer}>
        <View style={styles.itemHeader}>
          <Image
            style={styles.itemAvatar}
            source={{uri:avatar}}
          />
          <View style={styles.itemHeaderUser}>
              <Text style={styles.userName}>{name}</Text>
              <View style={styles.topicInfor}>
                <Text style={styles.userInfo}>{time}</Text>
                <View style={styles.topicTag}>
                  <Text style={styles.tagName}>{tag}</Text>
                </View>
              </View>
          </View>
        </View>
        <Text style={styles.itemTitle}>{title}</Text>
        <View style={styles.itemFooter}>
          <View style={styles.itemFooterBox}>
            <Text style={styles.footBoxtext}>查看：{seeNumber}</Text>
          </View>
          <View style={styles.itemFooterBox}>
            <Text style={styles.footBoxtext}>评论：{cmtNumber}</Text>
          </View>
          <View style={styles.itemFooterBoxLast}>
            <Text style={styles.footBoxtext}>{lastCmtTime}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

export default Item
