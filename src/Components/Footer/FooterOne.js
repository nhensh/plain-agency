import React from "react";
import { Box, Stack, ButtonBase, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

// Icons
import { MapIcon, EmailIcon, PhoneIcon } from "Utilis/Icons";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// Data
import siteInfo from "Data/About/Site.data";

// Styles
import styles from "Styles/Footer/FooterOne.styles";

const FooterOne = () => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case "GitHubIcon":
        return <GitHubIcon />;
      case "FacebookIcon":
        return <FacebookIcon />;
      case "TwitterIcon":
        return <TwitterIcon />;
      case "LinkedInIcon":
        return <LinkedInIcon />;
      default:
        return null;
    }
  };

  return (
    <Box>
      <Box sx={{ mb: "30px" }}>
        <Image
          src={siteInfo.logo.src}
          width={siteInfo.logo.width}
          height={siteInfo.logo.height}
          alt={siteInfo.logo.alt}
        />
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

export default FooterOne;
