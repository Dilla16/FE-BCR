import { useEffect, useState } from "react";
import { Grid, Container, Box, TextField, Button, Typography } from "@mui/material";
import axios from "axios";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Logo from "./assets/image/Logo.png";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginDone, setIsLoginDone] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const onSubmit = async () => {
    try {
      // setIsLoginDone(false);
      // setErrMsg("");
      const payLoad = {
        email,
        password,
      };
      const res = await axios.post("http://localhost:8000/login", payLoad);
      localStorage.setItem("token", res.data.data.token);
      console.log(res.data);
      setEmail("");
      setPassword("");
      navigate("/home");
    } catch (err) {
      console.log(err);
      setErrMsg(err.response?.data?.message || "Login Failed - Please Try Again");
      // } finally {
      //   setIsLoginDone(true);
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/home");
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Grid
          container
          justify="center"
          alignItems="center"
          style={{ minHeight: "100vh" }}
        >
          <Grid
            item
            xs={10}
            lg={6}
            id="left-side"
          >
            <Box p={4}>
              <Box
                mt={5}
                mb={3}
              >
                <img
                  src={Logo}
                  alt="Logo"
                />
              </Box>
              <Typography
                variant="h5"
                gutterBottom
                mb={4}
              >
                Welcome Back!
              </Typography>
              <form>
                <Box mb={3}>
                  <TextField
                    type="email"
                    id="email"
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                  />
                </Box>
                <Box mb={3}>
                  <TextField
                    type="password"
                    id="password"
                    label="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    fullWidth
                  />
                </Box>
                <Button
                  onClick={onSubmit}
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Login
                </Button>
              </form>
              <Typography
                variant="body2"
                className="mt-4 text-center"
              >
                Doesn't have an account? <a href="#">Sign Up here</a>
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            lg={6}
            mr={0}
            id="right-side"
          >
            <Box textAlign="center">
              <img
                src="https://images.unsplash.com/photo-1620157206955-5d8ebca0df95?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Car Rental"
                className=" fixed -top-56 w-1/2"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default Login;
