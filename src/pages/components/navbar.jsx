import React, { useState } from "react";
import LogoCarRental from "./../../assets/image/Logo.png";
import { AppBar, Toolbar, Container, Box, Typography, Button, Grid } from "@mui/material";
import { Menu, Close } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function Navbar(props) {
  const [isSideMenuOpen, setMenu] = useState(false);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const onLogout = () => {
    if (token) {
      localStorage.removeItem("token");
      navigate("/login");
    }
  };
  const menus = [
    {
      link: "",
      label: "Our Services",
    },
    { link: "", label: "Why Us" },
    { link: "", label: "Testimonial" },
    {
      link: "",
      label: "FAQ",
    },
  ];

  return (
    <div>
      {/* NAVBAR */}
      <AppBar
        position="static"
        style={{ backgroundColor: "#F1F3FF", maxWidth: "100%" }}
        elevation={0}
      >
        <Container style={{ maxWidth: "90%" }}>
          <Toolbar>
            <Box sx={{ flexGrow: 1 }}>
              <a
                href="/home"
                cursor="pointer"
              >
                <img
                  alt="logo-car-rental"
                  src={LogoCarRental}
                  className="w-34"
                />
              </a>
            </Box>
            <Box sx={{ display: { xs: "block", lg: "none" } }}>
              <Menu
                onClick={() => setMenu(true)}
                color="primary"
                sx={{ fontSize: 30 }}
              />
            </Box>
            <Box
              sx={{
                display: { xs: "none", lg: "block" },
                "& a": {
                  marginRight: 3,
                  textDecoration: "none",
                  color: "text.primary",
                  "&:hover": {
                    color: "primary.main",
                  },
                },
              }}
            >
              {menus.map((val, index) => (
                <a
                  key={index}
                  href={val.link}
                >
                  {val.label}
                </a>
              ))}
              <Button
                color="success"
                variant="contained"
                size="medium"
                onClick={onLogout}
              >
                Logout
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Box
        className={isSideMenuOpen ? "translate-x-0" : "translate-x-full"}
        sx={{
          position: "fixed",
          top: 0,
          right: 0,
          height: "100%",
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(2px)",
          transition: "transform 0.3s ease-in-out",
          zIndex: 1000,
          display: { xs: "block", lg: "none" },
        }}
      >
        {/* <Container sx={{ height: "100%" }}> */}
        <Grid
          container
          direction="column"
          spacing={3}
          sx={{ width: "40%", height: "100%", marginLeft: "auto", right: 0, backgroundColor: "white" }}
        >
          <Grid item>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 3, paddingRight: 2 }}>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold" }}
              >
                BCR
              </Typography>
              <Close
                onClick={() => setMenu(false)}
                color="primary"
                sx={{ fontSize: 30, cursor: "pointer" }}
              />
            </Box>
          </Grid>
          {menus.map((val, index) => (
            <Grid
              item
              key={index}
            >
              <a
                href={val.link}
                className="text-lg"
              >
                {val.label}
              </a>
            </Grid>
          ))}
          <Grid item>
            <Button
              color="success"
              variant="contained"
              size="medium"
            >
              Log Out
            </Button>
          </Grid>
        </Grid>
        {/* </Container> */}
      </Box>
    </div>
  );
}

export default Navbar;
