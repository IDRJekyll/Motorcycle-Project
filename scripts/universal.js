// Dropdown toggle for sidebar menu
var dropdown = document.getElementsByClassName("dropdown-btn");
for (let i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}

// Navbar toggle
const toggleBtn = document.getElementById("toggleNav");
const navbar = document.getElementById("navbar");

toggleBtn.addEventListener("click", () => {
    navbar.classList.toggle("hidden");
    toggleBtn.textContent = navbar.classList.contains("hidden") ? "❯" : "❮";
});

// Search bar filters
const searchInput = document.getElementById("searchInput");
const manufacturerFilter = document.getElementById("manufacturerFilter");
const ccFilter = document.getElementById("ccFilter");
const typeFilter = document.getElementById("typeFilter");
const specPage = document.getElementById("specPage");

function filterBikes() {
    const searchTerm = searchInput.value.toLowerCase();
    const manufacturer = manufacturerFilter.value;
    const ccOption = ccFilter.value;
    const type = typeFilter.value;
    const sections = Array.from(specPage.getElementsByClassName("specSection"));

    sections.forEach(section => {
        const name = section.dataset.name.toLowerCase();
        const manu = section.dataset.manufacturer;
        const cc = parseInt(section.dataset.cc);
        const bikeType = section.dataset.type;

        const matchesSearch = name.includes(searchTerm);
        const matchesManufacturer = manufacturer === "" || manu === manufacturer;
        const matchesType = type === "" || bikeType === type;

        let matchesCategory = true;
        if (ccOption === "A1") matchesCategory = cc <= 125;
        if (ccOption === "A2") matchesCategory = cc > 125 && cc <= 600;
        if (ccOption === "A") matchesCategory = cc > 600;

        if (matchesSearch && matchesManufacturer && matchesCategory && matchesType) {
            section.style.display = "flex";
        } else {
            section.style.display = "none";
        }
    });

    // sort by cc
    if (ccOption === "asc" || ccOption === "desc") {
        const visibleSections = sections.filter(s => s.style.display !== "none");
        visibleSections.sort((a, b) => {
            const ccA = parseInt(a.dataset.cc);
            const ccB = parseInt(b.dataset.cc);
            return ccOption === "asc" ? ccA - ccB : ccB - ccA;
        });
        visibleSections.forEach(section => specPage.appendChild(section));
    }
}

// Event listeners
searchInput.addEventListener("input", filterBikes);
manufacturerFilter.addEventListener("change", filterBikes);
ccFilter.addEventListener("change", filterBikes);
typeFilter.addEventListener("change", filterBikes);

// Pre-select type from URL query string
window.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const type = params.get("type");
    if (type) {
        typeFilter.value = type;
        filterBikes(); // run filter immediately
    }
});
