import React, { Component, useEffect, useState } from "react";
import "./index.less";
import BackIcon from "../../icon/Back.png";
import { ContentDetail } from "../ContentDetail/ContentDetail";

import { Card, TextArea, Button, Toast ,Dialog} from "antd-mobile";

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
      id:0,
      tableType:2
    },
  };
  chanegDetailed = (item) => {
    this.setState({
      card: {
        TrItemTitle: item.title,
        // TrItemTime: item.createTime,
        TrItemDetail: item.conventionContent,
        id:item.id
      },
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
    fetch("http://218.0.59.244:10009/prod-api/neighbourhood/convention/list")
      .then((response) => response.json())
      .then((data) => this.setState({ DeliberativeList: data.rows }))
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
              <Detail card={this.state.card} />
            ) : (
              <>
                <div className="Archives">
                  <div className="TrBox">
                    {DeliberativeList.map((item, i) => {
                      return (
                        <div
                          className="TrItemBox"
                          key={i}
                          onClick={() => {
                            this.chanegDetailed(item);
                          }}
                        >
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
  const [details, setdetails] = useState({
    content: "",
    title: "",
    date: "",
    tableType: 0,
    id: 0,
  });
  const [text, setText] = useState("");
  const [Itemlist, setItemlist] = useState([]);
  const [showPinglun, setshowPinglun] = useState(false);

  


  const postShoucan = () => {
    const { tableType, id } = props.card;
    const user = JSON.parse(localStorage.getItem("user"));

    const formdata = {
      populationId: user.id,
      neighbourhoodId: id,
      tableType: tableType,
      commonContent: text,
      isSignature: 1,
    };
    fetch(
      "http://218.0.59.244:10009/prod-api/neighbourhood/collect",
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
          getcomment()
        } else {
          Toast.show({
            icon: "fail",
            content: "已收藏",
          });
        }
      })
      .catch((error) => {
        Toast.show({
          icon: "fail",
          content: "请检查网络",
        });
      });
    console.log(formdata);
  }
  const postqiandao = () => {
    const { tableType, id } = props.card;
    const user = JSON.parse(localStorage.getItem("user"));

    const formdata = {
      populationId: user.id,
      neighbourhoodId: id,
      tableType: tableType,
      commonContent: text,
      isSignature: 1,
    };
    fetch(
      "http://218.0.59.244:10009/prod-api/neighbourhood/signature",
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
          getcomment()
          
        } else {
          Toast.show({
            icon: "fail",
            content: "已签到",
          });
        }
      })
      .catch((error) => {
        Toast.show({
          icon: "fail",
          content: "请检查网络",
        });
      });
  }

  const postCommit = () => {
    const { tableType, id } = props.card;
    const user = JSON.parse(localStorage.getItem("user"));

    const formdata = {
      populationId: user.id,
      neighbourhoodId: id,
      tableType: tableType,
      commonContent: text,
    };

    fetch(
      "http://218.0.59.244:10009/prod-api/neighbourhood/comment",
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
          getcomment()

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
      setText('')
      setshowPinglun(false)


  };
  const onFinish = (value) => {
    // postqiandao()
    Dialog.alert({
      content: value,
    });
  };
  const getcomment = () => {
    fetch(
      "http://218.0.59.244:10009/prod-api/neighbourhood/comment/list?tableType=2"
    )
      .then((response) => response.json())
      .then((data) => {
        setItemlist(data.rows);
      })
      .catch((error) => console.log(error));
  };

  useEffect(()=>{
    getcomment()
  },[props])

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
        <div className="toolbar">
          <div
            className="toolbar-item"
            onClick={() => onFinish("签到成功")}
          >
            <svg className="cardicon" aria-hidden="true">
              <use xlinkHref="#icon-z-like"></use>
            </svg>
            <span>点赞</span>
          </div>
          <div
            className="toolbar-item"
            onClick={() => postShoucan() }
          >
            <svg className="cardicon" aria-hidden="true">
              <use xlinkHref="#icon-shoucang"></use>
            </svg>
            <span>收藏</span>
          </div>
          <div
            className="toolbar-item"
            onClick={() => postqiandao()}
          >
            <svg className="cardicon" aria-hidden="true">
              <use xlinkHref="#icon-pinglun"></use>
            </svg>
            <span>签到</span>
          </div>
        </div>
        <Button
          size="mini"
          color="primary"
          onClick={() => {
           setshowPinglun(!showPinglun)
          }}
        >
          评论
        </Button>
        <div className="pinglun" style={{display:showPinglun?"block":"none"}}>
          <span>评论:</span>
          <TextArea
            className="textArea"
            rows={4}
            value={text}
            onChange={(e) => setText(e)}
          ></TextArea>
          <Button
            size="mini"
            color="primary"
            onClick={() => {
              postCommit()
            }}
          >
            发表
          </Button>
        </div>
        <div className="comment" style={{ margin: "15px 0 100px 0" }}>
        {Itemlist.values.length === 0 ? (
                <>
                  {Itemlist.map((item, index) => {
                    return (
                      <>
                        <div className="comment-list" key={item.commonContent+index}>
                          <div className="comment-headimg">
                            <img
                              src="https://ts1.cn.mm.bing.net/th/id/R-C.0df376ebe8b20d4c8a9811e4fa536028?rik=FH4U0fuzh0aR9g&riu=http%3a%2f%2fpic44.photophoto.cn%2f20170718%2f1155116378033877_b.jpg&ehk=TQ4obflO5%2fC8mjf7l0uUJGEJAiTHAkBQw64iawawGEE%3d&risl=&pid=ImgRaw&r=0"
                              alt=""
                            />
                          </div>
                          <div className="comment-content">
                            <span>村名{item.populationId}</span>
                            <p>{item.commonContent}</p>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </>
              ) : (
                <>
                  <div className="comment-list" style={{ color: "#677191" }}>
                    暂无评论
                  </div>
                </>
              )}
              </div>
      </div>
    </div>
  );
};
