import React, { Component } from "react";
import backIcon from "../../icon/back.png";
import { Button } from "antd-mobile";
import pic from "./pic.png";

import "./index.less";
export default class Points extends Component {
  state = {
    mall_list: [
      {
          "createBy": null,
          "createTime": "2023-10-16 15:44:26",
          "updateBy": null,
          "updateTime": "2023-10-16 16:33:05",
          "remark": null,
          "id": 3,
          "name": "果酥",
          "useIntegral": "10000",
          "inventory": "20",
          "changePlace": "倍磊",
          "picture": "/profile/upload/2023/10/16/果酥_20231016163251A001.jpg",
          "delFlag": 0,
          "deptId": null,
          "userId": null
      },
      {
          "createBy": null,
          "createTime": "2023-10-16 13:49:13",
          "updateBy": null,
          "updateTime": "2023-10-16 16:33:11",
          "remark": null,
          "id": 1,
          "name": "绿皮青团",
          "useIntegral": "50",
          "inventory": "87",
          "changePlace": "倍磊",
          "picture": "/profile/upload/2023/10/16/青团_20231016163310A002.jpg",
          "delFlag": 0,
          "deptId": 100,
          "userId": 1
      },
      {
          "createBy": null,
          "createTime": "2023-10-16 13:49:38",
          "updateBy": null,
          "updateTime": "2023-10-16 16:33:17",
          "remark": null,
          "id": 2,
          "name": "桑叶糕",
          "useIntegral": "30",
          "inventory": "0",
          "changePlace": "倍磊",
          "picture": "/profile/upload/2023/10/16/桑叶糕_20231016163316A003.jpg",
          "delFlag": 0,
          "deptId": 100,
          "userId": 1
      }
  ],
  };
  init = () => {
    fetch(
      `http://218.0.59.244:10009/prod-api/governance/integral_mall/openList`
    )
      .then((response) => response.json())
      .then((data) =>this.setState({ mall_list: data.rows }))
      .catch((error) => console.log(error));
  };
  componentDidMount() {
    this.init();
  }

  BackTo0 = () => {
    this.props.MineState(0);
  };
  render() {
    const { mall_list } = this.state;
    return (
      <div className="index">
        <div className="TopNav">
          <div
            className="back"
            onClick={() => {
              this.BackTo0();
            }}
          >
            <img src={backIcon} alt="返回" />
          </div>
          <div className="title">
            <span>积分商城</span>
          </div>
        </div>
        <div className="points">
          <div className="mall_list">
            {mall_list.map((item, index) => {
              return (
                <div>
                  <img src={item.picture} alt="实拍图" />
                  <div className="jifen">{item.useIntegral}积分</div>
                  <div className="kucun">
                    <Button color="warning" size="small">
                      兑换
                    </Button>
                    <span>库存:{item.inventory}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
