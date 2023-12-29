'use client'
import st from "./Login.module.scss";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Form, Input, Button, message } from "antd";
import { useRouter } from "next/navigation";
// import { useDispatch } from "react-redux";
// import { usePostRequest } from "@/services/useRequest";
// import urls from "@/services/urls";
import React, { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [loading, setLoading] = useState(false)
  // const dispatch = useDispatch();
  // const { loading, launchRequest: login } = usePostRequest(urls.apiLogin);
  // throw new Error('页面出错了')
  const onFinish = (values) => {
    localStorage.setItem('nextToken', values.account);
    router.push("/");

    // login(values)
    //   .then((token) => {
    //     // dispatch.auth.setAccount(values.account);
    //     // dispatch.auth.setToken(token);
    //     // router.push("/");
    //   })
    //   .catch((error) => {
    //     message.error(error.message);
    //   });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
      <div className={st.formWrapper}>
        <div className={st.form}>
          <Form
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical"
          >
            <Form.Item
              label="用户名"
              name="account"
              rules={[
                {
                  required: true,
                  message: "请输入用户名",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="请输入用户名"
              />
            </Form.Item>

            <Form.Item
              label="密码"
              name="password"
              rules={[
                {
                  required: true,
                  message: "请输入密码",
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="请输入密码"
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block loading={loading}>
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
  );
}
