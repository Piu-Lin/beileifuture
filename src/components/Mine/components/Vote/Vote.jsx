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
import { Form, Button, Toast, Space, Radio } from "antd-mobile";

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
    ],
    wenjuanJson: {
      title: "",
    },
    ishistory: true,
    endorse:0,
    oppose:1,
  };
  BackTo0 = () => {
    this.props.MineState(0);
  };
  selected = () => {
    this.setState({
      isSelect: !this.state.isSelect,
    });
  };
  switchSurvey = (value, id, ishistory,endorse,oppose) => {
    this.setState({
      isSurveyContext: !this.state.isSurveyContext,
      wenjuanJson: { value, id },
      ishistory,
      endorse:endorse?endorse:0,
      oppose:oppose?oppose:0,
    });
    this.init()
  };
  init = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    fetch(
      `http://218.0.59.244:10009/prod-api/governance/online_voting/openList?userId=${user.id}&flag=0&grid=${user.villageId}`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ massage: data.rows }))
      .catch((error) => console.log(error));
    fetch(
      `http://218.0.59.244:10009/prod-api/governance/online_voting/openList?userId=${user.id}&flag=1&grid=${user.villageId}`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ historyMassage: data.rows }))
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
                        onClick={() =>
                          this.switchSurvey(item.content, item.id, true)
                        }
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
                        onClick={() =>
                          this.switchSurvey(item.content, item.id, false,item.endorse,item.oppose)
                        }
                      >
                        <div>
                          {item.createTime && item.createTime.split(" ")[0]}
                        </div>
                        <div>
                          <span>{item.title}</span>
                          <span>{item.content}</span>
                        </div>
                      </div>
                    );
                  })}
            </div>
          </>
        ) : (
          <div className="SurveyContext">
            {" "}
            <SurveyContext wenjuanJson={this.state.wenjuanJson} ishistory={this.state.ishistory} endorse={this.state.endorse} oppose={this.state.oppose} />
          </div>
        )}
      </div>
    );
  }
}

export const SurveyContext = (props) => {
  const userid = JSON.parse(localStorage.getItem("user"));

  const onFinish = (e) => {
    const jsonData = {
      questionId: props.wenjuanJson.id,
      answer: e.answer,
      userId: userid.id,
    };
    console.log(jsonData);
    fetch(
      "http://218.0.59.244:10009/prod-api/governance/voting_answer/openAdd",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonData),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.code === 200) {
          Toast.show({
            icon: "success",
            content: "提交成功",
          });
        } else {
          Toast.show({
            icon: "fail",
            content: "提交失败",
          });
        }
      })
      .catch((error) => {
        Toast.show({
          icon: "fail",
          content: "请检查网络",
        });
      });
  };

  return (
    <>
      {props.ishistory ? (
        <>
          {" "}
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
      ) : (
        <>
          <div>
          <Form
            name="form"
            onFinish={onFinish}
        
          >
            <Form.Header>{props.wenjuanJson.value}</Form.Header>
            <Form.Item label="投票结果" name="answer">
              <div>
                赞成：{props.endorse} 票
              </div>
              <div>
                反对：{props.oppose} 票
              </div>
            </Form.Item>
          </Form>
          </div>
        
        </>
      )}
    </>
  );
};
