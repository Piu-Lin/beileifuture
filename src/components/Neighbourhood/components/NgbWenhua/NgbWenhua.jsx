import React, { Component } from "react";
import "./index.less";
import BackIcon from "../../icon/Back.png";
import { ContentDetail } from "../ContentDetail/ContentDetail";

export default class NgbWenhua extends Component {
  BackToHomeNav = () => {
    this.props.SetHomeState(0);
  };
  state = {
    items: [
      {
        url: "http://120.27.208.55:10001/prod-api//profile/upload/2023/09/20/41f683b9-c5e2-4f5f-8ee2-7a83738fd98e.jpg",
        name: "慰问老人邻里活动",
        content:
          "倍磊村一直以来都是一个充满温情和凝聚力的社区，我们始终关心着每一位村民的幸福与健康啥的",
        date: "2023年10月18日",
      },
    ],
    isDetailed: false,
    details: {
      content: "",
      title: "",
      date: "",
      tableType: 4,
      id: 0,
    },
  };
  chanegDetailed = (id) => {
    fetch("http://218.0.59.244:10009/prod-api/neighbourhood/culture/" + id)
      .then((response) => response.json())
      .then((data) => {
        const value = data.data;
        let imgarry = value.image.split(",");

        this.setState({
          details: {
            content: value.cultureContent,
            title: value.trainPlace,
            date: value.createTime,
            image: imgarry,
            tableType: 4,
            id,
          },
        });
        console.log(data);
      })
      .catch((error) => console.log(error));

    this.setState({
      isDetailed: !this.state.isDetailed,
    });
  };
  init = () => {
    fetch("http://218.0.59.244:10009/prod-api/neighbourhood/culture/list")
      .then((response) => response.json())
      .then((data) => {
        
        let newlist = []
        data.rows.map((item)=>{
          newlist.push({
            url: item.image.split(","),
            cultureName: item.cultureName,
            cultureContent: item.cultureContent,
            createTime: item.createTime,
            id: item.id,
            remark:item.remark
          })
        })
        console.log(newlist)
        this.setState({
          items: newlist
        });
      })
      .catch((error) => console.log(error));
  };
  componentDidMount() {
    this.init();
  }

  render() {
    const { isDetailed } = this.state;
    return (
      <>
        {isDetailed ? (
          <ContentDetail
            click={this.chanegDetailed}
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
                  <span>邻里文化</span>
                </div>
              </div>
              <div className="Archives">
                {this.state.items.map((element, i) => {
                  return (
                    <>
                      <div
                        className={i === 0 ? "Ngitem" : "grayItem"}
                        key={i}
                        onClick={() => this.chanegDetailed(element.id)}
                      >
                        <div>
                          <img
                            src={
                              "http://218.0.59.244:10009/prod-api/" +
                                element.url[0]
                            }
                            alt="图片"
                          />
                        </div>
                        <div>
                          {/* <div className="fire"></div> */}

                          {i === 0 ? <div className="fire"></div> : <></>}
                          <span className="title">
                            {element.cultureContent}
                          </span>
                          <span className="content">{element.remark}</span>
                          <span className="date">
                            {element.createTime &&
                              element.createTime.split(" ")[0]}
                          </span>
                        </div>
                      </div>
                    </>
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
