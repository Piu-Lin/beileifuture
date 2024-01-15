import React, { useState, useEffect } from "react";
import "./index.less";
import BackIcon from "../../icon/Back.png";
import { TextArea, Dialog, Button, Toast } from "antd-mobile";
import { use } from "echarts";
export function ContentDetail(props) {
  const [isPopMessage, setIsPopMessage] = useState(false);
  const [Itemlist, setItemlist] = useState([]);
  const [text, setText] = useState("");

  const handleClick = () => {
    props.click(0);
  };

  const changePop = () => {
    setIsPopMessage(!isPopMessage);
  };

  const onFinish = (value) => {
    // postqiandao()
    Dialog.alert({
      content: value,
    });
  };

  useEffect(() => {
    console.log("组件根据依赖参数props更新调用");
    getcomment();
  }, []);

  const getcomment = () => {
    const { tableType } = props.value;
    fetch(
      "https://metagis.cc:20256/prod-api/neighbourhood/comment/list?tableType=" +
        tableType
    )
      .then((response) => response.json())
      .then((data) => {
        setItemlist(data.rows);
      })
      .catch((error) => console.log(error));
  };
  const postShoucan = () => {
    const { tableType, id } = props.value;
    const user = JSON.parse(localStorage.getItem("user"));

    const formdata = {
      populationId: user.id,
      neighbourhoodId: id,
      tableType: tableType,
      commonContent: text,
      isSignature: 1,
    };
    fetch("https://metagis.cc:20256/prod-api/neighbourhood/collect", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formdata),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.code === 200) {
          Toast.show({
            icon: "success",
            content: "提交成功",
          });
          getcomment();
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
  };
  const postqiandao = () => {
    const { tableType, id } = props.value;
    const user = JSON.parse(localStorage.getItem("user"));

    const formdata = {
      populationId: user.id,
      neighbourhoodId: id,
      tableType: tableType,
      commonContent: text,
      isSignature: 1,
    };
    fetch("https://metagis.cc:20256/prod-api/neighbourhood/signature", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formdata),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.code === 200) {
          Toast.show({
            icon: "success",
            content: "提交成功",
          });
          getcomment();
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
  };

  const postCommit = () => {
    const { tableType, id } = props.value;
    const user = JSON.parse(localStorage.getItem("user"));

    const formdata = {
      populationId: user.id,
      neighbourhoodId: id,
      tableType: tableType,
      commonContent: text,
    };

    fetch("https://metagis.cc:20256/prod-api/neighbourhood/comment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formdata),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.code === 200) {
          Toast.show({
            icon: "success",
            content: "提交成功",
          });
          getcomment();
          changePop();
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
    setText("");
  };

  const { content, title, date, image } = props.value;
  return (
    <div>
      <div className="index">
        <div className="TopNav">
          <div className="back">
            <img src={BackIcon} alt="返回" onClick={handleClick} />
          </div>
        </div>
        <div className="maincontent">
          <div className="content">
            <div className="title">
              <h2>{title}</h2>
            </div>
            <div className="date">
              {/* <span>村民a</span> */}
              <span>{date}</span>
            </div>
            <div className="indexContent">
             
              <img  style={{width:"90%"}} src={"https://metagis.cc:20256/prod-api/" + image} alt="" />
              <p>{content}</p>
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
              <div className="toolbar-item" onClick={() => postShoucan()}>
                <svg className="cardicon" aria-hidden="true">
                  <use xlinkHref="#icon-shoucang"></use>
                </svg>
                <span>收藏</span>
              </div>
              <div className="toolbar-item" onClick={() => postqiandao()}>
                <svg className="cardicon" aria-hidden="true">
                  <use xlinkHref="#icon-pinglun"></use>
                </svg>
                <span>签到</span>
              </div>
            </div>
          </div>
          <div className="comment">
            <div>
              <div className="title">
                <span>评论</span>
                <span onClick={() => changePop()}>写评论</span>
              </div>
              {isPopMessage ? (
                <>
                  <TextArea
                    className="textarea"
                    autoFocus={true}
                    rows={3}
                    value={text}
                    onChange={(e) => setText(e)}
                  />
                  <Button
                    size="mini"
                    style={{ margin: "5px" }}
                    color="primary"
                    onClick={() => postCommit()}
                  >
                    发表
                  </Button>
                </>
              ) : (
                <></>
              )}
              {Itemlist.values.length === 0 ? (
                <>
                  {Itemlist.map((item, index) => {
                    return (
                      <>
                        <div
                          className="comment-list"
                          key={item.commonContent + index}
                        >
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
      </div>
    </div>
  );
}
