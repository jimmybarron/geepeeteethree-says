import "./RespList.css";

const RespList = ({ aiResp }) => {
  // Creates list entries
  const newList = aiResp.map((element, index) => {
    return (
      <div
        key={index}
        className="aiResp"
        style={{
          margin: "24px 8px 100px 8px",
          textAlign: "left",
        }}
      >
        <h3 style={{ fontSize: "20px", paddingBottom: "16px" }}>YOU WROTE</h3>
        <p style={{ fontSize: "13px", paddingBottom: "16px" }}>
          {element.aiPrompt}
        </p>
        <div style={{ display: "flex", flexDirection: "row-reverse" }}>
          <div className="adaImg"></div>
        </div>
        <h3
          style={{
            color: "#e1f12e",
            fontSize: "20px",
            textAlign: "right",
            paddingBottom: "16px",
          }}
        >
          {element.aiEngine === "text-ada-001"
            ? "ADA"
            : element.aiEngine === "text-babbage-001"
            ? "BABBAGE"
            : element.aiEngine === "text-curie-001"
            ? "CURIE"
            : "DAVINCI"}
          &nbsp;REPLIED:
        </h3>
        <p style={{ fontSize: "13px", textAlign: "right", lineHeight: "21px" }}>
          {element.aiResp}
        </p>
      </div>
    );
  });

  return (
    <section
      className="aiRespList"
      style={{
        display: "flex",
        flexDirection: "column-reverse",
        width: "85vw",
        margin: "64px auto",
      }}
    >
      {newList}
    </section>
  );
};

export default RespList;
