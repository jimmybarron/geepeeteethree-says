import "./SubmitForm.css";
import submitOpenAi from "./submitOpenAi";
import Button from "./Button";
import AiEngine from "./AiEngine";
import { useRef } from "react";
import { motion } from "framer-motion";

const SubmitForm = ({
  aiEngine,
  setAiEngine,
  aiPrompt,
  setAiPrompt,
  aiResp,
  setAiResp,
}) => {
  const aiEngineSwiper = useRef();
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
        <div style={{ overflowX: "hidden", width: "auto", height: "360px" }}>
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
          placeholder="You could ask for a joke..."
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
          onClick={(event) =>
            submitOpenAi(
              event,
              aiEngine,
              aiPrompt,
              setAiPrompt,
              aiResp,
              setAiResp
            )
          }
        >
          SUBMIT TO AI
        </Button>
      </form>
    </section>
  );
};

export default SubmitForm;
