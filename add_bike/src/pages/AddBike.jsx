import { useState } from "react";
import Motorcycle from "../models/Motorcycle";
import "../App.css"

function AddBike() {

    const [name, setName] = useState("");
    const [manufacturer, setManufacturer] = useState("");
    const [engine, setEngine] = useState("");
    const [power, setPower] = useState("");
    const [fuel, setFuel] = useState("");
    const [weight, setWeight] = useState("");
    const [image, setImage] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();

        setMessage("");
        setError("");

        if (!name || !manufacturer || !engine || !power || !fuel || !weight) {
            setError("All fields are required.")
            return;
        }


        const bike = new Motorcycle(
            name,
            manufacturer,
            Number(engine),
            Number(power),
            fuel,
            Number(weight),
            image
        );

        try {

            const response = await fetch(
                "http://localhost/motorwebsite/api/add_bike.php",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify(bike)
                }
            );

            if (!response.ok) {
                throw new error(`Server error: ${response.status}`);
            }

            const data = await response.json();

            if (data.success) {

                setMessage("Motorcycle added successfully!");

                setName("");
                setManufacturer("");
                setEngine("");
                setPower("");
                setFuel("");
                setWeight("");
                setImage("");

            } else {

                setError("Failed to add motorcycle.");

            }

        } catch (error) {

            console.error(error);

            setError("Something went wrong.");

        }
    }

    return (
        <div className="addBikePage">
            <h1>Add Motorcycle</h1>

            {message && <p>{message}</p>}
            {error && <p>{error}</p>}

            <form className="addBikeForm" onSubmit={handleSubmit}>
                <div className="formGroup">
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>

                <div className="formGroup">
                    <label>Manufacturer:</label>
                    <input
                        type="text"
                        value={manufacturer}
                        onChange={(event) => setManufacturer(event.target.value)}
                    />
                </div>

                <div className="formGroup">
                    <label>Engine (cc):</label>
                    <input
                        type="number"
                        value={engine}
                        onChange={(event) => setEngine(event.target.value)}
                    />
                </div>

                <div className="formGroup">
                    <label>Power (kW):</label>
                    <input
                        type="number"
                        step="0.01"
                        value={power}
                        onChange={(event) => setPower(event.target.value)}
                    />
                </div>

                <div className="formGroup">
                    <label>Fuel:</label>
                    <input
                        type="text"
                        value={fuel}
                        onChange={(event) => setFuel(event.target.value)}
                    />
                </div>

                <div className="formGroup">
                    <label>Weight (kg):</label>
                    <input
                        type="number"
                        value={weight}
                        onChange={(event) => setWeight(event.target.value)}
                    />
                </div>

                <div className="formGroup">
                    <label>Image:</label>
                    <input
                        type="text"
                        value={image}
                        onChange={(event) => setImage(event.target.value)}
                    />
                </div>

                <button type="submit">
                    Add Motorcycle
                </button>
            </form >
        </div >
    );
}

export default AddBike;