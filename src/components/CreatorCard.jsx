import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CreatorCard = ({ name, userId }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView();
  if (inView && !isVisible) {
    setIsVisible(true);
  }

  return (
    <motion.div
      ref={ref}
      initial={isVisible ? { opacity: 0, scale: 0.8, y: 100 } : false}
      animate={isVisible ? { opacity: 1, scale: 1, y: 0 } : false}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="creator-card"
    >
      <h3>{name}</h3>
      <motion.p
        initial={{ opacity: 0, x: -50 }}
        animate={isVisible ? { opacity: 1, x: 0 } : false}
        transition={{ delay: 0.4 }}
        style={{
          backgroundColor: "#4285F4",
          color: "#fff",
          borderRadius: "30px",
          padding: "5px",
          fontSize: "19px",
        }}
      >
        SVU Name ID: {userId}
      </motion.p>
    </motion.div>
  );
};

export default CreatorCard;
