import React, { Component } from 'react'
import backIcon from '../icon/back.png'
import './index.less'
import * as eCharts from "echarts";
export default class Archives extends Component {
  BackTo0 = () => {
    this.props.MineState(0)
  }
  eChartsRef = React.createRef();
  componentDidMount() {
    const myChart = eCharts.init(this.eChartsRef.current);

    let option = {
      series: [
        {
          name: 'Pressure',
          type: 'gauge',
          detail: {
            formatter: '{value}'
          },
          data: [
            {
              value: 50,
              name: 'SCORE'
            }
          ]
        }
      ]
    };

    myChart.setOption(option);
  }

  render() {
    return (
      <div className="index">
        <div className="TopNav">
          <div className="back" onClick={() => { this.BackTo0() }} >
            <img src={backIcon} alt="返回" />
          </div>
          <div className="title">
            <span>健康档案</span>
          </div>

        </div>
        <div className="Archives">
          <div className="Charts" ref={this.eChartsRef}>

          </div>
        </div>
      </div>
    )
  }
}
