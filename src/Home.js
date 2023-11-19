import React from "react";
import { Container, Typography, Grid, Button, Accordion, AccordionSummary, AccordionDetails, Box } from "@mui/material";
import IconCheck from "./assets/icon/IconCheck.png";
import IconThumb from "./assets/icon/IconComplete.png";
import IconPrice from "./assets/icon/IconPrice.png";
import Icon24Hrs from "./assets/icon/Icon24Hrs.png";
import IconProfesional from "./assets/icon/IconProfesional.png";
import ImgFeatures from "./assets/image/ImgService.png";
import { FaAngleDown } from "react-icons/fa";
import HeroSection from "./pages/components/heroSection";
import Carousel from "./pages/components/carousel";

const App = () => {
  const features = ["Sewa Mobil Dengan Supir di Bali 12 Jam", "Sewa Mobil Lepas Kunci di Bali 24 Jam", "Sewa Mobil Jangka Panjang Bulanan", "Gratis Antar - Jemput Mobil di Bandara", "Layanan Airport Transfer / Drop In Out"];
  const whyUs = [
    {
      icon: IconThumb,
      label: "Mobil Lengkap",
      description: "Tersedia banyak pilihan mobil, kondisi masih baru, bersih, dan terawat",
    },
    {
      icon: IconPrice,
      label: "Harga Murah",
      description: "Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain",
    },
    {
      icon: Icon24Hrs,
      label: "Layanan 24 Jam",
      description: "Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu",
    },
    {
      icon: IconProfesional,
      label: "Sopir Profesional",
      description: "Sopir yang profesional, berpengalaman, jujur, ramah, dan selalu tepat waktu",
    },
  ];
  const FAQ = ["Apa saja syarat yang dibutuhkan?", "Berapa hari minimal sewa mobil lepas kunci?", "Berapa hari sebelumnya sebaiknya booking sewa mobil?", "Apakah Ada biaya antar-jemput?", "Bagaimana jika terjadi kecelakaan"];

  return (
    <div>
      {/* NAVBAR */}
      <HeroSection />
      {/* END OF NAVBAR */}

      {/* FEATURES SECTION */}
      <Container
        style={{ maxWidth: "90%" }}
        sx={{
          display: "flex",
          alignItems: "center",
          mt: 10,
        }}
      >
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            item
            xs={12}
            sm={6}
            order={{ xs: 2, sm: 1 }}
          >
            <img
              alt="image-Features"
              src={ImgFeatures}
              style={{ maxWidth: "100%" }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            order={{ xs: 2, sm: 1 }}
          >
            <Box className="space-y-6">
              <Typography
                variant="h4"
                fontWeight="bold"
                mt={4}
              >
                Best Car Rental for any kind of trip in Batam!
              </Typography>
              <Typography variant="body2">
                Sewa mobil di Batam bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.
              </Typography>
              {features.map((val, index) => (
                <div
                  className="flex space-x-3"
                  key={index}
                >
                  <img
                    src={IconCheck}
                    alt="Features-Image"
                  />
                  <div className="text-sm">{val}</div>
                </div>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
      {/* END OF FEATURES SECTION */}

      {/* BENEFIT SECTION */}
      <Container
        style={{ maxWidth: "90%" }}
        sx={{ mt: 10, mb: 6 }}
      >
        <div className="space-y-3">
          <Typography
            variant="h4"
            fontWeight="bold"
          >
            Why Us?
          </Typography>
          <Typography>Mengapa harus pilih Binar Car Rental?</Typography>
        </div>
        <Grid
          container
          spacing={3}
        >
          {whyUs.map((val, index) => (
            <Grid
              item
              xs={12}
              sm={12}
              md={3}
              key={index}
            >
              <div className="border border-gray-300 rounded-md p-4 h-44">
                <img
                  src={val.icon}
                  alt={val.label}
                  className="pb-2"
                />
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  paddingBottom={1}
                >
                  {val.label}
                </Typography>
                <Typography variant="body2">{val.description}</Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* END OF BENEFIT SECTION */}

      {/* WHY US SECTION */}
      <Container
        style={{ maxWidth: "90%" }}
        sx={{ mt: 10, mb: 6 }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
        >
          Testimonial
        </Typography>
        <Typography textAlign="center">Berbagai review positif dari para pelanggan kami</Typography>

        {/* <Carousel /> */}
      </Container>
      {/* END OF WHY US SECTION */}

      {/* SECTION */}
      <Container
        style={{ maxWidth: "90%" }}
        sx={{ mt: 10, mb: 6 }}
      >
        <div className="container max-w-5xl mx-auto bg-blue-800 rounded-xl p-20">
          <Typography
            variant="h4"
            fontWeight="bold"
            textAlign="center"
            color={"white"}
            pt={4}
          >
            Sewa Mobil di Batam Sekarang
          </Typography>
          <Typography
            textAlign="center"
            color={"white"}
            pt={4}
            px={3}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
          <Button
            variant="contained"
            color="success"
            href="/search"
            sx={{ display: "block", margin: "auto", mt: 4, mb: 2, width: 200, fontSize: 14 }}
          >
            Mulai Sewa Mobil
          </Button>
        </div>
      </Container>
      {/* END OF SECTION */}

      {/* FAQ SECTION */}
      <Container
        style={{ maxWidth: "90%" }}
        sx={{
          display: "flex",
          alignItems: "center",
          mt: 10,
        }}
      >
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="center"
          alignItems=""
        >
          <Grid
            item
            xs={12}
            sm={6}
            order={{ xs: 2, sm: 1 }}
          >
            <div className="space-y-3">
              <Typography
                variant="h4"
                fontWeight="bold"
                mb={2}
              >
                Frequently Asked Question
              </Typography>
              <Typography fontLight>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Typography>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            order={{ xs: 2, sm: 1 }}
          >
            <Box className="space-y-6">
              {FAQ.map((val, index) => (
                <Accordion key={index}>
                  <AccordionSummary expandIcon={<FaAngleDown />}>
                    <Typography>{val}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
      {/* END OF FAQ SECTION */}
    </div>
  );
};

export default App;
