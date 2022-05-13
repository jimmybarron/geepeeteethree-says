import { useEffect, useState } from "react";
import "./reset.css";
import "./App.css";
import RespList from "./RespList";
import SubmitForm from "./SubmitForm";

// ✅ Trigger 'loading' state before response and clear after response is received
// ✅ Check if response is 'ok' and throw error if not

function App() {
  const [aiEngine, setAiEngine] = useState("text-ada-001");
  const [aiResp, setAiResp] = useState([]);
  const [aiPrompt, setAiPrompt] = useState();

  useEffect(() => {
    console.log(aiEngine);
  }, [aiEngine]);

  return (
    <>
      <header>
        <h1
          style={{
            backgroundColor: "#000000",
            color: "#eeeeee",
            textAlign: "center",
          }}
        >
          Ask GPT-3
        </h1>
        <h1
          style={{
            backgroundColor: "#000000",
            color: "#eeeeee",
            textAlign: "center",
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            top: "140px",
          }}
        >
          ANYTHING
        </h1>
      </header>
      <main id="main">
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
