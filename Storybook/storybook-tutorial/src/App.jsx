import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Dtpk1001 from "./components/Dtpk/Dtpk1001/Dtpk1001";
import TaskList from "./components/TaskList/TaskList";
import Task from "./components/Task/Task";
import "./App.css";
import { ThemeProvider } from "styled-components";

import "./index.css";
import store from "./lib/store";

import { Provider } from "react-redux";
import InboxScreen from "./components/InboxScreen/InboxScreen";

function App() {
  return (
    <div className="App">
      {/* <Task
          task={{ id: "1", title: "Test", state: "TASK_INBOX" }}
          onArchiveTask={() => {}}
          onPinTask={() => {}}
        /> */}
      <Provider store={store}>
        <InboxScreen />
      </Provider>
    </div>
  );
}

export default App;
