import { Box, Breadcrumbs, Button, CircularProgress, Grid, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Layout from '../Layouts/Layout'
import { PostApplyCourse } from '../Service/AllApi'
import { toast } from 'react-toastify'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
const CourseApply = () => {
    const {course, _id } = useParams()
    // console.log("props", _id);
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [city, setCity] = useState("")
    const [address, setAddress] = useState("")
    const [qualification, setQualification] = useState("")
    const [programing_knowledge, setPrograming_knowledge] = useState("")
    const [experiance, setExperience] = useState("")

    const [loading,setLoading] = useState(false)
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        setLoading(true)
        try {
            e.preventDefault()
            const response = await PostApplyCourse(_id, { name, email, phone, city, address, qualification, programing_knowledge, experiance })
            console.log("Postdata", response);
            setLoading(false)
            if (response && response?.data) {
                toast.success(response?.data?.message)
                navigate('/course')
            } else {
                toast.error(response?.data?.message)
            }
        } catch (error) {
            toast.error("something went wrong")
            setLoading(false)
        }
    }
    const paperStyle = { margin: "5px auto", padding: "20px", width: '50%',backgroundColor: '#dedede' ,borderRadius:'30px' }
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
              style={{ color: 'white', textDecoration: 'none' }}
            >
              Apply
            </Link>
          
          </Breadcrumbs>
        </Box>
                <Box>
                    <Grid container>

                        <Paper elevation={10} style={paperStyle}> <Typography>Great,You Want to Apply for  <span style={{color:'red',fontWeight:'bold'}}>{course} ? </span> <br/> <span style={{paddingTop:'20px',fontSize:'12px'}}>Please fill all the details below </span></Typography></Paper>
                       
                    </Grid>
                    <Grid container>
                        <Paper elevation={10} style={paperStyle}>
                            <Grid align='center'>

                                <form onSubmit={handleSubmit}>
                                    <Grid item xs={12} marginBottom={2}>
                                        <TextField placeholder='Enter Your Name' label='Name' value={name} name='name' onChange={e => setName(e.target.value)} required autoFocus fullWidth />
                                    </Grid>
                                    <Grid item xs={12} marginBottom={2}>
                                        <TextField placeholder='Enter Your Email' label='Email' value={email} name='email' onChange={e => setEmail(e.target.value)} type='email' required fullWidth />
                                    </Grid>
                                    <Grid item xs={12} marginBottom={2}>
                                        <TextField placeholder='Enter Your Phone' label='Phone' value={phone} name='phone' onChange={e => setPhone(e.target.value)} type='phone' required fullWidth />
                                    </Grid>
                                    <Grid item xs={12} marginBottom={2}>
                                        <TextField placeholder='Enter Your City' label='City' value={city} name='city' onChange={e => setCity(e.target.value)} required fullWidth />
                                    </Grid>
                                    <Grid item xs={12} marginBottom={2}>
                                        <TextField placeholder='Enter Your Address' label='Address' value={address} name='address' onChange={e => setAddress(e.target.value)} required fullWidth />
                                    </Grid>
                                    <Grid item xs={12} marginBottom={2}>
                                        <TextField placeholder='Enter Your Qualification' label='Qualification' value={qualification} name='qualification' onChange={e => setQualification(e.target.value)} required fullWidth />
                                    </Grid>
                                    <Grid item xs={12} marginBottom={2}>
                                        <TextField placeholder='Enter Your Progaming knowledge' label='Progaming knowledge' value={programing_knowledge} name='programing_knowledge' onChange={e => setPrograming_knowledge(e.target.value)} required fullWidth />
                                    </Grid>
                                    <Grid item xs={12} marginBottom={2}>
                                        <TextField placeholder='Enter Your Experience' label='Experience' value={experiance} name='experiance' onChange={e => setExperience(e.target.value)} required fullWidth />
                                    </Grid>
                                    {loading? 
                  <Grid> <Button variant="contained" color="success" type="submit">
                  Apply <CircularProgress color="secondary"  fontSize="small" sx={{marginLeft:"10px"}}/>
                </Button>  </Grid> :
                  
                  (<Button variant="contained" color="success" type="submit">
                    Apply
                  </Button>)}
                                </form>
                            </Grid>
                        </Paper>

                    </Grid>
                </Box>
            </Layout>


        </>
    )
}

export default CourseApply