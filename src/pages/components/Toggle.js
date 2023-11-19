import { Button } from "@mui/material";
import { useContext } from "react";
import { LayoutContext } from "../../context/layoutContext";

const Toggle = () => {
  const { nightMode, day, night, handleToggle } = useContext(LayoutContext);
  const mode = nightMode ? night : day;

  const onToggle = () => {
    handleToggle();
  };
  return (
    <Button
      variant="outlined"
      onClick={onToggle}
      sx={{ color: mode.color }}
    >
      {nightMode ? "Turn On Day Mode" : "Turn On Night Mode"}
    </Button>
  );
};

export default Toggle;
