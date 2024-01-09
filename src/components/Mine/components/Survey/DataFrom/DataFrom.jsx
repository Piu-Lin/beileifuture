import React, { useEffect, useState } from "react";
import QRCode from "qrcode.react";

import backIcon from "../../../icon/back.png";
import { Form, Input, Button, Radio, Checkbox, Toast } from "antd-mobile";

import "./index.less";

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
  const [url, setUrl] = useState("");

  const handleInputChange = (field, value) => {
    setFormValues((prevValues) => ({ ...prevValues, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with values:", formValues);
  };

  const onFinish = (values) => {
    const formdata = [];

    formData.forEach((item) => {
      formdata.push({ ...item, value: values[item.field] });
    });
    const userid = JSON.parse(localStorage.getItem("user"));

    const jsonData = {
      surveyId: props.formId,
      userId: userid.id,
      answer: JSON.stringify(formdata),
    };

    console.log(jsonData);

    fetch(
      "https://metagis.cc:20256/prod-api/governance/questionnaire_answer/openAdd",
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
    setUrl(window.location.href.split("?")[0] + "?value=" + props.formId);

    console.log(url);

    if (props.isHistory) {
      const userid = JSON.parse(localStorage.getItem("user"));

      fetch(
        `https://metagis.cc:20256/prod-api/governance/questionnaire_answer/openList?surveyId=${props.formId}&userId=${userid.id}`
        // `https://metagis.cc:20256/prod-api/governance/questionnaire_answer/openList`
      )
        .then((response) => response.json())
        .then((data) => {
          const { answer } = data.rows[0];
          setfromdata(JSON.parse(answer));
          console.log(answer);
        })
        .catch((error) => console.log(error));
    } else {
      fetch(
        `https://metagis.cc:20256/prod-api/governance/questionnaire_survey/openGetInfo/${props.formId}`
      )
        .then((response) => response.json())
        .then((data) => {
          const { content } = data.data;
          setfromdata(JSON.parse(content));
          console.log(content);
        })
        .catch((error) => console.log(error));
    }
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

      <div className="popQR" style={{ display: popQr ? "block" : "none" }}>
        <div
          className="popQRClose"
          onClick={() => {
            setpopQr(false);
          }}
        >
          X
        </div>
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
            <Button
              block
              type="submit"
              color="primary"
              size="large"
              style={{ display: props.isHistory ? "none" : "block" }}
            >
              提交
            </Button>
            <Button
              block
              style={{ marginTop: "5px" }}
              color="primary"
              size="large"
              onClick={() => {
                popQrShow();
              }}
            >
              分享
            </Button>
          </>
        }
      >
        <Form.Item
          name="name"
          label="姓名"
          style={{ display: props.isHistory ? "none" : "block" }}
        >
          <Input placeholder="请输入姓名" />
        </Form.Item>
        <Form.Item
          name="id"
          label="身份证号"
          style={{ display: props.isHistory ? "none" : "block" }}
        >
          <Input placeholder="身份证号" />
        </Form.Item>
        {formData.map((item) => (
          <div key={item.field} style={{ margin: "10px 0" }}>
            {item.type === "input" && (
              <Form.Item name={item.field} label={item.title}>
                <Input
                  onChange={console.log}
                  placeholder={item.value}
                  readOnly={props.isHistory}
                />
              </Form.Item>
            )}
            {item.type === "radio" && (
              <>
                <Form.Item name={item.field} label={item.title}>
                  <Radio.Group
                    defaultValue={item.value}
                    disabled={props.isHistory}
                  >
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
                  <Checkbox.Group
                    defaultValue={item.value}
                    disabled={props.isHistory}
                  >
                    {item.options.map((option, index) => (
                      <Checkbox value={index + 1}>{option.label}</Checkbox>
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
