import React, { Component } from 'react'
import './index.less'
import BackIcon from "../../icon/Back.png"
import { Card } from 'antd-mobile'
export default class Deliberative extends Component {
    BackToHomeNav = () => {
        this.props.SetHomeState(0)
    }
    state = {
        isDetailed: false,

        "Meeting_Information": [
            {
                "theme": "村庄发展规划",
                "participant": "张三、王五",
                "meetingTime": "2023-10-11"
            },
            {
                "theme": "社区安全讨论",
                "participant": "李四、赵六",
                "meetingTime": "2023-10-15"
            },
            {
                "theme": "环保倡议推进",
                "participant": "陈七、刘八",
                "meetingTime": "2023-10-20"
            },
            {
                "theme": "青年发展计划",
                "participant": "杨九、周十",
                "meetingTime": "2023-10-25"
            },
            {
                "theme": "基础设施改善计划",
                "participant": "吴十一、钱十二",
                "meetingTime": "2023-10-30"
            },
            {
                "theme": "农田改良项目评估",
                "participant": "朱十三、孙十四",
                "meetingTime": "2023-11-05"
            },
            {
                "theme": "文化节筹备计划",
                "participant": "徐十五、何十六",
                "meetingTime": "2023-11-10"
            },
            {
                "theme": "社区健康服务讨论",
                "participant": "许十七、贺十八",
                "meetingTime": "2023-11-15"
            },
            {
                "theme": "村庄预算分配审查",
                "participant": "肖十九、赖二十",
                "meetingTime": "2023-11-20"
            },
            {
                "theme": "清洁村庄计划评估",
                "participant": "林二十一、韦二十二",
                "meetingTime": "2023-11-25"
            }
        ],
        
        value: {
            "theme": "清洁村庄计划评估",
            "participant": "林二十一、韦二十二",
            "meetingTime": "2023-11-25"
        },
    }
    chanegDetailed = () => {
        this.setState({
            isDetailed: !this.state.isDetailed
        })

    }
    render() {
        const {Meeting_Information , isDetailed, value } = this.state

        return (
            <>
                <div className='index'>
                    <div className="TopNav">
                        <div className="back"  onClick={() => { isDetailed ? this.chanegDetailed() : this.BackToHomeNav() }}  >
                            <img src={BackIcon} alt="返回" />
                        </div>
                        <div className="title">
                            <span>议事管理</span>
                        </div>
                    </div>
                    <div className='Archives'>
                        {
                            isDetailed ? <QLOpenDeilt value={value} /> : (Meeting_Information.map((item, i) => {
                                return (
                                    <li className='QLopenLi' key={i} onClick={() => {
                                        this.chanegDetailed()
                                        this.setState({
                                            value: item
                                        })
                                    }}>
                                        <span>

                                        </span>

                                        <span>
                                            {item.theme}
                                        </span>

                                        <span>
                                            {item.meetingTime}
                                        </span>
                                    </li>
                                )
                            }))

                        }
                    </div>
                </div>
            </>
        )
    }
}


export const QLOpenDeilt = (props) => {
    return (
        <div>
            <Card
                headerStyle={{
                    color: 'rgb(105, 199, 236)',
                }}
                title={props.value.theme}
            >
                {props.value.participant}
                <div style={{width:"100%",textAlign:"end",marginTop:"20px"}}>
                    <span>{props.value.meetingTime}</span>
                </div>
                <div style={{width:"100%",textAlign:"end"}}>
                    <span>{props.value.Issuing_Department}</span>
                </div>
            </Card>
        </div>
    )
}