import React, { Component } from "react";
import "./index.less";
import BackIcon from "../../icon/Back.png";

export default class NgbActivity extends Component {
  BackToHomeNav = () => {
    this.props.SetHomeState(0);
  };
  state = {
    Village_Affairs_Information: [
      {
        Title: "村庄发展计划",
        Date: "2023-03-10",
        Content:
          "根据本年度计划，村庄将进行基础设施改善和农业项目支持。详细计划将于下周公开。",
        Issuing_Department: "村委会",
      },
      {
        Title: "村民会议通知",
        Date: "2023-03-15",
        Content:
          "请所有村民参加下周的村民会议，以讨论重要事项，包括村庄预算分配。",
        Issuing_Department: "村委会",
      },
      {
        Title: "农田改良项目",
        Date: "2023-03-20",
        Content:
          "村庄计划进行农田改良项目，以提高农产品产量。请联系农田项目小组获得更多信息。",
        Issuing_Department: "农田项目小组",
      },
      {
        Title: "清洁村庄倡议",
        Date: "2023-03-25",
        Content: "我们鼓励村民积极参与清洁村庄倡议，一起保持村庄整洁美观。",
        Issuing_Department: "环保小组",
      },
      {
        Title: "社区健康检查计划",
        Date: "2023-04-05",
        Content: "社区健康检查计划将于4月启动。请关注进一步通知。",
        Issuing_Department: "卫生部门",
      },
      {
        Title: "村庄文化节安排",
        Date: "2023-04-10",
        Content: "准备村庄文化节，希望村民积极参与，展示我们的传统和文化。",
        Issuing_Department: "文化节组织委员会",
      },
      {
        Title: "基础设施改善计划更新",
        Date: "2023-04-15",
        Content: "最新的基础设施改善计划已经发布。请查看详细信息。",
        Issuing_Department: "村庄建设部",
      },
      {
        Title: "青年创业支持计划",
        Date: "2023-04-20",
        Content:
          "村庄启动了青年创业支持计划，为年轻人提供创业机会。了解更多信息。",
        Issuing_Department: "青年发展协会",
      },
      {
        Title: "村庄预算公示",
        Date: "2023-04-25",
        Content: "村庄今年的预算已经公示，欢迎村民查看和提出建议。",
        Issuing_Department: "村委会",
      },
      {
        Title: "安全防范提示",
        Date: "2023-05-01",
        Content: "请注意村庄安全，锁好门窗，防范盗窃。有可疑情况请报警。",
        Issuing_Department: "村庄安全委员会",
      },
    ],
    items: [
      {
        url: "http://120.27.208.55:10001/prod-api//profile/upload/2023/09/20/41f683b9-c5e2-4f5f-8ee2-7a83738fd98e.jpg",
        name: "慰问老人邻里活动",
        content:
          "倍磊村一直以来都是一个充满温情和凝聚力的社区，我们始终关心着每一位村民的幸福与健康",
        date: "2023年10月18日",
      },
      {
        url: "http://120.27.208.55:10001/prod-api//profile/upload/2022/12/14/334807be-3221-4d8f-a402-01dd81eab4b1.jpg",
        name: "阅读邻里活动",
        content:
          "在这个信息爆炸的时代，我们常常被各种电子设备和社交媒体所包围，忽略了与身边的邻里建立真实的联系。",
        date: "2023年10月18日",
      },
      {
        url: "http://120.27.208.55:10001/prod-api//profile/upload/2022/12/14/334807be-3221-4d8f-a402-01dd81eab4b1.jpg",
        name: "阅读邻里活动",
        content:
          "在这个信息爆炸的时代，我们常常被各种电子设备和社交媒体所包围，忽略了与身边的邻里建立真实的联系。",
        date: "2023年10月18日",
      },
      {
        url: "http://120.27.208.55:10001/prod-api//profile/upload/2022/12/14/334807be-3221-4d8f-a402-01dd81eab4b1.jpg",
        name: "阅读邻里活动",
        content:
          "在这个信息爆炸的时代，我们常常被各种电子设备和社交媒体所包围，忽略了与身边的邻里建立真实的联系。",
        date: "2023年10月18日",
      },
      {
        url: "http://120.27.208.55:10001/prod-api//profile/upload/2022/12/14/334807be-3221-4d8f-a402-01dd81eab4b1.jpg",
        name: "阅读邻里活动",
        content:
          "在这个信息爆炸的时代，我们常常被各种电子设备和社交媒体所包围，忽略了与身边的邻里建立真实的联系。与身边的邻里建立真实的与与身边的邻里建立真实的联身边的邻里建立真实的联联系与身边的邻里建立真实的联系vv",
        date: "2023年10月18日",
      },
    ],
    isDetailed: false,
  };
  chanegDetailed = () => {
    this.setState({
      isDetailed: !this.state.isDetailed,
    });
  };

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
              <span>邻里活动</span>
            </div>
          </div>
          <div className="Archives">
            {
            this.state.items.map((element) => {
            return(
            <>
              <div className="item">
                <div>
                  <img src={element.url} alt="图片" />
                </div>
                <div>
                  <span className="title">{element.name}</span>
                  <span className="content">
                    {element.content}.
                  </span>
                  <span className="date">{element.date}</span>
                </div>
              </div>
              </>
            )
            })}
          </div>
        </div>
      </>
    );
  }
}
