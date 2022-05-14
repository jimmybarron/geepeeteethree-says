import "./SubmitForm.css";
import submitOpenAi from "./submitOpenAi";
import Button from "./Button";
import { motion, transform } from "framer-motion";

const SubmitForm = ({
  aiEngine,
  setAiEngine,
  aiPrompt,
  setAiPrompt,
  aiResp,
  setAiResp,
}) => {
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
        <fieldset
          form="submitToAi"
          onChange={(event) => {
            setAiEngine(event.target.value);
          }}
        >
          <legend>Select an Ai Engine:</legend>
          <div className="aiEngineSwiper">
            <motion.div className="aiEngine">
              <motion.label
                for="ada"
                animate={
                  aiEngine === "text-ada-001"
                    ? {
                        transform: "scale(1.1)",
                        opacity: "1",
                        color: "#E1F12E",
                      }
                    : {
                        transform: "scale(1)",
                        opacity: "0.3",
                        color: "#EEEEEE",
                      }
                }
              >
                Ada
                <input
                  type="radio"
                  id="ada"
                  name="aiEngineChoice"
                  value="text-ada-001"
                  hidden
                />
                <motion.div
                  className="aiEngineImg"
                  animate={
                    aiEngine === "text-ada-001"
                      ? { transform: "scale(1.3)", opacity: "1" }
                      : { transform: "scale(1)", opacity: "0.3" }
                  }
                />
              </motion.label>
            </motion.div>
            <div className="aiEngine">
              <motion.label
                for="babbage"
                animate={
                  aiEngine === "text-babbage-001"
                    ? {
                        transform: "scale(1.1)",
                        opacity: "1",
                        color: "#E1F12E",
                      }
                    : {
                        transform: "scale(1)",
                        opacity: "0.3",
                        color: "#EEEEEE",
                      }
                }
              >
                Babbage
                <input
                  type="radio"
                  id="babbage"
                  name="aiEngineChoice"
                  value="text-babbage-001"
                  hidden
                />
                <motion.div
                  className="aiEngineImg"
                  animate={
                    aiEngine === "text-babbage-001"
                      ? { transform: "scale(1.3)", opacity: "1" }
                      : { transform: "scale(1)", opacity: "0.3" }
                  }
                />
              </motion.label>
            </div>
            <div className="aiEngine">
              <motion.label
                for="curie"
                animate={
                  aiEngine === "text-curie-001"
                    ? {
                        transform: "scale(1.1)",
                        opacity: "1",
                        color: "#E1F12E",
                      }
                    : {
                        transform: "scale(1)",
                        opacity: "0.3",
                        color: "#EEEEEE",
                      }
                }
              >
                Curie
                <input
                  type="radio"
                  id="curie"
                  name="aiEngineChoice"
                  value="text-curie-001"
                  hidden
                />
                <motion.div
                  className="aiEngineImg"
                  animate={
                    aiEngine === "text-curie-001"
                      ? { transform: "scale(1.3)", opacity: "1" }
                      : { transform: "scale(1)", opacity: "0.3" }
                  }
                />
              </motion.label>
            </div>
            <div className="aiEngine">
              <motion.label
                for="davinci"
                animate={
                  aiEngine === "text-davinci-001"
                    ? {
                        transform: "scale(1.1)",
                        opacity: "1",
                        color: "#E1F12E",
                      }
                    : {
                        transform: "scale(1)",
                        opacity: "0.3",
                        color: "#EEEEEE",
                      }
                }
              >
                DaVinci
                <input
                  type="radio"
                  id="davinci"
                  name="aiEngineChoice"
                  value="text-davinci-001"
                  hidden
                />
                <motion.div
                  className="aiEngineImg"
                  animate={
                    aiEngine === "text-davinci-001"
                      ? { transform: "scale(1.3)", opacity: "1" }
                      : { transform: "scale(1)", opacity: "0.3" }
                  }
                />
              </motion.label>
            </div>
          </div>
        </fieldset>
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
