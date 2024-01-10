import React, { useState, useEffect } from "react";
import "./index.less";
import BackIcon from "../../icon/Back.png";
import img from "../../img/2024海报.png";
export function ContentDetail2(props) {
  const handleClick = () => {
    props.click(0);
  };

  const { content, title, imglist } = props.value;
  return (
    <div>
      <div className="index">
        <div className="TopNav">
          <div className="back">
            <img src={BackIcon} alt="返回" onClick={handleClick} />
          </div>
        </div>
        <div className="mainContent">
          <div className="mainTitle">{title}</div>
          <div className="mainImg">
            {imglist.map((item) => {
              return <>
                <img style={{ width: "100%" }} src={item.url} alt="" key={item.url} />
              </>
            })}
          </div>
          <div className="mainText">
            <span>{content}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
