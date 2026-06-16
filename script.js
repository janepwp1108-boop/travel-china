
function updateClock(){

    const now = new Date();

    // เพิ่ม 1 ชั่วโมง
    now.setHours(now.getHours() + 1);

    const time =
        now.getHours().toString().padStart(2,'0')
        + ":" +
        now.getMinutes().toString().padStart(2,'0')
        + ":" +
        now.getSeconds().toString().padStart(2,'0');

    document.getElementById("clock").innerHTML = time;
}

setInterval(updateClock,1000);
updateClock();


