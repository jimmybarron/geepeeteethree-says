import { useState } from "react";
import "./App.css";
import RespList from "./RespList";
import SubmitForm from "./SubmitForm";

// ✅ Trigger 'loading' state before response and clear after response is received
// ✅ Check if response is 'ok' and throw error if not

function App() {
  const [aiEngine, setAiEngine] = useState("text-ada-001");
  const [aiResp, setAiResp] = useState([]);
  const [aiPrompt, setAiPrompt] = useState();

  return (
    <>
      <header>
        <h1 style={{ textAlign: "center" }}>Open AI</h1>
      </header>
      <main id="main" className="App">
        <SubmitForm
          aiEngine={aiEngine}
          aiPrompt={aiPrompt}
          setAiPrompt={setAiPrompt}
          aiResp={aiResp}
          setAiResp={setAiResp}
        />
        <RespList aiResp={aiResp} />
      </main>
    </>
  );
}

export default App;
