import React, { Component } from "react";
import "./index.less";
import BackIcon from "../../icon/Back.png";
import { NoticeBar, Space,Popup} from "antd-mobile";
export default class Notification extends Component {
  //返回上一级
  BackToHomeNav = () => {
    this.props.SetHomeState(0);
  };

  state = {
    rows: [],
    visible:false,
    pop:""
  };
  init = () => {
    fetch(
      "https://metagis.cc:20256/prod-api/neighbourhood/communityAnnouncement/list"
    )
      .then((response) => response.json())
      .then((data) => this.setState({ rows: data.rows }))
      .catch((error) => console.log(error));
  };
  componentDidMount() {
    this.init();
  }
  setVisible(){
    this.setState({
      visible:!this.state.visible
    })
  }
  
  render() {
    const { rows } = this.state;

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
          <Popup
              visible={this.state.visible}
              showCloseButton
              onClose={() => {
                this.setVisible()
              }}
              bodyStyle={{
                borderTopLeftRadius: '8px',
                borderTopRightRadius: '8px',
                minHeight: '40vh',
                padding: '10px 0',
              }}
            >
           
              <div style={{margin:"20px "}}>
                 {this.state.pop}
              </div>
            </Popup>
          <div className="Archives">
            <Space block direction="vertical">
              {rows.map((item, index) => {
                  return <NoticeBar content={item.announcementTitle} color={"info"} onClick={()=>{this.setVisible() ;this.setState({pop:item.announcementContent})} } />;
              })}
            </Space>
          </div>
        </div>
      </>
    );
  }
}
