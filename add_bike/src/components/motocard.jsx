function motocard({ bike }) {

    return (
        <div className="specSection">

            <img
                src={`http://localhost/motorwebsite/img/${bike.image}`}
                alt={bike.name}
            />

            <div className="specText">

                <h2>{bike.name}</h2>

                <p>Manufacturer: {bike.manufacturer}</p>
                <p>Engine: {bike.engine_cc} cc</p>
                <p>Power: {bike.power_kw} kW</p>
                <p>Fuel: {bike.fuel}</p>
                <p>Weight: {bike.weight} kg</p>

            </div>

        </div>
    );
}

export default motocard;