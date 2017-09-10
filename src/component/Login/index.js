import React from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
import './login.less'

const FormItem = Form.Item

export class NormalLoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: null,
      password: null
    }
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }

  hh = (flag) => {
    this.setState({ flag })
  }
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <div>
              <button onClick={() => this.hh(1)}>aaaaasgagggggggggaaaaa</button>
              <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
            </div>
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className="login-form-forgot" href="">Forgot password</a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="">register now!</a>
        </FormItem>
      </Form>
    )
  }
}

export default Form.create()(NormalLoginForm)
