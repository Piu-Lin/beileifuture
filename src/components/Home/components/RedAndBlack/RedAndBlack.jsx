import React, { Component } from 'react'
import './index.less'
import BackIcon from "../../icon/Back.png"

export default class RedAndBlack extends Component {
    BackToHomeNav = () => {
        this.props.SetHomeState(0)
    }
    state = {
        "redList": [
            {
                "id": 1,
                "name": "张三",
                "time": "10-15"
            },
            {
                "id": 2,
                "name": "李四",
                "time": "10-14"
            },
            {
                "id": 3,
                "name": "王五",
                "time": "10-13"
            },
            {
                "id": 4,
                "name": "赵六",
                "time": "10-12"
            },
            {
                "id": 5,
                "name": "钱七",
                "time": "10-11"
            }
        ],
        "blackList": [
            {
                "id": 1,
                "name": "孙八",
                "time": "10-15"
            },
            {
                "id": 2,
                "name": "周九",
                "time": "10-14"
            },
            {
                "id": 3,
                "name": "吴十",
                "time": "10-13"
            },
            {
                "id": 4,
                "name": "郑十一",
                "time": "10-12"
            },
            {
                "id": 5,
                "name": "王十二",
                "time": "10-11"
            }
        ]
    }
    render() {
        const { redList, blackList } = this.state
        return (
            <>
                <div className='index'>
                    <div className="TopNav">
                        <div className="back" onClick={() => this.BackToHomeNav()}  >
                            <img src={BackIcon} alt="返回" />
                        </div>
                        <div className="title">
                            <span>红黑榜</span>
                        </div>
                    </div>

                    <div className='RB_inddex'>
                        <div className="red">
                            <div className="title">
                                <span>
                                    红榜
                                </span>
                            </div>
                            <List values={redList}></List>
                        </div>
                        <div className="black">
                            <div className="title">
                                <span>黑榜</span>
                            </div>
                            <List values={blackList}></List>
                        </div>

                    </div>
                </div>
            </>
        )
    }
}



export const List = (props) => {
    return (
        <>
            <div className='list-index'>
                <div className="list-title">
                    <span>
                        排名
                    </span>
                    <span>
                        名称
                    </span>
                    <span>
                        日期
                    </span>
                </div>
                {
                    props.values.map((item,i)=>{
                        return (
                            <li className='list-item'>
                            <span>{item.id}</span>
                            <span>{item.name}</span>
                            <span>{item.time}</span>
                        </li>
                        )
                    })

                }
            </div>

        </>
    )
}
