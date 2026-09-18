import { useEffect, useState } from "react";

import MotoCard from "./components/motocard";
import Navbar from "./components/navbar";
import AddBike from "./pages/AddBike";

import "./App.css";

function App() {

  const [bikes, setBikes] = useState([]);
  const [search, setSearch] = useState("");


  useEffect(() => {
    fetch("http://localhost/motorwebsite/api/get_bikes.php")
      .then(response => response.json())
      .then(data => {

        console.log("Bikes received:", data);

        setBikes(data);
      });
  }, []);


  const filterBikes = bikes.filter((bike) =>
    bike.name.toLowerCase().includes(search.toLowerCase()) ||
    bike.manufacturer.toLowerCase().includes(search.toLowerCase())
  );

  const path = window.location.pathname;

  if (path === "/add-bike") {
    return (
      <>
        <Navbar />
        <AddBike />
      </>
    );
  }

  return (

    <>

      <Navbar />
      <div className="specPage">
        <h1>Motorcycles</h1>
        <div className="searchBar">
          <input
            type="text"
            placeholder="Search Bikes"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>

        {
          filterBikes.map((bike) => (
            <MotoCard
              key={bike.bikeID}
              bike={bike}
            />
          ))
        }

      </div>
    </>
  );
}


export default App;