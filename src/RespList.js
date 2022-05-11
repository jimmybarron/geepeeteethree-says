const RespList = ({ aiResp }) => {
  const newList = aiResp.map((aiCallResp, index) => {
    return (
      <div
        key={index}
        className="aiResp"
        style={{
          margin: "64px 8px",
          textAlign: "left",
        }}
      >
        <h3>Prompt</h3>
        <p>{aiCallResp.aiPrompt}</p>
        <h3>Response</h3>
        <p>{aiCallResp.aiResp}</p>
      </div>
    );
  });
  return newList;
};

export default RespList;
