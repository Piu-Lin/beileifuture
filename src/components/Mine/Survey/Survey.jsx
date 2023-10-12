/*
 * @Author: bigliweijie 1771662778@qq.com
 * @Date: 2023-10-09 13:43:45
 * @LastEditors: bigliweijie 1771662778@qq.com
 * @LastEditTime: 2023-10-12 16:01:38
 * @FilePath: \beileifuture\src\components\Mine\Survey\Survey.jsx
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import React, { Component } from 'react'
import backIcon from '../icon/back.png'
import './index.less'
import {
  Form,
  Input,
  Button,
  Dialog,
  Space,
  Radio,
  Checkbox
} from 'antd-mobile'

export default class Survey extends Component {
  state = {
    isSelect: true,
    isSurveyContext: true,
    massage: [
      {
        "id": 1,
        "date": "2023年10月12日",
        "title": "关于村委会选举的问卷",
        "context": "你对村委会选举的参与度如何？请分享你的观点和想法。"
      },
      {
        "id": 2,
        "date": "2023年10月13日",
        "title": "关于村委会投票方式的问卷",
        "context": "你认为村委会投票应该采取哪种方式？请说明你的理由。"
      },
      {
        "id": 3,
        "date": "2023年10月14日",
        "title": "关于村委会议题的问卷",
        "context": "你认为村委会应该优先关注哪些议题？请列举你认为重要的议题。"
      },
      {
        "id": 4,
        "date": "2023年10月15日",
        "title": "关于村委会改革的问卷",
        "context": "你认为村委会是否需要进行改革？如果是，请说明你认为需要改革的方面。"
      },

    ],
    historyMassage: [
      {
        "id": 1,
        "date": "2023年09月28日",
        "title": "关于村委会选举的问卷",
        "context": "你对村委会选举的参与度如何？请分享你的观点和想法。"
      },
      {
        "id": 2,
        "date": "2023年09月25日",
        "title": "关于村委会投票方式的问卷",
        "context": "你认为村委会投票应该采取哪种方式？请说明你的理由。"
      },
      {
        "id": 3,
        "date": "2023年09月18日",
        "title": "关于村委会议题的问卷",
        "context": "你认为村委会应该优先关注哪些议题？请列举你认为重要的议题。"
      },
      {
        "id": 4,
        "date": "2023年09月12日",
        "title": "关于村委会改革的问卷",
        "context": "你认为村委会是否需要进行改革？如果是，请说明你认为需要改革的方面。"
      },
      {
        "id": 5,
        "date": "2023年09月05日",
        "title": "关于村委会财务的问卷",
        "context": "你对村委会财务的使用和透明度是否满意？请分享你的观点和建议。"
      },
      {
        "id": 6,
        "date": "2023年09月02日",
        "title": "关于村委会公平性的问卷",
        "context": "你认为村委会的决策和资源分配是否公平？请阐述你的看法。"
      },
      {
        "id": 7,
        "date": "2023年08月28日",
        "title": "关于村委会成员素质的问卷",
        "context": "你认为村委会成员的素质和能力是否符合要求？请发表你的观点。"
      },
      {
        "id": 8,
        "date": "2023年08月23日",
        "title": "关于村委会民主参与的问卷",
        "context": "你认为村民在村委会决策中的参与度是否充分？请分享你的看法和建议。"
      },
      {
        "id": 9,
        "date": "2023年08月18日",
        "title": "关于村委会沟通渠道的问卷",
        "context": "你认为村委会与村民之间的沟通是否畅通？请说明你的观点和建议。"
      },
      {
        "id": 10,
        "date": "2023年08月12日",
        "title": "关于村委会绩效评估的问卷",
        "context": "你认为如何评估村委会的工作绩效？请分享你的想法和建议。"
      }
    ],
    wenjuanJson: {
      title: ''
    }
  }
  BackTo0 = () => {
    this.props.MineState(0)
  }
  selected = () => {
    this.setState({
      isSelect: !this.state.isSelect
    })
    console.log(this.state)
  }
  switchSurvey = (value) => {
    this.setState({
      isSurveyContext: !this.state.isSurveyContext,
      wenjuanJson: value
    })
    console.log(this.state)
  }
  render() {
    return (
      <div className="index">
        <div className="TopNav">
          <div className="back" onClick={() => { this.state.isSurveyContext ? this.BackTo0() : this.switchSurvey() }} >
            <img src={backIcon} alt="返回" />
          </div>
          <div className="title">
            <span>问卷</span>
          </div>
        </div>
        {
          this.state.isSurveyContext ?
            (<><div className="switchTag">
              <div><span onClick={() => this.selected()} className={this.state.isSelect ? 'tagSelected' : ''}>未填问卷</span></div>
              <div><span onClick={() => this.selected()} className={this.state.isSelect ? '' : 'tagSelected'}>历史问卷</span></div>
            </div>
              <div className="MainContent">
                {
                  this.state.isSelect ?
                    this.state.massage.map(item => {
                      return (<div className="MessageCard" onClick={() => this.switchSurvey(item.title)}>
                        <div><span>{item.date}</span></div>
                        <div>
                          <span>{item.title}</span>
                          <span>{item.context}</span>
                        </div>
                      </div>)
                    }) :
                    this.state.historyMassage.map(item => {
                      return (<div className="MessageCard" onClick={() => this.switchSurvey(item.title)} >
                        <div><span>{item.date}</span></div>
                        <div>
                          <span>{item.title}</span>
                          <span>{item.context}</span>
                        </div>
                      </div>)
                    })
                }
              </div></>) : <div className="SurveyContext"> <SurveyContext wenjuanJson={this.state.wenjuanJson} /></div>
        }


      </div>
    )
  }
}


export const SurveyContext = (props) => {
  const onFinish = () => {
    Dialog.alert({
      content: "提交成功",
    })
  }

  return (
    <>
      <Form
        name='form'
        onFinish={onFinish}
        footer={
          <Button block type='submit' color='primary' size='large'>
            提交
          </Button>
        }
      >
        <Form.Header>{props.wenjuanJson}</Form.Header>
        <Form.Item  label='你是否知道即将举行的村委会选举？'>
          <Radio.Group >
            <Space direction='vertical'>
              <Radio value='1'>是</Radio>
              <Radio value='2'>否</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>


  <Form.Item label="你对村委会选举的重要性有何看法？">
    <Radio.Group>
      <Space direction="vertical">
        <Radio value="1">非常重要</Radio>
        <Radio value="2">重要</Radio>
        <Radio value="3">一般</Radio>
        <Radio value="4">不重要</Radio>
        <Radio value="5">完全不关心</Radio>
      </Space>
    </Radio.Group>
  </Form.Item>

  <Form.Item label="你对现任村委会的表现满意吗？">
    <Radio.Group>
      <Space direction="vertical">
        <Radio value="1">非常满意</Radio>
        <Radio value="2">满意</Radio>
        <Radio value="3">一般</Radio>
        <Radio value="4">不满意</Radio>
        <Radio value="5">非常不满意</Radio>
      </Space>
    </Radio.Group>
  </Form.Item>

  <Form.Item label="你认为村委会选举应该具备哪些基本条件？">
    <Checkbox.Group>
      <Checkbox value="1">公平竞争</Checkbox>
      <Checkbox value="2">透明度</Checkbox>
      <Checkbox value="3">民主程序</Checkbox>
      <Checkbox value="4">平等机会</Checkbox>
      <Checkbox value="5">能力和素质要求</Checkbox>
      <Checkbox value="6">公正监督</Checkbox>
    </Checkbox.Group>
  </Form.Item>

  <Form.Item label="你对候选人的背景和经验有何要求？">
    <Checkbox.Group>
      <Checkbox value="1">学历背景</Checkbox>
      <Checkbox value="2">工作经验</Checkbox>
      <Checkbox value="3">社区服务经验</Checkbox>
      <Checkbox value="4">公共管理能力</Checkbox>
      <Checkbox value="5">沟通与合作能力</Checkbox>
    </Checkbox.Group>
  </Form.Item>

  <Form.Item label="你认为村委会选举中应该采用哪种投票方式？">
    <Radio.Group>
      <Space direction="vertical">
        <Radio value="1">纸质选票</Radio>
        <Radio value="2">电子投票</Radio>
        <Radio value="3">在线投票</Radio>
        <Radio value="4">其他</Radio>
        <Input placeholder="请注明" />
      </Space>
    </Radio.Group>
  </Form.Item>

  <Form.Item label="你希望村委会选举后的工作重点是什么？">
    <Checkbox.Group>
      <Checkbox value="1">社区发展和基础设施建设</Checkbox>
      <Checkbox value="2">教育和文化事务</Checkbox>
      <Checkbox value="3">环境保护和卫生</Checkbox>
      <Checkbox value="4">经济发展和就业</Checkbox>
      <Checkbox value="5">社会福利和民生改善</Checkbox>
    </Checkbox.Group>
  </Form.Item>

  <Form.Item label="你对村委会的决策过程和资源分配是否满意？">
    <Radio.Group>
      <Space direction="vertical">
        <Radio value="1">非常满意</Radio>
        <Radio value="2">满意</Radio>
        <Radio value="3">一般</Radio>
        <Radio value="4">不满意</Radio>
        <Radio value="5">非常不满意</Radio>
      </Space>
    </Radio.Group>
  </Form.Item>

      </Form>
    </>
  )
}
