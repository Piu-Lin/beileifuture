import React, { Component } from "react";
import "./index.less";
import BackIcon from "../../icon/Back.png";
import { Form, Input, Button, TextArea, ImageUploader,Toast } from "antd-mobile";

export default class Jiyi extends Component {
  state = {
    fileList: [],
  };

  fileList = (newFileList) => {
    this.setState({ fileList: newFileList });
  };

  // 返回
  BackToHomeNav = () => {
    this.props.SetHomeState(0);
  };
  //上传图片
  mockUpload = (file) => {
    return new Promise((resolve, reject) => {
      const fd = new FormData();
      fd.append("file", file);
      fetch("https://metagis.cc:20256/prod-api/common/uploadH5", {
        method: "POST",
        body: fd,
      })
        .then((res) => res.json(res))
        .then((res) => {
          if (res.code === 200) {
            file.url = res.url;
            file.status = "success";
            file.message = "上传成功";
            file.fileName = res.fileName;
            const newFileList = [...this.state.fileList, file];
            this.fileList(newFileList);
            console.log(file);
            resolve({
              url: URL.createObjectURL(file),
            });
          } else {
            file.status = "failed";
            file.message = "上传失败";
            reject(file);
          }
        });
    });
  };
  //上传数据
  onFinish = (e) => {
    const userid = JSON.parse(localStorage.getItem("user"));
    const picture = this.state.fileList.map((item)=>{
      return {
        fileName: item.fileName,
      }
    })
    const jsonData = {
      userId: userid.id,
      adjustExpect: e.adjustExpect,
      content: e.content,
      type: e.type,
      picture:JSON.stringify(picture)
    };
    fetch(
      "https://metagis.cc:20256/prod-api/governance/contradiction_adjust/openAdd",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonData),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.code === 200) {
          Toast.show({
            icon: "success",
            content: "提交成功",
          });
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
    console.log(jsonData);
  };
  render() {
    return (
      <>
        <div className="index">
          <div className="TopNav">
            <div className="back" onClick={() => this.BackToHomeNav()}>
              <img src={BackIcon} alt="返回" />
            </div>
            <div className="title">
              <span>党建记忆</span>
            </div>
          </div>

          <div className="Archives">
            <div className="ConflictMediation">
              <Form
                layout="horizontal"
                onFinish={this.onFinish}
                footer={
                  <Button block type="submit" color="primary" size="large">
                    提交
                  </Button>
                }
              >
                <Form.Item name="type" label="矛盾类型">
                  <Input onChange={console.log} placeholder="请输入矛盾类型" />
                </Form.Item>
                <Form.Item name="content" label="矛盾详情">
                  <TextArea
                    placeholder="请输入矛盾详情"
                    maxLength={100}
                    rows={5}
                    showCount
                  />
                </Form.Item>
                <Form.Item name="adjustExpect" label="调节期待">
                  <TextArea
                    placeholder="调节期待"
                    maxLength={100}
                    rows={5}
                    showCount
                  />
                </Form.Item>
                <Form.Item>
                  <ImageUploader
                    fileList={this.state.fileList}
                    upload={this.mockUpload}
                    maxCount={3}
                  />
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </>
    );
  }
}
