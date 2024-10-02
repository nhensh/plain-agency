import { Box } from "@mui/material";
import Image from "next/image";
import { Link } from "react-scroll";

//Logos
import Logos from "Assets/header/logo.svg";

const Logo = () => {
  return (
    <Box sx={{ mt: "2px", a: { cursor: "pointer" } }}>
      <Link to="home" spy={true} smooth={true} duration={500}>
        <Image src={Logos} width={200} height={100} alt="Logo" />
      </Link>
    </Box>
  );
};
export default Logo;
