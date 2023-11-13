import React, { useEffect, useState } from "react";
import Layout from "../Layouts/Layout";
import { GetCourseDetails } from "../Service/AllApi";
import { toast } from "react-toastify";
import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  Grid,
  Paper,
  Skeleton,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const Course = () => {
  const [course, setCourse] = useState([]);
  const [loading, setLoading] = useState(true);

  const GetAllCourse = async () => {
    try {
      const response = await GetCourseDetails();
      setCourse(response?.data?.Courses);
      setLoading(false);
    } catch (error) {
      toast.error("something went wrong");
    }
  };

  useEffect(() => {
    GetAllCourse();
  }, []);

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
          <Breadcrumbs
            aria-label="breadcrumb"
            sx={{ color: "white", textDecoration: "none" }}
          >
            <Link
              underline="hover"
              color="inherit"
              to="/"
              style={{ color: "white", textDecoration: "none" }}
            >
              Home
            </Link>
            <Link
              underline="hover"
              color="inherit"
              to=""
              style={{ color: "white", textDecoration: "none" }}
            >
              Course
            </Link>
          </Breadcrumbs>
        </Box>

        <Container>
          <Box align="center">
            <Typography variant="h3" fontWeight={"bold"} align="center" mt={2}>
              Our Courses <br /> <span style={{ color: "purple" }}>----</span>{" "}
            </Typography>
            <Typography align="center" mb={7} color={"#3c3d3d"}>
              Echostck Academy offers expert-led courses in Html, Python,
              JavaScript, React, Angular, Node.js, and more. Elevate your skills
              with hands-on projects, tailored for all levels, and stay at the
              forefront of frontend development.
            </Typography>
          </Box>
          <Grid container spacing={4} justifyContent={'center'}>
            {loading ? (
              Array.from({ length: 2 }).map((_, index) => (
                <Grid item xs={12} sm={6} md={6} key={index}>
                  <Paper
                    elevation={10}
                    sx={{
                      borderRadius: "30px",
                      height: "auto",
                      backgroundColor: "transparent",
                    }}
                  >
                    <Grid display={"flex"} flexDirection="column">
                      <Skeleton variant="rectangular" height={300} sx={{ color: 'black' }}/>
                      <Box sx={{ textAlign: "center", padding: "20px" }}>
                        <Skeleton variant="text" height={30}/>
                      </Box>
                      <Box
                        sx={{
                          fontSize: "13px",
                          textAlign: "center",
                          color: "white",
                        }}
                      >
                        <Skeleton variant="text" height={30}/>
                      </Box>
                      <Box
                        sx={{
                          fontSize: "20px",
                          textAlign: "center",
                          color: "#d1d1d1",
                        }}
                      >
                        <Skeleton variant="text" height={30}/>
                      </Box>
                      <Box
                        sx={{
                          fontSize: "35px",
                          textAlign: "center",
                          color: "#4f0f1f",
                        }}
                      >
                        <Skeleton variant="text" height={30}/>
                      </Box>
                    </Grid>
                  </Paper>
                </Grid>
              ))
            ) : (
              course?.map((items, index) => (
                <Grid item xs={12} sm={6} md={6} key={index}>
                  <Paper
                    elevation={10}
                    sx={{
                      borderRadius: "30px",
                      height: "auto",
                      backgroundColor: "#718791",
                    }}
                  >
                    <Grid display={"flex"} flexDirection="column">
                      <img
                        src={`https://restapinodejs.onrender.com/api/course/photo/${items?._id}`}
                        style={{
                          height: "200px",
                          width: "70%",
                          borderRadius: "20%",
                          padding: "20px",
                          margin:'auto'
                        }}
                        alt=""
                      />
                      <Typography
                        fontSize={"35px"}
                        fontWeight={"bold"}
                        sx={{ textAlign: "center", padding: "20px" }}
                      >
                        {items.name}
                        <br />
                        <span
                          style={{
                            fontSize: "13px",
                            textAlign: "center",
                            color: "white",
                          }}
                        >
                          Pre-Requisites : {items.requirement}
                        </span>
                        <br />
                        <span
                          style={{
                            fontSize: "20px",
                            textAlign: "center",
                            color: "#d1d1d1",
                          }}
                        >
                          Duration : {items.duration}
                        </span>
                        <br />
                        <span
                          style={{
                            fontSize: "35px",
                            textAlign: "center",
                            color: "#4f0f1f",
                          }}
                        >
                          *{items.fees}
                        </span>
                        <br />
                        <Link to={`/courseapply/${items.name}/${items._id}`}>
                          {" "}
                          <Button
                            variant="contained"
                            color="success"
                            sx={{ marginBottom: "10px" }}
                          >
                            Apply Now{" "}
                          </Button>
                        </Link>
                      </Typography>
                    </Grid>
                  </Paper>
                </Grid>
              ))
            )}
          </Grid>
        </Container>
      </Layout>
    </>
  );
};

export default Course;
