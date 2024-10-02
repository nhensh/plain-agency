import React from "react";
import { Box, Stack, Typography, ButtonBase } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { Link as Scroll } from "react-scroll";

// Icons
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { MapIcon, EmailIcon, PhoneIcon } from "Utilis/Icons";

// Data
import Navs from "Data/Header/Navs.data";
import siteInfo from "Data/About/Site.data";

// Styles
import styles from "Styles/Header/Dialogs.styles";

const Drawers = ({ toggleDrawer }) => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case "GitHubIcon":
        return <GitHubIcon />;
      case "FacebookIcon":
        return <FacebookIcon />;
      case "TwitterIcon":
        return <TwitterIcon />;
      default:
        return null;
    }
  };

  return (
    <Box>
      <Stack direction="row" sx={{ alignItems: "center" }}>
        <Box sx={{ flex: 1, mt: "5px" }}>
          <Image
            src={siteInfo.logo.src}
            width={siteInfo.logo.width}
            height={siteInfo.logo.height}
            alt={siteInfo.logo.alt}
          />
        </Box>
        <ButtonBase onClick={() => toggleDrawer(false)} sx={styles.CrossButton}>
          <CloseRoundedIcon />
        </ButtonBase>
      </Stack>
      <Typography variant="body1" component="p" sx={styles.Description}>
        {siteInfo.description}
      </Typography>
      <Box sx={styles.Navs}>
        {Navs &&
          Navs.map((nav, i) => (
            <Scroll
              key={i}
              activeClass="active"
              to={nav.Id}
              spy={true}
              smooth={true}
              duration={500}
              onClick={() => toggleDrawer(false)}
            >
              <ButtonBase sx={styles.Buttons}>{nav.name}</ButtonBase>
            </Scroll>
          ))}
      </Box>
      <Stack direction="row" sx={styles.Address}>
        <Box>
          <MapIcon />
        </Box>
        <Box>
          <Typography variant="body1" component="p">
            {siteInfo.address}
          </Typography>
        </Box>
      </Stack>
      <Stack direction="row" sx={styles.Address}>
        <Box>
          <EmailIcon />
        </Box>
        <Box>
          <Link href={`mailto:${siteInfo.email}`}>
            <a>
              <Typography variant="body1" component="p">
                {siteInfo.email}
              </Typography>
            </a>
          </Link>
        </Box>
      </Stack>
      <Stack direction="row" sx={styles.Address}>
        <Box>
          <PhoneIcon />
        </Box>
        <Box>
          <Link href={`tel:${siteInfo.phone}`}>
            <a>
              <Typography variant="body1" component="p">
                {siteInfo.phone}
              </Typography>
            </a>
          </Link>
        </Box>
      </Stack>
      <Stack direction="row" sx={styles.Social}>
        {siteInfo.social.map((item, index) => (
          <Link key={index} href={item.url}>
            <a target="_blank" rel="noopener noreferrer">
              <ButtonBase>{getIcon(item.icon)}</ButtonBase>
            </a>
          </Link>
        ))}
      </Stack>
    </Box>
  );
};

export default Drawers;
