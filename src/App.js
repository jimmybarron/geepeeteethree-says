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
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <label for="aiPrompt">Ask the computer a question:</label>
        <textarea
          id="aiPrompt"
          style={{ width: "70vw", height: "10vh", fontSize: "24px" }}
          onChange={(event) => {
            setAiPrompt(event.target.value);
            console.log(event.nativeEvent.inputType);
            if (event.nativeEvent.inputType === "insertLineBreak") {
              submitOpenAi(aiPrompt, setAiResp);
            }
          }}
        />
        <Button onClick={() => submitOpenAi(aiPrompt, setAiResp)}>
          Submit to Ai
        </Button>
        <h2 className="aiResp">{aiResp}</h2>
      </form>
    </div>
  );
}

export default App;
