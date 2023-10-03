import { useState } from "react";
import "./App.css";
import useToggle from "./useToggle";

function App() {
  const { show, toggleValue } = useToggle(true);
  return (
    <div>
      <h1>Toggle Custom Hook</h1>
      <button type="button" onClick={toggleValue}>
        Click Me to toggle
      </button>
      {show && <h1>Toggled</h1>}
    </div>
  );
}

export default App;
