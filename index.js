

const hr = document.getElementById("h");
const min = document.getElementById("m");
const sec = document.getElementById("s");

setInterval(() =>{
    var date = new Date()
    h = date.getHours()*30;
    m = date.getMinutes()*6;
    s = date.getSeconds()*6;

    hr.style.transform = `rotateZ(${(h)+m/12}deg)`;
    min.style.transform = `rotateZ(${m}deg)`;
    sec.style.transform = `rotateZ(${s}deg)`;
})