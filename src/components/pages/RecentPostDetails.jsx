import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { GetBlogDetails } from "../Service/AllApi";
import { toast } from "react-toastify";
import {
    Box,
    Breadcrumbs,
    Container,
    Grid,
    Paper,
    Skeleton,
    Typography,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import MessageIcon from "@mui/icons-material/Message";
import CategorySection from "./CategorySection";
import Layout from "../Layouts/Layout";
const RecentPostDetails = () => {
    const { _id } = useParams();
    const [recentPost, setRecentPost] = useState([]);
    const [loading, setLoading] = useState(true);
    //   console.log("prop",_id);
    const GetRecentDetails = async () => {
        try {
            const response = await GetBlogDetails(_id);
            setRecentPost(response?.data?.data);
            setLoading(false);
            console.log("rec", response);
        } catch (error) {
            toast.error("something went wrong");
        }
    };

    useEffect(() => {
        GetRecentDetails();
    }, []);

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
                            sx={{ padding: "20px", margin: "10px auto" }}
                        >
                            <Grid item xs={12} sm={6} md={8}>
                                <Paper
                                    elevation={10}
                                    sx={{
                                        padding: "20px",
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
                                                    backgroundColor: "#dfedf5",
                                                }}
                                            >
                                                <Skeleton
                                                    variant="rectangular"
                                                    height={40}
                                                    animation="wave"
                                                />
                                            </Box>
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
                                                </Box>
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    display: "flex",
                                                    fontSize: "12px",
                                                    padding: "5px",
                                                }}
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
                                                </Box>
                                            </Typography>
                                        </Grid>

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
                                    </Box>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Paper
                                    elevation={10}
                                    sx={{
                                        padding: "10px",
                                        borderRadius: "30px",
                                        backgroundColor: "#dfedf5",
                                    }}
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
                                    </Box>

                                    <Box
                                        style={{
                                            marginLeft: "35px",
                                            marginY: "10px",
                                            fontWeight: "bold",
                                            height: "20px",
                                        }}
                                    >
                                        <Skeleton variant="text" height={20} animation="wave" />
                                    </Box>

                                    <ul>
                                        {Array.from({ length: 5 }).map((_, index) => (
                                            <Box
                                                key={index}
                                                style={{ marginBottom: "10px", height: "20px" }}
                                            >
                                                <Skeleton variant="text" height={20} animation="wave" />
                                            </Box>
                                        ))}
                                    </ul>

                                    <Box
                                        style={{
                                            marginLeft: "35px",
                                            marginY: "10px",
                                            fontWeight: "bold",
                                            height: "20px",
                                        }}
                                    >
                                        <Skeleton variant="text" height={20} animation="wave" />
                                    </Box>

                                    <Grid>
                                        {Array.from({ length: 5 }).map((_, index) => (
                                            <Box
                                                key={index}
                                                style={{
                                                    display: "flex",
                                                    padding: "10px",
                                                    marginLeft: "30px",
                                                    marginY: "10px",
                                                }}
                                            >
                                                <Box style={{ width: "55px", height: "30px" }}>
                                                    <Skeleton
                                                        variant="rectangular"
                                                        height={30}
                                                        width={55}
                                                        animation="wave"
                                                    />
                                                </Box>
                                                <Box
                                                    style={{
                                                        marginLeft: "10px",
                                                        height: "40px",
                                                        width: "150px",
                                                    }}
                                                >
                                                    <Skeleton
                                                        variant="text"
                                                        height={20}
                                                        animation="wave"
                                                    />
                                                    <Skeleton
                                                        variant="text"
                                                        height={20}
                                                        animation="wave"
                                                    />
                                                </Box>
                                            </Box>
                                        ))}
                                    </Grid>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Container>{" "}
                </>
            ) : (
                <>
                    <Layout>
                        <Box
                            role="presentation"
                            onClick={handleClick}
                            color={"white"}
                            sx={{
                                height: "30px",
                                backgroundColor: "#3f4f57",
                                padding: "20px",
                            }}
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
                                    Recent Post
                                </Link>
                            </Breadcrumbs>
                        </Box>
                        <Container>
                            <Grid
                                container
                                spacing={2}
                                sx={{ padding: "20px", margin: "10px auto" }}
                            >
                                <Grid item xs={12} sm={6} md={8}>
                                    <Paper elevation={10} sx={{ padding: "20px" ,
                                            borderRadius: "30px",
                                            backgroundColor: "#dfedf5"}}>
                                      
                                        <img
                                            src={`https://restapinodejs.onrender.com/api/blog/image/${recentPost._id}`}
                                            height={"400"}
                                            width={"100%"}
                                           style={{borderRadius: "30px"}}
                                            alt=""
                                        />
                                        <Box>
                                            <Typography
                                                variant="h5"
                                                sx={{ padding: "5px", fontWeight: "bold" }}
                                            >
                                                {recentPost?.title}{" "}
                                            </Typography>
                                            <Grid container spacing={1}>
  <Grid item xs={12} sm={6} md={4}>
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
        {new Date(recentPost?.createdAt).toLocaleDateString()}
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
      {recentPost?.comments
        ? `${recentPost?.comments.length} comments`
        : "0 comments"}
    </Typography>
  </Grid>
</Grid>
                                      
                                            <Typography
                                                variant="body1"
                                                dangerouslySetInnerHTML={{
                                                    __html: recentPost?.postText,
                                                }}
                                            />
                                        </Box>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <CategorySection />
                                </Grid>
                            </Grid>
                        </Container>
                    </Layout>
                </>
            )}
        </>
    );
};

export default RecentPostDetails;
