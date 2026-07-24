<?php
include("config/db_connect.php");
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style/universal.css">
    <link rel="stylesheet" href="style/index.css">
    <script src="scripts/universal.js" defer></script>
    <title>Home</title>
</head>

<body>
    <div class="navclass">
        <div class="navbar" id="navbar">
            <a href="#">HOME</a>
            <button class="dropdown-btn">Bikes
                <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-container">
                <a href="bikes.php?type=Sport">Sport</a>
                <a href="bikes.php?type=Naked">Naked</a>
                <a href="bikes.php?type=Cruiser">Cruiser</a>
                <a href="bikes.php?type=Touring">Touring</a>
                <a href="bikes.php?type=OffRoad">Off-Road</a>
                <a href="bikes.php?type=Dual">Dual</a>
                <a href="bikes.php?type=SportTouring">Sport-Touring</a>
            </div>
            <a href="#">Gear</a>
        </div>
        <button id="toggleNav" class="hidenav">❯</button>
    </div>

    <div>
        <div id="indFirst">
            <h1>MOTORCYCLES</h1>
        </div>
        <div class="indContent">
            <div class="indSection" onclick="location.href='sport.php'">
                <img src="img/sport.jpg" alt="Sport motorcycle">
                <div class="indText">
                    <h2>Sport</h2>
                    <p>Sport motorcycles are built for speed, agility, and performance on paved roads.</p>
                </div>
            </div>

            <div class="indSection alt">
                <img src="img/naked.jpg" alt="Naked motorcycle">
                <div class="indText">
                    <h2>Naked</h2>
                    <p>Versatile street bikes with minimal bodywork, offering a comfortable riding position and
                        responsive performance.</p>
                </div>
            </div>

            <div class="indSection">
                <img src="img/cruiser.png" alt="Cruiser motorcycle">
                <div class="indText">
                    <h2>Cruiser</h2>
                    <p>Relaxed motorcycles featuring low seats, laid-back ergonomics, and strong low-end torque for
                        comfortable rides.</p>
                </div>
            </div>

            <div class="indSection alt">
                <img src="img/touring.png" alt="Touring motorcycle">
                <div class="indText">
                    <h2>Touring</h2>
                    <p>Long-distance motorcycles equipped with comfort features, luggage capacity, and wind protection
                        for extended journeys.</p>
                </div>
            </div>
            <div class="indSection">
                <img src="img/off_road.png" alt="Off-road motorcycle">
                <div class="indText">
                    <h2>Off Road</h2>
                    <p>Lightweight motorcycles built for riding on dirt, mud, sand, and other challenging terrains.</p>
                </div>
            </div>
            <div class="indSection alt">
                <img src="img/dual.png" alt="Dual motorcycle">
                <div class="indText">
                    <h2>Dual</h2>
                    <p>Street-legal motorcycles capable of handling both paved roads and off-road trails with ease.</p>
                </div>
            </div>
            <div class="indSection">
                <img src="img/sport_touring.png" alt="Sport-touring motorcycle">
                <div class="indText">
                    <h2>Sport-Touring</h2>
                    <p>Motorcycles that combine sport bike performance with touring comfort, making them ideal for both
                        spirited riding and long trips.</p>
                </div>
            </div>
            <div class="indContent">
                <div class="indSection" onclick="location.href='helmets.html'">
                    <img src="img/helmet.jpg" alt="Motorcycle helmet">
                    <div class="indText">
                        <h2>Helmets</h2>
                        <p>Protective helmets are essential for rider safety, available in full-face, modular, and
                            open-face designs.</p>
                    </div>
                </div>

                <div class="indSection alt" onclick="location.href='jackets.html'">
                    <img src="img/jacket.jpg" alt="Motorcycle jacket">
                    <div class="indText">
                        <h2>Jackets</h2>
                        <p>Motorcycle jackets combine abrasion resistance with comfort, often featuring armor inserts
                            for added protection.</p>
                    </div>
                </div>

                <div class="indSection" onclick="location.href='gloves.html'">
                    <img src="img/gloves.jpg" alt="Motorcycle gloves">
                    <div class="indText">
                        <h2>Gloves</h2>
                        <p>Gloves protect your hands from impact and weather, while improving grip and control.</p>
                    </div>
                </div>

                <div class="indSection alt" onclick="location.href='boots.html'">
                    <img src="img/boots.jpg" alt="Motorcycle boots">
                    <div class="indText">
                        <h2>Boots</h2>
                        <p>Motorcycle boots provide ankle support, impact protection, and durable soles for safe riding.
                        </p>
                    </div>
                </div>
            </div>
        </div>
</body>

</html>