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
import bg2024 from "./img/2024海报.png";
import Ngwenhua from "./img/邻里文化.png";
import Ng18 from "./img/十八进士.png";
import Ng17 from "./img/十七祠堂.png";
import Ngyiwu from "./img/义务兵文化.png";
import Ngxisu from "./img/文化习俗.png";
import Nglitang from "./img/文化礼堂.png";

import Notification from "./components/Notification/Notification";
import NgbConvention from "./components/NgbConvention/NgbConvention";
import NgbActivity from "./components/NgbActivity/NgbActivity";
import { ContentDetail } from "./components/ContentDetail/ContentDetail";
import { ContentDetail2 } from "./components/ContentDetail2/ContentDetail2";

export default class Neighbourhood extends Component {
  state = {
    emergency: {
      pushTime: "2023年10月18日",
      content: "吴佳明检查发现严重隐患,请及时关注!",
    },
    detailslist: [
      {
        title: "十八进士",
        content:
          "据杨氏宗谱记载，在北宋初，杨氏从河南开封迁徙至赤岸，后由杨澄移居倍磊。杨氏在倍磊曾出过十余位进士，杨澄为第一位。通议大夫杨焯题清白堂诗中有“家传索简三千卷，身透龙门十八人”之句。",
        imglist: [
          {
            url: "https://metagis.cc:20238/beilei/邻里文化/十八进士/图片1.png",
          },
        ],
      },
      {
        title: "文化礼堂",
        content: "2011年，初任村党支部书记的陈加斌着手建设倍磊四村文化礼堂，将村史民情、人文故事、精神传承融入其中，讲述着倍磊村商贸历史、义乌兵文化、非物质文化遗产及新农村建设的成就，丰富滋润了村民的精神世界。在他的不懈努力下，倍磊四村文化礼堂成为全市第一个三星级文化礼堂。在陈加斌的带领下，倍磊村迈开了古建筑保护开发利用坚实的一步，倍磊成为了佛堂镇文化输出的重要窗口之一。",
        imglist: [
          {
            url:"https://metagis.cc:20238/beilei/邻里文化/文化礼堂/1.jpg"
          },
          {
            url:"https://metagis.cc:20238/beilei/邻里文化/文化礼堂/2.jpg"
          },
          {
            url:"https://metagis.cc:20238/beilei/邻里文化/文化礼堂/3.jpg"
          }
        ],
      },
      {
        title: "文化习俗",
        content: "迎龙灯是义乌乡村正月里最盛大最具人气的活动之一，义乌西南倍磊街的龙灯以历史悠久数量众多而闻名，可谓是名副其实的龙灯之乡。倍磊街曾有大大小小的龙灯20多条，灯名也是五花八门，有锦城大灯头、小灯头、仰天龙、张肉桶、魁星灯、龙曲灯、泥龙灯、荷花灯、盐架灯、水阁龙、七十五板龙、五惇堂龙，还有后杭红笼灯、田沿青笼灯等等。迎灯的时间特别长，从年初九开始，一直到正月廿二，还有清明灯。倍磊龙灯有长有短，长的有上千桥，短的只有几十桥。板灯中最长的属锦城大灯头。二十世纪六十年代“破四旧”运动中，倍磊街的灯头大多被毁。直到八十年代中期，富裕起来的村民再度拾起那代表华夏图腾的龙之精魂，村里的龙灯又开始舞动起来。\n在明代剿灭东南沿海倭寇的战争中，俞大猷与戚继光并列，一直为人称道。就某种程度而言，俞大猷还在戚继光之上。在当年抗击倭寇的东南沿海一带，“俞龙戚虎，杀贼如土”的民谣一直传诵至今。，农历五月廿二日是俞大官的诞辰，村里每年都举行隆重的庆典。届时，俞大官塑像前陈设了长条形供桌，桌上置香案，红烛高照，线香缭绕，摆满了鸡蛋、索面、美味佳肴、时鲜水果，最富特色的是一对交颈鸳鸯。鸳鸯寓意夫妻恩爱，生活美满，引得大家闺秀、新婚少妇纷纷前来叩拜祈福。\n 撞铜锣是朝拜俞大官特有的民俗仪式。街心亭的南面放置了一座铜锣架，架的两端各挂一面铜锣，敲铜锣者站在中间，手持一个锣槌，左锣敲一槌，右锣敲一槌，民间称:“撞铜锣”。倍磊古村铜锣形，相传铜锣撞得越响，家族越兴旺。为敦亲睦族，共振家声，就有了撞铜锣的习俗。",
        imglist: [
          {
            url:"https://metagis.cc:20238/beilei/邻里文化/文化习俗/迎龙灯.png"
          },
          {
            url:"https://metagis.cc:20238/beilei/邻里文化/文化习俗/撞铜锣.png"
          }
        ],
      },
      {
        title: "义乌兵文化",
        content: "倍磊古村落历史悠久，名人辈出，古迹众多，民风淳朴，是义乌首个省级历史文化名村。“义乌兵”一直是倍磊人的骄傲，据清嘉庆《义乌县志》和《倍磊陈氏宗谱》记载，倍磊村当时被戚继光征兵北上的青壮年有803人，其中“远”字辈613人、“椿”字辈123人、“炎”字辈67人。",
        imglist: [
          {
            url:"https://metagis.cc:20238/beilei/邻里文化/义乌兵文化/图片.png"
          }
        ],
      },
      {
        title: "十七祠堂",
        imglist: [
          {
            url:"https://metagis.cc:20238/beilei/邻里文化/十七祠堂/4d5b13806bf36f13414281dbe06010681671416655563.png"
          },
          {
            url:"https://metagis.cc:20238/beilei/邻里文化/十七祠堂/10179918_125147.png"
          },
          {
            url:"https://metagis.cc:20238/beilei/邻里文化/十七祠堂/图片3"
          }
        ],
      },
    ],
    HomeState: 0,
    wenhualist: [{ cultureContent: "", image: "", createTime: "" }],
    details: {},
    details2: {
      title: "",
      content: "",
      imglist: [],
    },
  };
  SetHomeState = (tobe) => {
    this.setState({ HomeState: tobe });
  };
  setdetails2 = (id)=>{
    const list  = this.state.detailslist
    this.setState({details2:list[id]})

    console.log(list[id])
  }
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
              <div id="emergencyMessage2">
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
              <img src={bg2024} alt="" style={{ width: "100%" }} />
              <div className="homeSubCardLine">
                <div
                  onClick={() => {
                    this.setdetails2(0)
                    this.SetHomeState(11);

                  }}
                  className="homeSubCardItem"
                >
                  <img src={Ng18} alt="InformationBulletins" />
                  <div className="homeSubCardContentE">十八进士</div>
                </div>
                <div
                  onClick={() => {
                    this.SetHomeState(11);
                  }}
                  className="homeSubCardItem"
                >
                  <img
                    className="homeSubCardBg"
                    src={Ngwenhua}
                    alt="Ngwenhua"
                  />
                  <div className="homeSubCardTitle">邻里文化</div>
                  <div className="homeSubCardContent">历史与活动</div>
                </div>
              </div>
              <div className="homeSubCardLine">
                <div
                  onClick={() => {
                    this.setdetails2(4)
                    this.SetHomeState(11);

                    
                  }}
                  className="homeSubCardItem"
                >
                  <img src={Ng17} alt="InformationBulletins" />
                  <div className="homeSubCardContentE">十七祠堂</div>
                </div>
                <div
                  onClick={() => {
                    this.setdetails2(3)
                    this.SetHomeState(11);

                    
                  }}
                  className="homeSubCardItem"
                >
                  <img src={Ngyiwu} alt="InformationBulletins" />
                  <div className="homeSubCardContentE">义乌兵文化</div>
                </div>
              </div>
              <div className="homeSubCardLine">
                <div
                  onClick={() => {
                    this.setdetails2(2)
                    this.SetHomeState(11);

                    
                  }}
                  className="homeSubCardItem"
                >
                  <img src={Ngxisu} alt="InformationBulletins" />
                  <div className="homeSubCardContentE">文化习俗</div>
                </div>
                <div
                  onClick={() => {
                    this.setdetails2(1)
                    this.SetHomeState(11);

                    
                  }}
                  className="homeSubCardItem"
                >
                  <img src={Nglitang} alt="InformationBulletins" />
                  <div className="homeSubCardContentE">文化礼堂</div>
                </div>
              </div>
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
        return (
          <ContentDetail click={this.SetHomeState} value={this.state.details} />
        );
      case 11: //详情2
        return (
          <ContentDetail2
            click={this.SetHomeState}
            value={this.state.details2}
          />
        );
      default:
        return <></>;
    }
  }
  render() {
    return <>{this.renderContent()}</>;
  }
}
