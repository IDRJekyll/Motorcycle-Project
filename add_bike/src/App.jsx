import { useEffect, useState } from "react";
import MotoCard from "./components/motocard";
import "./App.css";

function App() {
  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    fetch("http://localhost/motorwebsite/api/get_bikes.php")
      .then(response => response.json())
      .then(data => {
        console.log("Bikes received:", data);
        setBikes(data);
      });
  }, []);

  return (
    <div className="specPage">
      <h1>Motorcycles</h1>

      {
        bikes.map((bike) => (
          <MotoCard
            key={bike.bikeID}
            bike={bike}
          />
        ))
      }
    </div>
  );
}

export default App;