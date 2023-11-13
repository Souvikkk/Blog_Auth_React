import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, Box, Grid, useMediaQuery, Avatar, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Contex/AuthContext';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import './Navbar.css'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
const Navbar = () => {
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const isSmallScreen = useMediaQuery('(max-width:800px)'); 

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };


  const logoutHandler = () => {

    Swal.fire({
      title: 'Do you want to Logout ?',
      html: "<span style='color: white;'>Hope You Enjoyed !</span>",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#1f292e',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes,Logout!',

      customClass: {
        popup: 'custom-popup-class',
        title: 'custom-title-class',
        content: 'custom-content-class',
        confirmButton: 'custom-confirm-button-class',
        cancelButton: 'custom-cancel-button-class',
       
        customClass: {
          popup: 'custom-popup-class',
          title: 'custom-title-class',
          content: 'custom-content-class',
        },
      },
    }).then((result) => {
      if (result.isConfirmed) {
        setAuth({
          ...auth,
          user: null,
          token: '',
        });
        // toast.success('Logout Successfully');
        localStorage.removeItem('auth');
        navigate('/login');
        Swal.fire(
          {title: 'Logged Out!',
          // text: 'You have been logged out successfully.',
          html: "<span style='color: white;'>You have been logged out successfully.!</span> <br><span style='color: white;'>Good Bye!</span>",
          // html: "<span style='color: white;'>Good Bye!</span>",
          icon: 'success',
          customClass: {
            popup: 'custom-popup-class',
            title: 'custom-title-class',
            content: 'custom-content-class',
            confirmButton: 'custom-confirm-button-class',
            cancelButton: 'custom-cancel-button-class',
          
            customClass: {
              popup: 'custom-popup-class',
              title: 'custom-title-class',
              content: 'custom-content-class',
            },
          },}
        )
      }
    })
   
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  

  const appbarStyle = { backgroundColor: '#1f292e' };

  return (
    <>
      <AppBar position='sticky' style={appbarStyle}>
        <Toolbar>
          <img src="/images/logo.png" alt="" height="70px" width="50px" />
          <Typography sx={{ color: "#f059f0", fontWeight: 'bold', fontSize: { xs: '14px', sm: '16px', md: '18px', lg: '20px' } }}>𝕰𝖈𝖍𝖔𝕾𝖙𝖆𝖈k</Typography>

          {isSmallScreen ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ marginLeft: 'auto', backgroundColor: "purple", display: 'block' }}
              >
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}  sx={{ flexShrink: 0 }} >

                <Box sx={{ backgroundColor: '#1f292e', height: '100vh' }}>
                  <List>
                    {auth.user ? (
                      <>
                        <Grid display={'flex'}>
                          <img src="/images/logo.png" alt="" height='45px' width='35px' style={{ padding: '20px 0px 10px 5px' }} />
                          <Typography sx={{ color: "#f059f0", fontWeight: 'bold', fontSize: { xs: '14px', sm: '16px', md: '18px', lg: '20px' }, padding: '30px 5px 10px 0px' }}>𝕰𝖈𝖍𝖔𝕾𝖙𝖆𝖈k</Typography>
                        </Grid>

                        {/* <ListItem>
                          <ListItemText primary={`Welcome :- ${auth.user.name}`} sx={{ color: '#d4d4d4', fontWeight: 'bold' }} />
                        </ListItem> */}
                        <div>
                        <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {auth.user && (
                <Avatar sx={{ backgroundColor: '#f059f0', marginLeft: 'auto', marginRight: '10px' }}>
                  {auth.user.name.charAt(0).toUpperCase()}
                </Avatar>
              )}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem onClick={logoutHandler}>Logout</MenuItem>
      </Menu>
    </div>
                        <ListItem component={Link} to="/" sx={{ color: '#d4d4d4' }} onClick={() => navigate('/')}>
                          <ListItemText primary="Home" />
                        </ListItem>
                        <ListItem component={Link} to="/about" sx={{ color: '#d4d4d4' }} onClick={() => navigate('/about')}>
                          <ListItemText primary="About" />
                        </ListItem>
                        <ListItem component={Link} to="/blog" sx={{ color: '#d4d4d4' }} onClick={() => navigate('/blog')}>
                          <ListItemText primary="Blog" />
                        </ListItem>
                        <ListItem component={Link} to="/course" sx={{ color: '#d4d4d4' }} onClick={() => navigate('/course')}>
                          <ListItemText primary="Course" />
                        </ListItem>
                        <ListItem component={Link} to="/contact" sx={{ color: '#d4d4d4' }} onClick={() => navigate('/contact')}>
                          <ListItemText primary="Contact" />
                        </ListItem>
                        {/* {auth.user && (
                <Avatar sx={{ backgroundColor: '#f059f0', marginLeft: 'auto', marginRight: '10px' }}>
                  {auth.user.name.charAt(0).toUpperCase()}
                </Avatar>
              )}
                        <ListItem  sx={{ color: '#d4d4d4' }} onClick={logoutHandler}>
                          <ListItemText primary="Logout" />
                        </ListItem> */}
                      </>
                    ) : (
                      <>
                        <Grid display={'flex'}>
                          <img src="/images/logo.png" alt="" height={"70px"} width={"50px"} />
                          <Typography sx={{ color: "#f059f0", fontWeight: 'bold', fontSize: { xs: '14px', sm: '16px', md: '18px', lg: '20px' }, padding: '20px 5px 40px 0px' }}>𝕰𝖈𝖍𝖔𝕾𝖙𝖆𝖈k</Typography>
                        </Grid>

                        <ListItem component={Link} to="/" sx={{ color: '#d4d4d4' }} onClick={() => navigate('/')}>
                          <ListItemText primary="Home" />
                        </ListItem>
                        <ListItem component={Link} to="/about" sx={{ color: '#d4d4d4' }} onClick={() => navigate('/about')}>
                          <ListItemText primary="About" />
                        </ListItem>
                        <ListItem component={Link} to="/blog" sx={{ color: '#d4d4d4' }} onClick={() => navigate('/blog')}>
                          <ListItemText primary="Blog" />
                        </ListItem>
                        <ListItem component={Link} to="/course" sx={{ color: '#d4d4d4' }} onClick={() => navigate('/course')}>
                          <ListItemText primary="Course" />
                        </ListItem>
                        <ListItem component={Link} to="/login" sx={{ color: '#d4d4d4' }} onClick={() => navigate('/login')}>
                          <ListItemText primary="Login" />
                        </ListItem>
                        <ListItem component={Link} to="/register" sx={{ color: '#d4d4d4' }} onClick={() => navigate('/register')}>
                          <ListItemText primary="Register" />
                        </ListItem>
                      </>
                    )}
                  </List>
                </Box>
              </Drawer>
            </>
          ) : (
           
            <List sx={{ display: 'flex', marginLeft: 'auto' }}>
              {auth.user ? (
                <>
                
                {/* <ListItem sx={{ color: '#d4d4d4' }}>
                    <ListItemText primary={`Hello, ${auth.user.name}`} sx={{ color: '#d4d4d4', fontWeight: 'bold', }} />
                  </ListItem> */}
               
                  
                  <ListItem component={Link} to="/" sx={{ color: '#d4d4d4' }} onClick={() => navigate('/')}>
                    <ListItemText primary="Home" />
                  </ListItem>
                  <ListItem component={Link} to="/about" sx={{ color: '#d4d4d4' }} onClick={() => navigate('/about')}>
                    <ListItemText primary="About" />
                  </ListItem>
                  <ListItem component={Link} to="/blog" sx={{ color: '#d4d4d4' }} onClick={() => navigate('/blog')}>
                    <ListItemText primary="Blog" />
                  </ListItem>
                  <ListItem component={Link} to="/course" sx={{ color: '#d4d4d4' }} onClick={() => navigate('/course')}>
                    <ListItemText primary="Course" />
                  </ListItem>
                  <ListItem component={Link} to="/contact" sx={{ color: '#d4d4d4' }} onClick={() => navigate('/contact')}>
                    <ListItemText primary="Contact" />
                  </ListItem>
                  {/* {auth.user && (
                <Avatar sx={{ backgroundColor: '#f059f0', marginLeft: 'auto', marginRight: '10px' }}>
                  {auth.user.name.charAt(0).toUpperCase()}
                </Avatar>
              )} */}
              <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {auth.user && (
                <Avatar sx={{ backgroundColor: '#f059f0', marginLeft: 'auto', marginRight: '10px' }}>
                  {auth.user.name.charAt(0).toUpperCase()}
                </Avatar>
              )}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem ><Link style={{textDecoration:'none',color:'black'}} to={'/profile'}>Profile</Link></MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem onClick={logoutHandler}>Logout</MenuItem>
      </Menu>
    </div>
               
                </>
              ) : (
                <>
                  <ListItem component={Link} to="/" sx={{ color: '#d4d4d4' }} onClick={() => navigate('/')}>
                    <ListItemText primary="Home" />
                  </ListItem>
                  <ListItem component={Link} to="/about" sx={{ color: '#d4d4d4' }} onClick={() => navigate('/about')}>
                    <ListItemText primary="About" />
                  </ListItem>
                  <ListItem component={Link} to="/blog" sx={{ color: '#d4d4d4' }} onClick={() => navigate('/blog')}>
                          <ListItemText primary="Blog" />
                        </ListItem>
                        <ListItem component={Link} to="/course" sx={{ color: '#d4d4d4' }} onClick={() => navigate('/course')}>
                          <ListItemText primary="Course" />
                        </ListItem>
                  <ListItem component={Link} to="/login" sx={{ color: '#d4d4d4' }} onClick={() => navigate('/login')}>
                    <ListItemText primary="Login" />
                  </ListItem>
                  <ListItem component={Link} to="/register" sx={{ color: '#d4d4d4' }} onClick={() => navigate('/register')}>
                    <ListItemText primary="Register" />
                  </ListItem>
                </>
              )}
            </List>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;

