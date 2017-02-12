'use strict'
import {
  computed,
  observable,
  action
} from 'mobx'
import {ListView} from 'react-native'
// 请求
class fetchDataStore {
  ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
  @observable data
  @observable list
  @observable state
  @observable time
  @observable page
  @computed get dataSource() {
   return this.ds.cloneWithRows(this.list.slice())
 }
  @action fetchNews = (page) => {
    this.state = 1
    let fetchURL = 'https://cnodejs.org/api/v1/topics?page=' + page
    fetch(fetchURL, {method: 'get'})
      .then(res => res.json())
      .then(
        action("fetchOperate_success",(res) => {
          let {data,success} = res
          if(success){
            this.state = 2
            this.time = new Date().getTime()
            if(page > 1){

            }
            else {
              this.data = data
            }
          }
          else {this.state = -1}
        })
      )
      .catch(
        action("fetchOperate_error",(err) => {
          this.state = -1
        })
      )
  }
  @action fetchTopic = (page) => {
    this.state = 1
    let fetchURL = 'https://cnodejs.org/api/v1/topics?page=' + page
    fetch(fetchURL, {method: 'get'})
      .then(res => res.json())
      .then(
        action("fetchOperate_success",(res) => {
          let {data,success} = res
          console.log(data);
          if(success){
            this.state = 2
            this.time = new Date().getTime()
            if(page > 1){
              this.list = this.list.concat(data)
              this.page = page
            }
            else {
              this.list = data
              this.page = page
            }
          }
          else {this.state = -1}
        })
      )
      .catch(
        action("fetchOperate_error",(err) => {
          this.state = -1
        })
      )
  }
  constructor() {
    this.list = []
    this.data = []
    this.state = 0
    this.time = 0
    this.page = 0
  }
}
const fetchData = new fetchDataStore()

export default fetchData
