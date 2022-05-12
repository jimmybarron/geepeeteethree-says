import Button from "./Button";

const SubmitForm = ({ aiPrompt, setAiPrompt, aiResp, setAiResp }) => {
  const submitOpenAi = async (
    event,
    aiPrompt,
    setAiPrompt,
    aiResp,
    setAiResp
  ) => {
    // This calls the serverless function
    const respOpenAi = await fetch("./netlify/functions/queryOpenAi").then(
      (response) => response
    );
    const aiRespText = await respOpenAi.text();
    console.log(aiRespText);

    setAiResp((prevState) => {
      return [
        ...prevState,
        {
          aiPrompt: aiPrompt,
          // aiResp: aiRespText,
        },
      ];
    });

    setAiPrompt("");
  };

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
              submitOpenAi(event, aiPrompt, setAiPrompt, aiResp, setAiResp);
            }
          }}
        ></textarea>
        <Button
          onClick={(event) =>
            submitOpenAi(event, aiPrompt, setAiPrompt, aiResp, setAiResp)
          }
        >
          Submit to Ai
        </Button>
      </form>
    </section>
  );
};

export default SubmitForm;
