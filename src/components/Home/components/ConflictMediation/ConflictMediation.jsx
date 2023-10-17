import React, { Component } from 'react'
import './index.less'
import BackIcon from "../../icon/Back.png"
import {
    Form,
    Input,
    Button,
    TextArea,
    ImageUploader,

} from 'antd-mobile'


export default class ConflictMediation extends Component {

    state = {
        fileList: '',
    }
    BackToHomeNav = () => {
        this.props.SetHomeState(0)
    }

    render() {
        return (
            <>
                <div className='index'>


                    <div className="TopNav">
                        <div className="back" onClick={() => this.BackToHomeNav()}  >
                            <img src={BackIcon} alt="返回" />
                        </div>
                        <div className="title">
                            <span>矛盾调解</span>
                        </div>
                    </div>

                    <div className='Archives'>
                        <div className='ConflictMediation'>
                            <Form
                                layout='horizontal'
                                footer={
                                    <Button block type='submit' color='primary' size='large'>
                                        提交
                                    </Button>
                                }
                            >
                                <Form.Item
                                    name='name'
                                    label='矛盾类型'
                                    rules={[{ required: true, message: '姓名不能为空' }]}
                                >
                                    <Input onChange={console.log} placeholder='请输入矛盾类型' />
                                </Form.Item>
                                <Form.Item name='address' label='矛盾详情'>
                                    <TextArea
                                        placeholder='请输入矛盾详情'
                                        maxLength={100}
                                        rows={10}
                                        showCount
                                    />
                                </Form.Item>
                                <Form.Item>
                                    <ImageUploader
                                        value={this.fileList}
                                    />
                                </Form.Item>

                            </Form>


                        </div>
                    </div>
                </div>
            </>
        )
    }
}
