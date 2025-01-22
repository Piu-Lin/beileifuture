import React, { Component } from "react";
import "./index.less";
import BackIcon from "../../icon/Back.png";
import {
  Form,
  Input,
  Button,
  TextArea,
  ImageUploader,
  Toast,
  Cascader,
} from "antd-mobile";

export default class ConflictMediation extends Component {
  state = {
    fileList: [],
    visible: false,

    //倍磊数据
    options: [
      {
        label: "倍磊一村",
        value: "倍磊一村",
        children: [
          {
            label: "第一微网格(1-3组)",
            value: "第一微网格(1-3组)",
            children: [
              {
                label: "陈前",
                value: "陈前",
              },
            ],
          },
          {
            label: "第二微网格(3-6组)",
            value: "第二微网格(3-6组)",
            children: [
              {
                label: "陈运勇",
                value: "陈运勇",
              }
            ],
          },
          {
            label: "第三微网格（7-9组）",
            value: "第三微网格（7-9组）",
            children: [
              {
                label: "王玲芳",
                value: "王玲芳",
              }
            ],
          },
          {
            label: "第四微网格（10-13组）",
            value: "第四微网格（10-13组）",
            children: [
              {
                label: "陈秀玲",
                value: "陈秀玲",
              }
            ],
          },
          {
            label: "第五微网格（14-18组）",
            value: "第五微网格（14-18组）",
            children: [
              {
                label: "陈正龙",
                value: "陈正龙",
              }
            ],
          },
        ],
      },
      {
        label: "倍磊二村",
        value: "倍磊二村",
        children: [
          {
            label: "第一微网格（1-2组）",
            value: "第一微网格（1-2组）",
            children: [
              {
                label: "陈钦宏",
                value: "陈钦宏",
              },
            ],
          },
          {
            label: "第二微网格（3-5组）",
            value: "第二微网格（3-5组）",
            children: [
              {
                label: "孙龙飞",
                value: "孙龙飞",
              }
            ],
          },
          {
            label: "第三微网格（6-8组）",
            value: "第三微网格（6-8组）",
            children: [
              {
                label: "陈伟",
                value: "陈伟",
              }
            ],
          },
          {
            label: "第四微网格（9-10组）",
            value: "第四微网格（9-10组）",
            children: [
              {
                label: "金王富",
                value: "金王富",
              }
            ],
          },
          {
            label: "第五微网格（11、12组）",
            value: "第五微网格（11、12组）",
            children: [
              {
                label: "陈献斌",
                value: "陈献斌",
              }
            ],
          },
        ],
      },
      {
        label: "倍磊三村",
        value: "倍磊三村",
        children: [
          {
            label: "王店微网格（1组）",
            value: "王店微网格（1组）",
            children: [
              {
                label: "姚雪婷",
                value: "姚雪婷",
              },
            ],
          },
          {
            label: "网格微网格（2、3、4组）",
            value: "网格微网格（2、3、4组）",
            children: [
              {
                label: "陈俊超",
                value: "陈俊超",
              }
            ],
          },
          {
            label: "网格微网格（5、6、7组）",
            value: "网格微网格（5、6、7组）",
            children: [
              {
                label: "陈兴洪",
                value: "陈兴洪",
              }
            ],
          },
          {
            label: "网格微网格（8、9、10组）",
            value: "网格微网格（8、9、10组）",
            children: [
              {
                label: "陈国俊",
                value: "陈国俊",
              }
            ],
          },
          {
            label: "网格微网格（11、13、14组）",
            value: "网格微网格（11、13、14组）",
            children: [
              {
                label: "徐向阳",
                value: "徐向阳",
              }
            ],
          },
          {
            label: "网格微网格（15、16、17组）",
            value: "网格微网格（15、16、17组）",
            children: [
              {
                label: "陈兴胜",
                value: "陈兴胜",
              }
            ],
          },
          {
            label: "格址坛微网格（12组）",
            value: "格址坛微网格（12组）",
            children: [
              {
                label: "陈文娟",
                value: "陈文娟",
              }
            ],
          },
          {
            label: "网格微网格（18、19、20组）",
            value: "网格微网格（18、19、20组）",
            children: [
              {
                label: "陈林",
                value: "陈林",
              }
            ],
          },
        ],
      },
      {
        label: "倍磊四村",
        value: "倍磊四村",
        children: [
          {
            label: "第一微网格（1-2组）",
            value: "第一微网格（1-2组）",
            children: [
              {
                label: "金月仙",
                value: "金月仙",
              },
            ],
          },
          {
            label: "第二微网格（3-4组）",
            value: "第二微网格（3-4组）",
            children: [
              {
                label: "陈松贵",
                value: "陈松贵",
              }
            ],
          },
          {
            label: "第三微网格（5-6组）",
            value: "第三微网格（5-6组）",
            children: [
              {
                label: "陈浩俊",
                value: "陈浩俊",
              }
            ],
          },
          {
            label: "第四微网格（7组、13组）",
            value: "第四微网格（7组、13组）",
            children: [
              {
                label: "陈兴潮",
                value: "陈兴潮",
              }
            ],
          },
          {
            label: "第五微网格（8组、10组）",
            value: "第五微网格（8组、10组）",
            children: [
              {
                label: "陈雪丹",
                value: "陈雪丹",
              }
            ],
          },
          {
            label: "第六微网格（9组、12组）",
            value: "第六微网格（9组、12组）",
            children: [
              {
                label: "王琳",
                value: "王琳",
              }
            ],
          },
          {
            label: "第七微网格（11、14组））",
            value: "第七微网格（11、14组））",
            children: [
              {
                label: "陈权浩",
                value: "陈权浩",
              }
            ],
          },
        ],
      },
    ],
    gridPeople: '',
  };

  fileList = (newFileList) => {
    this.setState({ fileList: newFileList });
  };

  setVisible = () => {
    this.setState({ visible: !this.state.visible });
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
      fetch("http://218.0.59.244:10009/prod-api/common/uploadH5", {
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
    const picture = this.state.fileList.map((item) => {
      return {
        fileName: item.fileName,
      };
    });
    const jsonData = {
      userId: userid.id,
      adjustExpect: e.adjustExpect,
      content: e.content,
      type: e.type,
      picture: JSON.stringify(picture),
      gridPeople: this.state.gridPeople[2].label,
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
    const { visible, options, gridPeople } = this.state;
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
                <Form.Item name="createBy" label="当事人姓名">
                  <Input
                    onChange={console.log}
                    placeholder="请输入当事人姓名"
                  />
                </Form.Item>
                <Form.Item name="type" label="矛盾类型">
                  <Input onChange={console.log} placeholder="请输入矛盾类型" />
                </Form.Item>
                <Form.Item name="content" label="矛盾详情">
                  <TextArea
                    placeholder="请输入矛盾详情"
                    maxLength={100}
                    rows={4}
                    showCount
                  />
                </Form.Item>
                <Form.Item name="adjustExpect" label="调节期待">
                  <TextArea
                    placeholder="调节期待"
                    maxLength={100}
                    rows={4}
                    showCount
                  />
                </Form.Item>
                <Form.Item
                  name="gridPeople"
                  label="处理人"
                  onClick={() => this.setVisible()}
                >
                  <Cascader
                    options={options}
                    visible={visible}
                    // value={value}
                    // onConfirm={this.setValue}
                    onSelect={(val, extend) => {
                      // console.log('onSelect',extend.items[2])
                      this.setState({ gridPeople: extend.items })
                    }}
                    onClose={() => {
                      this.setVisible(false);
                      
                    }}
                  >
                    {(items) => {
                      if (items.every((item) => item === null)) {
                        return "未选择";
                      } else {
                        return items
                          .map((item) => item?.label ?? "未选择")
                          .join("-");
                      }
                    }}
                  </Cascader>
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
