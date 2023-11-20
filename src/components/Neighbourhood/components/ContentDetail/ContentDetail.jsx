import React, { useState } from "react";
import "./index.less";
import BackIcon from "../../icon/Back.png";
import { TextArea, Dialog } from "antd-mobile";
export function ContentDetail(props) {
  const [isPopMessage, setIsPopMessage] = useState(false);
  const handleClick = () => {
    props.click(0);
  };
  const changePop = () => {
    setIsPopMessage(!isPopMessage);
  };
  const onFinish = (value) => {
    Dialog.alert({
      content: value,
    })
  }
  const list = true;
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
              <h2>乡村振兴</h2>
            </div>
            <div className="date">
              <span>村民a</span>
              <span>2023年11月20日</span>
            </div>
            <div className="indexContent">
              <p>
                在党和政府的领导下，乡村振兴正在如火如荼地进行中。我们致力于改善农村基础设施，发展现代农业，促进农村旅游等产业，让农村更加繁荣美丽。
                同时，我们也关注农民的生计和幸福。我们积极推进精准扶贫，帮助农民脱贫致富；加强教育、医疗、文化等社会事业，提高农民的生活质量。
                让农村更美好，让农民更幸福，是我们不变的追求。让我们一起为乡村振兴贡献自己的力量！
                #乡村振兴路上有你 #美丽乡村
                在党和政府的领导下，乡村振兴正在如火如荼地进行中。我们致力于改善农村基础设施，发展现代农业，促进农村旅游等产业，让农村更加繁荣美丽。
                同时，我们也关注农民的生计和幸福。我们积极推进精准扶贫，帮助农民脱贫致富；加强教育、医疗、文化等社会事业，提高农民的生活质量。
                让农村更美好，让农民更幸福，是我们不变的追求。让我们一起为乡村振兴贡献自己的力量！
              </p>
            </div>
            <div className="toolbar">
              <div className="toolbar-item" onClick={()=>onFinish("点赞成功")}>
                <svg className="cardicon" aria-hidden="true">
                  <use xlinkHref="#icon-z-like"></use>
                </svg>
                <span>点赞</span>
              </div>
              <div className="toolbar-item" onClick={()=>onFinish("收藏成功")}>
                <svg className="cardicon" aria-hidden="true">
                  <use xlinkHref="#icon-shoucang"></use>
                </svg>
                <span>收藏</span>
              </div>
              <div className="toolbar-item" onClick={()=>onFinish("签到成功")}>
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
                  <TextArea className="textarea" autoFocus={true} rows={3} />
                </>
              ) : (
                <></>
              )}
              {list ? (
                <>
                  <div className="comment-list">
                    <div className="comment-headimg">
                      <img
                        src="https://ts1.cn.mm.bing.net/th/id/R-C.0df376ebe8b20d4c8a9811e4fa536028?rik=FH4U0fuzh0aR9g&riu=http%3a%2f%2fpic44.photophoto.cn%2f20170718%2f1155116378033877_b.jpg&ehk=TQ4obflO5%2fC8mjf7l0uUJGEJAiTHAkBQw64iawawGEE%3d&risl=&pid=ImgRaw&r=0"
                        alt=""
                      />
                    </div>
                    <div className="comment-content">
                      <span>村名甲</span>
                      <p>为人民服务</p>
                    </div>
                  </div>
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
