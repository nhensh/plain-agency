import { Box, Grid, Typography } from "@mui/material";

//Images
import Gallery1 from "Assets/footer/Nathan-Hensher.jpg";
import Gallery2 from "Assets/footer/Nathan-Hensher.jpg";
import Gallery3 from "Assets/footer/Nathan-Hensher.jpg";
import Gallery4 from "Assets/footer/Nathan-Hensher.jpg";

//Styles
import styles from "Styles/Footer/FooterFour.styles";

const FooterFour = () => {
  return (
    <Box>
      <Typography variant="h6" component="h6" sx={styles.Title}>
        Our Members
      </Typography>
      <Box>
        <Grid container spacing={2}>
          <Grid item xxs={6}>
            <Box
              component="img"
              src={Gallery1}
              sx={styles.Image}
              alt="Gallery"
            />
          </Grid>
          <Grid item xxs={6}>
            <Box
              component="img"
              src={Gallery2}
              sx={styles.Image}
              alt="Gallery"
            />
          </Grid>
          <Grid item xxs={6}>
            <Box
              component="img"
              src={Gallery3}
              sx={styles.Image}
              alt="Gallery"
            />
          </Grid>
          <Grid item xxs={6}>
            <Box
              component="img"
              src={Gallery4}
              sx={styles.Image}
              alt="Gallery"
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
export default FooterFour;
