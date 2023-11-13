
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { GetCategoryDetails } from "../Service/AllApi";
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
import PersonIcon from "@mui/icons-material/Person";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import MessageIcon from "@mui/icons-material/Message";
import Layout from "../Layouts/Layout";
const CategoryDetails = () => {
  const { _id } = useParams();
  const [catdetails, setCatdetails] = useState([]);
  const [loading, setLoading] = useState(true);

  const GetCatDetails = async () => {
    try {
      const response = await GetCategoryDetails(_id);
      setCatdetails(response?.data?.data);
      setLoading(false);
    } catch (error) {
      toast.error("something went wrong");
    }
  };
  useEffect(() => {
    GetCatDetails();
  }, []);
  console.log("catdetails", catdetails);
  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }
  return (
    <>
      {loading ? (
        <>
          <Container>
            <Grid
              container
              spacing={2}
              sx={{ padding: "20px", margin: "10px auto", align: "center" }}
            >
              <Grid item xs={12} sm={6} md={12} align="center">
                <Paper
                  elevation={10}
                  sx={{
                    padding: "20px",
                    marginBottom: "5px",
                    borderRadius: "30px",
                    backgroundColor: "#dfedf5",
                  }}
                >
                  <Box
                    style={{
                      marginBottom: "10px",
                      marginLeft: "35px",
                      height: "400px",
                      borderRadius: "30px",
                      backgroundColor: "#dfedf5",
                    }}
                  >
                    <Skeleton
                      variant="rectangular"
                      height={400}
                      width={"100%"}
                      animation="wave"
                    />
                  </Box>
                  <Box>
                    <Typography
                      variant="h5"
                      sx={{ padding: "5px", fontWeight: "bold" }}
                    >
                      <Box
                        style={{
                          marginBottom: "10px",
                          marginLeft: "35px",
                          height: "40px",
                        }}
                      >
                        <Skeleton
                          variant="rectangular"
                          height={40}
                          animation="wave"
                        />
                      </Box>{" "}
                    </Typography>
                    <Grid sx={{ display: "flex", justifyContent: "center" }}>
                      <Typography
                        sx={{
                          display: "flex",
                          fontSize: "12px",
                          padding: "5px",
                        }}
                      >
                        <PersonIcon fontSize="10px" sx={{ padding: "2px" }} />{" "}
                        <Box
                          style={{
                            marginBottom: "10px",
                            marginLeft: "35px",
                            height: "40px",
                          }}
                        >
                          <Skeleton
                            variant="rectangular"
                            height={40}
                            animation="wave"
                          />
                        </Box>{" "}
                      </Typography>
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
                        <Box
                          style={{
                            marginBottom: "10px",
                            marginLeft: "35px",
                            height: "40px",
                          }}
                        >
                          <Skeleton
                            variant="rectangular"
                            height={40}
                            animation="wave"
                          />
                        </Box>
                      </Typography>

                      <Typography
                        sx={{
                          display: "flex",
                          fontSize: "12px",
                          padding: "5px",
                        }}
                      >
                        <MessageIcon fontSize="5px" sx={{ padding: "2px" }} />{" "}
                        <Box
                          style={{
                            marginBottom: "10px",
                            marginLeft: "35px",
                            height: "40px",
                          }}
                        >
                          <Skeleton
                            variant="rectangular"
                            height={40}
                            animation="wave"
                          />
                        </Box>
                      </Typography>
                    </Grid>

                    <Box
                      display={"flex"}
                      justifyContent={"center"}
                      style={{
                        marginBottom: "10px",
                        marginLeft: "35px",
                        height: "40px",
                        width: "100px",
                      }}
                    >
                      <Skeleton
                        variant="rectangular"
                        height={40}
                        animation="wave"
                      />
                    </Box>
                    <Typography
                      variant="h5"
                      sx={{ padding: "5px", fontWeight: "bold" }}
                    >
                      <Box
                        style={{
                          marginBottom: "10px",
                          marginLeft: "35px",
                          height: "40px",
                        }}
                      >
                        <Skeleton
                          variant="rectangular"
                          height={40}
                          animation="wave"
                        />
                      </Box>{" "}
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{ padding: "5px", fontWeight: "bold" }}
                    >
                      <Box
                        style={{
                          marginBottom: "10px",
                          marginLeft: "35px",
                          height: "40px",
                        }}
                      >
                        <Skeleton
                          variant="rectangular"
                          height={40}
                          animation="wave"
                        />
                      </Box>{" "}
                    </Typography>
                  </Box>
                </Paper>
                <Paper
                  elevation={10}
                  sx={{
                    padding: "20px",
                    marginBottom: "5px",
                    borderRadius: "30px",
                    backgroundColor: "#dfedf5",
                  }}
                >
                  <Box
                    style={{
                      marginBottom: "10px",
                      marginLeft: "35px",
                      height: "400px",
                      borderRadius: "30px",
                      backgroundColor: "#dfedf5",
                    }}
                  >
                    <Skeleton
                      variant="rectangular"
                      height={400}
                      width={"100%"}
                      animation="wave"
                    />
                  </Box>
                  <Box>
                    <Typography
                      variant="h5"
                      sx={{ padding: "5px", fontWeight: "bold" }}
                    >
                      {" "}
                      <Box
                        style={{
                          marginBottom: "10px",
                          marginLeft: "35px",
                          height: "40px",
                        }}
                      >
                        <Skeleton
                          variant="rectangular"
                          height={40}
                          animation="wave"
                        />
                      </Box>{" "}
                    </Typography>
                    <Grid sx={{ display: "flex", justifyContent: "center" }}>
                      <Typography
                        sx={{
                          display: "flex",
                          fontSize: "12px",
                          padding: "5px",
                        }}
                      >
                        <PersonIcon fontSize="10px" sx={{ padding: "2px" }} />{" "}
                        <Box
                          style={{
                            marginBottom: "10px",
                            marginLeft: "35px",
                            height: "40px",
                          }}
                        >
                          <Skeleton
                            variant="rectangular"
                            height={40}
                            animation="wave"
                          />
                        </Box>{" "}
                      </Typography>
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
                        <Box
                          style={{
                            marginBottom: "10px",
                            marginLeft: "35px",
                            height: "40px",
                          }}
                        >
                          <Skeleton
                            variant="rectangular"
                            height={40}
                            animation="wave"
                          />
                        </Box>
                      </Typography>

                      <Typography
                        sx={{
                          display: "flex",
                          fontSize: "12px",
                          padding: "5px",
                        }}
                      >
                        <MessageIcon fontSize="5px" sx={{ padding: "2px" }} />{" "}
                        <Box
                          style={{
                            marginBottom: "10px",
                            marginLeft: "35px",
                            height: "40px",
                          }}
                        >
                          <Skeleton
                            variant="rectangular"
                            height={40}
                            animation="wave"
                          />
                        </Box>
                      </Typography>
                    </Grid>

                    <Box
                      display={"flex"}
                      justifyContent={"center"}
                      style={{
                        marginBottom: "10px",
                        marginLeft: "35px",
                        height: "40px",
                        width: "100px",
                      }}
                    >
                      <Skeleton
                        variant="rectangular"
                        height={40}
                        animation="wave"
                      />
                    </Box>
                    <Typography
                      variant="h5"
                      sx={{ padding: "5px", fontWeight: "bold" }}
                    >
                      <Box
                        style={{
                          marginBottom: "10px",
                          marginLeft: "35px",
                          height: "40px",
                        }}
                      >
                        <Skeleton
                          variant="rectangular"
                          height={40}
                          animation="wave"
                        />
                      </Box>{" "}
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{ padding: "5px", fontWeight: "bold" }}
                    >
                      <Box
                        style={{
                          marginBottom: "10px",
                          marginLeft: "35px",
                          height: "40px",
                        }}
                      >
                        <Skeleton
                          variant="rectangular"
                          height={40}
                          animation="wave"
                        />
                      </Box>{" "}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </>
      ) : (
        <>
          <Layout>
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
              CategoryDetails
            </Link>
          </Breadcrumbs>
        </Box>
            <Container>
              <Grid
                container
                spacing={2}
                sx={{ padding: "20px", margin: "10px auto", align: "center" }}
              >
                <Grid item xs={12} sm={12} md={12} align="center">
                {catdetails.length > 0 ? null :<Box sx={{minHeight:'90vh'}}> <Typography variant="h3">Sorry, "No Data Found" </Typography><br/> <Link to={'/blog'}style={{textDecoration:'none'}} >Back to Blog </Link> </Box>}
                  { catdetails?.map((items, index) => {
                    return (
                      <>
                        <Paper
                          key={index}
                          elevation={10}
                          sx={{
                            padding: "20px",
                            marginBottom: "5px",
                            borderRadius: "30px",
                            backgroundColor: "#dfedf5",
                          }}
                          align="center"
                        >
                          {/* <img src={items.photo.data} alt="" /> */}
                          <img
                            src={`https://restapinodejs.onrender.com/api/blog/image/${items._id}`}
                            width={"100%"}
                            height={"400px"}
                            alt=""
                            style={{ borderRadius: "30px" }}
                          />
                          <Box>
                            <Typography
                              variant="h5"
                              sx={{ padding: "5px", fontWeight: "bold" }}
                            >
                              {items.title}{" "}
                            </Typography>
                            <Grid
                              sx={{ display: "flex", justifyContent: "center" }}
                            >
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
                                />
                                <time dateTime="01-01-2023">
                                  {new Date(
                                    items.createdAt
                                  ).toLocaleDateString()}{" "}
                                </time>{" "}
                              </Typography>

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
                                {items.comments
                                  ? `${items.comments.length} comments`
                                  : "0 comments"}
                              </Typography>
                            </Grid>

                            <Typography
                              variant="body1"
                              dangerouslySetInnerHTML={{
                                __html: items.postText.slice(0, 350),
                              }}
                              textAlign={"justify"}
                              padding={"20px"}
                            />
                            <Link to={`/blogdetails/${items._id}`}>
                              <Button
                                variant="contained"
                                size="small"
                                color="success"
                              >
                                Read More
                              </Button>{" "}
                            </Link>
                          </Box>
                        </Paper>
                      </>
                    );
                  }
                  )
                }
                
                </Grid>
               
              </Grid>
            </Container>
          </Layout>
        </>
      )}
    </>
  );
};

export default CategoryDetails;
