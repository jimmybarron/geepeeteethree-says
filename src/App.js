import { useEffect, useState } from "react";
import "./App.css";
import RespList from "./RespList";
import SubmitForm from "./SubmitForm";

// ✅ Trigger 'loading' state before response and clear after response is received
// ✅ Check if response is 'ok' and throw error if not

function App() {
  const [aiEngine, setAiEngine] = useState();
  const [aiResp, setAiResp] = useState([]);
  const [aiPrompt, setAiPrompt] = useState();

  useEffect(() => {
    console.log(aiEngine);
  }, [aiEngine]);

  return (
    <>
      <header>
        <h1 style={{ textAlign: "center" }}>Open AI</h1>
      </header>
      <main id="main" className="App">
        <SubmitForm
          aiEngine={aiEngine}
          setAiEngine={setAiEngine}
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
