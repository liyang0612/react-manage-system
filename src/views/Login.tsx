import React from 'react'
import { Form, Input, Checkbox, Button, message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { login } from '../service'
import styles from './style.module.scss'

interface LoginResopenProps {
  token?: string;
  msg?: string
}

interface LoginForm {
  username: String;
  password: String;
}

const Login: React.ReactNode = () => {
  const onFinish = async (values: LoginForm) => {
    const data: LoginResopenProps = await login(values)
    const { search } = window.location
    const fromUrl = search && search.substr(6)
    if (data.token) {
      localStorage.setItem('token', data.token)
      window.location.href = decodeURIComponent(fromUrl) || '/'
    } else {
      message.error(data.msg)
    }
  }
  return (
    <div className={styles.loginWrap}>
      <div className={styles.login}>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: '请输入用户名!' }]}
          >
            <Input prefix={<UserOutlined />} placeholder="用户名" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: '请输入密码!' }]}
          >
            <Input
              prefix={<LockOutlined />}
              type="password"
              placeholder="密码"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>记住我</Checkbox>
            </Form.Item>
            <a className="login-form-forgot" href="www">
              忘记密码
            </a>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              登 录
            </Button>
            <span>&nbsp;&nbsp; 或者</span>
            <a href="www">  注册</a>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Login
