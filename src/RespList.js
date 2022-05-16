import { motion } from "framer-motion";
import "./RespList.css";

const RespList = ({ aiResp }) => {
  // Creates list entries
  const newList = aiResp.map((element, index) => {
    return (
      <div
        key={index}
        className="aiResp"
        style={{
          margin: "24px 8px 200px 8px",
          textAlign: "left",
        }}
      >
        <div style={{ display: "flex" }}>
          <motion.div
            initial={{ height: "0px" }}
            animate={{ height: "auto" }}
            style={{
              backgroundColor: "white",
              paddingRight: "4px",
              marginRight: "8px",
            }}
          ></motion.div>

          <div>
            <motion.h3
              style={{
                fontSize: "20px",
                paddingBottom: "16px",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.3,
              }}
            >
              YOU WROTE
            </motion.h3>
            <motion.p
              style={{ fontSize: "13px" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.5,
              }}
            >
              {element.aiPrompt}
            </motion.p>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "row-reverse" }}>
          <motion.div
            className="adaImg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 1,
            }}
          ></motion.div>
        </div>

        <div style={{ display: "flex", flexDirection: "row-reverse" }}>
          <motion.div
            style={{
              backgroundColor: "#E1F12E",
              paddingLeft: "4px",
              marginLeft: "8px",
            }}
            initial={{ height: "0px" }}
            animate={{ height: "auto" }}
            transition={{
              delay: 1.5,
            }}
          ></motion.div>
          <div>
            <motion.h3
              style={{
                color: "#e1f12e",
                fontSize: "20px",
                textAlign: "right",
                paddingBottom: "16px",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 1.8,
              }}
            >
              {element.aiEngine === "text-ada-001"
                ? "ADA"
                : element.aiEngine === "text-babbage-001"
                ? "BABBAGE"
                : element.aiEngine === "text-curie-001"
                ? "CURIE"
                : "DAVINCI"}
              &nbsp;REPLIED
            </motion.h3>

            <motion.p
              style={{
                fontSize: "13px",
                textAlign: "right",
                lineHeight: "21px",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 2,
              }}
            >
              {element.aiResp}
            </motion.p>
          </div>
        </div>
        <></>
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
        maxWidth: "450px",
        margin: "64px auto",
      }}
    >
      {newList}
    </section>
  );
};

export default RespList;
