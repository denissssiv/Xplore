let destinations = [
    {
        title: "Enjoy the beauty of Vienna",
        subtitle: "Vienna, Austria",
        rating: 4.8,
        img: "../images/vienna.webp",
        url: "vienna.html"
    },
    {
        title: "The heart of Czech Republic",
        subtitle: "Prague, Czech Republic",
        rating: 4.7,
        img: "../images/prague.jpg",
        url: "prague.html"
    },
    {
        title: "Take a break in nature",
        subtitle: "Kemer, Turkey",
        rating: 4.9,
        img: "../images/kemer.jpg",
        url: "kemer.html"
    },
    {
        title: "Visit the Famous Santorini",
        subtitle: "Santorini, Greece",
        rating: 4.7,
        img: "../images/greece.webp",
        url: "greece.html"
    },
    {
        title: "See the history with your eyes",
        subtitle: "Rome, Italy",
        rating: 4.5,
        img: "../images/rome.webp",
        url: "rome.html"
    },
    {
        title: "A breath of fresh Air",
        subtitle: "Bukovel, Ukraine",
        rating: 4.9,
        img: "../images/bukovel.jpeg",
        url: "bukovel.html"
    },
    {
        title: "The City of Wonders",
        subtitle: "Dubai, UAE",
        rating: 5,
        img: "../images/dubai.jpg",
        url: "dubai.html"
    },
    {
        title: "Where History Meets Modernity",
        subtitle: "Berlin, Germany",
        rating: 4.7,
        img: "../images/berlin.jpg",
        url: "berlin.html"
    },
    {
        title: "The Vibrant Heart of Spain",
        subtitle: "Madrid,Spain",
        rating: 4.3,
        img: "../images/madrid.jpg",
        url: "madrid.html"
    },
];

function showDestinations() {
    let html = "";

    let div = document.getElementById('destinations');

    for (let i = 0; i < destinations.length; i++) {

        let destination = destinations[i];

        html += `
        <div class="destination">
                    <a href="">
                     <img class="destination-img" src="${destination.img}" />
                            <h1>${destination.title}</h1>
                    </a>
                        <h3 class="sub-title">${destination.subtitle}</h3>
                        <div class="rating"><i class="fa-solid fa-star"></i>${destination.rating}</div>
         </div>
        `

    }

    div.innerHTML = html;   
}
showDestinations();