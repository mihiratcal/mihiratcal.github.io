import React from "react";
import Content from "./Content";
import "../styles/Body.css";

export default function Week({ num, mStart, mEnd, dStart, dEnd, content }) {
  return (
    <>
      <p className="current-week">
        {" "}
        <b>
          week {num}: {mStart}/{dStart} - {mEnd}/{dEnd}
        </b>{" "}
      </p>
      <div>
        
          <Content num={content.num} labTitle={content.lt} discTitle={content.dt} attend={content.at} sol={content.sol} />
          
      </div>
    </>
  );
}
