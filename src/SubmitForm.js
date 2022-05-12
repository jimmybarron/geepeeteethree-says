import submitOpenAi from "./submitOpenAi";
import Button from "./Button";

const SubmitForm = ({ aiEngine, aiPrompt, setAiPrompt, aiResp, setAiResp }) => {
  return (
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
            submitOpenAi(event, aiEngine, aiPrompt, setAiPrompt, setAiResp)
          }
        >
          Submit to Ai
        </Button>
      </form>
    </section>
  );
};

export default SubmitForm;
