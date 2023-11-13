import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import CategorySection from "./CategorySection";
import PersonIcon from "@mui/icons-material/Person";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import MessageIcon from "@mui/icons-material/Message";
import Layout from "../Layouts/Layout";
import { useSearch } from "../Contex/SearchContex";
import ForwardIcon from '@mui/icons-material/Forward';
const SearchPage = () => {
  const [values, setValues] = useSearch()
  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }
  return (
    <>
      <Layout title={"SearchResults"}>
        <Box
          role="presentation"
          onClick={handleClick}
          color={"white"}
          sx={{
            height: "30px",
            backgroundColor: "#607b8a",
            padding: "20px",
            maxWidth: "100%",
          }}
        >
          <Breadcrumbs aria-label="breadcrumb" sx={{ color: "white" }}>
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
              Search Results -
              {values.keyword.charAt(0).toUpperCase() +
                values.keyword.substring(1)}
            </Link>
          </Breadcrumbs>
        </Box>
        <Container>
          <Typography variant="h5" textAlign={"center"} sx={{ margin: "20px" }}>
            Search Result <ForwardIcon />
            {values?.results.length < 1 ? (
              <Box sx={{ height: "80vh", marginTop: "50px", fontSize: "40px" }}>
                {" "}
                "No Results Found"
              </Box>
            ) : (
              `Found  ${values?.results?.length} result/s`
            )}
          </Typography>

          <Container>
            <Grid
              container
              spacing={1}
              sx={{
                padding: "20px",
                margin: " auto",
                borderRadius: "30px",
                justifyContent: "center",
              }}
            >
              <Grid item xs={12} sm={12} md={12}>
                {values?.results?.map((items, index) => {
                  return (
                    <>
                      <Paper
                        key={index}
                        elevation={10}
                        sx={{
                          padding: "20px",
                          marginBottom: "10px",
                          borderRadius: "30px",
                          backgroundColor: "#dfedf5",
                        }}
                      >
                        <img
                          src={`https://restapinodejs.onrender.com/api/blog/image/${items._id}`}
                          width={"100%"}
                          style={{ borderRadius: "30px" }}
                          alt=""
                        />
                        <Box>
                          <Typography
                            variant="h5"
                            sx={{ padding: "5px", fontWeight: "bold" }}
                          >
                            {items.title}{" "}
                          </Typography>
                          <Grid container spacing={1} justifyContent={'center'}>
                            <Grid item xs={12} sm={6} md={4} justifyContent={'center'}>
                              <Typography
                                sx={{
                                  display: "flex",
                                  fontSize: "12px",
                                  padding: "5px",
                                }}
                              >
                                <PersonIcon
                                  fontSize="10px"
                                  sx={{ padding: "2px" }}
                                />{" "}
                                John Doe{" "}
                              </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} justifyContent={'center'}>
                              <Typography
                                sx={{
                                  display: "flex",
                                  fontSize: "12px",
                                  padding: "5px",
                                }}
                              >
                                <AccessAlarmIcon
                                  fontSize="5px"
                                  sx={{ padding: "2px" }}
                                />{" "}
                                <time dateTime="">
                                  {new Date(
                                    items.createdAt
                                  ).toLocaleDateString()}
                                </time>
                              </Typography>
                            </Grid>
                            <Grid item xs={12} sm={12} md={4} >
                              <Typography
                                sx={{
                                  display: "flex",
                                  fontSize: "12px",
                                  padding: "5px",
                                }}
                              >
                                <MessageIcon
                                  fontSize="5px"
                                  sx={{ padding: "2px" }}
                                />
                                {items.comments.length} comments
                              </Typography>
                            </Grid>
                          </Grid>

                          <Typography
                            variant="body1"
                            dangerouslySetInnerHTML={{
                              __html: items.postText.slice(0, 350),
                            }}
                          />
                          <Link to={`/blogdetails/${items._id}`}>
                            <Button variant="contained" size="small">
                              Read More
                            </Button>{" "}
                          </Link>
                        </Box>
                      </Paper>
                    </>
                  );
                })}

                {/* <Box
                sx={{
                  width: "auto",
                  display: "flex",
                  justifyContent: "center",
                  padding: "20px 10px",
                }}
              >
                <Pagination
                  count={Math.ceil(filteredBlog.length / postPerPage)}
                  page={currentPage}
                  color="success"
                  onChange={(event, value) => paginate(value)}
                  style={{ margin: "0px 5px" }}
                  variant="outlined"
                  shape="rounded"
                />
             
              </Box> */}
              </Grid>

              <Grid item xs={12} sm={12} md={4}>
                {/* <CategorySection /> */}
              </Grid>
            </Grid>
          </Container>
        </Container>
      </Layout>
    </>
  );
};

export default SearchPage;
