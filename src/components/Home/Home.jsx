import React, { Component } from 'react'
import './Home.less'
import Hero from './Hero.jpeg'
import InformationBulletins from './icon/InformationBulletins.png'
import emergencyIcon from "./icon/emergencyIcon.png"
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
    }
  }
  render() {
    return (
      <>
      <div className='HomeNavBox'>
        <img id="hero" src={Hero} alt="hero" />
        <div className='HomeNavCard'>
          <div id="emergencyMessage">
            <img id='emergencyIcon' src={emergencyIcon} alt="emergencyIcon" />
            <div id="emergencyContent">{this.state.emergency.content}</div>
          </div>
          <div className='homeSubCardLine'>
            <div className='homeSubCardItem'>
              
              <img className='homeSubCardBg' src={InformationBulletins} alt="InformationBulletins" />
            
            </div>
            <div className='homeSubCardItem'>
              <img className='homeSubCardBg' src={InformationBulletins} alt="InformationBulletins" />
            </div>
          </div>
          <div className='homeSubCardLine'>
            <div className='homeSubCardItem'>问卷调查</div>
            <div className='homeSubCardItem'>红黑榜</div>
          </div>
        </div>
      </div>
      </>
    )
  }
}
