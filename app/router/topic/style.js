import {Platform} from 'react-native'
let {OS} = Platform
export default styles = {
  page:{
    flex: 1,
    backgroundColor: '#f1f1f1',
    marginTop:OS == "android"?40:60
  },
  touchList:{
    flex: 1,
    // position:'absolute',
    // top:OS == "android"?40:60,
  },
  container: {
    flex: 1,
  },
  itemContainer:{
    paddingTop:10,
    paddingLeft:15,
    paddingRight:15,
    marginBottom:10,
    flex:1,
    backgroundColor: '#fff',
    overflow:"hidden",
  },
  itemContainerLast:{
    paddingTop:10,
    paddingLeft:15,
    paddingRight:15,
    flex:1,
    backgroundColor: '#fff',
    overflow:"hidden",
  },
  itemHeader:{
    height:40,
    flex:1,
    flexDirection: 'row',
  },
  itemAvatar:{
    width:40,
    height:40,
    borderRadius:20,
    borderWidth:1,
    borderColor:'#ddd',
    // backgroundColor: '#ddd',
    overflow:"hidden",
    // backgroundColor: '#fff',
  },
  itemHeaderUser:{
    marginLeft:10,
    flex:1,
    justifyContent: 'center',
  },
  userName:{
    fontSize:16,
    lineHeight:22,
    color:"#333",
    marginBottom:3,
  },
  topicInfor:{
    flexDirection: 'row',
  },
  userInfo:{
    fontSize:12,
    lineHeight:16,
    color:"#929292",
  },
  topicTag:{
    alignItems: 'center',
    justifyContent: 'center',
    height:18,
    marginLeft:4,
    paddingRight:3,
    paddingLeft:3,
    borderRadius:3,
    backgroundColor:"#e5e5e5",
  },
  tagName:{
    fontSize:11,
    // lineHeight:13,
    color:"#929292",
  },
  itemTitle:{
    marginTop:15,
    marginBottom:15,
    paddingRight:3,
    fontSize:16,
    color:"#222",
    lineHeight:22,
  },
  itemFooter:{
    borderTopWidth:1,
    borderTopColor:"#e1e1e1",
    flexDirection: 'row',
    flex:1,
    height:30,
    paddingTop:7,
    paddingBottom:7,
  },
  itemFooterBox:{
    flex:1,
    borderRightWidth:1,
    borderRightColor:"#e1e1e1",
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemFooterBoxLast:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footBoxtext:{
    color:"#aaa",
    fontSize:12,
  }
}
