let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");

setInterval(() => {
    let currentTime = new Date();

    hrs.innerHTML = String(currentTime.getHours()).padStart(2, "0");
    min.innerHTML = String(currentTime.getMinutes()).padStart(2, "0");
    sec.innerHTML = String(currentTime.getSeconds()).padStart(2, "0");

    day.innerHTML = String(currentTime.getDate()).padStart(2, "0");
    month.innerHTML = String(currentTime.getMonth() + 1).padStart(2, "0");
    year.innerHTML = currentTime.getFullYear();

}, 1000);