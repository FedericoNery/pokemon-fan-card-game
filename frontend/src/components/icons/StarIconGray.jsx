import { Icon } from "@mui/material";

const StarIconGray = () => {
  return <Icon sx={{width: 32, height: 32, }}>
    <img src="/images/star.png" height={32} width={32} alt="Star icon" style={{"filter": `grayscale(1)`}} />
  </Icon >
}

export default StarIconGray;
