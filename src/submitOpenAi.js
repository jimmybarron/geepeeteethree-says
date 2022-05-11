import Config from "./Config";

// Trigger 'loading' state before response and clear after response is received
// Check if response is 'ok' and throw error if not

const submitOpenAi = async (aiPrompt, setAiResp) => {
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
        Authorization: `Bearer ${Config.APIKEY}`,
      },
      body: JSON.stringify(data),
    }
  );

  const respText = await resp.json();
  setAiResp(respText.choices[0].text);
};

export default submitOpenAi;
