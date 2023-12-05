/*
 * @Author: bigliweijie 1771662778@qq.com
 * @Date: 2023-10-09 13:43:45
 * @LastEditors: bigliweijie 1771662778@qq.com
 * @LastEditTime: 2023-10-12 17:21:18
 * @FilePath: \beileifuture\src\components\Mine\Vote\Vote.jsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import React, { Component } from "react";
import backIcon from "../../icon/back.png";
import "./index.less";
import { Form, Button, Dialog, Space, Radio } from "antd-mobile";

export default class Vote extends Component {
  state = {
    isSelect: true,
    isSurveyContext: true,
    massage: [
      {
        id: 1,
        date: "2023年10月12日",
        title: "选举村委会的投票",
        context: "张九主任",
      },

      {
        id: 2,
        date: "2023年10月12日",
        title: "选举村委会的投票",
        context: "张美华主任",
      },

      {
        id: 3,
        date: "2023年10月12日",
        title: "选举村委会的投票",
        context: "王志强主任",
      },

      {
        id: 4,
        date: "2023年10月12日",
        title: "选举村委会的投票",
        context: "李华明主任",
      },

      {
        id: 5,
        date: "2023年10月12日",
        title: "选举村委会的投票",
        context: "陈小红主任",
      },

      {
        id: 6,
        date: "2023年10月12日",
        title: "选举村委会的投票",
        context: "刘建国主任",
      },

      {
        id: 7,
        date: "2023年10月12日",
        title: "选举村委会的投票",
        context: "赵丽娟主任",
      },

      {
        id: 8,
        date: "2023年10月12日",
        title: "选举村委会的投票",
        context: "黄明亮主任",
      },
    ],
    historyMassage: [
      {
        id: 9,
        date: "2023年10月12日",
        title: "选举村委会的投票",
        context: "许文娟主任",
      },

      {
        id: 10,
        date: "2023年10月12日",
        title: "选举村委会的投票",
        context: "冯伟强主任",
      },
    ],
    wenjuanJson: {
      title: "",
    },
  };
  BackTo0 = () => {
    this.props.MineState(0);
  };
  selected = () => {
    this.setState({
      isSelect: !this.state.isSelect,
    });
  };
  switchSurvey = (value, id) => {
    this.setState({
      isSurveyContext: !this.state.isSurveyContext,
      wenjuanJson: { value, id },
    });
  };
  init = () => {
    fetch(
      "http://218.0.59.244:10009/prod-api/governance/online_voting/openList"
    )
      .then((response) => response.json())
      .then((data) => this.setState({ massage: data.rows }))
      .catch((error) => console.log(error));
  };
  componentDidMount() {
    this.init();
  }

  BackToHomeNav = () => {
    this.props.SetHomeState(0);
  };
  render() {
    return (
      <div className="index">
        <div className="TopNav">
          {this.props.comefrom === "1" ? (
            <div
              className="back"
              onClick={() => {
                this.state.isSurveyContext
                  ? this.BackToHomeNav()
                  : this.switchSurvey();
              }}
            >
              <img src={backIcon} alt="返回" />
            </div>
          ) : (
            <div
              className="back"
              onClick={() => {
                this.state.isSurveyContext
                  ? this.BackTo0()
                  : this.switchSurvey();
              }}
            >
              <img src={backIcon} alt="返回" />
            </div>
          )}
          <div className="title">
            <span>投票</span>
          </div>
        </div>
        {this.state.isSurveyContext ? (
          <>
            <div className="switchTag">
              <div>
                <span
                  onClick={() => this.selected()}
                  className={this.state.isSelect ? "tagSelected" : ""}
                >
                  投票
                </span>
              </div>
              <div>
                <span
                  onClick={() => this.selected()}
                  className={this.state.isSelect ? "" : "tagSelected"}
                >
                  历史投票
                </span>
              </div>
            </div>
            <div className="MainContent">
              {this.state.isSelect
                ? this.state.massage.map((item) => {
                    return (
                      <div
                        key={item.id}
                        className="MessageCard"
                        onClick={() => this.switchSurvey(item.content, item.id)}
                      >
                        <div>
                          <span>
                            {item.createTime && item.createTime.split(" ")[0]}
                          </span>
                        </div>
                        <div>
                          <span>{item.title}</span>
                          <span>{item.content}</span>
                        </div>
                      </div>
                    );
                  })
                : this.state.historyMassage.map((item) => {
                    return (
                      <div
                        key={item.id}
                        className="MessageCard"
                        onClick={() => this.switchSurvey(item.context)}
                      >
                        <div>
                          <span>{item.date}</span>
                        </div>
                        <div>
                          <span>{item.title}</span>
                          <span>{item.context}</span>
                        </div>
                      </div>
                    );
                  })}
            </div>
          </>
        ) : (
          <div className="SurveyContext">
            {" "}
            <SurveyContext wenjuanJson={this.state.wenjuanJson} />
          </div>
        )}
      </div>
    );
  }
}

export const SurveyContext = (props) => {
  const userid = JSON.parse(localStorage.getItem('user'))


  const onFinish = (e) => {
    const jsonData={
      questionId:props.wenjuanJson.id,
      answer:e.answer,
      userId:userid.id
    }
    console.log(jsonData)
    fetch('http://218.0.59.244:10009/prod-api/governance/voting_answer/openAdd', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonData),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
    Dialog.alert({
      content: "提交成功",
    });
  };

  return (
    <>
      <Form
        name="form"
        onFinish={onFinish}
        footer={
          <Button block type="submit" color="primary" size="large">
            提交
          </Button>
        }
      >
        <Form.Header>{props.wenjuanJson.value}</Form.Header>
        <Form.Item label="是否同意" name="answer">
          <Radio.Group>
            <Space direction="vertical">
              <Radio value="赞成">赞成</Radio>
              <Radio value="反对">反对</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>
      </Form>
    </>
  );
};
