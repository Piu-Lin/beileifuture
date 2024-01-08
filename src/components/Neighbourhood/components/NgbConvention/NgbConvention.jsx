import React, { Component } from "react";
import "./index.less";
import BackIcon from "../../icon/Back.png";
// import { ContentDetail } from "../ContentDetail/ContentDetail";




export default class Deliberative extends Component {
  BackToHomeNav = () => {
    this.props.SetHomeState(0);
  };
  state = {
    isDetailed: false,

    Meeting_Information: [],

    DeliberativeList: [
      {
        title: "第一章",
        subtitle: "总则",
      },
      {
        title: "第二章",
        subtitle: "婚姻家庭",
      },
    ],

    value: {
      theme: "清洁村庄计划评估",
      participant: "林二十一、韦二十二",
      meetingTime: "2023-11-25",
    },
    card: {
      TrItemTitle: "",
      TrItemTime: "",
      TrItemDetail: "",
    },
  };
  chanegDetailed = (id) => {
    // fetch("https://metagis.cc:20256/prod-api/neighbourhood/convention/" + id)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     const value = data.data;
    //     this.setState({
    //       details: {
    //         content: value.conventionContent ? value.conventionContent : "",
    //         title: "",
    //         date: value.createTime,
    //         tableType: 2,
    //         id,
    //       },
    //     });
    //     console.log(data);
    //   });
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
    const { isDetailed, DeliberativeList } = this.state;

    return (
      <>
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
              {isDetailed ? (
                <Detail card={this.state.card}/>
              ) : (
                <>
            <div className="Archives">
                  
                  <div className="TrBox">
                    {DeliberativeList.map((item, i) => {
                      return (
                        <div className="TrItemBox" key={i} onClick={()=>{this.chanegDetailed()}}>
                          <div className="TrItemTitle">{item.title}</div>
                          <div className="TrItemBottomLine">
                            <div className="TrItemTime">{item.subtitle}</div>
                            <div className="TrItemLookDetail">查看详情</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
            </div>

                </>
              )}
          </div>
        </>
      </>
    );
  }
}

export const Detail = (props) => {
  return (
    <div className="index">
      <div className="Archives">
        <div className="DetailTitle">
          <div>
            <span>{props.card.TrItemTitle}</span>
          </div>
          <div>
            <span>{props.card.TrItemTime}</span>
          </div>
        </div>
        <div className="DetailContext">
          <div className="card">
            <div className="cardContext">
              <span>{props.card.TrItemDetail}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
