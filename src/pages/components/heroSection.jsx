import React from "react";
import { Container, Grid, Typography, Button } from "@mui/material";
import HeaderImage from "./../../assets/image/HeaderImage.png";

const HeroSection = () => {
  return (
    <div className="w-full ">
      <Container style={{ backgroundColor: "#F1F3FF", maxWidth: "100%", ms: 0 }}>
        <Grid
          maxWidth="90%"
          margin={"auto"}
          sx={{ display: "flex", alignItems: "center", pt: 5 }}
        >
          <Grid
            container
            spacing={10}
          >
            <Grid
              item
              xs={12}
              sm={6}
            >
              <div className="mt-4">
                <Typography
                  variant="h4"
                  component="h1"
                  fontWeight="bold"
                >
                  Sewa & Rental Mobil Terbaik di kawasan Batam
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ mt: 2 }}
                >
                  Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas <br /> terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
                </Typography>
                <Button
                  variant="contained"
                  color="success"
                  size="large"
                  sx={{ mt: 2, mb: 4, width: 200 }}
                  href="/search"
                >
                  Mulai Sewa Mobil
                </Button>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
            >
              <img
                alt="image-header"
                src={HeaderImage}
              />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default HeroSection;
