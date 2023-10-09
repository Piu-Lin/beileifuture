import React, { Component } from 'react'

export default class Home extends Component {
  state = {
    /** 乡村资讯 */
    villageInformation: [{
      /** 小图标 */
      miniCon:"",
      /** 标题 */
      informationTitle:"",
      /** 发布时间 */
      pushTime:"",
    }],
  }
  render() {
    return (
      <>
        <div>index</div>
      </>
    )
  }
}
