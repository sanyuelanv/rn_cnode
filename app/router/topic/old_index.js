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
const getLastTimeFunc = function(time){
  let date = new Date(time)
  let Y = date.getFullYear() + '-'
  let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-'
  let D = (date.getDate()  < 10 ? '0'+(date.getDate()) : date.getDate())  + ' '
  let h = (date.getHours() < 10 ? '0'+(date.getHours()) : date.getHours()) + ':'
  let m = (date.getMinutes() < 10 ? '0'+(date.getMinutes()) : date.getMinutes()) + ':'
  let s = (date.getSeconds() < 10 ? '0'+(date.getSeconds()) : date.getSeconds())
  return(Y+M+D+h+m+s)
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
    let {navigator,store} = this.props
    let {time,data} = store
    let isLast = (index == data.length - 1)?true:false
    let article = {
      id:value.id,
      name:value.author.loginname,
      avatar:value.author.avatar_url,
      time:getTimeFunc(time,new Date(value.create_at).getTime()),
      tag:getTagName(value.tab),
      title:value.title,
      cmtNumber:value.reply_count,
      seeNumber:value.visit_count,
      lastCmtTime:getTimeFunc(time,new Date(value.last_reply_at).getTime()),
    }
    return(<Item article={article} key={value.id} isLast={isLast} navigator={navigator} />)
  }
  _renderItem(){
    let {state,data} = this.props.store
    if(data.length == 0){return null}
    else {
      let ItemArray = data.map(this._ArticleStruct.bind(this))
      return ItemArray
    }
  }
  _onRefresh(){
    let {fetchNews} = this.props.store
    fetchNews(1)
  }
  _renderRefreshControl(){
    let {state,time} = this.props.store
    let loadFlag = false
    let text = "加载中"
    if(time != 0 && state == 2){
      text = '上次加载时间：'+ getLastTimeFunc(time)
    }
    if(state == 0 || state == 1){
      loadFlag = true
      text = "加载中"
    }
    else {loadFlag = false}
    return(
      <RefreshControl
        refreshing={loadFlag}
        onRefresh={this._onRefresh.bind(this)}
        tintColor="#888888"
        title={text}
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
