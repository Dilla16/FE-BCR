import React, { useState } from "react";
import { Container, Grid, TextField, Button, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { PeopleAlt } from "@mui/icons-material";

const SearchBar = () => {
  const [formData, setFormData] = useState({
    driverType: "",
    date: "",
    pickupTime: "",
    passengerCount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSearch = () => {
    console.log(formData);
    // Lakukan operasi pencarian berdasarkan formData
  };

  return (
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
              height={100}
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
              onClick={handleSearch}
              width={20}
            >
              Cari Mobil
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SearchBar;
