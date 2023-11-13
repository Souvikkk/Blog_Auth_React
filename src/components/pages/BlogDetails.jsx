import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  GetBlogComments,
  GetBlogDetails,
  PostDisLike,
  PostLike,
  PostReplyMessage,
} from "../Service/AllApi";
import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  Grid,
  Paper,
  Skeleton,
  TextField,
  Typography,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import MessageIcon from "@mui/icons-material/Message";
import CategorySection from "./CategorySection";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { toast } from "react-toastify";
import Layout from "../Layouts/Layout";
const BlogDetails = () => {
  const { id } = useParams();
  const [blogDetail, setBlogDetail] = useState([]);
  const [coment, setComent] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(true);
  const [like, setLike] = useState([]);
  const [disLike, setDisLike] = useState([]);
  const [islikeClicked, setIsLikeClicked] = useState(
    localStorage.getItem(`liked_${id}`) === "true"
  );
  const [isDisLikeClicked, setIsDisLikeClicked] = useState(
    localStorage.getItem(`unliked_${id}`) === "true"
  );
  const Getblog = async () => {
    try {
      const response = await GetBlogDetails(id);
      setBlogDetail(response?.data?.data);
      setLoading(false);
      // console.log("blogDetails",response);
    } catch (error) {
      console.log("error fetching details", error);
    }
  };
  const GetComments = async () => {
    try {
      const response = await GetBlogComments(id);
      setComent(response?.data?.post?.comment);
      console.log("cmnt", response?.data?.post?.comment);
    } catch (error) {
      console.log("error fetching comment", error);
    }
  };
  const handleLike = async () => {
    try {
      if (!islikeClicked) {
        const response = await PostLike(id);
        setLike(response?.data.likes);
        Getblog();
        setIsLikeClicked(true);
        localStorage.setItem(`liked_${id}`, "true");
      } else {
        toast.warn("Already Liked");
      }
    } catch (error) {
      toast.error("something went wrong");
    }
  };
  const handleDisLike = async () => {
    try {
      if (!isDisLikeClicked) {
        const response = await PostDisLike(id);
        setDisLike(response?.data.unlikes);
        Getblog();
        setIsDisLikeClicked(true);
        localStorage.setItem(`unliked_${id}`, "true");
      } else {
        toast.warn("Already Disliked");
      }
    } catch (error) {
      toast.error("something went wrong");
    }
  };

  useEffect(() => {
    Getblog();
    GetComments();
  }, []);
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await PostReplyMessage(id, { name, email, comment });
      if (response && response?.data) {
        toast.success(response?.data?.message);
        console.log("reply", response);
        GetComments();
        setName("");
        setEmail("");
        setComment("");
      } else {
        toast.error(response?.data?.message);
      }
    } catch (error) {
      console.log("error fetching comment", error);
    }
  };

  console.log("blogdet", blogDetail);

  const commentPerRow = 3;
  const [loadMoreComment, setLoadMoreComment] = useState(commentPerRow);

  const handleMoreComment = () => {
    setLoadMoreComment(loadMoreComment + commentPerRow);
  };
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
              <Grid item xs={12} sm={12} md={8}>
                <Paper
                  elevation={10}
                  sx={{
                    padding: "20px",
                    marginBottom: "5px",
                    borderRadius: "30px",
                    backgroundColor: "#dfedf5",
                  }}
                >
                  <Box>
                    <Skeleton
                      variant="rectangular"
                      height={340}
                      animation="wave"
                      sx={{ borderRadius: "30px", marginBottom: "5px" }}
                    />
                  </Box>

                  <Box>
                    <Box>
                      <Skeleton
                        variant="rectangular"
                        height={40}
                        animation="wave"
                      />
                    </Box>
                    <Grid sx={{ display: "flex" }}>
                      <Box>
                        <Skeleton
                          variant="rectangular"
                          height={40}
                          animation="wave"
                        />
                      </Box>{" "}
                      <Box>
                        <Skeleton
                          variant="rectangular"
                          height={40}
                          animation="wave"
                        />
                      </Box>
                      <Box>
                        <Skeleton
                          variant="rectangular"
                          height={40}
                          animation="wave"
                        />
                      </Box>
                      <Typography
                        sx={{
                          display: "flex",
                          fontSize: "12px",
                          padding: "5px",
                        }}
                      >
                        {" "}
                        <Box>
                          <Skeleton
                            variant="rectangular"
                            height={40}
                            animation="wave"
                          />
                        </Box>
                      </Typography>
                    </Grid>

                    <Box>
                      <Skeleton
                        variant="rectangular"
                        height={40}
                        animation="wave"
                      />
                    </Box>
                  </Box>
                </Paper>
              </Grid>

              <Grid item xs={12} sm={12} md={4}>
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
          </Container>
        </>
      ) : (
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
                BlogDetails
              </Link>
            </Breadcrumbs>
          </Box>
          <Container>
            <Grid
              container
              spacing={1}
              sx={{ padding: "20px", margin: "10px auto" }}
            >
              <Grid item xs={12} sm={12} md={8}>
                <Paper
                  elevation={10}
                  sx={{
                    padding: "20px",
                    marginBottom: "5px",
                    borderRadius: "30px",
                    backgroundColor: "#dfedf5",
                  }}
                >
                  <img
                    src={`https://restapinodejs.onrender.com/api/blog/image/${blogDetail._id}`}
                    width={"100%"}
                    alt=""
                    style={{ borderRadius: "30px" }}
                  />
                  <Box>
                    <Typography
                      variant="h5"
                      sx={{ padding: "5px", fontWeight: "bold" }}
                    >
                      {blogDetail.title}{" "}
                    </Typography>

                    <Typography
                      variant="body1"
                      dangerouslySetInnerHTML={{ __html: blogDetail.postText }}
                    />

                    <Grid container spacing={1} alignItems="center">
                      <Grid item xs={12} sm={6} md={4}>
                        <Typography
                          sx={{
                            display: "flex",
                            fontSize: "12px",
                            padding: "5px",
                            alignItems: "center",
                          }}
                        >
                          <PersonIcon fontSize="10px" sx={{ padding: "2px" }} />{" "}
                          John Doe
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={6} md={4}>
                        <Typography
                          sx={{
                            display: "flex",
                            fontSize: "12px",
                            padding: "5px",
                            alignItems: "center",
                          }}
                        >
                          <AccessAlarmIcon
                            fontSize="5px"
                            sx={{ padding: "2px" }}
                          />{" "}
                          <time dateTime="">
                            {new Date(
                              blogDetail.createdAt
                            ).toLocaleDateString()}
                          </time>
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={12} md={4}>
                        <Typography
                          sx={{
                            display: "flex",
                            fontSize: "12px",
                            padding: "5px",
                            alignItems: "center",
                          }}
                        >
                          <MessageIcon fontSize="5px" sx={{ padding: "2px" }} />
                          {blogDetail.comments
                            ? `${blogDetail.comments.length} comments`
                            : "0 comments"}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={6} md={4}>
                        <Button
                          onClick={() => handleLike()}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            fontSize: "15px",
                            padding: "0px",
                            variant: "outlined",
                          }}
                          disabled={islikeClicked}
                        >
                          <ThumbUpIcon sx={{ padding: "0px 5px 5px 5px" }} />{" "}
                          <span>{blogDetail.likes}</span>
                        </Button>
                      </Grid>
                      <Grid item xs={12} sm={6} md={4}>
                        <Button
                          onClick={() => handleDisLike()}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            fontSize: "15px",
                            padding: "0px",
                            variant: "outlined",
                          }}
                          disabled={isDisLikeClicked}
                        >
                          <span>{blogDetail.unlikes}</span>
                          <ThumbDownIcon sx={{ padding: "0px 5px 5px 5px" }} />
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                </Paper>
                <Paper
                  elevation={0}
                  sx={{
                    marginTop: "20px",
                    p: "25px",
                    borderRadius: "30px",
                    backgroundColor: "#def1fc",
                  }}
                >
                  <Typography
                    variant="p"
                    fontWeight={"600"}
                    my={5}
                    sx={{ fontSize: "18px" }}
                  >
                    Comments ({coment?.comments?.length})
                  </Typography>
                  {coment?.comments
                    ?.slice(0, loadMoreComment)
                    .map((items, index) => {
                      return (
                        <>
                          <Typography
                            key={index}
                            sx={{
                              fontSize: "16px",
                              marginLeft: "25px",
                              marginTop: "10px",
                              fontWeight: "bold",
                            }}
                          >
                            {items.name}{" "}
                          </Typography>
                          <Typography
                            sx={{
                              marginLeft: "25px",
                              fontSize: "10px",
                              fontWeight: "bold",
                            }}
                          >
                            {new Date(items.updatedAt).toLocaleString("en-GB")}{" "}
                          </Typography>
                          <Typography
                            sx={{
                              marginLeft: "25px",
                              marginTop: "5px",
                              fontSize: "15px",
                              marginBottom: "4px",
                            }}
                          >
                            {items.comment}{" "}
                          </Typography>
                        </>
                      );
                    })}
                  {loadMoreComment < coment?.comments?.length && (
                    <Button
                      variant="contained"
                      size="small"
                      color="secondary"
                      onClick={handleMoreComment}
                      sx={{
                        fontSize: "10px",
                        marginLeft: "35px",
                        marginTop: "5px",
                      }}
                    >
                      More Comment{" "}
                    </Button>
                  )}
                </Paper>

                <Box>
                  <Paper
                    elevation={10}
                    sx={{
                      marginTop: "20px",
                      p: "25px",
                      borderRadius: "30px",
                      backgroundColor: "#def1fc",
                    }}
                  >
                    <Typography fontSize={"18px"} fontWeight={"500"} my={1}>
                      Please Leave a Comment{" "}
                    </Typography>
                    <Typography fontSize={"10px"} my={1}>
                      Your email_id will not be published.Required fields are
                      marked *
                    </Typography>
                    <Grid container>
                      <form onSubmit={handleSubmit}>
                        <Grid display={"flex"} justifyContent={"space-between"}>
                          <Grid item xs={12} sm={6} md={6} marginBottom={2}>
                            <TextField
                              placeholder="Enter Name"
                              value={name}
                              type="text"
                              name="name"
                              onChange={(e) => setName(e.target.value)}
                              required
                            />
                          </Grid>
                          <Grid item xs={12} sm={6} md={6} marginBottom={2}>
                            <TextField
                              placeholder="Enter Email"
                              value={email}
                              name="email"
                              type="email"
                              onChange={(e) => setEmail(e.target.value)}
                              required
                            />
                          </Grid>
                        </Grid>

                        <Grid item xs={12} marginBottom={2}>
                          <TextField
                            placeholder="Enter Comment"
                            value={comment}
                            name="comment"
                            onChange={(e) => setComment(e.target.value)}
                            required
                            fullWidth
                          />
                        </Grid>
                        <Button
                          variant="outlined"
                          color="secondary"
                          type="submit"
                        >
                          Post Comment{" "}
                        </Button>
                      </form>
                    </Grid>
                  </Paper>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <CategorySection />
              </Grid>
            </Grid>
          </Container>
        </Layout>
      )}
    </>
  );
};

export default BlogDetails;
