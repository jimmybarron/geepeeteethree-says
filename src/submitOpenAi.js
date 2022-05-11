import Config from "./Config";

// Trigger 'loading' state before response and clear after response is received
// Check if response is 'ok' and throw error if not

const submitOpenAi = async (setAiResp) => {
  const data = {
    prompt: "Write a poem about a dog wearing skis",
    temperature: 0.5,
    max_tokens: 64,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  };

  const resp = await fetch(
    "https://api.openai.com/v1/engines/text-curie-001/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Config.APIKEY}`,
      },
      body: JSON.stringify(data),
    }
  );

  const respText = await resp.text();
  console.log(respText);
  setAiResp(respText);
};

export default submitOpenAi;
