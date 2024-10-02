import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import styles from "Styles/Hero/HeroContent.styles";

const phrases = [
  "Agency",
  "Speaking",
  "Explanations",
  "Solutions",
  "Approach",
  "Communication",
  "Understanding",
  "Guidance",
  "Collaboration",
  "Results",
  "Process",
  "Support",
  "Innovation",
];

const CyclingText = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 4000); // Change phrase every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Typography variant="h2" component="h2" sx={styles.Title}>
      We are <br />
      Plain {phrases[currentPhraseIndex]}
    </Typography>
  );
};

export default CyclingText;
