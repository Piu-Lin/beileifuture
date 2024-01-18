import React, { Component, useEffect, useState } from "react";
import "./index.less";
import BackIcon from "../../icon/Back.png";
import { Card } from "antd-mobile";

// import { ContentDetail } from "../ContentDetail/ContentDetail";、

/* 党建动态*/
export default class NgbActivity extends Component {
  // 返回
  BackToHomeNav = () => {
    this.props.SetHomeState(0);
  };
  state = {
    items: [],
    isDetailed: false,
    details: {},
    id: 0,
  };
  chanegDetailed = (id) => {
    this.setState({ id });

    this.setState({
      isDetailed: !this.state.isDetailed,
    });
  };
  init = () => {
    fetch("https://metagis.cc:20256/prod-api/service/memberDynamic/list")
      .then((response) => response.json())
      .then((data) => this.setState({ items: data.rows }))
      .catch((error) => console.log(error));
  };
  componentDidMount() {
    this.init();
  }
  render() {
    const { isDetailed } = this.state;
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
              <span>党建动态</span>
            </div>
          </div>
          <div className="Archives">
            {isDetailed ? (
              <>
                <QLOpenDeilt id={this.state.id}></QLOpenDeilt>
              </>
            ) : (
              this.state.items.map((element, i) => {
                return (
                  <>
                    <div
                      className="item"
                      key={i}
                      onClick={() => this.chanegDetailed(element.id)}
                    >
                      <div>
                        <img
                          src={
                            "https://metagis.cc:20256/prod-api/" + element.image
                          }
                          alt="图片"
                        />
                      </div>
                      <div>
                        <span className="title">{element.title}</span>
                        <span className="content">{element.content}</span>
                        <span className="date">
                          {element.createTime &&
                            element.createTime.split(" ")[0]}
                        </span>
                      </div>
                    </div>
                  </>
                );
              })
            )}
            {}
          </div>
        </div>
      </>
    );
  }
}

//详情组件
export const QLOpenDeilt = (props) => {
  const [item, setItem] = useState({
    id: 1,
    time: "2023-12-29",
    content: "党建动态内容",
    place: "党建动态地点",
    image: "/profile/upload/2023/12/29/右上角_20231229150950A001.png",
    title: "党建动态标题",
    delFlag: 0,
  });
  //初始化
  useEffect(() => {
    fetch("https://metagis.cc:20256/prod-api/service/memberDynamic/" + props.id)
      .then((response) => response.json())
      .then((data) => setItem(data.data))
      .catch((error) => console.log(error));
  }, [props.id]);

  return (
    <div>
      <Card
        headerStyle={{
          color: "rgb(105, 199, 236)",
        }}
        title={item.title}
      >
        {<div>{item.content}</div>}
        <img
          style={{ width: "100%" }}
          src={"https://metagis.cc:20256/prod-api/" + item.image}
          alt="图片"
        />

        <div style={{ width: "100%", textAlign: "end", marginTop: "20px" }}>
          <span>{item.time}</span>
        </div>
        <div style={{ width: "100%", textAlign: "end" }}>
          <span>{item.place}</span>
        </div>
      </Card>
    </div>
  );
};
