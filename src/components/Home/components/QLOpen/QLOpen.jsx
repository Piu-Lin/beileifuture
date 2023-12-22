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
 
        ],
        isDetailed: false,

        value: {
            "projectName": "村庄发展计划",
            "buildTime": "2023-03-10",
            "projectDetail": "根据本年度计划，村庄将进行基础设施改善和农业项目支持。详细计划将于下周公开。",
            "budgetInvestment": "村委会"
        },
    }
    chanegDetailed = () => {
        this.setState({
            isDetailed: !this.state.isDetailed
        })

    }

    init = () => {
        fetch("https://metagis.cc:20256/prod-api/governance/honest_open/openList")
          .then((response) => response.json())
          .then((data) => this.setState({ Village_Affairs_Information: data.rows }))
          .catch((error) => console.log(error));
      };
      componentDidMount(){
        this.init();
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
                                            {item.projectName}
                                        </span>

                                        <span>
                                            {item.buildTime}
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
                title={props.value.projectName}
            >
                <p>责任主体:{props.value.subjectToliability}</p>
                <p>投资预算:{props.value.budgetInvestment}</p>
                <p>工程详情:{props.value.projectDetail}</p>
                <div style={{width:"100%",textAlign:"end",marginTop:"20px"}}>
                    <span>{props.value.buildTime}</span>
                </div>
                <div style={{width:"100%",textAlign:"end"}}>
                    <span>{}</span>
                </div>
            </Card>
        </div>
    )
}
