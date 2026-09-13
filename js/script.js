const citySelect = document.querySelector("#city-select");

const clockElement = document.querySelector("#clock");

const dateElement = document.querySelector("#date");

const timezoneElement = document.querySelector("#timezone");


const cityNames = {

    "Europe/Kyiv": "Київ, Україна",

    "Europe/London": "Лондон, Велика Британія",

    "Europe/Paris": "Париж, Франція",

    "Europe/Vienna": "Відень, Австрія",

    "America/New_York": "Нью-Йорк, США",

    "America/Los_Angeles": "Лос-Анджелес, США",

    "Asia/Tokyo": "Токіо, Японія",

    "Asia/Shanghai": "Шанхай, Китай",

    "Australia/Sydney": "Сідней, Австралія"

};


function updateClock() {

    const timezone = citySelect.value;

    const now = new Date();

    clockElement.textContent = new Intl.DateTimeFormat(
        "uk-UA",
        {
            timeZone: timezone,

            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",

            hour12: false
        }
    ).format(now);

    dateElement.textContent = new Intl.DateTimeFormat(
        "uk-UA",
        {
            timeZone: timezone,

            weekday: "long",

            day: "numeric",

            month: "long",

            year: "numeric"
        }
    ).format(now);
}

citySelect.addEventListener(
    "change",
    updateClock
);

updateClock();

setInterval(
    updateClock,
    1000
);