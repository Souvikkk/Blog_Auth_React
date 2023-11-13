import React, { useEffect, useState } from "react";
import { GetAllBlog } from "../Service/AllApi";
import { toast } from "react-toastify";
import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  Grid,
  Pagination,
  Paper,
  Skeleton,
  Typography,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import MessageIcon from "@mui/icons-material/Message";
import { Link } from "react-router-dom";
import CategorySection from "./CategorySection";
import Layout from "../Layouts/Layout";
import { useSearch } from "../Contex/SearchContex";
const Blog = () => {
  const [allBlog, setAllBlog] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const { searchQuery } = useSearch();
  
  const postPerPage = 2;
  const GetBlog = async () => {
    try {
      const response = await GetAllBlog();
      setAllBlog(response?.data?.data);
      setLoading(false);
      console.log("blog", response);
    } catch (error) {
      toast.error("something went wrong");
    }
  };

  useEffect(() => {
    GetBlog();
  }, []);

  // const filteredBlog = allBlog.filter(
  //   (item) =>
  //     item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //     item.postText.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = allBlog.slice(indexOfFirstPost, indexOfLastPost);

  // console.log("Search Query (Blog):", searchQuery);
  // console.log("Filtered Blog:", filteredBlog);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  console.log("currentPage:", currentPage);
  console.log("indexOfLastPost:", indexOfLastPost);
  console.log("indexOfFirstPost:", indexOfFirstPost);


  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }
  console.log("Loading1:", loading);
  console.log("Current Page2:", currentPage);
  return (
    <>
      <Layout title={'Blog'}>
        <Box
          role="presentation"
          onClick={handleClick}
          color={"white"}
          sx={{ height: "30px", backgroundColor: "#3f4f57", padding: "20px" }}
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
              Blog
            </Link>
          </Breadcrumbs>
        </Box>
        <Container>
          <Grid
            container
            spacing={1}
            sx={{ padding: "20px", margin: " auto", borderRadius: "30px",justifyContent:'center' }}
          >
            <Grid item xs={12} sm={12} md={8}>
              {loading ? (
                <>
                  <Paper
                    elevation={10}
                    sx={{
                      padding: "20px",
                      marginBottom: "10px",
                      borderRadius: "30px",
                      backgroundColor: "#dfedf5",
                    }}
                  >
                    <Box
                      sx={{
                        borderRadius: "30px",
                        backgroundColor: "#dfedf5",
                      }}
                    >
                      <Skeleton
                        variant='"rectangular'
                        width={"100%"}
                        height={"300px"}
                        animation="wave"
                        sx={{ borderRadius: "30px" }}
                      />
                    </Box>

                    <Box>
                      <Typography
                        variant="h5"
                        sx={{ padding: "5px", fontWeight: "bold" }}
                      >
                        <Skeleton
                          variant='"h5'
                          width={"100%"}
                          animation="wave"
                        />
                      </Typography>
                      <Grid sx={{ display: "flex" }}>
                        <Typography
                          sx={{
                            display: "flex",
                            fontSize: "12px",
                            padding: "5px",
                          }}
                        >
                          {" "}
                          <Skeleton
                            variant='"h5'
                            width={"100%"}
                            animation="wave"
                          />{" "}
                        </Typography>
                        <Typography
                          sx={{
                            display: "flex",
                            fontSize: "12px",
                            padding: "5px",
                          }}
                        >
                          {" "}
                          <Skeleton
                            variant='"h5'
                            width={"100%"}
                            animation="wave"
                          />
                        </Typography>
                        <Typography
                          sx={{
                            display: "flex",
                            fontSize: "12px",
                            padding: "5px",
                          }}
                        >
                          <Skeleton
                            variant='"rectangular'
                            width={"100%"}
                            animation="wave"
                          />{" "}
                        </Typography>
                      </Grid>

                      <Typography variant="contained" size="small">
                        <Skeleton
                          variant="rectangular"
                          width={"100%"}
                          animation="wave"
                        />
                      </Typography>
                    </Box>
                  </Paper>

                  <Paper
                    elevation={10}
                    sx={{
                      padding: "20px",
                      marginBottom: "10px",
                      borderRadius: "30px",
                      backgroundColor: "#dfedf5",
                    }}
                  >
                    <Box
                      sx={{
                        borderRadius: "30px",
                        backgroundColor: "#dfedf5",
                      }}
                    >
                      <Skeleton
                        variant='"rectangular'
                        width={"100%"}
                        height={"300px"}
                        animation="wave"
                        sx={{ borderRadius: "30px" }}
                      />
                    </Box>
                    <Box>
                      <Typography
                        variant="h5"
                        sx={{ padding: "5px", fontWeight: "bold" }}
                      >
                        <Skeleton
                          variant='"h5'
                          width={"100%"}
                          animation="wave"
                        />
                      </Typography>
                      <Grid sx={{ display: "flex" }}>
                        <Typography
                          sx={{
                            display: "flex",
                            fontSize: "12px",
                            padding: "5px",
                          }}
                        >
                          {" "}
                          <Skeleton
                            variant='"h5'
                            width={"100%"}
                            animation="wave"
                          />{" "}
                        </Typography>
                        <Typography
                          sx={{
                            display: "flex",
                            fontSize: "12px",
                            padding: "5px",
                          }}
                        >
                          {" "}
                          <Skeleton
                            variant='"h5'
                            width={"100%"}
                            animation="wave"
                          />
                        </Typography>
                        <Typography
                          sx={{
                            display: "flex",
                            fontSize: "12px",
                            padding: "5px",
                          }}
                        >
                          <Skeleton
                            variant='"rectangular'
                            width={"100%"}
                            animation="wave"
                          />{" "}
                        </Typography>
                      </Grid>

                      <Typography variant="contained" size="small">
                        <Skeleton
                          variant="rectangular"
                          width={"100%"}
                          animation="wave"
                        />
                      </Typography>
                    </Box>
                  </Paper>
                </>
              ) : (
                currentPosts?.map((items, index) => {
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
                          <Grid container spacing={1}>
  <Grid item xs={12} sm={6} md={4} >
    <Typography
      sx={{
        display: "flex",
        fontSize: "12px",
        padding: "5px",
      }}
    >
      <PersonIcon fontSize="10px" sx={{ padding: "2px" }} /> John Doe{" "}
    </Typography>
  </Grid>
  <Grid item xs={12} sm={6} md={4}>
    <Typography
      sx={{
        display: "flex",
        fontSize: "12px",
        padding: "5px",
      }}
    >
      <AccessAlarmIcon fontSize="5px" sx={{ padding: "2px" }} />{" "}
      <time dateTime="">
        {new Date(items.createdAt).toLocaleDateString()}
      </time>
    </Typography>
  </Grid>
  <Grid item xs={12} sm={12} md={4}>
    <Typography
      sx={{
        display: "flex",
        fontSize: "12px",
        padding: "5px",
      }}
    >
      <MessageIcon fontSize="5px" sx={{ padding: "2px" }} />
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
                })
              )}

             

              <Box
                sx={{
                  width: "auto",
                  display: "flex",
                  justifyContent: "center",
                  padding: "20px 10px",
                }}
              >
                <Pagination
                  count={Math.ceil(allBlog.length / postPerPage)}
                  page={currentPage}
                  color="success"
                  onChange={(event, value) => paginate(value)}
                  style={{ margin: "0px 5px" }}
                  variant="outlined"
                  shape="rounded"
                />
             
              </Box>

              
            </Grid>

            <Grid item xs={12} sm={12} md={4}>
              <CategorySection />
            </Grid>
          </Grid>
        </Container>
      </Layout>
    </>
  );
};

export default Blog;
