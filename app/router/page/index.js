import React, {Component} from 'react'
import {StyleSheet, Text, View, PanResponder,Animated} from 'react-native'
import styles from './styles'
import Markdown from 'react-native-simple-markdown'

const content = "GitHub repo 地址：https://github.com/alsotang/node-lessons 如果大家认为漏了哪些初学者应会的内容，可以在此留言，或者开个 issue 给我（!!推荐）。 ---- # 《Node.js 包教不包会》 -- by alsotang 为何写作此课程 == 在 CNode(https://cnodejs.org/) 混了那么久，解答了不少 Node.js 初学者们的问题。回头想想，那些问题所需要的思路都不难，但大部分人由于练手机会少，所以在遇到问题的时候很无措。国内唯一一本排的上号的 Node.js 书是 @朴灵(https://github.com/JacksonTian) 的 《深入浅出Node.js》(http://book.douban.com/subject/25768396/ )，但这本书离实战还是比较远的。 这个课程是希望提供更多的 Node.js 实战机会，通过每一节精心安排的课程目标，让 Node.js 的初学者们可以循序渐进地，有目的有挑战地开展 Node.js 的学习。 更多 Node.js 入门资料请前往：https://cnodejs.org/getstart 课程列表 == * Lesson 0: [《搭建 Node.js 开发环境》](https://github.com/alsotang/node-lessons/tree/master/lesson0) * Lesson 1: [《一个最简单的 express 应用》](https://github.com/alsotang/node-lessons/tree/master/lesson1) * Lesson 2: [《学习使用外部模块》](https://github.com/alsotang/node-lessons/tree/master/lesson2) * Lesson 3: [《使用 superagent 与 cheerio 完成简单爬虫》](https://github.com/alsotang/node-lessons/tree/master/lesson3) * Lesson 4: [《使用 eventproxy 控制并发》](https://github.com/alsotang/node-lessons/tree/master/lesson4) * Lesson 5: [《使用 async 控制并发》](https://github.com/alsotang/node-lessons/tree/master/lesson5) * Lesson 6: [《测试用例：mocha，should，istanbul》](https://github.com/alsotang/node-lessons/tree/master/lesson6) * Lesson 7: 《测试用例：supertest》 * Lesson 8: 《Mongodb 与 Mongoose 的使用》 * Lesson 9: 《一个简单的 blog》 License == MIT"

class PanresAnimate extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={styles.page}>
        <View style={styles.itemContainer}>
          <Markdown style={markdownStyles}>{content}</Markdown>
        </View>
      </View>
    )
  }
}


const markdownStyles = {
  heading1: {
    fontSize: 24,
  },
  link: {
    color: '#03a9f4',
  },
  paragraph: {
    fontSize: 14,
  },
}
export default PanresAnimate
