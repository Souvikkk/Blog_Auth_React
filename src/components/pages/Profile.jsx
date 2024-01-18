import React from 'react'
import { useAuth } from '../Contex/AuthContext'
import { Avatar, Box, Breadcrumbs, Container, Paper, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import Layout from '../Layouts/Layout'

const Profile = () => {
 const [auth,setAuth] = useAuth()
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
           {/* <Typography color="text.primary" sx={{marginLeft:'auto'}}>Breadcrumbs</Typography> */}
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
              Profile
            </Link>
         
          </Breadcrumbs>
        </Box>
<Container>
 
 <Paper elevation={20} sx={{textAlign:'center',margin:'20px auto',width:'60%',padding:'20px',height:'auto',borderRadius:'30px', backgroundColor:'skyblue'}}>
 <Typography variant='h3' my={2}>Profile </Typography>
 {auth?.user ? <Box sx={{marginLeft:'auto'}}><Avatar src={`https://restapinodejs.onrender.com/${auth?.user?.photo}`} alt="" sx={{margin:'auto'}}/>  </Box>  : <Box sx={{marginLeft:'auto'}}> <Avatar src={"/images/user.png"} alt="/images/user.png" sx={{margin:'auto'}}/></Box> }
 
 <Box  sx={{margin:'50px auto',textAlign:'center'}}>
  <Typography>Name : {auth?.user?.name} </Typography>  
  <Typography>Email : {auth?.user?.email} </Typography>  
  <Typography>Phone : {auth?.user?.mobile} </Typography>  

 </Box>
 </Paper>

</Container>
    </Layout>
   

 

    </>
  )
}

export default Profile