import {
  Box,
  Container,
  Grid,
  Paper,
  Skeleton,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { GetTestimonialsDetails } from "../Service/AllApi";
import { toast } from "react-toastify";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  const GetTestimonials = async () => {
    try {
      const response = await GetTestimonialsDetails();
      setTestimonials(response?.data?.testimonials);
      setLoading(false);
      console.log("testimonial", response);
    } catch (error) {
      toast.error("something went wrong");
    }
  };
  useEffect(() => {
    GetTestimonials();
  }, []);
  return (
    <>
      <Container>
        <Box>
          <Typography variant="h3" fontWeight={"bold"} align="center" mt={2}>
            {" "}
            Testimonials <br /> <span style={{ color: "purple" }}>
              ----
            </span>{" "}
          </Typography>
          <Typography align="center" mb={7} color={'black'} >
          "Discover success stories! Our students share their journey of growth and achievement in web development. Join the satisfied ranks of our accomplished learners."
          </Typography>

          <Grid container spacing={4} justifyContent={'center'}>
            {loading
              ? Array.from({ length: 2 }).map((_, index) => (
                  <Grid item md={6}>
                    <Paper
                    key={index}
                      elevation={10}
                      sx={{
                        borderRadius: "20px",
                        height: "400px",
                        backgroundColor: "#a0a6b0",
                      }}
                    >
                      <Grid display={"flex"}>
                        <Box
                          sx={{
                            height: "80px",
                            width: "70px",
                            borderRadius: "35%",
                            margin: "50px 10px 20px 50px",
                          }}
                        >
                          <Skeleton variant="rectangular" height={80} />
                        </Box>
                        <Skeleton
                          variant="rectangular"
                          height={20}
                          fontSize={"18px"}
                          fontWeight={"bold"}
                          marginTop={"50px"}
                        />
                        <Skeleton
                          variant="rectangular"
                          height={20}
                          fontSize={"18px"}
                          fontWeight={"bold"}
                        />
                      </Grid>

                      <Grid item>
                        <Skeleton
                          variant="rectangular"
                          height={20}
                          paddingBottom={"40px"}
                          px={5}
                          textAlign={"justify"}
                          fontSize={"14px"}
                          color="#f0f0f0"
                        />
                         <Skeleton
                          variant="rectangular"
                          height={20}
                          paddingBottom={"40px"}
                          px={5}
                          textAlign={"justify"}
                          fontSize={"14px"}
                          color="#f0f0f0"
                        />
                         <Skeleton
                          variant="rectangular"
                          height={20}
                          paddingBottom={"40px"}
                          px={5}
                          textAlign={"justify"}
                          fontSize={"14px"}
                          color="#f0f0f0"
                        />
                      </Grid>
                    </Paper>
                  </Grid>
                ))
              : testimonials?.map((items, index) => {
                  return (
                    <>
                      <Grid item md={6}>
                        <Paper
                          elevation={10}
                          key={index}
                          sx={{
                            borderRadius: "20px",
                            height: "auto",
                            backgroundColor: "#a0a6b0",
                          }}
                        >
                          <Grid display={"flex"}>
                            <img
                              src={`https://restapinodejs.onrender.com/api/testimonials/photo/${items?._id}`}
                              style={{
                                height: "80px",
                                width: "70px",
                                borderRadius: "35%",
                                margin: "50px 10px 20px 50px",
                              }}
                              alt=""
                            />
                            <Typography
                              fontSize={"18px"}
                              fontWeight={"bold"}
                              marginTop={"50px"}
                            >
                              {items.name} <br />{" "}
                              <span
                                style={{ fontSize: "12px", color: "black" }}
                              >
                                {items.position}{" "}
                              </span>
                            </Typography>
                          </Grid>

                          <Grid item>
                            <Typography
                              paddingBottom={"40px"}
                              px={5}
                              textAlign={"justify"}
                              fontSize={"14px"}
                              color="black"
                            >
                              <FormatQuoteIcon /> <i>{items.talk.slice(0,200)}... </i>{" "}
                            </Typography>
                          </Grid>
                        </Paper>
                      </Grid>
                    </>
                  );
                })}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Testimonials;
