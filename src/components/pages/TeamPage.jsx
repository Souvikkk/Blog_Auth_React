import React, { useEffect, useState } from "react";
import { GetTeamDetails } from "../Service/AllApi";
import { toast } from "react-toastify";
import {
  Box,
  Container,
  Grid,
  Paper,
  Skeleton,
  Typography,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { Link } from "react-router-dom";
const TeamPage = () => {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const GetAllTeam = async () => {
    try {
      const response = await GetTeamDetails();
      setTeam(response?.data?.TeamMember);
      setLoading(false);
      console.log("team", response);
    } catch (error) {
      toast.error("something went wrong");
    }
  };

  useEffect(() => {
    GetAllTeam();
  }, []);
  return (
    <>
      <Container>
        <Box my={"70px"}>
          <Typography variant="h3" fontWeight={"bold"} align="center" mt={2}>
            {" "}
            Our Team <br /> <span style={{ color: "purple" }}>----</span>{" "}
          </Typography>
          <Typography align="center" mb={7} color={"#636362"}>
            Meet the brilliant minds behind Echostck Academy's success. Our
            team, curated with passion and expertise, comprises seasoned
            frontend developers, designers, and educators. Each member brings a
            unique blend of industry experience and a commitment to nurturing
            the next generation of developers.
          </Typography>

          <Grid container spacing={4} justifyContent={"center"}>
            {loading
              ? Array.from({ length: 4 }).map((_, index) => (
                  <Grid item md={3}>
                    <Paper
                      elevation={10}
                      key={index}
                      sx={{ borderRadius: "20%", backgroundColor: "#385766" }}
                    >
                      <Grid item align="center" padding={"5px"}>
                        <Box sx={{ borderRadius: "20px" }}>
                          <Skeleton
                            variant="rectangular"
                            width={"250px"}
                            height={"300px"}
                          />
                        </Box>
                      </Grid>
                      <Grid item>
                        <Skeleton variant="text" height={"30px"} />
                        <Skeleton variant="text" height={"30px"} />
                      </Grid>
                    </Paper>
                  </Grid>
                ))
              : team?.map((items, index) => {
                  return (
                    <>
                      <Grid item md={3}>
                        <Paper
                          elevation={10}
                          key={index}
                          sx={{
                            borderRadius: "10%",
                            backgroundColor: "#a0a6b0",
                          }}
                        >
                          <Grid item align="center" padding={"5px"}>
                            <img
                              src={`https://restapinodejs.onrender.com/api/team/photo/${items._id}`}
                              width={"250px"}
                              height={"300px"}
                              style={{ borderRadius: "15%" }}
                              alt=""
                            />
                          </Grid>
                          <Grid item>
                            <Typography
                              my={1}
                              align="center"
                              fontSize={"18px"}
                              fontWeight={"bold"}
                              color={"#cccacbblack"}
                            >
                              {items.name}{" "}
                            </Typography>
                            <Typography
                              mt={1}
                              paddingBottom={"40px"}
                              align="center"
                              fontSize={"13px"}
                              color={"#3b3b3b"}
                            >
                              {items.possession}{" "}
                            </Typography>
                          </Grid>
                          <Grid Item justifyContent={'center'}>
                            <Box sx={{textAlign:'center'}}>

                           
                              <Link
                                to={"/https://www.facebook.com/"}
                                style={{
                                  textDecoration: "none",
                                  color: "#3b5998 ",
                                }}
                              >
                                <FacebookIcon />{" "}
                              </Link>{" "}
                             
                              <Link
                                to={"/https://www.whatsapp.com/"}
                                style={{
                                  textDecoration: "none",
                                  color: "#075e54",
                                }}
                              >
                                <WhatsAppIcon />{" "}
                              </Link>{" "}
                              
                              <Link
                                to={"/https://www.twitter.com/"}
                                style={{
                                  textDecoration: "none",
                                  color: "#00acee",
                                }}
                              >
                                <TwitterIcon />{" "}
                              </Link>{" "}
                              
                              <Link
                                to={"/https://www.instagram.login/"}
                                style={{
                                  textDecoration: "none",
                                  color: " #8a3ab9",
                                }}
                              >
                                <InstagramIcon />{" "}
                              </Link>
                             
                              <Link
                                to={"/https://www.pinterest.login/"}
                                style={{ textDecoration: "none", color: "#c8232c" }}
                              >
                                <PinterestIcon />{" "}
                              </Link>
                              </Box>
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

export default TeamPage;
