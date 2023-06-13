"use client";

import React, { useState } from "react";
import { Form, Input, Button } from "antd";

const RegistrationForm = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    setLoading(true);
    // Perform registration logic here
    setTimeout(() => {
      setLoading(false);
      form.resetFields();
      // Display success message or navigate to another page
      console.log("Registration successful:", values);
    }, 2000);
  };

  return (
    <>
      <div className="sign-up-form mt-5">
        <div className="container">
          <div className="row">
            <div className="container">
              <Form form={form} onFinish={onFinish} layout="vertical">
                <Form.Item
                  name="name"
                  label="Name"
                  rules={[
                    { required: true, message: "Please enter your name" },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  name="email"
                  label="Email"
                  rules={[
                    { required: true, message: "Please enter your email" },
                    { type: "email", message: "Please enter a valid email" },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  name="password"
                  label="Password"
                  rules={[
                    { required: true, message: "Please enter your password" },
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit" loading={loading}>
                    Register
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationForm;
