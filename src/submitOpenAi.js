const submitOpenAi = async (
  event,
  aiPrompt,
  setAiPrompt,
  aiResp,
  setAiResp
) => {
  event.preventDefault();
  const data = {
    prompt: aiPrompt,
    temperature: 0.5,
    max_tokens: 64,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  };

  const resp = await fetch(
    "https://api.openai.com/v1/engines/text-ada-001/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_APIKEY}`,
      },
      body: JSON.stringify(data),
    }
  );

  const respText = await resp.json();
  setAiResp((prevState) => {
    return [
      ...prevState,
      { aiPrompt: aiPrompt, aiResp: respText.choices[0].text },
    ];
  });
  setAiPrompt("");
};

export default submitOpenAi;
