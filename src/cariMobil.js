import { useEffect, useState } from "react";

import axios from "axios";

function Seacrh(prop) {
  const [cars, setCars] = useState([]);
  // const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const getListCars = async () => {
    try {
      const data = await axios.get("http://localhost:8000/cars", { headers: { Authorization: `Bearer ${token}` } });
      console.log(data);
      setCars(data.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getListCars();
  }, []);

  return (
    <div>
      <div className="">
        <header className="">
          <h1 className="text-center">Get List Feed</h1>
          {cars.map((item) => (
            <div>{item.name}</div>
          ))}
        </header>
      </div>
    </div>
  );
}
export default Seacrh;
