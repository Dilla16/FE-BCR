import { createContext, useState } from "react";

export const LayoutContext = createContext();

const LayoutContextProvider = (props) => {
  const [data, setData] = useState({
    nightMode: false,
    day: {
      color: "#000",
      background: "red",
    },
    night: {
      color: "#fff",
      background: "#000",
    },
  });

  const handleToggle = () => {
    setData((prevState) => ({
      ...prevState,
      nightMode: !data.nightMode,
    }));
  };
  return <LayoutContext.Provider value={{ ...data, handleToggle }}>{props.children}</LayoutContext.Provider>;
};

export default LayoutContextProvider;
