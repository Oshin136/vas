import {Button,Form,Input} from 'antd';
// import { useState } from 'react';
import './login.css';

function Login(){
    const onFinish = (values: any) => {
        console.log('Success:', values);
      };

      
    return (
        <div className='form-center'>
            <Form 
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span:10 }}
                onFinish = {onFinish}>
                    <Form.Item name='email'>
                        <Input placeholder = 'Email'/>
                    </Form.Item>
                    <Form.Item name='password' >
                        <Input placeholder = 'Password'/>
                    </Form.Item>
                    <Form.Item>

                    <Button type='primary' htmlType='submit'>Submit</Button>
                    </Form.Item>
            </Form>

        </div>
    );
}

export default Login;