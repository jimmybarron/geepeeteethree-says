const RespList = ({ aiResp }) => {
  // Creates list entries
  const newList = aiResp.map((element, index) => {
    return (
      <div
        key={index}
        className="aiResp"
        style={{
          margin: "24px 8px",
          textAlign: "left",
        }}
      >
        <h1>
          {element.aiEngine === "text-ada-001"
            ? "Ada"
            : element.aiEngine === "text-babbage-001"
            ? "Babbage"
            : element.aiEngine === "text-curie-001"
            ? "Curie"
            : "DaVinci"}
          &nbsp;Says:
        </h1>
        <h3>Prompt</h3>
        <p>{element.aiPrompt}</p>
        <h3>Response</h3>
        <p>{element.aiResp}</p>
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
