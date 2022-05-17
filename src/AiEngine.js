import "./AiEngine.css";
import { motion } from "framer-motion";

const AiEngine = ({ aiEngine }) => {
  const aiEngineNames = ["ada", "babbage", "curie", "davinci"];
  const variants = {
    selected: { scale: "1.1", opacity: "1", color: "#E1F12E" },
    unselected: { y: 10, scale: "1", opacity: "0.6", color: "#EEEEEE" },
  };
  return aiEngineNames.map((aiEngineName) => {
    return (
      <motion.div className="aiEngine">
        <motion.label
          for={aiEngineName}
          variants={variants}
          animate={
            aiEngine === `text-${aiEngineName}-001` ? "selected" : "unselected"
          }
        >
          {aiEngineName}
          <input
            type="radio"
            id={aiEngineName}
            name="aiEngineChoice"
            value={`text-${aiEngineName}-001`}
          />
          <motion.div
            className={`${aiEngineName}Img`}
            variants={variants}
            animate={
              aiEngine === `text-${aiEngineName}-001`
                ? "selected"
                : "unselected"
            }
          />
        </motion.label>
      </motion.div>
    );
  });
};

export default AiEngine;
