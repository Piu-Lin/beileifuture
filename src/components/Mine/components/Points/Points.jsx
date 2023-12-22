import React, { Component } from "react";
import backIcon from "../../icon/back.png";
import { Button, Toast } from "antd-mobile";

import "./index.less";
export default class Points extends Component {
  state = {
    details: 0,
    mall_list: [
      {
        createBy: null,
        createTime: "2023-10-16 15:44:26",
        updateBy: null,
        updateTime: "2023-10-16 16:33:05",
        remark: null,
        id: 3,
        name: "果酥",
        useIntegral: "10000",
        inventory: "20",
        changePlace: "倍磊",
        picture: "/profile/upload/2023/10/16/果酥_20231016163251A001.jpg",
        delFlag: 0,
        deptId: null,
        userId: null,
      },
    ],
    detailsItem: [
      {
        id: 1,
        createTime: "",
        reason: "",
      },
    ],
  };
  init = () => {
    fetch(
      `https://metagis.cc:20256/prod-api/governance/integral_mall/openList`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ mall_list: data.rows }))
      .catch((error) => console.log(error));
  };
  componentDidMount() {
    this.init();
  }

  BackTo0 = () => {
    this.props.MineState(0);
  };

  details = () => {
    this.setState({ details: 1 });
    const user = JSON.parse(localStorage.getItem("user"));

    fetch(
      `https://metagis.cc:20256/prod-api/governance/integral_manage/openList?userId=${user.id}`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ detailsItem: data.rows }))
      .catch((error) => console.log(error));
  };
  exchange = (point, id) => {
    const { points } = this.props;
    if (points - point >= 0) {
      const user = JSON.parse(localStorage.getItem("user"));
      const JSONdata = {
        userId: user.id,
        goodId: id,
      };
      fetch(
        `https://metagis.cc:20256/prod-api/governance/exchange_order/openAdd`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(JSONdata),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.code === 200) {
            Toast.show({
              icon: "success",
              content: "兑换成功",
            });
            this.props.changePoint(points - point);
            this.init();
          } else {
            Toast.show({
              icon: "fail",
              content: data.msg,
            });
          }
        })
        .catch((error) => console.log(error));
    } else {
      Toast.show({
        icon: "fail",
        content: "兑换失败积分不足",
      });
    }
  };

  render() {
    const { mall_list ,details } = this.state;
    return (
      <div className="index">
        <div className="TopNav">
          <div
            className="back"
            onClick={() => {
              details? this.setState({details:0}):this.BackTo0()
            }}
          >
            <img src={backIcon} alt="返回" />
          </div>
          <div className="title">
            <span>积分商城</span>
          </div>
          <div
            style={{ position: "absolute", right: "10px" }}
            onClick={() => {
              this.details();
            }}
          >
            <span>订单详情</span>
          </div>
        </div>
        {this.state.details ? (
          <>
            <Detail item={this.state.detailsItem} />
          </>
        ) : (
          <>
            <div className="points">
              <div className="mall_list">
                {mall_list.map((item, index) => {
                  return (
                    <div>
                      <img
                        src={
                          "https://metagis.cc:20256/prod-api" + item.picture
                        }
                        alt="实拍图"
                      />
                      <div className="jifen">{item.useIntegral}积分</div>
                      <div className="kucun">
                        <Button
                          color="warning"
                          size="small"
                          onClick={() => {
                            this.exchange(item.useIntegral, item.id);
                          }}
                        >
                          兑换
                        </Button>
                        <span>库存:{item.inventory}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}

function Detail(props) {
  const { item } = props;
  console.log(item);
  return (
    <>
      <div className="MainContent">
        {item.map((item) => {
          return (
            <div
              key={item.id}
              className="MessageCard"
              // onClick={() => this.switchSurvey(item.content, item.id, true)}
            >
              <div>
                <span>{item.createTime && item.createTime.split(" ")[0]}</span>
              </div>
              <div>
                <span>{item.title}</span>
                <span>{item.reason}</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
