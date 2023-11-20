/*
 * @Author: bigliweijie 1771662778@qq.com
 * @Date: 2023-10-09 09:11:15
 * @LastEditors: bigliweijie 1771662778@qq.com
 * @LastEditTime: 2023-10-12 17:41:22
 * @FilePath: \beileifuture\src\components\Home\Home.jsx
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import React, { Component } from 'react'
import './Home.less'
import InformationBulletins from './icon/InformationBulletins.png'
import DeliberativeManagement from './icon/DeliberativeManagement.png'
import emergencyIcon from "./icon/emergencyIcon.png"
import Notification from './components/Notification/Notification'
import NgbConvention from './components/NgbConvention/NgbConvention'
import NgbActivity from './components/NgbActivity/NgbActivity'
import { ContentDetail } from "./components/ContentDetail/ContentDetail";




export default class Neighbourhood extends Component {
  state = {
    /** 乡村资讯 */
    villageInformation: [{
      /** 小图标 */
      miniCon:"",
      /** 标题 */
      informationTitle:"",
      /** 发布时间 */
      pushTime:"",
      /** 详情栏目 */
      detail:{
        /** 内容文字 */
        activeWord:"",
      }
    }],
    emergency:{
      pushTime:"2023年10月18日",
      content:"吴佳明检查发现严重隐患,请及时关注!",
    },
    HomeState: 0,
  }
  SetHomeState = (tobe) => {
    this.setState({ HomeState: tobe })
  }
  renderContent(){
    switch (this.state.HomeState) {
      case 0: //首页导航
        return (
          <div className='HomeNavBox'>
          <img id="hero" src="https://img.zgyww.cn/pic/0/10/22/66/10226641_977766.jpg" alt="hero" />
        <div  style={{top:'-5vh'}} className='HomeNavCard'>
          <div id="emergencyMessage">
            <img  onClick={()=>{this.SetHomeState(1)}} id='emergencyIcon' src={emergencyIcon} alt="emergencyIcon" />
            <div id="emergencyContent">{this.state.emergency.content}</div>
          </div>
          <div className='homeSubCardLine'>
            <div  onClick={()=>{this.SetHomeState(8)}} className='homeSubCardItem'>
              <img className='homeSubCardBg' src={InformationBulletins} alt="InformationBulletins" />
              <div className='homeSubCardTitle'>邻里公约</div>
              <div className='homeSubCardContent'>邻里公约</div>
            </div>
            <div  onClick={()=>{this.SetHomeState(9)}} className='homeSubCardItem'>
              <img className='homeSubCardBg' src={DeliberativeManagement} alt="DeliberativeManagement" />
              <div className='homeSubCardTitle'>邻里活动</div>
              <div className='homeSubCardContent'>村务邻里活动</div>
            </div>
          </div>
        </div>
        <div className='HomeNavCard'>
          <div className='HomeNavCardMainTitle'>邻里文化</div>
          <div className='HomeZiXunItemBox' onClick={() => {this.SetHomeState(10)}}>
            <img className='HomeZiXunSuccinctImg' src="http://120.27.208.55:10001/prod-api//profile/upload/2023/09/20/41f683b9-c5e2-4f5f-8ee2-7a83738fd98e.jpg" alt="资讯图片" />
            <div className='HomeZiXunItemContentBox'>
              <div className='HomeZiXunItemContentTitle'>老人慰问活动</div>
              <div className='HomeZiXunItemContentTime'>2023-10-11</div>
            </div>
          </div>
          <div className='HomeZiXunItemBox'>
            <img className='HomeZiXunSuccinctImg' src="http://120.27.208.55:10001/prod-api//profile/upload/2022/12/14/334807be-3221-4d8f-a402-01dd81eab4b1.jpg" alt="资讯图片" />
            <div className='HomeZiXunItemContentBox'>
              <div className='HomeZiXunItemContentTitle'>阅读活动</div>
              <div className='HomeZiXunItemContentTime'>2023-10-11</div>
            </div>
          </div>
        </div>
          </div>
      )
      case 1: // 通知公告
          return (<Notification SetHomeState={this.SetHomeState} />);
      case 8: // 清廉公约
        return (<NgbConvention SetHomeState={this.SetHomeState} />);
      case 9: // 清廉公开
        return (<NgbActivity SetHomeState={this.SetHomeState} />);
      case 10: // 公益活动
        return (<ContentDetail click={this.SetHomeState} />);
      default:
        return (<></>)
    }
  }
  render() {
    return (
      <>
       {this.renderContent()}
      </>
    )
  }
}
