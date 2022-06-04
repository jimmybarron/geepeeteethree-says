import { motion } from "framer-motion";
import "./RespList.css";

const RespList = ({ aiResponse, loading }) => {
  // Creates list entries
  const newList = aiResponse.map((element, index) => {
    console.log(element);
    return (
      <motion.div
        key={index}
        className="aiResponse"
        style={{
          margin: "24px 8px 200px 8px",
          textAlign: "left",
        }}
        initial={{ height: "0px" }}
        animate={{ height: "auto" }}
      >
        <div style={{ display: "flex" }}>
          <motion.div
            initial={{ height: "0px" }}
            style={{
              backgroundColor: "white",
              paddingRight: "4px",
              marginRight: "8px",
            }}
            animate={{ height: "auto" }}
            transition={{
              delay: 0.2,
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
              style={{ fontSize: "13px", lineHeight: "21px" }}
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
            className={`aiEngineImg ${element.aiEngine}Img`}
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
              {element.aiResponse}
            </motion.p>
          </div>
        </div>
        <></>
      </motion.div>
    );
  });

  return (
    <section
      className="aiResponseList"
      style={{
        display: "flex",
        flexDirection: "column-reverse",
        width: "85vw",
        maxWidth: "450px",
        margin: "64px auto",
      }}
    >
      {newList}
      <motion.div
        style={{ display: loading === true ? "block" : "none" }}
        animate={{ opacity: [1, 0] }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        Loading...
      </motion.div>
    </section>
  );
};

export default RespList;
