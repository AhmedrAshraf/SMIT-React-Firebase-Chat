import "./imgSwap.css";
import president from "../assets/president.png"
import React, { useState } from "react";

function Home() {
  const [left, setLeft] = useState(170);
  const [top, setTop] = useState(-100);

  return (
    <div className="container">
      <img src={president} style={{left, top}} />
      <div>
      <button onClick={() => setLeft(left - 2)}>Left</button>
      <button onClick={() => setLeft(left + 2)}>Right</button>
      <button onClick={() => setTop(top - 1)}>Top</button>
      <button onClick={() => setTop(top + 1)}>Bottom</button>
      </div>
    </div>
  );
}

export default Home;