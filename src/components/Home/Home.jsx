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
import Hero from './Hero.jpeg'
import InformationBulletins from './icon/InformationBulletins.png'
import DeliberativeManagement from './icon/DeliberativeManagement.png'
import Questionnaires from './icon/Questionnaires.png'
import RABList from './icon/RABList.png'
import emergencyIcon from "./icon/emergencyIcon.png"
import OnlineVote from './icon/OnlineVote.png'
import ConflictMediationimg from './icon/ConflictMediation.png'
import CorruptionConvention from './icon/CorruptionConvention.png'
import CleanAndOpen from './icon/CleanAndOpen.png'
import Survey from "../Mine/components/Survey/Survey"
import Notification from './components/Notification/Notification'
import ThreeAffairsOpen from './components/ThreeAffairsOpen/ThreeAffairsOpen'
import Deliberative from './components/Deliberative/Deliberative'
import RedAndBlack from './components/RedAndBlack/RedAndBlack'
import {ConflictMediation} from './components/ConflictMediation/ConflictMediation'
import QLConvention from './components/QLConvention/QLConvention'
import QLOpen from './components/QLOpen/QLOpen'




export default class Home extends Component {
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
      pushTime:"2023年10月9日",
      content:"紧急通知‼️紧急通知‼️紧急通知‼️紧急通知‼️紧急通知‼️紧急通知‼️",
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
          <img id="hero" src={Hero} alt="hero" />
        <div  style={{top:'-5vh'}} className='HomeNavCard'>
          <div id="emergencyMessage">
            <img id='emergencyIcon' src={emergencyIcon} alt="emergencyIcon" />
            <div id="emergencyContent">{this.state.emergency.content}</div>
          </div>
          <div className='homeSubCardLine'>
            <div className='homeSubCardItem'>
              <img className='homeSubCardBg' src={InformationBulletins} alt="InformationBulletins" />
              <div className='homeSubCardTitle'>三务公开</div>
              <div className='homeSubCardContent'>村务信息公开</div>
            </div>
            <div className='homeSubCardItem'>
              <img className='homeSubCardBg' src={DeliberativeManagement} alt="DeliberativeManagement" />
              <div className='homeSubCardTitle'>议事管理</div>
              <div className='homeSubCardContent'>村务事程决策</div>
            </div>
          </div>
          <div className='homeSubCardLine'>
            <div onClick={()=>{this.SetHomeState(4)}} className='homeSubCardItem'>
                <img className='homeSubCardBg' src={Questionnaires} alt="Questionnaires" />
                <div className='homeSubCardTitle'>问卷调查</div>
                <div className='homeSubCardContent'>村务事项调研</div>
              </div>
              <div  className='homeSubCardItem'>
                <img className='homeSubCardBg' src={RABList} alt="RABList" />
                <div className='homeSubCardTitle'>红黑榜</div>
                <div className='homeSubCardContent'>村民行为奖惩</div>
              </div>
          </div>
        </div>
        <div className='HomeNavCard'>
          <div className='homeSubCardLine'>
            <div style={{backgroundColor:'#fff6f6'}} className='homeSubCardItem homeSubCardItemReplenish'>
              <img className='homeSubCardBgI' src={OnlineVote} alt="OnlineVote" />
              <div>
                <div className='homeSubCardCaption'>线上投票</div>
                <div className='homeSubCardPart'>民主决策</div>
              </div>
            </div>
            <div style={{backgroundColor:'#f1f8ff'}} className='homeSubCardItem homeSubCardItemReplenish'>
              <img className='homeSubCardBgI' src={ConflictMediationimg} alt="ConflictMediationimg" />
              <div>
                <div className='homeSubCardCaption'>矛盾调解</div>
                <div className='homeSubCardPart'>安居乐业</div>
              </div>
            </div>
          </div>
          <div className='homeSubCardLine'>
            <div onClick={()=>{this.SetHomeState(8)}} style={{backgroundColor:'#f1fdff'}} className='homeSubCardItem homeSubCardItemReplenish'>
              <img className='homeSubCardBgI' src={CorruptionConvention} alt="CorruptionConvention" />
              <div>
                <div className='homeSubCardCaption'>清廉公约</div>
                <div className='homeSubCardPart'>民众约定</div>
              </div>
            </div>
            <div style={{backgroundColor:'#fff9f2'}} className='homeSubCardItem homeSubCardItemReplenish'>
              <img className='homeSubCardBgI' src={CleanAndOpen} alt="CleanAndOpen" />
              <div>
                <div className='homeSubCardCaption'>清廉公开</div>
                <div className='homeSubCardPart'>人民监督</div>
              </div>
            </div>
          </div>
        </div>
        <div className='HomeNavCard'>
          <div className='HomeNavCardMainTitle'>乡村资讯</div>
          <div className='HomeZiXunItemBox'>
            <img className='HomeZiXunSuccinctImg' src="http://120.27.208.55:10001/prod-api//profile/upload/2023/09/20/41f683b9-c5e2-4f5f-8ee2-7a83738fd98e.jpg" alt="资讯图片" />
            <div className='HomeZiXunItemContentBox'>
              <div className='HomeZiXunItemContentTitle'>资讯标题</div>
              <div className='HomeZiXunItemContentTime'>2023-10-11</div>
            </div>
          </div>
          <div className='HomeZiXunItemBox'>
            <img className='HomeZiXunSuccinctImg' src="http://120.27.208.55:10001/prod-api//profile/upload/2023/09/20/41f683b9-c5e2-4f5f-8ee2-7a83738fd98e.jpg" alt="资讯图片" />
            <div className='HomeZiXunItemContentBox'>
              <div className='HomeZiXunItemContentTitle'>资讯标题</div>
              <div className='HomeZiXunItemContentTime'>2023-10-11</div>
            </div>
          </div>
        </div>
          </div>
      )
      case 1: // 通知公告
          return (<Notification/>);
      case 2: // 三务公开
        return (<ThreeAffairsOpen/>);
      case 3: // 议事管理
        return (<Deliberative/>);
      case 4: // 问卷调查
        return (<Survey comefrom="1" MineState={()=>{}} SetHomeState={this.SetHomeState} />)
      case 5: // 红黑榜
        return (<RedAndBlack/>);
      case 6: // 线上投票
        return (<RedAndBlack/>);
      case 7: // 矛盾调解
        return (<ConflictMediation/>);
      case 8: // 清廉公约
        return (<QLConvention/>);
      case 9: // 清廉公开
        return (<QLOpen/>);
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
