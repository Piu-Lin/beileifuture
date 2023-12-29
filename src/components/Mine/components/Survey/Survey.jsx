/*
 * @Author: bigliweijie 1771662778@qq.com
 * @Date: 2023-10-09 13:43:45
 * @LastEditors: bigliweijie 1771662778@qq.com
 * @LastEditTime: 2023-10-12 16:01:38
 * @FilePath: \beileifuture\src\components\Mine\Survey\Survey.jsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import React, { Component, useState } from "react";
import backIcon from "../../icon/back.png";
import "./index.less";
import wx from "weixin-js-sdk";

import { DataFrom } from "./DataFrom/DataFrom";

export default class Survey extends Component {
  state = {
    isSelect: true,
    isSurveyContext: true,
    formid:0,
    massage: [
      {
        id: 1,
        date: "2023年10月12日",
        title: "关于村委会选举的问卷",
        context: "你对村委会选举的参与度如何？请分享你的观点和想法。",
      },
    ],
    wenjuanJson: {
      title: "",
    },
  };
  getdata = (flag) => {
    if(flag){
      flag=1
    }
    else{
      flag=0
    }
    const username = JSON.parse(localStorage.getItem("user"));
    fetch(
      `http://218.0.59.244:10009/prod-api/governance/questionnaire_survey/openList?userId=${username.id}&flag=${flag}`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ massage: data.rows }))
      .catch((error) => console.log(error));
  };
  BackTo0 = () => {
    this.props.MineState(0);
  };
  backtors0 = () => {
    this.props.SetHomeState(0);
  };
  selected = () => {
    this.setState({
      isSelect: !this.state.isSelect,
    });
    this.getdata(this.state.isSelect)

  };
  switchSurvey = (value) => {
    this.setState({
      isSurveyContext: !this.state.isSurveyContext,
      formid: value,
    });
  };


  init = () => {
    this.getdata(!this.state.isSelect);
  };
  componentDidMount() {
    this.init();
  }
  render() {
    return (
      <div className="index">
        <div className="TopNav">
          {this.props.comefrom === "1" ? (
            <div
              className="back"
              onClick={() => {
                this.state.isSurveyContext
                  ? this.backtors0()
                  : this.switchSurvey();
              }}
            >
              <img src={backIcon} alt="返回" />
            </div>
          ) : (
            <div
              className="back"
              onClick={() => {
                this.state.isSurveyContext
                  ? this.BackTo0()
                  : this.switchSurvey();
              }}
            >
              <img src={backIcon} alt="返回" />
            </div>
          )}
          <div className="title">
            <span>问卷</span>
          </div>
        </div>
        {this.state.isSurveyContext ? (
          <>
            <div className="switchTag">
              <div>
                <span
                  onClick={() => this.selected()}
                  className={this.state.isSelect ? "tagSelected" : ""}
                >
                  未填问卷
                </span>
              </div>
              <div>
                <span
                  onClick={() => this.selected()}
                  className={this.state.isSelect ? "" : "tagSelected"}
                >
                  历史问卷
                </span>
              </div>
            </div>
            <div className="MainContent">
              {
                this.state.massage.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="MessageCard"
                      onClick={() => this.switchSurvey(item.id)}
                    >
                      <div>
                        <span>
                          {item.createTime && item.createTime.split(" ")[0]}
                        </span>
                      </div>
                      <div>
                        <span>{item.name}</span>
                        {/* <span>{item.context}</span> */}
                      </div>
                    </div>
                  );
                })
                // : this.state.historyMassage.map((item) => {
                //     return (
                //       <div
                //         key={item.id}
                //         className="MessageCard"
                //         onClick={() => this.switchSurvey(item.title)}
                //       >
                //         <div>
                //           <span>{item.createTime && item.createTime.split(" ")[0]}</span>
                //         </div>
                //         <div>
                //           <span>{item.name}</span>
                //           <span>{item.context}</span>
                //         </div>
                //       </div>
                //     );
                //   })}
              }
            </div>
          </>
        ) : (
          <div className="SurveyContext">
            {" "}
            <DataFrom formId={this.state.formid}></DataFrom>
          </div>
        )}
      </div>
    );
  }
}

// export const SurveyContext = (props) => {
//   const onFinish = () => {
//     Dialog.alert({
//       content: "提交成功",
//     })
//   }
//
//   return (
//     <>
//       <Form
//         name='form'
//         onFinish={onFinish}
//         footer={
//           <Button block type='submit' color='primary' size='large'>
//             提交
//           </Button>
//         }
//       >
//         <Form.Header>{props.wenjuanJson}</Form.Header>
//         <Form.Item  label='你是否知道即将举行的村委会选举？'>
//           <Radio.Group >
//             <Space direction='vertical'>
//               <Radio value='1'>是</Radio>
//               <Radio value='2'>否</Radio>
//             </Space>
//           </Radio.Group>
//         </Form.Item>
//
//
//   <Form.Item label="你对村委会选举的重要性有何看法？">
//     <Radio.Group>
//       <Space direction="vertical">
//         <Radio value="1">非常重要</Radio>
//         <Radio value="2">重要</Radio>
//         <Radio value="3">一般</Radio>
//         <Radio value="4">不重要</Radio>
//         <Radio value="5">完全不关心</Radio>
//       </Space>
//     </Radio.Group>
//   </Form.Item>
//
//   <Form.Item label="你对现任村委会的表现满意吗？">
//     <Radio.Group>
//       <Space direction="vertical">
//         <Radio value="1">非常满意</Radio>
//         <Radio value="2">满意</Radio>
//         <Radio value="3">一般</Radio>
//         <Radio value="4">不满意</Radio>
//         <Radio value="5">非常不满意</Radio>
//       </Space>
//     </Radio.Group>
//   </Form.Item>
//
//   <Form.Item label="你认为村委会选举应该具备哪些基本条件？">
//     <Checkbox.Group>
//       <Checkbox value="1">公平竞争</Checkbox>
//       <Checkbox value="2">透明度</Checkbox>
//       <Checkbox value="3">民主程序</Checkbox>
//       <Checkbox value="4">平等机会</Checkbox>
//       <Checkbox value="5">能力和素质要求</Checkbox>
//       <Checkbox value="6">公正监督</Checkbox>
//     </Checkbox.Group>
//   </Form.Item>
//
//   <Form.Item label="你对候选人的背景和经验有何要求？">
//     <Checkbox.Group>
//       <Checkbox value="1">学历背景</Checkbox>
//       <Checkbox value="2">工作经验</Checkbox>
//       <Checkbox value="3">社区服务经验</Checkbox>
//       <Checkbox value="4">公共管理能力</Checkbox>
//       <Checkbox value="5">沟通与合作能力</Checkbox>
//     </Checkbox.Group>
//   </Form.Item>
//
//   <Form.Item label="你认为村委会选举中应该采用哪种投票方式？">
//     <Radio.Group>
//       <Space direction="vertical">
//         <Radio value="1">纸质选票</Radio>
//         <Radio value="2">电子投票</Radio>
//         <Radio value="3">在线投票</Radio>
//         <Radio value="4">其他</Radio>
//         <Input placeholder="请注明" />
//       </Space>
//     </Radio.Group>
//   </Form.Item>
//
//   <Form.Item label="你希望村委会选举后的工作重点是什么？">
//     <Checkbox.Group>
//       <Checkbox value="1">社区发展和基础设施建设</Checkbox>
//       <Checkbox value="2">教育和文化事务</Checkbox>
//       <Checkbox value="3">环境保护和卫生</Checkbox>
//       <Checkbox value="4">经济发展和就业</Checkbox>
//       <Checkbox value="5">社会福利和民生改善</Checkbox>
//     </Checkbox.Group>
//   </Form.Item>
//
//   <Form.Item label="你对村委会的决策过程和资源分配是否满意？">
//     <Radio.Group>
//       <Space direction="vertical">
//         <Radio value="1">非常满意</Radio>
//         <Radio value="2">满意</Radio>
//         <Radio value="3">一般</Radio>
//         <Radio value="4">不满意</Radio>
//         <Radio value="5">非常不满意</Radio>
//       </Space>
//     </Radio.Group>
//   </Form.Item>
//
//       </Form>
//     </>
//   )
// }

// const YourForm = () => {
//   const formData = [
//     {
//       type: "input",
//       field: "Far9615pf3x5n",
//       title: "姓名",
//       info: "",
//       $required: true,
//       _fc_drag_tag: "input",
//       hidden: false,
//       display: true,
//     },
//     {
//       type: "radio",
//       field: "F256615pf5im2",
//       title: "性别",
//       info: "",
//       effect: {
//         fetch: "",
//       },
//       $required: true,
//       options: [
//         { label: "男", value: 1 },
//         { label: "女", value: 2 },
//       ],
//       _fc_drag_tag: "radio",
//       hidden: false,
//       display: true,
//     },
//     {
//       type: "checkbox",
//       field: "Fnwo615pf8zyn",
//       title: "多选框",
//       info: "",
//       effect: {
//         fetch: "",
//       },
//       $required: true,
//       options: [
//         { label: "篮球", value: 1 },
//         { label: "足球", value: 2 },
//         { label: "排球", value: "3" },
//       ],
//       _fc_drag_tag: "checkbox",
//       hidden: false,
//       display: true,
//     },
//   ];
//
//   const [formValues, setFormValues] = useState({});
//
//   const handleInputChange = (field, value) => {
//     setFormValues((prevValues) => ({ ...prevValues, [field]: value }));
//   };
//
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted with values:", formValues);
//   };
//
//   return (
//     <Form
//       layout="horizontal"
//       footer={
//         <Button block type="submit" color="primary" size="large">
//           提交
//         </Button>
//       }
//     >
//       {formData.map((item) => (
//         <div key={item.field} style={{ margin: "10px 0" }}>
//           {item.type === "input" && (
//             <Form.Item name="name" label={item.title}>
//               <Input onChange={console.log} placeholder="请输入姓名" />
//             </Form.Item>
//           )}
//           {item.type === "radio" && (
//             <>
//               <Form.Item name="Radio" label={item.title}>
//                 <Radio.Group>
//                   {item.options.map((option) => (
//                     <Radio value={option.value}>{option.label}</Radio>
//                   ))}
//                 </Radio.Group>
//               </Form.Item>
//             </>
//           )}
//           {item.type === "checkbox" && (
//             <>
//               <Form.Item name="checkbox" label={item.title}>
//                 <Checkbox.Group>
//                   {item.options.map((option) => (
//                     <Checkbox value={option.value}>{option.label}</Checkbox>
//                   ))}
//                 </Checkbox.Group>
//               </Form.Item>
//             </>
//           )}
//         </div>
//       ))}
//     </Form>
//   );
// };
