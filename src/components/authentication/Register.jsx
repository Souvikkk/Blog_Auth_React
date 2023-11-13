import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Grid,
  Input,
  InputLabel,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import LockIcon from "@mui/icons-material/Lock";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "../Layouts/Layout";
import { Link, useNavigate } from "react-router-dom";
const Register = () => {
  console.log("hello", process.env.REACT_APP_API);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  // const [photo, setPhoto] = useState("");
  const [loading,setLoading] = useState(false)
  const [img, setImg] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true)
    try {
      e.preventDefault();
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/register`,
        {
          name,
          email,
          password,
          mobile,
          img
        }
      );
      setLoading(false)
      if (res && res.data) {
        toast.success(res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("something went wrong");
      setLoading(false)
    }
  };
  const paperStyle = {
    margin: "20px auto",
    padding: "20px",
    width: "auto",
    height:'auto',
    backgroundColor: "rgba(255,255,255,0.5)",
    borderRadius:'25px',

  };
  return (
    <>
      <Layout>
        <Box
          sx={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url(images/img3.webp)",
            height: "auto",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <Grid container>
            <Paper elevation={5} style={paperStyle}>
              <Grid align="center">
                <Avatar sx={{ backgroundColor: "black" }}>
                  {" "}
                  <LockIcon />
                </Avatar>
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  marginBottom={"10px"}
                  color={'black'}
                >
                  Register
                </Typography>
                <form onSubmit={handleSubmit}>
                  <Grid item xs={12} marginBottom={2}>
                    <TextField
                      style={{ border: "2px solid black",borderRadius:'10px' }}
                      placeholder="Enter Name"
                      label="Name"
                      value={name}
                      name="name"
                      onChange={(e) => setName(e.target.value)}
                      required
                      autoFocus
                      fullWidth
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
                      placeholder="Enter Email"
                      label="Email"
                      type="email"
                      value={email}
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      fullWidth
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
                      required
                      fullWidth
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
                      placeholder="Enter Mobile"
                      label="Mobile No."
                      value={mobile}
                      name="mobile"
                      onChange={(e) => setMobile(e.target.value)}
                      required
                      fullWidth
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
                  <InputLabel htmlFor="upload-photo" sx={{color:'blue'}}>Upload Photo</InputLabel>
              <Input
                id="upload-photo"
               type="file"
                name="img"
                // value={img}
                accept="image/*"
                onChange={(e) => setImg(e.target.files[0])}
                 required
                fullWidth
                
              />

                  {loading? 
                  <Grid> <Button variant="contained" color="success" type="submit">
                  REGISTER <CircularProgress  fontSize="small" sx={{marginLeft:"10px"}}/>
                </Button>  </Grid> :
                  
                  (<Button variant="contained" color="success" type="submit">
                    REGISTER
                  </Button>)}
                  <br />
                  <Typography variant="p" marginBottom={2} fontSize={"12px"} color={'white'}>
                    Already have an account ?{" "}
                    <Link
                      to={"/login"}
                      style={{
                        textDecoration: "none",
                        fontSize: "20px",
                        fontWeight: "bold",
                        color:"black"
                      }}
                    >
                      {" "}
                    <u> <b> Login{" "}</b></u>  
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

export default Register;
