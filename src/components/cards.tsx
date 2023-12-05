import { Box, styled } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { AnimateStep } from "../App";
import P1 from "../assets/imgs/p1.png";
import P2 from "../assets/imgs/p2.png";
import P3 from "../assets/imgs/p3.png";

const CardItem = styled(Grid)(() => ({
  "&.card": {
    cursor: "pointer",
    height: "510px",
    minHeight: "510px",
    perspective: "1000px",
    position: "relative",
    ".front": {
      display: "flex",
      borderRadius: "24px",
      backgroundPosition: "center",
      backgroundSize: "cover",
      textAlign: "center",
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      height: "100%",
      width: "100%",
      backfaceVisibility: "hidden",
      transformStyle: "preserve-3d",
      transition: "ease-in-out 600ms",
    },
    ".back": {
      display: "flex",
      borderRadius: "24px",
      backgroundPosition: "center",
      backgroundSize: "cover",
      textAlign: "center",
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      height: "100%",
      width: "100%",
      backfaceVisibility: "hidden",
      transformStyle: "preserve-3d",
      transition: "ease-in-out 600ms",
    },
  },
  ".front": {
    backgroundSize: "cover",
    overflow: "hidden",
    "&:before": {
      position: "absolute",
      display: "block",
      content: `''`,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: `linear-gradient(135deg, adjust-hue(hsl(222,80%,50%), -20deg), hsl(222,80%,50%))`,
      opacity: 0.25,
      zIndex: -1,
    },
    "&..card:hover": {
      transform: "rotateY(180deg)",
    },
    "&..card:nth-child(even):hover": {
      transform: "rotateY(-180deg)",
    },
  },
  ".back": {
    background: "#fff",
    transform: "rotateY(-180deg)",
    "&..card:hover": {
      transform: "rotateY(0deg)",
    },
    "&..card:nth-child(even)": {
      transform: "rotateY(180deg)",
    },
    "&..card:nth-child(even):hover": {
      transform: "rotateY(0deg)",
    },
  },
}));
const Cards = ({ animateStep }: { animateStep: AnimateStep }) => {
  const contents = [
    {
      title: "Bounce Bit",
      text: "Unlock the Power of Bitcoin Ecosystem",
      bg: P1,
    },
    {
      title: "Bounce Auction",
      text: "Auction as a Service",
      bg: P2,
    },
    {
      title: "Bounce Box",
      text: "You Defi Dreams All in One Box",
      bg: P3,
    },
  ];
  return (
    <Box
      sx={{
        position: "absolute",
        top: "203px",
        bottom: "65px",
        left: "50%",
        transform:
          animateStep < AnimateStep.allLeave
            ? "translate3D(-50%, 100vh, 0)"
            : "translate3D(-50%, 0, 0)",
        transition: "all 1.6s",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <Grid
        container
        spacing={8}
        direction={"row"}
        sx={{
          width: "100%",
          padding: "0 40px",
          margin: "0 auto",
          height: "100%",
        }}
      >
        {contents.map((item, index) => {
          return (
            <CardItem xs={4} key={index} className="card">
              <Box
                className={"front"}
                sx={{
                  color: "#fff",
                }}
              >
                {item.title}0000
              </Box>
              <Box
                className={"back"}
                sx={{
                  color: "#fff",
                }}
              >
                {item.title}1111
              </Box>
            </CardItem>
          );
        })}
      </Grid>
    </Box>
  );
};
export default Cards;
