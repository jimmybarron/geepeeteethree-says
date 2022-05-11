const RespList = ({ aiResp }) => {
  // Creates list entries
  const newList = aiResp.map((aiCallResp, index) => {
    return (
      <div
        key={index}
        className="aiResp"
        style={{
          margin: "24px 8px",
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

  return (
    <section
      className="aiRespList"
      style={{
        display: "flex",
        flexDirection: "column-reverse",
        width: "70vw",
        margin: "auto auto",
      }}
    >
      {newList}
    </section>
  );
};

export default RespList;
