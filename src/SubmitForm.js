import "./SubmitForm.css";
import submitOpenAi from "./submitOpenAi";
import Button from "./Button";

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
            <div className="aiEngine">
              <label for="ada">
                Ada
                <input
                  type="radio"
                  id="ada"
                  name="aiEngineChoice"
                  value="text-ada-001"
                  defaultChecked
                />
                <div className="aiEngineImg" />
              </label>
            </div>
            <div className="aiEngine">
              <label for="babbage">
                Babbage
                <input
                  type="radio"
                  id="babbage"
                  name="aiEngineChoice"
                  value="text-babbage-001"
                />
                <div className="aiEngineImg" />
              </label>
            </div>
            <div className="aiEngine">
              <label for="curie">
                Curie
                <input
                  type="radio"
                  id="curie"
                  name="aiEngineChoice"
                  value="text-curie-001"
                />
                <div className="aiEngineImg" />
              </label>
            </div>
            <div className="aiEngine">
              <label for="davinci">
                DaVinci
                <input
                  type="radio"
                  id="davinci"
                  name="aiEngineChoice"
                  value="text-davinci-001"
                />
              </label>
              <div className="aiEngineImg" />
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
