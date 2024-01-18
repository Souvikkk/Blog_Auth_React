import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
const Footer = () => {
  return (
    <>
      <Box
        sx={{
          height: "auto",
          backgroundColor: "#1f292e",
          color: "white",
          marginTop: "40px",
          padding: "0px 20px 10px 20px",
          maxWidth: "100%",
          mx:'auto',
          "@media (min-width:600px)": {
      padding: '0px 20px 10px 20px',
    },
    "@media (min-width:960px)": {
      padding: '0px 50px 10px 50px',
    },
        }}
      >
        <Grid container spacing={4} align="center">
          <Grid item xs={12} sm={12} md={3}>
            <Box>
              <Grid display={"flex"}>
                <img
                  src="/images/logo.png"
                  alt=""
                  height={"80px"}
                  width={"60px"}
                  style={{ padding: "10px 0px 40px 0px" }}
                />
                <Typography
                  variant="h5"
                  sx={{
                    color: "#f059f0",
                    fontWeight: "bold",
                    fontSize: "20px",
                    padding: "35px 0px",
                  }}
                >
                  𝕰𝖈𝖍𝖔𝕾𝖙𝖆𝖈k{" "}
                </Typography>
                <br />
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <Box sx={{ textAlign: "justify" }}>
              <Typography variant="h6">Address</Typography>
              <Typography variant="p" fontSize={"12px"} marginRight={"160px"}>
                265/B1 D-Block Sector V Kol 76
                <br />
              </Typography>
              <Typography variant="p" fontSize={"12px"} marginRight={"160px"}>
                Mail Us : echostack@gmail.com
                <br />
              </Typography>
              <Typography variant="p" fontSize={"12px"} marginRight={"160px"}>
                Call Us : 1800987654321 <br />
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={3}>
            <Box sx={{ textAlign: "justify" }}>
              <Typography variant="h6">Links</Typography>
              <Link to={"/"} style={{ textDecoration: "none" }}>
                <Typography variant="p" fontSize={"12px"} color="white">
                  Home
                </Typography>
              </Link>{" "}
              <br />
              <Link to={"/about"} style={{ textDecoration: "none" }}>
                <Typography variant="p" fontSize={"12px"} color="white">
                  About
                </Typography>
              </Link>{" "}
              <br />
              <Link to={"/blog"} style={{ textDecoration: "none" }}>
                <Typography variant="p" fontSize={"12px"} color="white">
                  Blog
                </Typography>
              </Link>{" "}
              <br />
              <Link to={"/course"} style={{ textDecoration: "none" }}>
                <Typography variant="p" fontSize={"12px"} color="white">
                  Course
                </Typography>
              </Link>{" "}
              <br />
              <Link to={"/contact"} style={{ textDecoration: "none" }}>
                <Typography variant="p" fontSize={"12px"} color="white">
                  Contact Us
                </Typography>
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={3}>
            <Box>
              <Link
                to={"/https://www.facebook.com/"}
                style={{ textDecoration: "none",  color: "#3b5998 ", }}
              >
                <FacebookIcon />{" "}
              </Link>{" "}
              <br />
              <Link
                to={"/https://www.whatsapp.com/"}
                style={{ textDecoration: "none", color: "#075e54", }}
              >
                <WhatsAppIcon />{" "}
              </Link>{" "}
              <br />
              <Link
                to={"/https://www.twitter.com/"}
                style={{ textDecoration: "none", color: "#00acee",}}
              >
                <TwitterIcon />{" "}
              </Link>{" "}
              <br />
              <Link
                to={"/https://www.instagram.login/"}
                style={{ textDecoration: "none",  color: " #8a3ab9",}}
              >
                <InstagramIcon />{" "}
              </Link>
              <br />
              <Link
                to={"/https://www.pinterest.login/"}
                style={{ textDecoration: "none", color: "#c8232c" }}
              >
                <PinterestIcon />{" "}
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          height: "60px",
          backgroundColor: "#0d1417",
          textAlign: "center",
          "@media (max-width: 600px)": {
            fontSize: "8px",
            padding: "5px",
          },
        }}
      >
        <Typography color={"white"} fontSize={"10px"} p={2}>
          {" "}
          © Copyright{" "}
          <strong>
            <span>Company</span>
          </strong>
          .All Rights Reserved <br /> Designed by SD{" "}
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
