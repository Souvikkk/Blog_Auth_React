import React from 'react'
import { useAuth } from '../Contex/AuthContext'
import { Box, Breadcrumbs, Container, Paper, Typography } from '@mui/material'
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
 <img src="/images/user.png" alt="" height="150px" width="150px" style={{borderRadius:'50%'}}/>
 {/* <img src={auth?.user?.img} alt="" height="150px" width="150px" style={{borderRadius:'50%'}}/> */}
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