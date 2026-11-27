const currentYear = new Date().getFullYear();

document.getElementById("currentyear").textContent = currentYear;

document.getElementById("lastModified").textContent = document.lastModified;

const menuButton = document.querySelector("#menu-button");

const navigation = document.querySelector("#navigation");

menuButton.addEventListener("click", () => {

    navigation.classList.toggle("open");

    if (navigation.classList.contains("open")) {
        menuButton.textContent = "✕";
        menuButton.setAttribute("aria-label", "Close navigation menu");
        menuButton.setAttribute("aria-expanded", "true");
    } else {
        menuButton.textContent = "☰";
        menuButton.setAttribute("aria-label", "Open navigation menu");
        menuButton.setAttribute("aria-expanded", "false");
    }

});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple/aba-nigeria-temple-5087.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/manti-utah-temple/manti-utah-temple-45008.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/payson-utah-temple/payson-utah-temple-11087.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/yigo-guam-temple/yigo-guam-temple-26502.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/washington-d.c.-temple/washington-d.c.-temple-26454.jpg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/lima-peru-temple/lima-peru-temple-9681.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/mexico-city-mexico-temple/mexico-city-mexico-temple-4057.jpg"
    },
    {
        templeName: "Kansas City Missouri",
        location: "Kansas City, Missouri, United States",
        dedicated: "2012, May, 6",
        area: 32000,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/kansas-city-missouri-temple/kansas-city-missouri-temple-3929.jpg"
    },
    {
        templeName: "Oklahoma City Oklahoma",
        location: "Oklahoma City, Oklahoma, United States",
        dedicated: "2000, July, 30",
        area: 10890,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/oklahoma-city-oklahoma-temple/oklahoma-city-oklahoma-temple-4650.jpg"
    },
    {
        templeName: "Wichita Kansas",
        location: "Wichita, Kansas, United States",
        dedicated: "2026, November, 1",
        area: 9950,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/wichita-kansas-temple/wichita-kansas-temple-74829.jpg"
    },

];

const templesContainer = document.querySelector("#temples-container");

function displayTemples(templeList) {

    templesContainer.innerHTML = "";

    templeList.forEach((temple) => {

        const card = document.createElement("figure");

        card.innerHTML = `
            <h2>${temple.templeName}</h2>

            <p><strong>Location:</strong> ${temple.location}</p>

            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>

            <p><strong>Area:</strong> ${temple.area.toLocaleString()} square feet</p>

            <img src="${temple.imageUrl}"
                 alt="${temple.templeName}"
                 loading="lazy">
        `;

        templesContainer.appendChild(card);

    });

}

displayTemples(temples);

function filterTemples(filter) {

    let filteredTemples = temples;

    if (filter === "old") {
        filteredTemples = temples.filter((temple) => {
            return parseInt(temple.dedicated) < 1900;
        });
    }

    else if (filter === "new") {
        filteredTemples = temples.filter((temple) => {
            return parseInt(temple.dedicated) > 2000;
        });
    }

    else if (filter === "large") {
        filteredTemples = temples.filter((temple) => {
            return temple.area > 90000;
        });
    }

    else if (filter === "small") {
        filteredTemples = temples.filter((temple) => {
            return temple.area < 10000;
        });
    }

    displayTemples(filteredTemples);

    const pageTitle = filter === "all"
        ? "Home"
        : filter.charAt(0).toUpperCase() + filter.slice(1);

    document.querySelector("#page-title").textContent = pageTitle;

}

const filterLinks = document.querySelectorAll("#navigation a");

filterLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

        event.preventDefault();

        const filter = link.dataset.filter;

        filterTemples(filter);

        navigation.classList.remove("open");

        menuButton.textContent = "☰";
        menuButton.setAttribute("aria-label", "Open navigation menu");
        menuButton.setAttribute("aria-expanded", "false");

    });

});