const submitOpenAi = async (
  event,
  aiEngine,
  aiPrompt,
  setAiPrompt,
  aiResponse,
  setAiResponse,
  setLoading
) => {
  setAiPrompt("");
  setLoading(true);
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
    `https://api.openai.com/v1/engines/${aiEngine}/completions`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_OPENAI_APIKEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  const respText = await resp.json();
  setLoading(false);
  setAiResponse((prevState) => {
    return [
      ...prevState,
      {
        aiEngine: aiEngine,
        aiPrompt: aiPrompt,
        aiResponse: respText.choices[0].text,
      },
    ];
  });
};

export default submitOpenAi;
