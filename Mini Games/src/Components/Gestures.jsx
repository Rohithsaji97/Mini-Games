import React from "react";

function Gestures({ selected }) {
  return (
    <div className="gesture-container">
      <div onClick={() => selected("rock")} className="each-gestures">
        <img
          className="gesture-image"
          style={{ width: "200px", height: "200px" }}
          src="https://www.shareicon.net/download/2016/11/14/851912_hand-o-rock.svg"
          alt="No rock found"
        />
      </div>
      <div onClick={() => selected("paper")} className="each-gestures">
        <img
          className="gesture-image"
          style={{ width: "200px", height: "200px" }}
          src="https://static-00.iconduck.com/assets.00/paper-hand-icon-1792x2048-hhtonm77.png"
          alt="No paper found"
        />
      </div>
      <div onClick={() => selected("scissors")} className="each-gestures">
        <img
          className="gesture-image"
          style={{ width: "200px", height: "200px" }}
          src="https://www.svgrepo.com/show/314132/hand-scissors.svg"
          alt="No scissors found"
        />
      </div>
    </div>
  );
}

export default Gestures;
