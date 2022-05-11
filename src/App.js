import { useState } from "react";
import Button from "./Button";
import submitOpenAi from "./submitOpenAi";
import "./App.css";

function App() {
  const [aiResp, setAiResp] = useState();

  return (
    <div className="App">
      <Button onClick={() => submitOpenAi(setAiResp)}>Submit to Ai</Button>
      <h2 className="aiResp">{aiResp}</h2>
    </div>
  );
}

export default App;
