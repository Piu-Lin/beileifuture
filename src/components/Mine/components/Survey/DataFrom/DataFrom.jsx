import React, { Component, useEffect, useState } from "react";
import QRCode from "qrcode.react";

import backIcon from "../../../icon/back.png";
import { Form, Input, Button, Radio, Checkbox, Toast } from "antd-mobile";

import './index.less'

export const DataFrom = (props) => {
  const [formData, setfromdata] = useState([
    {
      type: "input",
      field: "Far9615pf3x5n",
      title: "姓名",
      info: "",
      $required: true,
      _fc_drag_tag: "input",
      hidden: false,
      display: true,
    },
    {
      type: "radio",
      field: "F256615pf5im2",
      title: "性别",
      info: "",
      effect: {
        fetch: "",
      },
      $required: true,
      options: [
        { label: "男", value: 1 },
        { label: "女", value: 2 },
      ],
      _fc_drag_tag: "radio",
      hidden: false,
      display: true,
    },
    {
      type: "checkbox",
      field: "Fnwo615pf8zyn",
      title: "多选框",
      info: "",
      effect: {
        fetch: "",
      },
      $required: true,
      options: [
        { label: "篮球", value: 1 },
        { label: "足球", value: 2 },
        { label: "排球", value: "3" },
      ],
      _fc_drag_tag: "checkbox",
      hidden: false,
      display: true,
    },
  ]);

  const [formValues, setFormValues] = useState({});
  const [popQr, setpopQr] = useState(false);
  const [url, setUrl] = useState('');



  const handleInputChange = (field, value) => {
    setFormValues((prevValues) => ({ ...prevValues, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with values:", formValues);
  };

  const onFinish = (values) => {
    Toast.show({
      icon: "success",
      content: "提交成功",
    });
  };

  const popQrShow = () => {
    setpopQr(true);
  };
  useEffect(() => {
    console.log(props.formId);
    setUrl( window.location.href.split("?")[0]+'?value='+props.formId)

    console.log(url)
    fetch(
      `http://218.0.59.244:10009/prod-api/governance/questionnaire_survey/openGetInfo/${props.formId}`
    )
      .then((response) => response.json())
      .then((data) => {
        const { content } = data.data;
        setfromdata(JSON.parse(content));
        console.log(content);
      })
      .catch((error) => console.log(error));
  }, [props.formId]);

  return (
    <>
      {props.isShow ? (
        <div className="TopNav">
          <div
            className="back"
            onClick={() => {
              window.location.href = window.location.href.split("?")[0];
            }}
          >
            <img src={backIcon} alt="返回" />
          </div>
          <div className="title">
            <span>问卷</span>
          </div>
        </div>
      ) : (
        <></>
      )}

      <div className="popQR" style={{ display: popQr? "block" : "none" }}>
        <div className="popQRClose" onClick={() => { setpopQr(false) }}>X</div>
        <QRCode
          id="qrCode"
          value={url}
          size={200} // 二维码的大小
          fgColor="#000000" // 二维码的颜色
          style={{ margin: "auto" }}
        />
      </div>
      <Form
        layout="horizontal"
        onFinish={onFinish}
        footer={
          <>
            <Button block type="submit" color="primary" size="large">
              提交
            </Button>
            <Button
              block
              style={{ marginTop: "5px" }}
              color="primary"
              size="large"

              onClick={() => {
                popQrShow();
              }
}
            >
              分享
            </Button>
          </>
        }
      >
        <Form.Item name="name" label="姓名">
          <Input placeholder="请输入姓名" />
        </Form.Item>
        <Form.Item name="id" label="身份证号">
          <Input placeholder="身份证号" />
        </Form.Item>
        {formData.map((item) => (
          <div key={item.field} style={{ margin: "10px 0" }}>
            {item.type === "input" && (
              <Form.Item name={item.field} label={item.title}>
                <Input onChange={console.log} placeholder="" />
              </Form.Item>
            )}
            {item.type === "radio" && (
              <>
                <Form.Item name={item.field} label={item.title}>
                  <Radio.Group>
                    {item.options.map((option) => (
                      <Radio value={option.value}>{option.label}</Radio>
                    ))}
                  </Radio.Group>
                </Form.Item>
              </>
            )}
            {item.type === "checkbox" && (
              <>
                <Form.Item name={item.field} label={item.title}>
                  <Checkbox.Group>
                    {item.options.map((option) => (
                      <Checkbox value={option.value}>{option.label}</Checkbox>
                    ))}
                  </Checkbox.Group>
                </Form.Item>
              </>
            )}
          </div>
        ))}
      </Form>
    </>
  );
};
