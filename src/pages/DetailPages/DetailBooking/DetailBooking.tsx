import { Button, DatePicker, Form } from "antd";
import React from "react";

type Props = {};
const { RangePicker } = DatePicker;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const config = {
  rules: [
    { type: "object" as const, required: true, message: "Please select time!" },
  ],
};
const rangeConfig = {
  
  rules: [
    { type: "array" as const, required: true, message: "Please select time!" },
  ],
};

export default function DetailBooking({}: Props) {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Form
        name="time_related_controls"
        {...formItemLayout}
        onFinish={onFinish}
      >
        <Form.Item
          {...rangeConfig}
          wrapperCol={{
            xs: { span: 24, offset: 0 },
            sm: { span: 16, offset: 8 },
          }}
        >
          <RangePicker />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            xs: { span: 24, offset: 0 },
            sm: { span: 16, offset: 8 },
          }}
        >
          <Button
            type="primary"
            htmlType="submit"
            danger
            block
            shape="round"
            size={"large"}
          >
            Đặt phòng
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
