import React from "react";
import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {
  console.log("demo");
  return <MyParagraph>{props.show ? "this is new" : ""}</MyParagraph>;
};

export default React.memo(DemoOutput);
