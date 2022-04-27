document.getElementById("onForm").addEventListener("click", (e) => {
    e.preventDefault();
});

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

function scheduleDevice(timeInMills, off, device) {
    var now = new Date();
    if(off == true) {
        if(now.getTime() == timeInMills) {
            deviceOff(device);
        }
    } else if(off != true) {
        if(now.getTime() == timeInMills) {
            deviceOn(device);
        }
    }
}

setInterval(() => {
    scheduleDevice(39600000, false, "5617CC");

}, 1);