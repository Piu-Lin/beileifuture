import React, { Component } from "react";
import "./index.less";
import BackIcon from "../../icon/Back.png";
export default class Notification extends Component {
  BackToHomeNav = () => {
    this.props.SetHomeState(0);
  };
  state={
    rows:[]
  }
  init = () => {
    fetch("http://218.0.59.244:10009/prod-api/governance/information_bulletin/openList")
      .then((response) => response.json())
      .then((data) => this.setState({ rows: data.rows }))
      .catch((error) => console.log(error));
  };
  componentDidMount(){
    this.init();
  }
  render() {
    const { rows } = this.state

    return (
      <>
        <div className="index">
          <div className="TopNav">
            <div className="back" onClick={() => this.BackToHomeNav()}>
              <img src={BackIcon} alt="返回" />
            </div>
            <div className="title">
              <span>通知公告</span>
            </div>
          </div>
          <div className="Archives">
            {
                rows.map((item, index) => {
                  return (
                    <div className="content" key={index}>
                      <div className="title">
                        <span>{item.title}</span>
                      </div>
                      <div className="content-text" style={{color:item.level==1?"red":"#666"}}>
                        <p>{item.content}</p>
                      </div>
                    </div>
                  );
                })
            }
          </div>
        </div>
      </>
    );
  }
}
