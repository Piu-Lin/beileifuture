/*
 * @Author: bigliweijie 1771662778@qq.com
 * @Date: 2023-10-09 13:43:45
 * @LastEditors: bigliweijie 1771662778@qq.com
 * @LastEditTime: 2023-10-12 17:15:30
 * @FilePath: \beileifuture\src\components\Mine\Vote\Vote.jsx
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

export default class Vote extends Component {
  state = {
    isSelect: true,
    isSurveyContext: true,
    massage: [
      
{
  "id": 1,
  "date": "2023年10月12日",
  "title": "选举村委会的投票",
  "context": "林日升主任"
  },
  
  {
  "id": 2,
  "date": "2023年10月12日",
  "title": "选举村委会的投票",
  "context": "张美华主任"
  },
  
  {
  "id": 3,
  "date": "2023年10月12日",
  "title": "选举村委会的投票",
  "context": "王志强主任"
  },
  
  {
  "id": 4,
  "date": "2023年10月12日",
  "title": "选举村委会的投票",
  "context": "李华明主任"
  },
  
  {
  "id": 5,
  "date": "2023年10月12日",
  "title": "选举村委会的投票",
  "context": "陈小红主任"
  },
  
  {
  "id": 6,
  "date": "2023年10月12日",
  "title": "选举村委会的投票",
  "context": "刘建国主任"
  },
  
  {
  "id": 7,
  "date": "2023年10月12日",
  "title": "选举村委会的投票",
  "context": "赵丽娟主任"
  },
  
  {
  "id": 8,
  "date": "2023年10月12日",
  "title": "选举村委会的投票",
  "context": "黄明亮主任"
  },
  


    ],
    historyMassage: [
      {
        "id": 9,
        "date": "2023年10月12日",
        "title": "选举村委会的投票",
        "context": "许文娟主任"
        },
        
        {
        "id": 10,
        "date": "2023年10月12日",
        "title": "选举村委会的投票",
        "context": "冯伟强主任"
        },
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
            <span>投票</span>
          </div>
        </div>
        {
          this.state.isSurveyContext ?
            (<><div className="switchTag">
              <div><span onClick={() => this.selected()} className={this.state.isSelect ? 'tagSelected' : ''}>投票</span></div>
              <div><span onClick={() => this.selected()} className={this.state.isSelect ? '' : 'tagSelected'}>历史投票</span></div>
            </div>
              <div className="MainContent">
                {
                  this.state.isSelect ?
                    this.state.massage.map(item => {
                      return (<div className="MessageCard" onClick={() => this.switchSurvey(item.context)}>
                        <div><span>{item.date}</span></div>
                        <div>
                          <span>{item.title}</span>
                          <span>{item.context}</span>
                        </div>
                      </div>)
                    }) :
                    this.state.historyMassage.map(item => {
                      return (<div className="MessageCard" onClick={() => this.switchSurvey(item.context)} >
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
        <Form.Item label='是否同意'>
          <Radio.Group >
            <Space direction='vertical'>
              <Radio value='1'>是</Radio>
              <Radio value='2'>否</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>


      
      </Form>
    </>
  )
}
