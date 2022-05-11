import { useEffect, useState } from "react";
import Button from "./Button";
import submitOpenAi from "./submitOpenAi";
import "./App.css";
import RespList from "./RespList";

// ✅ Trigger 'loading' state before response and clear after response is received
// ✅ Check if response is 'ok' and throw error if not

function App() {
  const [aiResp, setAiResp] = useState([]);
  const [aiPrompt, setAiPrompt] = useState();

  // useEffect(() => {
  //   console.log(aiResp);
  // }, [aiResp]);

  return (
    <>
      <header>
        <h1 style={{ textAlign: "center" }}>Open AI</h1>
      </header>
      <main id="main" className="App">
        <section>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            onSubmit={(event) => {
              event.preventDefault();
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
                  submitOpenAi(event, aiPrompt, setAiPrompt, aiResp, setAiResp);
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
          </form>
        </section>
        <section
          className="aiRespList"
          style={{
            display: "flex",
            flexDirection: "column-reverse",
            width: "70vw",
            margin: "auto auto",
          }}
        >
          <RespList aiResp={aiResp} />
        </section>
      </main>
    </>
  );
}

export default App;
