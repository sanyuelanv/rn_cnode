import React, {Component} from 'react'
import styles from './style'
import Item from './item'
import { observer } from 'mobx-react/native'
import {StyleSheet,Text,View,ScrollView,RefreshControl} from 'react-native'
const tabArray = {
  ask:"问答",
  share:'分享',
  job:"工作",
  good:"精华"
}
const getTagName = function(tag){
  let tagName = null
  if(tag == "ask"){tagName = tabArray.ask}
  else if(tag == "share"){tagName = tabArray.share}
  else if(tag == "job"){tagName = tabArray.job}
  else if(tag == "good"){tagName = tabArray.good}
  return tagName
}
const getTimeFunc = function(nowTime,getTime){
  let difference = nowTime - getTime
  // 日
  let days = Math.floor(difference/(24*3600*1000))
  if(days < 1){
    // 时
    let leave_1 = difference%(24*3600*1000)
    let hours = Math.floor(leave_1/(3600*1000))
    if(hours < 1){
      // 分
      let leave_2 = leave_1%(3600*1000)
      let minutes=Math.floor(leave_2/(60*1000))
      if(minutes < 1){
        let leave_3 = leave_2%(60*1000)
        let seconds=Math.floor(leave_3/(1000))
        return seconds + "秒前"
      }
      else {return minutes + "分钟前"}
    }
    else {return hours + "小时前"}
  }
  else {return days + '天前'}
}

@observer
class Index extends Component {
  constructor(props){
    super(props)
  }
  componentWillMount(){
    let {fetchNews} = this.props.store
    fetchNews(1)
  }
  _ArticleStruct(value,index){
    let {time} = this.props.store
    let article = {
      name:value.author.loginname,
      avatar:value.author.avatar_url,
      time:getTimeFunc(time,new Date(value.create_at).getTime()),
      tag:getTagName(value.tab),
      title:value.title,
      cmtNumber:value.reply_count,
      seeNumber:value.visit_count,
      lastCmtTime:getTimeFunc(time,new Date(value.last_reply_at).getTime()),
    }
    return(<Item article={article} key={value.id} />)
  }
  _renderItem(){
    let {state,data} = this.props.store
    if(data.length == 0){return null}
    else {
      let ItemArray = data.map(this._ArticleStruct.bind(this))
      return ItemArray
    }
  }
  _onRefresh(){}
  _renderRefreshControl(){
    let {state} = this.props.store
    let loadFlag = false
    if(state == 0 || state == 1){loadFlag = true}
    else {loadFlag = false}
    return(
      <RefreshControl
        refreshing={loadFlag}
        onRefresh={this._onRefresh.bind(this)}
        tintColor="#888888"
        title="加载中..."
        progressBackgroundColor="#888888"
        titleColor="#888888"
        colors={['#888888', '#888888', '#888888']}
      />
    )
  }
  render() {
    return (
      <View style={styles.page}>
        <ScrollView
          style={styles.container}
          refreshControl={this._renderRefreshControl()}
        >
          {this._renderItem()}
        </ScrollView>
      </View>
    )
  }
}

export default Index
