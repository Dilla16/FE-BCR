import { useContext, useState } from "react";
import { Button, Container, CssBaseline, Typography, TextField } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Toggle from "./pages/components/Toggle";
// import { useContext } from "react";

function Image(prop) {
  // const { nightMode, day, night, handleToggle } = useContext(LayoutContext);
  // const mode = nightMode ? night : day;
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  return (
    <div>
      <Container
        component="main"
        maxWidth="xs"
      >
        <CssBaseline />

        <Toggle />

        <div>
          <Typography
            component="h1"
            variant="h5"
          >
            Upload Image
          </Typography>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: "none" }}
            id="image-upload-input"
          />
          <label htmlFor="image-upload-input">
            <Button
              variant="contained"
              component="span"
              startIcon={<CloudUploadIcon />}
            >
              Choose Image
            </Button>
          </label>
          {selectedImage && (
            <div>
              <img
                src={selectedImage}
                alt="Selected"
                style={{ maxWidth: "100%", maxHeight: "300px" }}
              />
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
export default Image;
