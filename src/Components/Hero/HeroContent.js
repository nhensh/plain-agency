import { Box, Typography, ButtonBase } from "@mui/material";
import { Link } from "react-scroll";

// Icons
import ArrowForwardTwoToneIcon from "@mui/icons-material/ArrowForwardTwoTone";

//Styles
import styles from "Styles/Hero/HeroContent.styles";

import CyclingText from "../CyclingText/CyclingText";

const HeroContent = () => {
  return (
    <Box sx={styles.Container}>
      <CyclingText />
      <Typography variant="h6" component="h6" sx={styles.Slogan}>
        Simplifying Digital, Amplifying Results
      </Typography>
      <Typography variant="body1" component="p" sx={styles.Description}>
        We transform concepts into reality, empowering startups, businesses, and
        innovators to thrive. Through the elegance of code, we solve complex
        problems and drive growth. Our approach:
      </Typography>
      <Link to="portfolio" spy={true} smooth={true} duration={500}>
        <ButtonBase sx={styles.Button}>
          See Projects
          <ArrowForwardTwoToneIcon />
        </ButtonBase>
      </Link>
    </Box>
  );
};
export default HeroContent;
