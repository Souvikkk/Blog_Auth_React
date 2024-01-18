import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useAuth } from "../Contex/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const publicPages = ["Home", "About", "Blog", "Course", "Login", "register"];
const privatePages = ["Home", "About", "Blog", "Course", "Contact"];
const settings = ["Profile", "Logout"];

function ResponsiveAppBar() {
  const [auth, setAuth] = useAuth();
  const nav = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    Swal.fire({
      title: "Do you want to Logout ?",
      html: "<span style='color: white;'>Hope You Enjoyed !</span>",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#1f292e",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes,Logout!",

      customClass: {
        popup: "custom-popup-class",
        title: "custom-title-class",
        content: "custom-content-class",
        confirmButton: "custom-confirm-button-class",
        cancelButton: "custom-cancel-button-class",

        customClass: {
          popup: "custom-popup-class",
          title: "custom-title-class",
          content: "custom-content-class",
        },
      },
    }).then((result) => {
      if (result.isConfirmed) {
        setAuth({
          ...auth,
          user: null,
          token: "",
        });

        localStorage.removeItem("auth");
        nav("/login");
        Swal.fire({
          title: "Logged Out!",
          // text: 'You have been logged out successfully.',
          html: "<span style='color: white;'>You have been logged out successfully.!</span> <br><span style='color: white;'>Good Bye!</span>",
          // html: "<span style='color: white;'>Good Bye!</span>",
          icon: "success",
          customClass: {
            popup: "custom-popup-class",
            title: "custom-title-class",
            content: "custom-content-class",
            confirmButton: "custom-confirm-button-class",
            cancelButton: "custom-cancel-button-class",

            customClass: {
              popup: "custom-popup-class",
              title: "custom-title-class",
              content: "custom-content-class",
            },
          },
        });
      }
    });
  };
  const handleMenuItemClick = (setting) => {
    setAnchorElUser(null);

    if (setting === "Logout") {
      handleLogout();
    }
  };
  console.log('auth',auth?.user);
  return (
    <AppBar position="static" sx={{ backgroundColor: "#1f292e" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Avatar
            src="/images/logo.png"
            alt=""
            height="70px"
            width="50px"
            sx={{
              display: { xs: "none", md: "flex" },
              marginRight: 1,
            }}
          />
          <Typography
            // variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              textDecoration: "none",
              color: "#f059f0",
              fontSize: { xs: '14px', sm: '16px', md: '18px', lg: '20px' },
              flexGrow: 1,
            }}
          >
            𝕰𝖈𝖍𝖔𝕾𝖙𝖆𝖈k
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            {!auth.user ? (
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
               <Avatar
            src="/images/logo.png"
            alt=""
            height="70px"
            width="50px"
            sx={{
              // display: { xs: "none", md: "flex" },
              marginRight: 1,
            }}
          />
          <Typography
            // variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              // display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              textDecoration: "none",
              color: "#f059f0",
              // fontSize: { xs: '14px', sm: '16px', md: '18px', lg: '20px' },
              flexGrow: 1,
            }}
          >
            𝕰𝖈𝖍𝖔𝕾𝖙𝖆𝖈k
          </Typography>
                {publicPages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Link
                      to={page === "Home" ? "/" : `/${page.toLowerCase()}`}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <Typography textAlign="center">{page}</Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            ) : (
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
               <Avatar
            src="/images/logo.png"
            alt=""
            height="70px"
            width="50px"
            sx={{
              // display: { xs: "none", md: "flex" },
              marginRight: 1,
            }}
          />
          <Typography
            // variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              // display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              textDecoration: "none",
              color: "#f059f0",
              // fontSize: { xs: '14px', sm: '16px', md: '18px', lg: '20px' },
              flexGrow: 1,
            }}
          >
            𝕰𝖈𝖍𝖔𝕾𝖙𝖆𝖈k
          </Typography>
                {privatePages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Link
                      to={page === "Home" ? "/" : `/${page.toLowerCase()}`}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <Typography textAlign="center">{page}</Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            )}
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          {/* <img
            src="/images/logo.png"
            alt=""
            height="70px"
            width="50px"
            style={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          /> */}
          <Typography
            // variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              textDecoration: "none",
              color: "#f059f0",
              fontSize: { xs: '10px', sm: '16px', md: '18px', lg: '20px' }
            }}
          >
            𝕰𝖈𝖍𝖔𝕾𝖙𝖆𝖈k
          </Typography>
          {!auth.user ? (
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {publicPages.map((page) => (
                <Button
                  key={page}
                  component={Link}
                  to={page === "Home" ? "/" : `/${page.toLowerCase()}`}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          ) : (
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {privatePages.map((page) => (
                <Button
                  key={page}
                  component={Link}
                  to={page === "Home" ? "/" : `/${page.toLowerCase()}`}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          )}

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                 
                 src={`https://restapinodejs.onrender.com/${auth?.user?.photo}`}
                  alt={auth.user?.name}
                
                  sx={{ marginRight: "10px", bgcolor: "#f059f0" }}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting}
                  onClick={() => handleMenuItemClick(setting)}
                >
                 {setting === "Profile" ? (
                        <Link
                          to={`/profile`}
                          style={{ textDecoration: "none", color: "inherit" }}
                        >
                          <Typography textAlign="center">{setting}</Typography>
                        </Link>
                      ) : (
                        <Typography textAlign="center">{setting}</Typography>
                      )}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
