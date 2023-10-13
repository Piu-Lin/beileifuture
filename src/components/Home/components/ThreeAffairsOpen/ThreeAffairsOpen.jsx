import React, { Component } from 'react'
import './index.less'
import BackIcon from "../../icon/Back.png"
export default class ThreeAffairsOpen extends Component {
    BackToHomeNav=()=>{
        this.props.SetHomeState(0)
    }
    state={
        TreNavState:1,
    }
    changeTreNavState=(tobe)=>{
        this.setState({TreNavState:tobe,})
    }
    contentRender=()=>{
        switch (this.state.TreNavState){
            case 1:
                return (
                    <div  className='TrBox'>
                    <div className='TrItemBox'>
                        <div className='TrItemTitle'>2023年党费上半年收缴情况</div>
                        <div className='TrItemBottomLine'>
                            <div className='TrItemTime'>2023-09-01</div>
                            <div className='TrItemLookDetail'>查看详情</div>
                        </div>
                    </div>
                    <div className='TrItemBox'>
                        <div className='TrItemTitle'>2022年党费下半年收缴情况</div>
                        <div className='TrItemBottomLine'>
                            <div className='TrItemTime'>2022-12-01</div>
                            <div className='TrItemLookDetail'>查看详情</div>
                        </div>
                    </div>
                    <div className='TrItemBox'>
                        <div className='TrItemTitle'>2022年党费上半年收缴情况</div>
                        <div className='TrItemBottomLine'>
                            <div className='TrItemTime'>2022-07-01</div>
                            <div className='TrItemLookDetail'>查看详情</div>
                        </div>
                    </div>
                </div>
                )
            case 2:
                return (
                    <div  className='TrBox'>
                    <div className='TrItemBox'>
                        <div className='TrItemTitle'>2023年9月救助对象审批公布</div>
                        <div className='TrItemBottomLine'>
                            <div className='TrItemTime'>2023-09-04</div>
                            <div className='TrItemLookDetail'>查看详情</div>
                        </div>
                    </div>
                    <div className='TrItemBox'>
                        <div className='TrItemTitle'>2023年8月救助对象审批公布</div>
                        <div className='TrItemBottomLine'>
                            <div className='TrItemTime'>2023-08-01</div>
                            <div className='TrItemLookDetail'>查看详情</div>
                        </div>
                    </div>
                    <div className='TrItemBox'>
                        <div className='TrItemTitle'>2023年7月救助对象审批公布</div>
                        <div className='TrItemBottomLine'>
                            <div className='TrItemTime'>2023-07-12</div>
                            <div className='TrItemLookDetail'>查看详情</div>
                        </div>
                    </div>
                </div>
                    )
            case 3:
                return (
                    <div  className='TrBox'>
                    <div className='TrItemBox'>
                        <div className='TrItemTitle'>倍磊村2023年9月收支明细表</div>
                        <div className='TrItemBottomLine'>
                            <div className='TrItemTime'>2023-09-04</div>
                            <div className='TrItemLookDetail'>查看详情</div>
                        </div>
                    </div>
                    <div className='TrItemBox'>
                        <div className='TrItemTitle'>倍磊村2023年8月收支明细表</div>
                        <div className='TrItemBottomLine'>
                            <div className='TrItemTime'>2023-08-01</div>
                            <div className='TrItemLookDetail'>查看详情</div>
                        </div>
                    </div>
                    <div className='TrItemBox'>
                        <div className='TrItemTitle'>倍磊村2023年7月收支明细表</div>
                        <div className='TrItemBottomLine'>
                            <div className='TrItemTime'>2023-07-12</div>
                            <div className='TrItemLookDetail'>查看详情</div>
                        </div>
                    </div>
                </div>
                    )
            default:
                return (<></>)
        }
    }
    render() {
        return (
            <>
            <div className="TopNav">
                <div  className="back" onClick={() =>  this.BackToHomeNav()}  >
                    <img src={BackIcon} alt="返回" />
                </div>
                <div className="title">
                    <span>三务公开</span>
                </div>
            </div>
            <div className='TrSubNav'>
                {this.state.TreNavState===1?(<div className='TrSubNavActive'>党务公开</div>):(<div onClick={()=>{this.changeTreNavState(1)}}>党务公开</div>)}
                {this.state.TreNavState===2?(<div className='TrSubNavActive'>村务公开</div>):(<div onClick={()=>{this.changeTreNavState(2)}}>村务公开</div>)}
                {this.state.TreNavState===3?(<div className='TrSubNavActive'>财务公开</div>):(<div onClick={()=>{this.changeTreNavState(3)}}>财务公开</div>)}
            </div>
            {this.contentRender()}
            </>
        )
    }
}
