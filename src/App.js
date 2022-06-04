import { useEffect, useState } from "react";
import "./reset.css";
import "./App.css";
import RespList from "./RespList";
import SubmitForm from "./SubmitForm";

function App() {
  const [aiEngine, setAiEngine] = useState("text-ada-001");
  const [aiResponse, setAiResponse] = useState([]);
  const [aiPrompt, setAiPrompt] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(aiEngine);
  }, [aiEngine]);

  return (
    <>
      <header>
        <h1
          style={{
            color: "#eeeeee",
            textAlign: "center",
          }}
        >
          Ask GPT-3
        </h1>
        <h1
          style={{
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
          aiResponse={aiResponse}
          setAiResponse={setAiResponse}
          setLoading={setLoading}
        />
        <RespList aiResponse={aiResponse} loading={loading} />
      </main>
    </>
  );
}

export default App;
