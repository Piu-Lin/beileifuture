import React, { Component } from "react";
import "./index.less";
import BackIcon from "../../icon/Back.png";
import { Form, Input, Button, TextArea, ImageUploader } from "antd-mobile";

export default class ConflictMediation extends Component {
  state = {
    fileList: [],
  };
  BackToHomeNav = () => {
    this.props.SetHomeState(0);
  };
  setFileList(fileList) {
    this.setState({
      fileList,
    });
    console.log(fileList);
  }
  mockUpload(file) {
    return {
      url: URL.createObjectURL(file),
    };
  }
  onFinish = (e) => {
    console.log("Success:", e);
  const userid = JSON.parse(localStorage.getItem("user"));

    const jsonData = {
        userId: userid.id,
        adjustExpect:e.adjustExpect,
        content:e.content,
        type:e.type,
      };
    fetch(
        "http://218.0.59.244:10009/prod-api/governance/contradiction_adjust/openAdd",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(jsonData),
        }
      )

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
              <span>矛盾调解</span>
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
                <Form.Item
                  name="type"
                  label="矛盾类型"
                  rules={[{ required: true, message: "姓名不能为空" }]}
                >
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
                    onChange={this.fileList}
                    upload={this.mockUpload}
                    maxCount={1}
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
