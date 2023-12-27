import React, { Component } from "react";
import "./index.less";
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
    fetch("https://metagis.cc:20256/prod-api/neighbourhood/convention/list")
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
          <div className="wenhua">
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

                    <span>{item.conventionContent}</span>

                    <span>{item.createTime&&item.createTime.split(" ")[0]}</span>
                  </li>
                );
              })
            )}
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
        title={props.value.conventionContent}
      >
        {props.value.conventionContent}
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
