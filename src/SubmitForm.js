import "./SubmitForm.css";
import submitOpenAi from "./submitOpenAi";
import Button from "./Button";
import AiEngine from "./AiEngine";
import { useState, useRef } from "react";
import { motion } from "framer-motion";

const placeholderArr = [
  "You could ask for a joke...",
  "Write part of a sentence, let GPT3 Complete it...",
  "Ask for an excuse",
];

const SubmitForm = ({
  aiEngine,
  setAiEngine,
  aiPrompt,
  setAiPrompt,
  aiResp,
  setAiResp,
}) => {
  const aiEngineSwiper = useRef();
  const [placeholderCount, setPlaceholderCount] = useState(0);
  return (
    <section>
      <form
        id="submitToAi"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <div className="aiEngineScroller">
          <div className="aiEngineSwiperContain">
            <fieldset
              form="submitToAi"
              onChange={(event) => {
                setAiEngine(event.target.value);
              }}
            >
              <legend>Select an Ai Engine:</legend>
              <motion.div
                drag="x"
                dragConstraints={{ left: -750, right: -90 }}
                className="aiEngineSwiper"
                ref={aiEngineSwiper}
                animate={
                  aiEngine === "text-ada-001"
                    ? { x: "-90px" }
                    : aiEngine === "text-babbage-001"
                    ? { x: "-310px" }
                    : aiEngine === "text-curie-001"
                    ? { x: "-530px" }
                    : aiEngine === "text-davinci-001"
                    ? { x: "-750px" }
                    : { x: "-90px" }
                }
              >
                <AiEngine aiEngine={aiEngine} />
              </motion.div>
            </fieldset>
          </div>
        </div>
        <label htmlFor="aiPrompt">Enter a command for GPT-3!</label>
        <textarea
          id="aiPrompt"
          placeholder={placeholderArr[placeholderCount]}
          value={aiPrompt}
          onChange={(event) => {
            setAiPrompt(event.target.value);
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              submitOpenAi(
                event,
                aiEngine,
                aiPrompt,
                setAiPrompt,
                aiResp,
                setAiResp
              );
            }
          }}
        ></textarea>

        <Button
          onClick={(event) => {
            setPlaceholderCount((prev) => {
              if (prev === placeholderArr.length - 1) {
                return 0;
              }
              return prev + 1;
            });
            submitOpenAi(
              event,
              aiEngine,
              aiPrompt,
              setAiPrompt,
              aiResp,
              setAiResp
            );
          }}
        >
          SUBMIT TO AI
        </Button>
      </form>
    </section>
  );
};

export default SubmitForm;
