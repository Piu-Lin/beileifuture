import React, { Component, useState } from "react";

import "./index.less";
import BackIcon from "../../icon/Back.png";
import { Card, TextArea, Button, Toast } from "antd-mobile";



export default class Deliberative extends Component {
  BackToHomeNav = () => {
    this.props.SetHomeState(0);
  };
  state = {
    //详情
    isDetailed: false,
    //选中
    isSelect: true,
    Meeting_Information: [],
    //初始化值
    value: {
      theme: "清洁村庄计划评估",
      participant: "林二十一、韦二十二",
      meetingTime: "2023-11-25",
    },
  };
  //详情切换
  chanegDetailed = () => {
    this.setState({
      isDetailed: !this.state.isDetailed,
    });
  };
  selected = () => {
    if (this.state.isSelect) {
      this.setState({
        isSelect: false,
      });
      this.getvalue(1);
    } else {
      this.setState({
        isSelect: true,
      });
      this.getvalue(0);
    }
  };
  //获取接口数据
  getvalue = (flag) => {
    const user = JSON.parse(localStorage.getItem("user"));

    fetch(
      `http://218.0.59.244:10009/prod-api/governance/discussion_managementr/openList?userId=${user.id}&flag=${flag}`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ Meeting_Information: data.rows }))
      .catch((error) => console.log(error));
  };

  init = () => {
    this.getvalue(0);
  };
  componentDidMount() {
    this.init();
  }
  render() {
    const { Meeting_Information, isDetailed, value } = this.state;

    return (
      <>
        <div className="index">
          <div className="TopNav">
            <div
              className="back"
              onClick={() => {
                isDetailed ? this.chanegDetailed() : this.BackToHomeNav();
              }}
            >
              <img src={BackIcon} alt="返回" />
            </div>
            <div className="title">
              <span>议事管理</span>
            </div>
          </div>
          <div
            style={{ width: "100%", display: isDetailed ? "none" : "block" }}
          >
            {/* 导航栏 */}
            <div className="switchTag">
              <div>
                <span
                  onClick={() => this.selected()}
                  className={this.state.isSelect ? "tagSelected" : ""}
                >
                  未回答
                </span>
              </div>
              <div>
                <span
                  onClick={() => this.selected()}
                  className={this.state.isSelect ? "" : "tagSelected"}
                >
                  已回答
                </span>
              </div>
            </div>
          </div>
          {/*  列表*/}
          <div className="Archives">
            {isDetailed ? (
              <QLOpenDeilt value={value} />
            ) : (
              Meeting_Information.map((item, i) => {
                return (
                  <li
                    className="QLopenLi"
                    key={i}
                    onClick={() => {
                      this.chanegDetailed();
                      this.setState({
                        value: item,
                      });
                    }}
                  >
                    <span></span>

                    <span>{item.theme}</span>

                    <span>{item.meetingTime}</span>
                  </li>
                );
              })
            )}
          </div>
        </div>
      </>
    );
  }
}


//详细组件
export const QLOpenDeilt = (props) => {
  const [text, setText] = useState("");
  const submit = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if(!text) {
      Toast.show({
        icon: "fail",
        content: "请填写内容",
      });
      return;
    }
    const formdata = {
      discussionId: props.value.id,
      userId: user.id,
      answer: text,
    };
    fetch(
      "http://218.0.59.244:10009/prod-api/governance/discussion_answer/openAdd",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
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
            content: "失败",
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
    <div>
      <Card
        headerStyle={{
          color: "rgb(105, 199, 236)",
        }}
        title={props.value.theme}
      >
        {props.value.participant}
        <div style={{ width: "100%", textAlign: "end", marginTop: "20px" }}>
          <span>{props.value.meetingTime}</span>
        </div>
        <div style={{ width: "100%", textAlign: "end" }}>
          <span>{props.value.Issuing_Department}</span>
        </div>
      </Card>
      {props.value.answer ? (
        <>
          <div>{props.value.answer}</div>
        </>
      ) : (
        <>
          <div className="pinglun">
            <span>评论:</span>
            <TextArea
              className="textArea"
              rows={4}
              onChange={(e) => setText(e)}
            ></TextArea>
            <Button
              size="mini"
              color="primary"
              onClick={() => {
                submit();
              }}
            >
              发表
            </Button>
          </div>
        </>
      )}
    </div>
  );
};
