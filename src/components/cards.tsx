import { Box, Typography, styled } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { AnimateStep } from "../App";
import P1 from "../assets/imgs/p1.png";
import P2 from "../assets/imgs/p2.png";
import P3 from "../assets/imgs/p3.png";
import P11 from "../assets/imgs/p1_1.svg";
import P12 from "../assets/imgs/p1_2.svg";
import P21 from "../assets/imgs/p2_1.png";
import P22 from "../assets/imgs/p2_2.png";
import P31 from "../assets/imgs/p3_1.png";
import P32 from "../assets/imgs/p3_2.svg";
import Logo2 from "../assets/imgs/logo2.svg";

const CardItem = styled(Grid)(() => ({
  "&.card": {
    flex: 1,
    position: "relative",
    cursor: "pointer",
    width: "calc(33% -24px)",
    height: "510px",
    minHeight: "510px",
    perspective: "1000px",
    transformStyle: "preserve-3d",
    transition: "ease-in-out 600ms",
  },
  ".front,.back": {
    display: "flex",
    borderRadius: "24px",
    overflow: "hidden",
    backgroundPosition: "center",
    backgroundSize: "cover",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 0,
    top: 0,
    height: "100%",
    width: "100%",
    backfaceVisibility: "hidden",
  },
  ".front": {
    backgroundSize: "cover",
    overflow: "hidden",
  },
  ".back": {
    background: "#181818",
    padding: "48px 0",
    transform: "rotateY(180deg)",
    flexFlow: "column nowrap",
    justifyContent: "space-between",
  },
  "&.card:hover": {
    transform: "rotateY(180deg)",
  },
}));
const Cards = ({ animateStep }: { animateStep: AnimateStep }) => {
  const contents = [
    {
      title: "Bounce Bit",
      text: "Unlock the Power of Bitcoin Ecosystem",
      bg: P1,
      children: (
        <>
          <img
            style={{
              width: "155px",
            }}
            src={P11}
            alt=""
          />
          <img
            style={{
              marginTop: "5px",
              width: "78px",
            }}
            src={P12}
            alt=""
          />
        </>
      ),
    },
    {
      title: "Bounce Auction",
      text: "Auction as a Service",
      bg: P2,
      children: (
        <Box
          sx={{
            position: "relative",
            width: "100%",
          }}
        >
          <img
            style={{
              position: "relative",
              width: "100%",
              maxHeight: "300px",
            }}
            src={P21}
            alt=""
          />
          <img
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate3D(-50%, -50%, 0)",
              width: "274px",
            }}
            src={P22}
            alt=""
          />
        </Box>
      ),
    },
    {
      title: "Bounce Box",
      text: "You Defi Dreams All in One Box",
      bg: P3,
      children: (
        <Box
          sx={{
            position: "relative",
            width: "100%",
            display: "flex",
            justifyContent:'center',
            paddingBottom: "20px",
          }}
        >
          <img
            style={{
              position: "relative",
              width: "187px",
            }}
            src={P31}
            alt=""
          />
          <img
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate3D(-50%, -50%, 0)",
              width: "58px",
            }}
            src={P32}
            alt=""
          />
        </Box>
      ),
    },
  ];
  return (
    <Box
      sx={{
        position: "absolute",
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "center",
        alignItems: "flex-end",
        bottom: "60px",
        left: "50%",
        transform:
          animateStep < AnimateStep.allLeave
            ? "translate3D(-50%, 100vh, 0)"
            : "translate3D(-50%, 0, 0)",
        transition: "all 1.6s",
        width: "100%",
        overflow: "hidden",
        padding: "0 40px",
        margin: "0 auto",
        height: "100%",
      }}
    >
      {contents.map((item, index) => {
        return (
          <CardItem key={index} className="card">
            <Box className={"front"}>
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  background: `url(${item.bg}) no-repeat center center / cover`,
                  display: "flex",
                  flexFlow: "column nowrap",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden",
                }}
              >
                <img src={Logo2} alt="" />
                <Typography
                  sx={{
                    position: "absolute",
                    bottom: "44px",
                    left: "0",
                    width: "100%",
                    textAlign: "center",
                    fontSize: "18px",
                    color: "#fff",
                  }}
                >
                  {item.title}
                </Typography>
              </Box>
            </Box>
            <Box className={"back"}>
              <Box
                sx={{
                  width: "100%",
                }}
              >
                <Typography
                  component={"p"}
                  sx={{
                    color: "#fff",
                    width: "100%",
                    fontSize: "40px",
                    textAlign: "left",
                    marginBottom: "14px",
                    padding: "0 42px",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  component={"p"}
                  sx={{
                    fontSize: "18px",
                    textAlign: "left",
                    width: "100%",
                    color: "#fff",
                    padding: "0 42px",
                  }}
                >
                  {item.text}
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexFlow: "column nowrap",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {item.children}
              </Box>
            </Box>
          </CardItem>
        );
      })}
    </Box>
  );
};
export default Cards;
