import React from "react";
import Layout from "../Layouts/Layout";
import { Box, Breadcrumbs, Typography } from "@mui/material";
import TeamPage from "./TeamPage";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
const About = () => {
  const boxStyle = {
    // backgroundImage: "linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url(images/img3.webp)",
    backgroundImage: "linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url(images/img1.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%", // Set your desired width
    height: "auto", // Set your desired height
  };
  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }
  return (
    <>
      <Layout>
        <Box
          role="presentation"
          onClick={handleClick}
          color={"white"}
          sx={{ height: "30px", backgroundColor: "#3f4f57", padding: "20px" }}
        >
           {/* <Typography color="text.primary" sx={{marginLeft:'auto'}}>Breadcrumbs</Typography> */}
          <Breadcrumbs aria-label="breadcrumb" sx={{ color: "white" }}>
            <Link
              underline="hover"
              color="inherit"
              to="/"
              style={{ color: "white", textDecoration: "none" }}
              icon={<HomeIcon fontSize="small" />}
            >
              Home
            </Link>
           
            <Link
              underline="hover"
              color="inherit"
              to=""
              style={{ color: 'white', textDecoration: 'none' }}
            >
              About
            </Link>
         
          </Breadcrumbs>
        </Box>
        <Box style={boxStyle}>
          <Box sx={{ color: "white" }}></Box>
          <Box
            sx={{ color: "white" }}      
            height={"auto"}            
            padding={"40px"}
            textAlign={"center"}
          >
            <Typography variant="h3">
              About Us <br />
              <span style={{ color: "purple" }}>----</span>{" "}
            </Typography>

            <Typography align="center"color={"#ededed"} fontSize={'25px'} >
              <span
                style={{
                  color: "purple",
                  fontWeight: "bold",
                  fontSize: "30px",
                }}
              >
                𝕰𝖈𝖍𝖔𝕾𝖙𝖆𝖈k{" "}
              </span>
              Academy , your gateway to mastering frontend development! Immerse
              yourself in a dynamic learning environment where creativity meets
              code. Our about page unveils a passionate community of industry
              experts dedicated to sculpting the developers of tomorrow.
              Experience hands-on learning, real-world projects, and
              personalized mentorship, crafting not just coders but innovators.
              Join us in embracing the artistry of web development, from the
              fundamentals to cutting-edge technologies. At Echostck, we believe
              in empowering you to build the extraordinary. Unleash your
              potential and shape the digital future with Echostck Academy -
              where every line of code tells a story.
              <br />
              <span style={{ color: "wheat", fontWeight: "bold" }}>
                ESTD: 2023{" "}
              </span>
              <br />
              <span style={{ color: "wheat", fontWeight: "bold" }}>
                {" "}
                ISO 9001:2023 certified{" "}
              </span>
            </Typography>
          </Box>
        </Box>

        <TeamPage />
      </Layout>
    </>
  );
};

export default About;
