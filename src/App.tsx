/*  */ import React from "react";
import MyIframeComponent from "./components/ifram";

function App() {
  return (
    <div>
      <MyIframeComponent
        title="My Title"
        width={300}
        height={200}
        src="https://collabedit.com/turxc"
      />
    </div>
  );
}

export default App;
