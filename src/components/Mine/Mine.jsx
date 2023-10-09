import React, { Component } from 'react'
import './index.less'
import headImg from './icon/headimg.png'
import archives from './icon/archives.png'
import mine from './icon/mine.png'
import vote from './icon/vote.png'
import survey from './icon/survey.png'
import points from './icon/points.png'




export default class Mine extends Component {
  render() {
    return (
      <div className="index">
        <div className="head">
          <div className="headImg">
            <img className="imgHead" src={headImg} alt="头像" />
            <div>
              <span>李炜杰</span>
              <div>
                <img src={points} alt="积分" />
                <span>积分:</span>
                <span>1000</span>
              </div>
            </div>

          </div>
        </div>
        <div className="MainFunction">
          <div>
            <li><img src={mine} alt="" /><span>个人中心</span></li>
            <li><img src={archives} alt="" /><span>健康档案</span></li>
            <li><img src={vote} alt="" /><span>我的投票</span></li>
            <li><img src={survey} alt="" /><span>我的问卷</span></li>
          </div>
        </div>
      </div>
    )
  }
}
