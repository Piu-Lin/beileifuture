import React, { Component } from "react";
import "./index.less";
import BackIcon from "../../icon/Back.png";
import { ContentDetail } from "../ContentDetail/ContentDetail";
// import classNames from "classnames";

export default class NgbActivity extends Component {
  BackToHomeNav = () => {
    this.props.SetHomeState(0);
  };
  state = {
    items: [
      {
        url: "'",
        name: "",
        content:
          "",
        date: "",
      },
    ],
    isDetailed: false,
    details: {
      content: '',
      title: '',
      date: '',
      tableType:3,
      id:0,
    },
  };

  getImage = (url)=>{
    let urlarr = url.split(",");
    console.log(urlarr);
    // return urlarr[0];
  }


  chanegDetailed = (id) => {
    fetch("https://metagis.cc:20256/prod-api/neighbourhood/activity/" + id)
      .then((response) => response.json())
      .then((data) => {
        const value = data.data;
        let imgarry = value.image.split(',')
        this.setState({
          details: {
            content: value.trainContent,
            title: value.trainPlace,
            date: value.createTime,
            image:imgarry,
            tableType:3,
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
  init = () => {
    fetch("https://metagis.cc:20256/prod-api/neighbourhood/activity/list")
      .then((response) => response.json())
      .then((data) =>{
        let newlist = []
        data.rows.map((item)=>{
          newlist.push({
            url: item.image.split(","),
            trainPlace: item.trainPlace,
            trainContent: item.trainContent,
            createTime: item.createTime,
            id: item.id,
            remark:item.remark
          })
        })
        console.log(newlist)
        this.setState({
          items: newlist
        });
      })
      .catch((error) => console.log(error));
  };
  componentDidMount() {
    this.init();
  }
  render() {
    const { isDetailed } = this.state;
    return (
      <>
        {isDetailed ? (
          <ContentDetail
            click={this.chanegDetailed}
            value={this.state.details}
          />
        ) : (
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
                  <span>邻里活动</span>
                </div>
              </div>
              <div className="Archives">
                {this.state.items.map((element, i) => {
                  return (
                    <>
                      <div
                        className={i===0?"Ngitem":"grayItem"}
                        key={i}
                        onClick={() => this.chanegDetailed(element.id)}
                      >
                        <div>
                          <img
                            src={
                              "https://metagis.cc:20256/prod-api/" +
                             element.url[0]
                            }
                            alt="图片"
                          />
                        </div>
                        <div>
                          {
                            i===0?<div  className="fire"></div>:<></>
                          }
                        {/* <div  className="fire"></div> */}

                          <span className="title">{element.trainPlace}</span>
                          <span className="content">
                            {element.trainContent}
                          </span>
                          <span className="date">
                            {element.createTime &&
                              element.createTime.split(" ")[0]}
                          </span>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </>
        )}
      </>
    );
  }
}
