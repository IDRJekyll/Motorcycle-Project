<?php
include("config/db_connect.php")
    ?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style/bikestyle.css">
    <link rel="stylesheet" href="style/universal.css">
    <script src="scripts/universal.js" defer></script>
    <title>Bikes</title>
</head>

<body>

    <div class="navclass">
        <div class="navbar" id="navbar">
            <a href="index.php">HOME</a>
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
    <div class="searchBar">
        <input type="text" id="searchInput" placeholder="Search by name">

        <select id="manufacturerFilter">
            <option value="">All</option>
            <option value="Yamaha">Yamaha</option>
            <option value="Harley-Davidson">Harley-Davidson</option>
            <option value="Honda">Honda</option>
            <option value="Kawasaki">Kawasaki</option>
        </select>

        <select id="ccFilter">
            <option value="">Sort by CC</option>
            <option value="asc">Lowest → Highest</option>
            <option value="desc">Highest → Lowest</option>
            <option value="A1">≤125 cc (A1)</option>
            <option value="A2">126–600 cc (A2)</option>
            <option value="A">>600 cc (A)</option>
        </select>
        <select id="typeFilter">
            <option value="">All Types</option>
            <option value="Sport">Sport</option>
            <option value="Naked">Naked</option>
            <option value="Cruiser">Cruiser</option>
            <option value="Touring">Touring</option>
            <option value="Off-Road">Off-Road</option>
            <option value="Dual">Dual</option>
            <option value="Sport-Touring">Sport-Touring</option>
        </select>
    </div>

    <div class="specPage" id="specPage">

        <div class="specSection" data-name="Yamaha R1" data-manufacturer="Yamaha" data-cc="998" data-type="Sport">
            <img src="img/YamahaR1.png" alt="Yamaha R1">
            <div class="specText">
                <h2>Yamaha YZF-R1</h2>
                <p><strong>Manufacturer:</strong> Yamaha</p>
                <p><strong>Power:</strong> 147,1 kW (200,0 PS) @ 13.500 rpm</p>
                <p><strong>Engine Size:</strong> 998 cc</p>
                <p><strong>Fuel:</strong> Petrol</p>
                <p><strong>Type:</strong> Sport</p>
                <p><strong>Weight:</strong> 210 kg</p>
            </div>
        </div>

        <div class="specSection" data-name="Ninja400" data-manufacturer="Kawasaki" data-cc="399" data-type="Naked">
            <img src="img/Ninja400.png" alt="Ninja 400">
            <div class="specText">
                <h2>Ninja 400</h2>
                <p><strong>Manufacturer:</strong> Kawasaki</p>
                <p><strong>Power:</strong> 33.4–36.5 kW (44.8–49 hp)</p>
                <p><strong>Engine Size:</strong> 399 cc</p>
                <p><strong>Fuel:</strong> Petrol</p>
                <p><strong>Type:</strong> Sport</p>
                <p><strong>Weight:</strong> 300 kg</p>
            </div>
        </div>
</body>

</html>