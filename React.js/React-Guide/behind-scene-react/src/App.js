import React, { useState, useCallback } from "react";

import "./App.css";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/UI/Button/Demo/DemoOutput";

function App() {
  const [showPragraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);
  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((state) => !state);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  console.log("APP RUNNING");

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showPragraph} />
      <Button onClick={toggleParagraphHandler}> Toggle Paragraph!</Button>
      <Button onClick={allowToggleHandler}> allow Paragraph!</Button>
    </div>
  );
}

export default App;
