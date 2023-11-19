import React, { useEffect, useState } from "react";
import { Container, Grid, TextField, Button, FormControl, InputLabel, Select, MenuItem, Card, CardContent, CardMedia, Typography, Box, Paper, IconButton } from "@mui/material";
// import { Container, Grid, Card, CardContent, CardMedia, Typography, Button, Box, Paper, IconButton } from "@mui/material";
import { DriveEta, Settings, People } from "@mui/icons-material";
import { PeopleAlt } from "@mui/icons-material";
import HeroSection from "./pages/components/heroSection";
import axios from "axios";

const Search = () => {
  const token = localStorage.getItem("token");
  const [cars, setCars] = useState([]);
  const [formData, setFormData] = useState({
    driverType: "self", // Set default value if needed
    date: "",
    pickupTime: "",
    passengerCount: "", // Set default value if needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  //   const onSubmit = async () => {
  //     try {
  //       const { driverType, date, pickupTime, passengerCount } = formData;
  //       console.log(driverType, date, pickupTime, passengerCount);
  //       const fullDateTime = new Date(`${date} ${pickupTime}`);
  //       console.log(fullDateTime);

  //       //   const condition = (i) => i.available_at && i.capacity >= passengerCount && new Date(i.available_at).getTime() >= fullDateTime;
  //       //   console.log("Condition : ", condition);

  //       //   const carsData = await axios.get("https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json");
  //       const carsData = await axios.get("http://localhost:8000/cars", { headers: { Authorization: `Bearer ${token}` } });
  //       console.log(carsData);

  //       const filteredCars = carsData.data.data.data.filter((cars) => {
  //         return cars.available_at && cars.capacity >= passengerCount && new Date(cars.available_at).getTime() >= fullDateTime;
  //       });
  //       console.log("hasilnya:", filteredCars);

  //       setCars(filteredCars);
  //     } catch (err) {
  //       console.log("errornya:", err);
  //     }
  //   };
  const onSubmit = async () => {
    try {
      const { driverType, date, pickupTime, passengerCount } = formData;
      console.log(driverType, date, pickupTime, passengerCount);
      const fullDateTime = new Date(`${date} ${pickupTime}`);
      console.log(fullDateTime);

      const carsData = await axios.get("http://localhost:8000/cars", { headers: { Authorization: `Bearer ${token}` } });
      console.log("API response:", carsData);

      if (carsData?.data) {
        const data = carsData.data;
        console.log("Data property:", data);

        if (data.data && Array.isArray(data.data)) {
          const filteredCars = data.data.filter((cars) => {
            return cars.available_at && cars.capacity >= passengerCount && new Date(cars.available_at).getTime() >= fullDateTime;
          });
          console.log("hasilnya:", filteredCars);
          setCars(filteredCars);
        } else {
          console.log("Unexpected data structure in the API response: data.data is not an array.");
        }
      } else {
        console.log("No data property in the API response.");
      }
    } catch (err) {
      console.error("errornya:", err);
    }
  };

  useEffect(() => {
    onSubmit();
  }, []);

  return (
    <div>
      <HeroSection />
      <Container sx={{ width: "100%", zIndex: 1, mt: -5, mb: 10, position: "relative" }}>
        <Grid
          sx={{
            width: "90%",
            backgroundColor: "white",
            borderRadius: "8px",
            boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 150,
            mx: "auto",
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <Grid
              item
              xs={12}
              sm={2}
            >
              <FormControl fullWidth>
                <InputLabel>Tipe Driver</InputLabel>
                <Select
                  name="driverType"
                  value={formData.driverType}
                  onChange={handleChange}
                  label="Tipe Driver"
                >
                  <MenuItem value="self">Sendiri</MenuItem>
                  <MenuItem value="driver">Dengan Sopir</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid
              item
              xs={12}
              sm={2}
            >
              <TextField
                name="date"
                label="Tanggal"
                type="date"
                InputLabelProps={{ shrink: true }}
                fullWidth
                value={formData.date}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={2}
            >
              <TextField
                name="pickupTime"
                label="Waktu Jemput/Ambil"
                type="time"
                InputLabelProps={{ shrink: true }}
                fullWidth
                value={formData.pickupTime}
                onChange={handleChange}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={2.5}
            >
              <TextField
                name="passengerCount"
                label="Jumlah Penumpang"
                type="number"
                fullWidth
                value={formData.passengerCount}
                onChange={handleChange}
                InputProps={{
                  endAdornment: <PeopleAlt />,
                }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={2}
            >
              <Button
                variant="contained"
                color="primary"
                onClick={onSubmit}
              >
                Cari Mobil
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <div>
        <Container sx={{ width: "100%" }}>
          <Grid
            container
            spacing={2}
          >
            {cars.map((item) => (
              <Grid
                item
                key={item.id}
                xs={12}
                sm={6}
                md={4}
                lg={3}
              >
                <Card
                  sx={{
                    height: "480px",
                    width: "100%",
                    borderRadius: "8px",
                    background: "var(--neutral-01, #FFF)",
                    boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.15)",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="100%"
                    image={item.image}
                    alt="Car"
                    style={{ position: "relative", width: "270px", height: "160px", paddingLeft: 8, paddingTop: 8 }}
                  />
                  <CardContent className=" space-y-4">
                    <Typography
                      variant="h6"
                      gutterBottom
                    >
                      {item.name}
                    </Typography>
                    <Typography variant="subtitle1">Rent per day: {item.rent_per_day}</Typography>
                    <Typography variant="body2">Description: {item.description}</Typography>
                    <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                      <People fontSize="small" />
                      <Typography variant="body2">Capacity: {item.capacity}</Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <DriveEta fontSize="small" />
                      <Typography variant="body2">Type: {item.type}</Typography>
                    </Box>
                    <Button
                      variant="contained"
                      color="success"
                      fullWidth
                      sx={{ top: "auto", bottom: 0 }}
                    >
                      Pilih Mobil
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default Search;
