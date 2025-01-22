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
import points from './icon/points.png'

export default class Mine extends Component {
  state = {
    MineState: 0,
    username:'用户1',
    points:0,
  }
  MineState = (tobe) => {
    this.setState({ MineState: tobe })
  }
  changePoint = (points) => {
    this.setState({ points })
  }
  componentDidMount(){
    
    let username = JSON.parse(localStorage.getItem('user'))
    if (!username){
      username='张三'
    }
    this.setState({username:username.name})
    fetch(
      `http://218.0.59.244:10009/prod-api/governance/integral_manage/openList?userId=${username.id}`
    )
      .then((response) => response.json())
      .then((data) =>this.setState({ points: data.totalScore }))
      .catch((error) => console.log(error));
  }
  renderContent() {
    switch (this.state.MineState) {
      case 0:
        return (<div className="index">
          <div className="head">
            <div className="headImg">
              <img className="imgHead" src={headImg} alt="头像" />
              <div>
                <span>{this.state.username}</span>
                <div onClick={() => this.MineState(3)}>
                  <img src={points} alt="积分" />
                  <span>积分:</span>
                  <span>{this.state.points}</span>
                </div>
              </div>

            </div>
          </div>
          <div className="MainFunction">
            <div>
              <li onClick={() => this.MineState(2)} ><img src={mine} alt="" /><span>个人中心</span></li>
              <li onClick={() => this.MineState(1)}><img src={archives} alt="" /><span>我的档案</span></li>
              <li onClick={() => this.MineState(4)}><img src={vote} alt="" /><span>我的投票</span></li>
              <li onClick={() => this.MineState(3)}><img src={points} alt="" /><span>我的积分</span></li>
            </div>
          </div>
        </div>);
      case 1:
        return (<Archives MineState={this.MineState} />)
      case 2: //我的
        return (<My MineState={this.MineState} />)
      case 3: //积分
         return (<Points MineState={this.MineState} points={this.state.points} changePoint={this.changePoint} />)
      case 4: // 投票
        return (<Vote MineState={this.MineState} />)
      case 5: // 问卷调查
        return (<Survey MineState={this.MineState} />)
      default:
        return <><div>暂无内容</div></>;
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

