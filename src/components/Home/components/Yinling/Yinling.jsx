import React, { Component, useEffect, useState } from "react";
import "./index.less";
import BackIcon from "../../icon/Back.png";
import { Card } from "antd-mobile";

// import { ContentDetail } from "../ContentDetail/ContentDetail";

export default class NgbActivity extends Component {
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
      {
        url: "http://120.27.208.55:10001/prod-api//profile/upload/2022/12/14/334807be-3221-4d8f-a402-01dd81eab4b1.jpg",
        name: "阅读邻里活动",
        content:
          "在这个信息爆炸的时代，我们常常被各种asdsa sdasd adasdsa撒旦  ",
        date: "2023年10月18日",
      },
    ],
    isDetailed: false,
    details: {},
    id:0,
  };
  chanegDetailed = (id) => {
    this.setState({id})

    this.setState({
      isDetailed: !this.state.isDetailed,
    });
  };
  init = () => {
    fetch("http://218.0.59.244:10009/prod-api/service/memberLead/list")
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
              <span>党建引领</span>
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
                            "http://218.0.59.244:10009/prod-api/" + element.image
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
  //
    useEffect(()=>{
      fetch("http://218.0.59.244:10009/prod-api/service/memberLead/"+props.id)
        .then((response) => response.json())
        .then((data) => setItem(data.data))
        .catch((error) => console.log(error));
    },[props.id])

  return (
    <div>
      <Card
        headerStyle={{
          color: "rgb(105, 199, 236)",
        }}
        title={item.title}
      >
        {
          <div>{item.content}</div>
        }
        <img style={{width: "100%"}} src={"http://218.0.59.244:10009/prod-api/"+item.image} alt="图片" />
        
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
