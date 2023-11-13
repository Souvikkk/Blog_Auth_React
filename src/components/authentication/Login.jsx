import {
  Avatar,
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useAuth } from "../Contex/AuthContext";
import Layout from "../Layouts/Layout";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate();
  const loginSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/api/login`, {
        email,
        password,
      });
      setLoading(false)
      if (res && res.data) {
        toast.success(res && res?.data?.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate("/blog");
      } else {
        toast.error(res?.data?.message);
      }
    } catch (error) {
      toast.error("something went wrong");
      setLoading(false)
    }
  };
  const paperStyle = {
    margin: "70px auto",
    padding: "20px",
    width: "auto",
    backgroundColor: "rgba(255,255,255,0.4)",
    borderRadius:'25px'
  };

  return (
    <>
      <Layout>
        <Box
          align="center"
          sx={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(images/img3.webp)",
            height: "auto",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <Grid container>
            <Paper elevation={5} style={paperStyle}>
              <Grid align="center">
                <Avatar sx={{ backgroundColor: "black" }}></Avatar>
                <Typography variant="h4" fontWeight={"bold"} mb={2} color={'black'}>
                  {" "}
                  Login
                </Typography>
                <form onSubmit={loginSubmit}>
                  <Grid item xs={12} marginBottom={2}>
                    <TextField
                      style={{ border: "2px solid black",borderRadius:'10px' }}
                      placeholder="Enter Email"
                      label="Email"
                      value={email}
                      type="email"
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                      fullWidth
                      autoFocus
                      required
                      inputProps={{
                        style: { color: "white" },
                      }}
                      InputLabelProps={{
                        style: {
                          color: "white",
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} marginBottom={2}>
                    <TextField
                     style={{ border: "2px solid black",borderRadius:'10px' }}
                      placeholder="Enter Password"
                      label="Password"
                      type="password"
                      value={password}
                      name="password"
                      onChange={(e) => setPassword(e.target.value)}
                      fullWidth
                      required
                      inputProps={{
                        style: { color: "white" },
                      }}
                      InputLabelProps={{
                        style: {
                          color: "white",
                        },
                      }}
                    />
                  </Grid>
                  <Box sx={{ display: 'flex' }}>
                  
                  {loading? 
                  <Grid > <Button variant="contained" color="success" type="submit">
                  LOGIN <CircularProgress color="secondary"  fontSize="small" sx={{marginLeft:"10px"}}/>
                </Button></Grid> :
                  
                  (<Button variant="contained" color="success" type="submit">
                    LOGIN
                  </Button>)}
                 
                 </Box>
                 
                  <br />
                  <Typography variant="p" marginBottom={2} fontSize={"13px"} color='white'>
                    Do not have an account ? {" "}
                    <Link
                      to={"/register"}
                      style={{
                        textDecoration: "none",
                        fontSize: "20px",
                        fontWeight: "bold",
                        color:'black'
                      }}
                    >
                      {" "}
                      <u> <b> Register{" "}</b></u>  
                    </Link>
                  </Typography>
                </form>
              </Grid>
            </Paper>
          </Grid>
        </Box>
      </Layout>
    </>
  );
};

export default Login;
