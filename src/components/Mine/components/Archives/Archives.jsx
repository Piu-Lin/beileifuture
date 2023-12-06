import React, { Component } from 'react'
import backIcon from '../../icon/back.png'
import { Steps, Collapse } from 'antd-mobile'
import './index.less'
import more from '../../icon/more.png'

export default class Archives extends Component {
  BackTo0 = () => {
    this.props.MineState(0)
  }

  state = {
    heath: [
      {
        "title": "张医生",
        "status": "finish",
        "description": "建议进行全面体检，包括血常规、尿常规、心电图、肝功能、肾功能等项目。此外，还建议进行胸部X光检查，以评估肺部健康状况。"
      },

      {
        "title": "李医生",
        "status": "finish",
        "description": "建议进行眼科检查，包括视力检查、眼压测量和眼底检查。如果有近视或散光情况，还建议进行配镜或角膜塑形镜的评估。"
      },

      {
        "title": "王医生",
        "status": "finish",
        "description": "建议进行腹部超声检查，以了解肝脏、胆囊、胰腺、肾脏等腹部器官的情况。此外，还建议进行甲状腺功能检查，以评估甲状腺的功能状态。"
      },

      {
        "title": "刘医生",
        "status": "finish",
        "description": "建议进行骨密度检查，以评估骨质状况和骨质疏松的风险。此外，还建议进行血清钙、血清磷和碱性磷酸酶等相关指标的检测。"
      },

      {
        "title": "陈医生",
        "status": "finish",
        "description": "建议进行乳腺检查，包括乳腺超声、乳腺X光摄影和乳腺MRI等。如果有乳房肿块或异常情况，还建议进行乳房穿刺细胞学检查或乳腺活检。"
      },
    ],
    isMore: false,
    values: [

      {
        "title": "血常规",
        "context": "白细胞计数：7500/mm³，红细胞计数：4.9×10^6/mm³，血红蛋白：13.2 g/dL，血小板计数：200×10^3/mm³"
      },

      {
        "title": "尿常规",
        "context": "尿液颜色：黄色，比重：1.015，PH值：6.5，蛋白质：阴性，葡萄糖：阴性"
      },

      {
        "title": "血压",
        "context": "收缩压：130 mmHg，舒张压：85 mmHg"
      },

      {
        "title": "身高体重",
        "context": "身高：165 cm，体重：70 kg"
      },

      {
        "title": "胸部X光",
        "context": "未见异常"
      },

      {
        "title": "心电图",
        "context": "正常心律，无异常波形"
      },

      {
        "title": "视力检查",
        "context": "左眼：1.2，右眼：1.0"
      },

      {
        "title": "肝功能",
        "context": "谷丙转氨酶（ALT）：22 U/L，谷草转氨酶（AST）：28 U/L，总胆红素：1.0 mg/dL"
      },

      {
        "title": "肾功能",
        "context": "血尿素氮（BUN）：14 mg/dL，肌酐：0.7 mg/dL"
      },

      {
        "title": "血糖",
        "context": "空腹血糖：95 mg/dL，餐后2小时血糖：110 mg/dL"
      },

      {
        "title": "血脂",
        "context": "总胆固醇：180 mg/dL，甘油三酯：120 mg/dL，高密度脂蛋白胆固醇：50 mg/dL，低密度脂蛋白胆固醇：110 mg/dL"
      },

      {
        "title": "肺功能",
        "context": "FEV1：3.2 L，FVC：4.0 L，FEV1/FVC比值：80%"
      },

      {
        "title": "骨密度",
        "context": "骨密度T值：-1.0，骨密度Z值：-0.5"
      },

      {
        "title": "甲状腺功能",
        "context": "TSH：2.5 mIU/L，T3：2.0 nmol/L，T4：10.5 µg/dL"
      },

      {
        "title": "乳腺超声",
        "context": "未见异常肿块，乳腺组织结构均匀"
      },

      {
        "title": "前列腺特异抗原",
        "context": "PSA：1.2 ng/mL"
      },

      {
        "title": "骨髓穿刺",
        "context": "骨髓细胞分布正常，未见异常细胞"
      },

      {
        "title": "眼底检查",
        "context": "未见视网膜出血或渗出，黄斑区无明显异常"
      },

      {
        "title": "糖化血红蛋白",
        "context": "糖化血红蛋白：5.5%"
      },

      {
        "title": "乙肝五项",
        "context": "HBsAg"
      }
    ],
    username:'1',
    imei:{
      imei: "00000011100",
      heartRate: "80",
      dbp: "70",
      sdp: "120",
      oxygen: "95",
      bloodSugar: "5.8",
      temperature: "36.3",
    }
  }
  SwitchMore = () => {
    this.setState({
      isMore: !this.state.isMore
    })
  }
  init = () => {
    const username = JSON.parse(localStorage.getItem('user'))
    this.setState({username:username.name})

    fetch(
        `http://218.0.59.244:10009/prod-api/governance/health_record/openList?userId=${username.id}`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ imei: data.rows[0] }))
      .catch((error) => console.log(error));
  };
  componentDidMount() {
    this.init();
  }
  render() {
    const { isMore, values,username,imei } = this.state
    const { Step } = Steps
    return (
      <div className="index">
        <div className="TopNav">
          <div className="back" onClick={() => { this.state.isMore ? this.SwitchMore() : this.BackTo0() }} >
            <img src={backIcon} alt="返回" />
          </div>
          <div className="title">
            <span>健康档案</span>
          </div>

        </div>
        {
          isMore ? (<ArchivesMore values={values} />)
            :
            (<>
              <div className="heath">
                <div className="healthTitle">
                  <div>
                    <svg className="icon" aria-hidden="true">
                      <use xlinkHref="#icon-jiankang"></use>
                    </svg>
                    <span>身体指标</span>
                  </div>
                  <div onClick={() => {
                    this.SwitchMore()
                  }}>
                    <span>{username}</span>
                    <img src={more} alt="" />
                  </div>
                </div>
                <div className="healthContext">
                  <div className="card">
                    <div className="cardTitle">
                      <svg className="cardicon" aria-hidden="true">
                        <use xlinkHref="#icon-shouye"></use>
                      </svg>
                      <span>血压</span>
                    </div>
                    <div className="cardContext">
                      <span>
                        收缩压 {imei.sdp}mmHg<br />
                        舒张压 {imei.dbp}mmHg
                      </span>
                    </div>
                  </div>
                  <div className="card">
                    <div className="cardTitle">
                      <svg className="cardicon" aria-hidden="true">
                        <use xlinkHref="#icon-shouye1"></use>
                      </svg>
                      <span>血糖</span>
                    </div>
                    <div className="cardContext">
                      <span>
                        空腹 {imei.bloodSugar}mmol/l
                      </span>
                    </div>
                  </div>
                  <div className="card">
                    <div className="cardTitle">
                      <svg className="cardicon" aria-hidden="true">
                        <use xlinkHref="#icon-xieyang"></use>
                      </svg>
                      <span>血氧</span>
                    </div>
                    <div className="cardContext">
                      <span>
                        饱和度 Spo{imei.oxygen}%<br />
                      </span>
                    </div>
                  </div>
                  <div className="card">
                    <div className="cardTitle">
                      <svg className="cardicon" aria-hidden="true">
                        <use xlinkHref="#icon-iconxd"></use>
                      </svg>
                      <span>心电</span>
                    </div>
                    <div className="cardContext">
                      <span>
                        心律 {imei.heartRate}/分
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Archives" style={{
                height: "40vh",
                overflow: "auto"
              }}>
                <div className="healthTitle">
                  <div>
                    <svg className="icon" aria-hidden="true">
                      <use xlinkHref="#icon-jiankang"></use>
                    </svg>
                    <span>医生建议</span>
                  </div>
                </div>
                <Steps direction='vertical' style={{
                  height: "35vh",
                  overflow: "auto"
                }}>
                  {
                    this.state.heath.map((item, i) => (
                      <Step
                        key={i}
                        title={item.title}
                        status='finish'
                        description={item.description}
                      />
                    ))
                  }
                </Steps>
              </div></>)
        }



      </div>
    )
  }
}



export const ArchivesMore = (props) => {
  return (
    <div className="index">
      <div className="Archives" style={{
        height: "75vh",
        overflow: "auto"
      }} >
        <div className="moreTitle">
          各项检测详细信息
        </div>
        <div className="more">
          <Collapse accordion>
            {
              props.values.map((item, i) => {
                return (<Collapse.Panel key={i} title={item.title}>
                  {item.context}
                </Collapse.Panel>
                )
              })
            }

          </Collapse>
        </div>
      </div>
    </div>
  )
}
