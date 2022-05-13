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
        <fieldset
          form="submitToAi"
          onChange={(event) => {
            setAiEngine(event.target.value);
          }}
        >
          <legend>Select an Ai Engine:</legend>
          <div>
            <input
              type="radio"
              id="ada"
              name="aiEngineChoice"
              value="text-ada-001"
              defaultChecked
            />
            <label for="ada">Ada</label>
          </div>
          <div>
            <input
              type="radio"
              id="babbage"
              name="aiEngineChoice"
              value="text-babbage-001"
            />
            <label for="babbage">Babbage</label>
          </div>
          <div>
            <input
              type="radio"
              id="curie"
              name="aiEngineChoice"
              value="text-curie-001"
            />
            <label for="curie">Curie</label>
          </div>
          <div>
            <input
              type="radio"
              id="davinci"
              name="aiEngineChoice"
              value="text-davinci-001"
            />
            <label for="davinci">DaVinci</label>
          </div>
        </fieldset>
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
          Submit to Ai
        </Button>
      </form>
    </section>
  );
};

export default SubmitForm;
