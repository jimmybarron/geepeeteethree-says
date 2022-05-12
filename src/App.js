import { useEffect, useState } from "react";
import "./App.css";
import RespList from "./RespList";
import SubmitForm from "./SubmitForm";

// ✅ Trigger 'loading' state before response and clear after response is received
// ✅ Check if response is 'ok' and throw error if not

function App() {
  const [aiResp, setAiResp] = useState([]);
  const [aiPrompt, setAiPrompt] = useState();

  return (
    <>
      <header>
        <h1 style={{ textAlign: "center" }}>Open AI</h1>
      </header>
      <main id="main" className="App">
        <SubmitForm
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
