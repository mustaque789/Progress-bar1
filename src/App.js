import React, { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";

const App = () => {
  const [progress, setProgress] = useState(0);

  useEffect(()=>{
    const time = setInterval(()=>{
      if (progress < 100) {
        setProgress((p) => p + 1);
      }
    },20)

    return ()=>{
      clearInterval(time)
    }

  },[progress])

  return (
    <>
      <div className="App">
        <ProgressBar progress={progress} color={"lightGreen"} />

        <ProgressBar progress={progress} color={"lightblue"} />

        <ProgressBar progress={progress} color={"yellow"} />
      </div>
    </>
  );
};

export default App;
