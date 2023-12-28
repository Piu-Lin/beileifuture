/*
 * @Author: bigliweijie 1771662778@qq.com
 * @Date: 2023-10-09 09:11:15
 * @LastEditors: bigliweijie 1771662778@qq.com
 * @LastEditTime: 2023-10-12 17:41:22
 * @FilePath: \beileifuture\src\components\Home\Home.jsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import React, { Component } from "react";
import "./Home.less";
import InformationBulletins from "./icon/InformationBulletins.png";
import DeliberativeManagement from "./icon/DeliberativeManagement.png";
import emergencyIcon from "./icon/emergencyIcon.png";
import Notification from "./components/Notification/Notification";
import NgbConvention from "./components/NgbConvention/NgbConvention";
import NgbActivity from "./components/NgbActivity/NgbActivity";
import { ContentDetail } from "./components/ContentDetail/ContentDetail";

export default class Neighbourhood extends Component {
  state = {
    /** 乡村资讯 */
    villageInformation: [
      {
        /** 小图标 */
        miniCon: "",
        /** 标题 */
        informationTitle: "",
        /** 发布时间 */
        pushTime: "",
        /** 详情栏目 */
        detail: {
          /** 内容文字 */
          activeWord: "",
        },
      },
    ],
    emergency: {
      pushTime: "2023年10月18日",
      content: "吴佳明检查发现严重隐患,请及时关注!",
    },
    HomeState: 0,
    wenhualist: [{ cultureContent: "", image: "", createTime: "" }],
    details:{},
  };
  SetHomeState = (tobe) => {
    this.setState({ HomeState: tobe });
  };
  init = () => {
    fetch("https://metagis.cc:20256/prod-api/neighbourhood/culture/list")
      .then((response) => response.json())
      .then((data) => this.setState({ wenhualist: data.rows }))
      .catch((error) => console.log(error));
  };
  componentDidMount() {
    this.init();
  }
  getdetel = (id) => {
    fetch("https://metagis.cc:20256/prod-api/neighbourhood/culture/" + id)
      .then((response) => response.json())
      .then((data) => {
        const value = data.data;
        this.setState({
          details: {
            content: value.cultureContent,
            title: value.trainPlace,
            date: value.createTime,
            tableType:4,
            id

          },
        });
        console.log(data);
      })
      .catch((error) => console.log(error));

    this.setState({
      isDetailed: !this.state.isDetailed,
    });
  };
  renderContent() {
    switch (this.state.HomeState) {
      case 0: //首页导航
        return (
          <div className="HomeNavBox">
            <img
              id="hero"
              src="https://img.zgyww.cn/pic/0/10/22/66/10226641_977766.jpg"
              alt="hero"
            />
            <div style={{ top: "-5vh" }} className="HomeNavCard">
              <div id="emergencyMessage">
                <img
                  onClick={() => {
                    this.SetHomeState(1);
                  }}
                  id="emergencyIcon"
                  src={emergencyIcon}
                  alt="emergencyIcon"
                />
                <div id="emergencyContent">{this.state.emergency.content}</div>
              </div>
              <div className="homeSubCardLine">
                <div
                  onClick={() => {
                    this.SetHomeState(8);
                  }}
                  className="homeSubCardItem"
                >
                  <img
                    className="homeSubCardBg"
                    src={InformationBulletins}
                    alt="InformationBulletins"
                  />
                  <div className="homeSubCardTitle">邻里公约</div>
                  <div className="homeSubCardContent">邻里公约</div>
                </div>
                <div
                  onClick={() => {
                    this.SetHomeState(9);
                  }}
                  className="homeSubCardItem"
                >
                  <img
                    className="homeSubCardBg"
                    src={DeliberativeManagement}
                    alt="DeliberativeManagement"
                  />
                  <div className="homeSubCardTitle">邻里活动</div>
                  <div className="homeSubCardContent">村务邻里活动</div>
                </div>
              </div>
            </div>
            <div className="HomeNavCard">
              <div className="HomeNavCardMainTitle">邻里文化</div>
              {this.state.wenhualist.map((item, index) => {
                return (
                  <>
                    <div
                      className="HomeZiXunItemBox"
                      key={index}
                      onClick={() => {
                        this.SetHomeState(10)
                       this.getdetel(item.id)
                        ;
                      }}
                    >
                      <img
                        clasName="HomeZiXunSuccinctImg"
                        src={"https://metagis.cc:20256/prod-api/" + item.image}
                        alt="资讯图片"
                      />
                      <div className="HomeZiXunItemContentBox">
                        <div className="HomeZiXunItemContentTitle">
                          {item.cultureContent}
                        </div>
                        <div className="HomeZiXunItemContentTime">
                          {item.createTime && item.createTime.split(" ")[0]}
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        );
      case 1: // 通知公告
        return <Notification SetHomeState={this.SetHomeState} />;
      case 8: // 邻里公约
        return <NgbConvention SetHomeState={this.SetHomeState} />;
      case 9: // 邻里活动
        return <NgbActivity SetHomeState={this.SetHomeState} />;
      case 10: //详情
        return <ContentDetail click={this.SetHomeState} value={this.state.details} />;
      default:
        return <></>;
    }
  }
  render() {
    return <>{this.renderContent()}</>;
  }
}
