// import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import InputBase from '@mui/material/InputBase';
// import { styled, alpha } from '@mui/material/styles';
// import SearchIcon from '@mui/icons-material/Search';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import { toast } from 'react-toastify';
// import { Modal } from '@mui/material';
// import { useAuth } from '../../Context/Auth';

// const privatePages = ['Home', 'Products', 'Cart'];
// const publicPage = ['Login']
// const settings = ['Profile', 'Settings', 'Logout'];

// const Navbar = () => {

//     const [auth, setAuth] = useAuth()

//     const nav = useNavigate()
//     const handleLogout = () => {
//         localStorage.removeItem('auth')
//         setAuth({
//             ...auth,
//             user: null,
//             token: ""
//         })
//         toast.success('Logout Successfully')
//         nav('/login')
//     }

//     const [anchorElNav, setAnchorElNav] = useState(null);
//     const [anchorElUser, setAnchorElUser] = useState(null);

//     const handleOpenNavMenu = (event) => {
//         setAnchorElNav(event.currentTarget);
//     };
//     const handleOpenUserMenu = (event) => {
//         setAnchorElUser(event.currentTarget);
//     };

//     const handleCloseNavMenu = () => {
//         setAnchorElNav(null);
//     };

//     const handleCloseUserMenu = () => {
//         setAnchorElUser(null);
//     };

//     const [open, setOpen] = useState(false);
//     const handleOpen = () => {
//         setOpen(true);
//     };
//     const handleClose = () => {
//         setOpen(false);
//     };

//     const style = {
//         position: 'absolute',
//         top: '50%',
//         left: '50%',
//         transform: 'translate(-50%, -50%)',
//         width: 400,
//         bgcolor: 'background.paper',
//         border: '2px solid #000',
//         boxShadow: 24,
//         pt: 2,
//         px: 4,
//         pb: 3,
//     };

//     const Search = styled('div')(({ theme }) => ({
//         position: 'relative',
//         borderRadius: theme.shape.borderRadius,
//         backgroundColor: alpha(theme.palette.common.white, 0.15),
//         '&:hover': {
//             backgroundColor: alpha(theme.palette.common.white, 0.25),
//         },
//         marginLeft: 0,
//         width: '100%',
//         [theme.breakpoints.up('sm')]: {
//             marginLeft: theme.spacing(1),
//             width: 'auto',
//         },
//     }));

//     const SearchIconWrapper = styled('div')(({ theme }) => ({
//         padding: theme.spacing(0, 2),
//         height: '100%',
//         position: 'absolute',
//         pointerEvents: 'none',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//     }));

//     const StyledInputBase = styled(InputBase)(({ theme }) => ({
//         color: 'inherit',
//         '& .MuiInputBase-input': {
//             padding: theme.spacing(1, 1, 1, 0),
//             // vertical padding + font size from searchIcon
//             paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//             transition: theme.transitions.create('width'),
//             width: '100%',
//             [theme.breakpoints.up('sm')]: {
//                 width: '12ch',
//                 '&:focus': {
//                     width: '20ch',
//                 },
//             },
//         },
//     }));

//     return (
//         <>
//             <AppBar position="sticky" sx={{ backgroundColor: '#6b03fc' }}>
//                 <Container maxWidth="xl">
//                     <Toolbar disableGutters>
//                         <Avatar src='/images/shopping.png' sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
//                         <Typography
//                             variant="h6"
//                             noWrap
//                             component="a"
//                             href="#"
//                             sx={{
//                                 mr: 2,
//                                 display: { xs: 'none', md: 'flex' },
//                                 fontFamily: 'monospace',
//                                 fontWeight: 700,
//                                 letterSpacing: '.3rem',
//                                 color: 'black',
//                                 textDecoration: 'none',
//                             }}
//                         >
//                             Ecommerce
//                         </Typography>

//                         <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//                             <IconButton
//                                 size="large"
//                                 aria-label="account of current user"
//                                 aria-controls="menu-appbar"
//                                 aria-haspopup="true"
//                                 onClick={handleOpenNavMenu}
//                                 color="inherit"
//                                 sx={{ "&:hover": { backgroundColor: 'grey' } }}
//                             >
//                                 <MenuIcon />
//                             </IconButton>
//                             {
//                                 !auth.user ? null : (
//                                     <Menu
//                                         id="menu-appbar"
//                                         anchorEl={anchorElNav}
//                                         anchorOrigin={{
//                                             vertical: 'bottom',
//                                             horizontal: 'left',
//                                         }}
//                                         keepMounted
//                                         transformOrigin={{
//                                             vertical: 'top',
//                                             horizontal: 'left',
//                                         }}
//                                         open={Boolean(anchorElNav)}
//                                         onClose={handleCloseNavMenu}
//                                         sx={{
//                                             display: { xs: 'block', md: 'none' },
//                                         }}
//                                     >
//                                         {privatePages.map((page)
//  => (
//                                             <MenuItem key={page} onClick={handleCloseNavMenu} sx={{"&:hover": { color: 'brown' }}}>
//                                                 <Typography textAlign="center"
//                                                     onClick={page === 'Home' ? () => nav(`/`) : () => nav(`/${page}`)}>{page}</Typography>
//                                             </MenuItem>
//                                         ))}
//                                     </Menu>
//                                 )
//                             }

//                         </Box>
//                         {/* <Avatar src='/images/shopping.png' sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
//                         <Typography
//                             variant="h5"
//                             noWrap
//                             component="a"
//                             href="#"
//                             sx={{
//                                 mr: 0,
//                                 display: { xs: 'flex', md: 'none' },
//                                 flexGrow: 0,
//                                 fontFamily: 'monospace',
//                                 fontWeight: 700,
//                                 letterSpacing: '.3rem',
//                                 color: 'inherit',
//                                 textDecoration: 'none',
//                             }}
//                         >
//                             Ecommerce
//                         </Typography> */}
//                         <Box sx={{
//                             flexGrow: 1, display: { xs: 'none', md: 'flex' }
//                         }}>
//                             {
//                                 !auth.user ? null : (
//                                     <>
//                                         {
//                                             privatePages.map((page)
//  => (
//                                                 <Button
//                                                     key={page}
//                                                     onClick={handleCloseNavMenu}
//                                                     sx={{
//                                                         my: 2, color: 'white', display: 'block',
//                                                         "&:hover": { color: 'orange' }
//                                                     }}
//                                                     component={Link} to={page === 'Home' ? `/` : `/${page}`}
//                                                 >
//                                                     {page}
//                                                 </Button>
//                                             ))
//                                         }
//                                     </>
//                                 )
//                             }

//                         </Box>

//                         <Search>
//                             <SearchIconWrapper>
//                                 <SearchIcon />
//                             </SearchIconWrapper>
//                             <StyledInputBase
//                                 placeholder="Search…"
//                                 inputProps={{ 'aria-label': 'search' }}
//                             />
//                         </Search>
//                         <Box sx={{ flexGrow: 0 }}>
//                             {
//                                 !auth.user ? (
//                                     <>
//                                         <Button
//                                             onClick={handleCloseNavMenu}
//                                             sx={{ my: 2, color: 'white', display: 'block' }}
//                                             component={Link} to={`/login`}
//                                         >
//                                             {publicPage}
//                                         </Button>
//                                     </>
//                                 ) : (
//                                     <>
//                                         <Tooltip title="Open settings">
//                                             <IconButton onClick={handleOpenUserMenu} sx={{ px: 2 }}>
//                                                 <Avatar sx={{ backgroundColor: 'lightblue' }} alt={auth.user.name.toUpperCase()} src="/static/images/avatar/2.jpg" />
//                                             </IconButton>
//                                         </Tooltip>
//                                         <Menu
//                                             sx={{ mt: '45px' }}
//                                             id="menu-appbar"
//                                             anchorEl={anchorElUser}
//                                             anchorOrigin={{
//                                                 vertical: 'top',
//                                                 horizontal: 'right',
//                                             }}
//                                             keepMounted
//                                             transformOrigin={{
//                                                 vertical: 'top',
//                                                 horizontal: 'right',
//                                             }}
//                                             open={Boolean(anchorElUser)}
//                                             onClose={handleCloseUserMenu}
//                                         >
//                                             {settings.map((setting) => (
//                                                 <MenuItem key={setting} onClick={handleCloseUserMenu} sx={{"&:hover": { color: 'brown' }}}>
//                                                     <Typography textAlign="center"
//                                                         onClick={setting === 'Logout' ? (
//                                                             // ()=>handleLogout()
//                                                             handleOpen
//                                                         ) : () => nav(`/${setting}`)}
//                                                     >
//                                                         {setting}
//                                                     </Typography>
//                                                     <Modal
//                                                         open={open}
//                                                         onClose={handleClose}
//                                                         aria-labelledby="child-modal-title"
//                                                         aria-describedby="child-modal-description"
//                                                     >
//                                                         <Box sx={{ ...style, width: 300, textAlign: 'center' }}>
//                                                             <h2>Waana go away?</h2>
//                                                             <p>Are you sure...you want to logout?</p>
//                                                             <Button onClick={handleLogout}>Logout</Button>
//                                                         </Box>
//                                                     </Modal>

//                                                 </MenuItem>
//                                             ))}
//                                         </Menu>
//                                     </>
//                                 )
//                             }

//                         </Box>
//                     </Toolbar>
//                 </Container>
//             </AppBar>
//         </>
//     )
// }

// export default Navbar