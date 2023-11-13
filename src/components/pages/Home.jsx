import React, { useEffect, useState } from "react";
import { GetAllBanner } from "../Service/AllApi";
import { toast } from "react-toastify";
import { Box, Breadcrumbs, Button, Skeleton, Typography } from "@mui/material";
import Layout from "../Layouts/Layout";
import ServicePage from "./ServicePage";
import Testimonials from "./Testimonials";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const Home = () => {
  const [banner, setBanner] = useState([]);
  const [loading,setLoading] = useState(true)

  const GetBanner = async () => {
    try {
      const response = await GetAllBanner();
      setBanner(response?.data?.bannerdata);
      setLoading(false)
      console.log("banner", response);
    } catch (errror) {
      toast.error("Something Went Wrong");
    }
  };
  useEffect(() => {
    GetBanner();
  }, []);

  const boxStyle = {
   
    backgroundImage: "linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url(images/img1.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "auto",
  };


  return (
    <>
      <Layout>
       
        <Carousel >
          {
            loading?( <Skeleton variant="rectangle" height={550} />) :(
              
                banner?.map((items, index) => {
                return (
                  <>
                    <Box key={index}>
                      <img
                        src={`http://restapinodejs.onrender.com/api/banner/photo/${items._id}`}
                        alt=""
                        height={"550px"}
                      />
    
                      <Box
                        style={{
                          height: "auto",
                          width: "75%",
                          fontSize: "17px",
                          position: "absolute",
                          bottom: "10%",
                          left: "13%",
                          margin: "auto",
                          backgroundColor: "rgba(117, 59, 89, 0.5)",
                          borderRadius: "25px",
                        }}
                      >
                        <Typography variant="h4" fontWeight={"bold"} p={2}>
                          {items.title}{" "}
                        </Typography>
                        <Typography
                          color={"#e1e3e1"}
                        //   pb={4}
                        padding={'10px'}
                          fontSize={"17px"}
                          fontWeight={"500"}
                        >
                          {" "}
                          {items.description}
                        </Typography>
                      </Box>
                    </Box>
                  </>
                );
              })
            )

          }
          
        </Carousel>
        <style jsx global>{`
          /* Custom styles for carousel arrows */
          .control-arrow {
            font-size: 80px; /* Adjust the font size to increase arrow size */
          }
        `}</style>

        <Box style={boxStyle}>
          <Box sx={{ color: "white" }}></Box>
          <Box
            sx={{ color: "white" }}
            height={"auto"}
            padding={"40px"}
            textAlign={"center"}
          >
            <Typography variant="h4">
              About Us <br />
              <span style={{ color: "purple" }}>----</span>{" "}
            </Typography>

            <Typography variant="p" align="center" color={"#ededed"} fontSize={'20px'} fontWeight={'bold'}>
              <span
                style={{
                  color: "purple",
                  fontWeight: "bold",
                  fontSize: "25px",
                  padding:'20px'
                }}
              >
                𝕰𝖈𝖍𝖔𝕾𝖙𝖆𝖈k
              </span>{" "}
              Academy, your gateway to mastering frontend development! Immerse
              yourself in a dynamic learning environment where creativity meets
              code. Our about page unveils a passionate community of industry
              experts dedicated to sculpting the developers of tomorrow.
              Experience hands-on learning, real-world projects, and
              personalized mentorship, crafting not just coders but innovators.
            </Typography>
            <br />
            <Button
              variant="contained"
              color="secondary"
              component={Link}
              to={"/about"}
              size="small"
              sx={{ marginTop: "10px", fontSize: "10px" }}
            >
              Read More{" "}
            </Button>
          </Box>
        </Box>
        <ServicePage />
        <Testimonials />
      </Layout>
    </>
  );
};

export default Home;
