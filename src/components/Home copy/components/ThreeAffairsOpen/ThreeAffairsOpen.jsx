import React, { Component } from 'react'
import './index.less'
import BackIcon from "../../icon/Back.png"
export default class ThreeAffairsOpen extends Component {
    BackToHomeNav = () => {
        this.props.SetHomeState(0)
    }
    state = {
        TreNavState: 1,
        isDetail: false,
        dangFei: [
            {
                "TrItemTitle": "2023年党费上半年收缴情况",
                "TrItemTime": "2023-09-01",
                "TrItemDetail": "内容内容内容内容内容内容内容内容内容内容内容内容"
            },
            {
                "TrItemTitle": "2022年党费下半年收缴情况",
                "TrItemTime": "2022-12-01",
                "TrItemDetail": "内容内容内容内容内容内容内容内容内容内容内容内容"
            },
            {
                "TrItemTitle": "2022年党费上半年收缴情况",
                "TrItemTime": "2022-07-01",
                "TrItemDetail": "内容内容内容内容内容内容内容内容内容内容内容内容"
            }
        ],
        duixiang: [
            {
                "TrItemTitle": "2023年9月救助对象审批公布",
                "TrItemTime": "2023-09-04",
                "TrItemDetail": "内容内容内容内容内容内容内容内容内容内容内容内容"
            },
            {
                "TrItemTitle": "2023年8月救助对象审批公布",
                "TrItemTime": "2023-08-01",
                "TrItemDetail": "内容内容内容内容内容内容内容内容内容内容内容内容"
            },
            {
                "TrItemTitle": "2023年7月救助对象审批公布",
                "TrItemTime": "2023-07-12",
                "TrItemDetail": "内容内容内容内容内容内容内容内容内容内容内容内容"
            }
        ],
        shouzhi:
            [
                {
                    "TrItemTitle": "倍磊村2023年9月收支明细表",
                    "TrItemTime": "2023-09-04",
                    "TrItemDetail": "内容内容内容内容内容内容内容内容内容内容内容内容"
                },
                {
                    "TrItemTitle": "倍磊村2023年8月收支明细表",
                    "TrItemTime": "2023-08-01",
                    "TrItemDetail": "内容内容内容内容内容内容内容内容内容内容内容内容"
                },
                {
                    "TrItemTitle": "倍磊村2023年7月收支明细表",
                    "TrItemTime": "2023-07-12",
                    "TrItemDetail": "内容内容内容内容内容内容内容内容内容内容内容内容"
                }
            ],
        card: {
            TrItemTitle: "",
            TrItemTime: '',
            TrItemDetail: ''
        }

    }
    changeTreNavState = (tobe) => {
        this.setState({ TreNavState: tobe, })
    }
    changeDetail = () => {
        this.setState({
            isDetail: !this.state.isDetail
        })
    }
    SetCard = (TrItemTitle, TrItemTime, TrItemDetail) => {
        this.setState({
            card: {
                TrItemTitle,
                TrItemTime,
                TrItemDetail
            }
        })
    }
    contentRender = () => {
        switch (this.state.TreNavState) {
            case 1:
                return (
                    <div className='TrBox'>
                        {
                            this.state.dangFei.map((item, i) => {
                                return (
                                    <div className='TrItemBox' key={i} onClick={() => { this.changeDetail(); this.SetCard(item.TrItemTitle, item.TrItemTime, item.TrItemDetail) }}>
                                        <div className='TrItemTitle'>{item.TrItemTitle}</div>
                                        <div className='TrItemBottomLine'>
                                            <div className='TrItemTime'>{item.TrItemTime}</div>
                                            <div className='TrItemLookDetail'>查看详情</div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            case 2:
                return (
                    <div className='TrBox'>
                        {
                            this.state.duixiang.map((item, i) => {
                                return (
                                    <div className='TrItemBox'key={i} onClick={() => { this.changeDetail(); this.SetCard(item.TrItemTitle, item.TrItemTime, item.TrItemDetail) }}>

                                        <div className='TrItemTitle'>{item.TrItemTitle}</div>
                                        <div className='TrItemBottomLine'>
                                            <div className='TrItemTime'>{item.TrItemTime}</div>
                                            <div className='TrItemLookDetail'>查看详情</div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            case 3:
                return (
                    <div className='TrBox'>
                        {
                            this.state.shouzhi.map((item, i) => {
                                return (
                                    <div className='TrItemBox'key={i} onClick={() => { this.changeDetail(); this.SetCard(item.TrItemTitle, item.TrItemTime, item.TrItemDetail) }}>

                                        <div className='TrItemTitle'>{item.TrItemTitle}</div>
                                        <div className='TrItemBottomLine'>
                                            <div className='TrItemTime'>{item.TrItemTime}</div>
                                            <div className='TrItemLookDetail'>查看详情</div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            default:
                return (<></>)
        }
    }
    render() {
        const { isDetail } = this.state
        return (
            <>

                <div className="TopNav">
                    <div className="back" onClick={() => isDetail ? this.changeDetail() : this.BackToHomeNav()}  >
                        <img src={BackIcon} alt="返回" />
                    </div>
                    <div className="title">
                        <span>三务公开</span>
                    </div>
                </div>

                {
                    isDetail ? (<ThreeAffairsOpenDetail card={this.state.card} />) :
                        (<>
                            <div className='TrSubNav'>
                                {this.state.TreNavState === 1 ? (<div className='TrSubNavActive'>党务公开</div>) : (<div onClick={() => { this.changeTreNavState(1) }}>党务公开</div>)}
                                {this.state.TreNavState === 2 ? (<div className='TrSubNavActive'>村务公开</div>) : (<div onClick={() => { this.changeTreNavState(2) }}>村务公开</div>)}
                                {this.state.TreNavState === 3 ? (<div className='TrSubNavActive'>财务公开</div>) : (<div onClick={() => { this.changeTreNavState(3) }}>财务公开</div>)}
                            </div>
                            {this.contentRender()}</>)
                }

            </>
        )
    }
}



export const ThreeAffairsOpenDetail = (props) => {
    return (
        <div className='index'>
            <div className="Archives">
                <div className="DetailTitle">
                    <div>
                        <span>{props.card.TrItemTitle}</span>
                    </div>
                    <div>
                        <span>{props.card.TrItemTime}</span>
                    </div>
                </div>
                <div className="DetailContext">
                    <div className="card">

                        <div className="cardContext">
                            <span>
                                {props.card.TrItemDetail}
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
