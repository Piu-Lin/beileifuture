import React, { Component } from "react";
import "./index.less";
import BackIcon from "../../icon/Back.png";
import { Card } from "antd-mobile";
export default class Deliberative extends Component {
  BackToHomeNav = () => {
    this.props.SetHomeState(0);
  };
  state = {
    isDetailed: false,

    Meeting_Information: [
    ],

    value: {
      theme: "清洁村庄计划评估",
      participant: "林二十一、韦二十二",
      meetingTime: "2023-11-25",
    },
  };
  chanegDetailed = () => {
    this.setState({
      isDetailed: !this.state.isDetailed,
    });
  };
  init = () => {
    fetch("http://218.0.59.244:10009/prod-api/governance/discussion_managementr/openList")
      .then((response) => response.json())
      .then((data) => this.setState({ Meeting_Information: data.rows }))
      .catch((error) => console.log(error));
  };
  componentDidMount(){
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

export const QLOpenDeilt = (props) => {
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
    </div>
  );
};
