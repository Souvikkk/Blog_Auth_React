import React, { useEffect, useState } from "react";
import { GetCategoryList, GetRecentPost } from "../Service/AllApi";
import { toast } from "react-toastify";
import {
  Box,
  Grid,
  Paper,
  Skeleton,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { CircleLoader } from "react-spinners";
import SearchInput from "./SearchInput";


const CategorySection = () => {
  const [allCat, setAllCat] = useState([]);
  const [allRecentPosts, setAllRecentPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingSpinner, setLoadingSpinner] = useState(true);

  // const { searchQuery, setSearchQuery } = useSearch();

  const GetCategory = async () => {
    try {
      const response = await GetCategoryList();
      setAllCat(response?.data?.data);
      setLoading(false);
    } catch (error) {
      toast.error("something went worng");
    }
  };
  const GetRecent = async () => {
    try {
      const response = await GetRecentPost();
      setAllRecentPosts(response?.data?.data);
      setLoadingSpinner(false);
    } catch (error) {
      toast.error("something went wrong");
    }
  };

  useEffect(() => {
    GetCategory();
    GetRecent();
  }, []);

  // const filteredCategories = allCat.filter((value) =>
  //   value.category.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  // const filteredRecentPosts = allRecentPosts.filter((item) =>
  //   item.title.toLowerCase().includes(searchQuery.toLowerCase())
  // );
  // console.log("Search Query (CategorySection):", searchQuery);
  // console.log("Filtered Categories:", filteredCategories);
  // console.log("Filtered Recent Posts:", filteredRecentPosts);
  return (
    <>
      {loading ? (
        <Paper
          elevation={10}
          sx={{
            padding: "10px",
            borderRadius: "30px",
            backgroundColor: "#dfedf5",
          }}
        >
          <Box
            style={{ marginBottom: "10px", marginLeft: "35px", height: "40px" }}
          >
            <Skeleton variant="rectangular" height={40} animation="wave" />
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
              <Box key={index} style={{ marginBottom: "10px", height: "20px" }}>
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
                  style={{ marginLeft: "10px", height: "40px", width: "150px" }}
                >
                  <Skeleton variant="text" height={20} animation="wave" />
                  <Skeleton variant="text" height={20} animation="wave" />
                </Box>
              </Box>
            ))}
          </Grid>
        </Paper>
      ) : (
        <Paper
          elevation={10}
          sx={{
            padding: "10px",
            backgroundColor: "#dfedf5",
            borderRadius: "30px",
          }}
        >
          <Box sx={{ margin: "20px auto" }}>
           <SearchInput/>
          </Box>

          <br />
          <Box sx={{ width: "80%", margin: "auto" }}>
            <Typography
              // variant="p"

              sx={{ marginY: "10px", fontWeight: "bold", fontSize: "20px" }}
            >
              <u>Categories </u>
            </Typography>
          </Box>
          <ul>
            {allCat?.map((value, index) => (
              <Link
                to={`/categorydetails/${value._id}`}
                style={{ textDecoration: "none" }}
                key={index}
              >
                <li
                  style={{
                    listStyle: "none",
                    marginBottom: "10px",
                    color: "black",
                  }}
                >
                  {" "}
                  {value.category}{" "}
                  <span style={{ fontSize: "14px" }}>
                    ({value.category.length})
                  </span>
                </li>{" "}
              </Link>
            ))}
          </ul>
          <Box sx={{ width: "80%", margin: "auto" }}>
            <Typography
              // variant="p"
              sx={{ marginY: "15px", fontWeight: "bold", fontSize: "20px" }}
            >
              <u>Recent Posts </u>
            </Typography>
          </Box>
          <Grid container justifyContent='center'>
            {loadingSpinner ? (
              <Box sx={{ paddingLeft: "60px", paddingTop: "20px" }}>
                {" "}
                <CircleLoader color="#36d7b7" />{" "}
              </Box>
            ) : (
              allRecentPosts?.map((items, index) => (
                <Grid
                  container
                  spacing={1}
                  sx={{ width: "80%", margin: "auto",justifyContent:'center' }}
                >
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    key={index}
                    sx={
                      {
                        // display: "flex",
                        // padding: "10px",
                        // marginLeft: "30px",
                        // padding:'30px',
                      }
                    }
                  >
                    <img
                      src={`https://restapinodejs.onrender.com/api/blog/image/${items._id}`}
                      alt=""
                      width={"60%"}
                      height={"auto"}
                      style={{ borderRadius: "20px" }}
                    />
                    </Grid>
                    <Grid
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    key={index}>
                    <Link
                      to={`/recentPostDetails/${items._id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <Typography
                        fontSize={"12px"}
                        fontWeight={"bold"}
                        color={"black"}
                      >
                        {items.title} <br />
                        <span style={{ fontSize: "8px" }}>
                          <time dateTime="01-01-2023">
                            {new Date(items.createdAt).toLocaleDateString()}{" "}
                          </time>{" "}
                        </span>{" "}
                      </Typography>{" "}
                    </Link>
                    </Grid>
                    
                
                </Grid>
              ))
            )}
          </Grid>
        </Paper>
      )}
    </>
  );
};

export default CategorySection;
