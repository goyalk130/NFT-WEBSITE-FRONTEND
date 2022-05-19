import React from "react";
import Block from "./block";

export default function HomeFirstBlock() {
  return (
    <div className="first-block">
      <div className="name">
        <h1>SenZ NFTs</h1>
        <p>jcbsdhcjbds dcbdsjhcdc dchbdsc dshcbds cdscds</p>
        <button>
          <h1>Mint</h1>
        </button>
      </div>
      <div className="first-block-container">
        <Block/>
        <Block/>
        <Block/>
        <Block/>
        <Block/>
        <div className="block"></div>
      </div>
    </div>
  );
}
