import React, { Component } from "react";
import "./index.less";
import BackIcon from "../../icon/Back.png";
import { ContentDetail } from "../ContentDetail/ContentDetail";

export default class Deliberative extends Component {
  BackToHomeNav = () => {
    this.props.SetHomeState(0);
  };
  state = {
    isDetailed: false,

    Meeting_Information: [],

    value: {
      theme: "清洁村庄计划评估",
      participant: "林二十一、韦二十二",
      meetingTime: "2023-11-25",
    },
    details: {
      content: "",
      title: "",
      date: "",
    },
  };
  chanegDetailed = (id) => {
    fetch("https://metagis.cc:20256/prod-api/neighbourhood/convention/" + id)
      .then((response) => response.json())
      .then((data) => {
        const value = data.data;
        this.setState({
          details: {
            content: value.conventionContent?value.conventionContent:'',
            title: "",
            date: value.createTime,
            tableType:2
          },
        });
        console.log(data);
      });
      this.setState({
        isDetailed: !this.state.isDetailed,
      });
  };
  chanegState = () => {
    this.setState({
      isDetailed: !this.state.isDetailed,
    });
  };
  init = () => {
    fetch("https://metagis.cc:20256/prod-api/neighbourhood/convention/list")
      .then((response) => response.json())
      .then((data) => this.setState({ Meeting_Information: data.rows }))
      .catch((error) => console.log(error));
  };
  componentDidMount() {
    this.init();
  }
  render() {
    const { Meeting_Information, isDetailed } = this.state;

    return (
      <>
        {isDetailed ? (
          <ContentDetail
            click={this.chanegState}
            value={this.state.details}
          />
        ) : (
          <>
            <div className="index">
              <div className="TopNav">
                <div
                  className="back"
                  onClick={() => {
                     this.BackToHomeNav();
                  }}
                >
                  <img src={BackIcon} alt="返回" />
                </div>
                <div className="title">
                  <span>邻里公约</span>
                </div>
              </div>
              <div className="Archives">
                {Meeting_Information.map((item, i) => {
                  return (
                    <li
                      className="QLopenLi"
                      key={i}
                      onClick={() => {
                        this.chanegDetailed(item.id);
                        this.setState({
                          value: item,
                        });
                      }}
                    >
                      <span></span>

                      <span>{item.conventionContent}</span>

                      <span>
                        {item.createTime && item.createTime.split(" ")[0]}
                      </span>
                    </li>
                  );
                })}
              </div>
            </div>
          </>
        )}
      </>
    );
  }
}
