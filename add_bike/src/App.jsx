import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [engine, setEngine] = useState("");
  const [power, setPower] = useState("");
  const [fuel, setFuel] = useState("");
  const [weight, setWeight] = useState("");
  const [image, setImage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const motorcycle = {
      name: name,
      manufacturer: manufacturer,
      engine_cc: engine,
      power_kw: power,
      fuel: fuel,
      weight: weight,
      image: image
    };

    console.log("Sending:", motorcycle);

    const response = await fetch(
      "http://localhost/motorwebsite/api/add_bike.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(motorcycle)
      }
    );

    const json = await response.json();

    console.log("PHP responded:", json);
  }

  return (
    <div>
      <h1>Add a Motorcycle</h1>

      <form onSubmit={handleSubmit}>

        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div>
          <label>Manufacturer</label>
          <input
            type="text"
            value={manufacturer}
            onChange={(event) => setManufacturer(event.target.value)}
          />
        </div>

        <div>
          <label>Engine (cc)</label>
          <input
            type="number"
            value={engine}
            onChange={(event) => setEngine(event.target.value)}
          />
        </div>

        <div>
          <label>Power (kW)</label>
          <input
            type="number"
            step="0.01"
            value={power}
            onChange={(event) => setPower(event.target.value)}
          />
        </div>

        <div>
          <label>Fuel</label>
          <input
            type="text"
            value={fuel}
            onChange={(event) => setFuel(event.target.value)}
          />
        </div>

        <div>
          <label>Weight (kg)</label>
          <input
            type="number"
            value={weight}
            onChange={(event) => setWeight(event.target.value)}
          />
        </div>

        <div>
          <label>Image</label>
          <input
            type="text"
            value={image}
            onChange={(event) => setImage(event.target.value)}
          />
        </div>

        <button type="submit">
          Add Motorcycle
        </button>

      </form>

    </div>
  );
}

export default App;