import "./index.less";
import React, { useState } from "react";
import { Form, Input, Button } from "antd-mobile";

const Login = (props) => {
  const onFinish = (e) => {
    console.log(e)
    props.login()
  }
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
            <Form.Item label="用户名" name="username">
              <Input placeholder="请输入用户名" clearable />
            </Form.Item>
            <Form.Item label="密码" name="password">
              <Input placeholder="请输入密码" clearable type="password" />
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Login;
