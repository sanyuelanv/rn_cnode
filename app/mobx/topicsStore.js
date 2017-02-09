'use strict'
import {
  observable,
  action
} from 'mobx'

// 请求
class fetchDataStore {
  @observable data;
  @observable state;
  @observable time;
  @action fetchNews = (page) => {
    this.state = 1
    let fetchURL = 'https://cnodejs.org/api/v1/topics' + "?page=" + page
    fetch(fetchURL, {method: 'get'})
      .then(res => res.json())
      .then(
        action("fetchOperate_success",(res) => {
          let {data,success} = res
          if(success){
            this.state = 2
            this.time = new Date().getTime()
            this.data = data
          }
          else {
            this.state = -1
          }

        })
      )
      .catch(
        action("fetchOperate_error",(err) => {
          this.state = -1
        })
      )
  }
  constructor() {
    this.data = []
    this.state = 0
    this.time = 0
  }
}
const fetchData = new fetchDataStore()

export default fetchData
