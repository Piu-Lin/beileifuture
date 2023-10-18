import React, { Component } from 'react'
import './index.less'
import BackIcon from "../../icon/Back.png"
import { Card } from 'antd-mobile'
export default class QLOpen extends Component {
    BackToHomeNav = () => {
        this.props.SetHomeState(0)
    }
    state = {
        "Village_Affairs_Information": [
            {
                "Title": "村庄发展计划",
                "Date": "2023-03-10",
                "Content": "根据本年度计划，村庄将进行基础设施改善和农业项目支持。详细计划将于下周公开。",
                "Issuing_Department": "村委会"
            },
            {
                "Title": "村民会议通知",
                "Date": "2023-03-15",
                "Content": "请所有村民参加下周的村民会议，以讨论重要事项，包括村庄预算分配。",
                "Issuing_Department": "村委会"
            },
            {
                "Title": "农田改良项目",
                "Date": "2023-03-20",
                "Content": "村庄计划进行农田改良项目，以提高农产品产量。请联系农田项目小组获得更多信息。",
                "Issuing_Department": "农田项目小组"
            },
            {
                "Title": "清洁村庄倡议",
                "Date": "2023-03-25",
                "Content": "我们鼓励村民积极参与清洁村庄倡议，一起保持村庄整洁美观。",
                "Issuing_Department": "环保小组"
            },
            {
                "Title": "社区健康检查计划",
                "Date": "2023-04-05",
                "Content": "社区健康检查计划将于4月启动。请关注进一步通知。",
                "Issuing_Department": "卫生部门"
            },
            {
                "Title": "村庄文化节安排",
                "Date": "2023-04-10",
                "Content": "准备村庄文化节，希望村民积极参与，展示我们的传统和文化。",
                "Issuing_Department": "文化节组织委员会"
            },
            {
                "Title": "基础设施改善计划更新",
                "Date": "2023-04-15",
                "Content": "最新的基础设施改善计划已经发布。请查看详细信息。",
                "Issuing_Department": "村庄建设部"
            },
            {
                "Title": "青年创业支持计划",
                "Date": "2023-04-20",
                "Content": "村庄启动了青年创业支持计划，为年轻人提供创业机会。了解更多信息。",
                "Issuing_Department": "青年发展协会"
            },
            {
                "Title": "村庄预算公示",
                "Date": "2023-04-25",
                "Content": "村庄今年的预算已经公示，欢迎村民查看和提出建议。",
                "Issuing_Department": "村委会"
            },
            {
                "Title": "安全防范提示",
                "Date": "2023-05-01",
                "Content": "请注意村庄安全，锁好门窗，防范盗窃。有可疑情况请报警。",
                "Issuing_Department": "村庄安全委员会"
            }
        ],
        isDetailed: false,

        value: {
            "Title": "村庄发展计划",
            "Date": "2023-03-10",
            "Content": "根据本年度计划，村庄将进行基础设施改善和农业项目支持。详细计划将于下周公开。",
            "Issuing_Department": "村委会"
        },
    }
    chanegDetailed = () => {
        this.setState({
            isDetailed: !this.state.isDetailed
        })

    }


    render() {
        const { Village_Affairs_Information, isDetailed, value } = this.state
        return (
            <>
                <div className='index'>
                    <div className="TopNav">
                        <div className="back" onClick={() => { isDetailed ? this.chanegDetailed() : this.BackToHomeNav() }}  >
                            <img src={BackIcon} alt="返回" />
                        </div>
                        <div className="title">
                            <span>清廉公开</span>
                        </div>
                    </div>
                    <div className='Archives'>
                        {
                            isDetailed ? <QLOpenDeilt value={value} /> : (Village_Affairs_Information.map((item, i) => {
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
                                            {item.Title}
                                        </span>

                                        <span>
                                            {item.Date}
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
                title={props.value.Title}
            >
                {props.value.Content}
                <div style={{width:"100%",textAlign:"end",marginTop:"20px"}}>
                    <span>{props.value.Date}</span>
                </div>
                <div style={{width:"100%",textAlign:"end"}}>
                    <span>{props.value.Issuing_Department}</span>
                </div>
            </Card>
        </div>
    )
}
