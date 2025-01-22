import "./index.less";
import React from "react";
import { Form, Input, Button, Toast } from "antd-mobile";

const Login = (props) => {
  const onFinish = (e) => {
        // props.login()
    console.log(e);
    fetch(
      `http://218.0.59.244:10009/prod-api/basics/population/openList?idCard=${e.idCard}&name=${e.name}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.rows.length === 0) {
          Toast.show({
            icon: "fail",
            content: "该用户不存在",
          });
          return;
        }
        console.log(JSON.stringify(data.rows[0]))
        localStorage.setItem("user", JSON.stringify(data.rows[0]));
        //跳转到首页
        props.login()
        Toast.show({
          icon: "success",
          content: "登录成功",
        });
      })
      .catch((error) =>
        Toast.show({
          icon: "fail",
          content: error,
        })
      );
  };
  return (
    <>
      <div className="login">
        <div className="login-img"></div>
        <div className="login-item">
          <Form
            layout="vertical"
            onFinish={onFinish}
            footer={
              <Button block type="submit" color="primary" size="large">
                登录
              </Button>
            }
          >
            <Form.Item label="身份证号码" name="idCard">
              <Input placeholder="请输入用户名" clearable />
            </Form.Item>
            <Form.Item label="姓名" name="name">
              <Input placeholder="请输入密码" clearable />
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Login;
