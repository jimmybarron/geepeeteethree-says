import { useState } from "react";
import Button from "./Button";
import submitOpenAi from "./submitOpenAi";
import "./App.css";

function App() {
  const [aiResp, setAiResp] = useState();
  const [aiPrompt, setAiPrompt] = useState();

  return (
    <div className="App">
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <label htmlFor="aiPrompt">Ask the computer a question:</label>
        <textarea
          id="aiPrompt"
          style={{ width: "70vw", height: "10vh", fontSize: "24px" }}
          value={aiPrompt}
          onChange={(event) => {
            setAiPrompt(event.target.value);
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              submitOpenAi(event, aiPrompt, setAiPrompt, setAiResp);
            }
          }}
        ></textarea>
        <Button
          onClick={(event) =>
            submitOpenAi(event, aiPrompt, setAiPrompt, setAiResp)
          }
        >
          Submit to Ai
        </Button>
        <h2 className="aiResp">{aiResp}</h2>
      </form>
    </div>
  );
}

export default App;
