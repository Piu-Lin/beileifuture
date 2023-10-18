import React, { Component } from 'react'
import './index.less'

import Archives from "./components/Archives/Archives"
import Points from "./components/Points/Points"
import Vote from "./components/Vote/Vote"
import Survey from "./components/Survey/Survey"
import My from './components/My/My'

import headImg from './icon/headimg.png'
import archives from './icon/archives.png'
import mine from './icon/mine.png'
import vote from './icon/vote.png'
import survey from './icon/survey.png'
import points from './icon/points.png'

export default class Mine extends Component {
  state = {
    MineState: 0,
  }
  MineState = (tobe) => {
    this.setState({ MineState: tobe })
  }
  renderContent() {
    switch (this.state.MineState) {
      case 0:
        return (<div className="index">
          <div className="head">
            <div className="headImg">
              <img className="imgHead" src={headImg} alt="头像" />
              <div>
                <span>用户1</span>
                <div onClick={() => this.MineState(3)}>
                  <img src={points} alt="积分" />
                  <span>积分:</span>
                  <span>1000</span>
                </div>
              </div>

            </div>
          </div>
          <div className="MainFunction">
            <div>
              <li onClick={() => this.MineState(2)} ><img src={mine} alt="" /><span>个人中心</span></li>
              <li onClick={() => this.MineState(1)}><img src={archives} alt="" /><span>健康档案</span></li>
              <li onClick={() => this.MineState(4)}><img src={vote} alt="" /><span>我的投票</span></li>
              <li onClick={() => this.MineState(5)}><img src={survey} alt="" /><span>我的问卷</span></li>
            </div>
          </div>
        </div>);
      // 添加 break 关键字
      case 1:
        return (<Archives MineState={this.MineState} />)
      case 2:
        return (<My MineState={this.MineState} />)
      case 3:
        return (<Points MineState={this.MineState} />)
      case 4: 
        return (<Vote MineState={this.MineState} />)
      case 5: // 问卷调查
        return (<Survey MineState={this.MineState} />)


      default:
        // 执行默认的逻辑
        return null;
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

