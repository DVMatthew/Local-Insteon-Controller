function deviceOn(device) {
    $.post("http://192.168.1.26:8080/on", {
        deviceID: `${device}` 
    }, (data, status) => {
        console.log("Data: " + data + "\n Status: " + status);
    })
}


function deviceOff(device) {
    $.post("http://192.168.1.26:8080/off", {
        deviceID: `${device}` 
    }, (data, status) => {
        console.log("Data: " + data + "\n Status: " + status);
    })
}

function scheduleDevice(time, off, device, complete) {
    var hour = new Date().getHours();
    var minute = new Date().getMinutes();
    var second = new Date().getSeconds();

    if(time == `${hour}` + `${minute}` + `${second}`) {
        if(off == true) {
            deviceOff(device);
        } 
        if(off == false) {
            deviceOn(device);
        }
    } else if(time != `${hour}` + `${minute}` + `${second}`) {
        return;
    }

}

setInterval(() => {
    document.getElementById("onForm").addEventListener("click", (e) => {
        e.preventDefault();
    });
    
    // Spotlight
    scheduleDevice(19001, false, "5617CC");
    scheduleDevice(23001, true, "5617CC");

    // Landscape Lights
    scheduleDevice(19002, false, "5618B3");
    scheduleDevice(23002, true, "5618B3");

    // Porch Light
    scheduleDevice(19003, false, "43A5CD");
    scheduleDevice(7003, true, "43A5CD");

    // Shed Outdoor Lights
    scheduleDevice(19004, false, "5103CF");
    scheduleDevice(23004, true, "5103CF");

}, 700);