function deviceOn(device) {
    $.post("http://192.168.1.47:8081/on", {
        deviceID: `${device}` 
    }, (data, status) => {
        console.log("Data: " + data + "\n Status: " + status);
    })
}


function deviceOff(device) {
    $.post("http://192.168.1.47:8081/off", {
        deviceID: `${device}` 
    }, (data, status) => {
        console.log("Data: " + data + "\n Status: " + status);
    })
}

function scheduleDevice(time, off, device) {
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


function scheduleAllDevices() {

    }


setInterval(() => {
    // document.getElementById("onForm").addEventListener("click", (e) => {
    //     e.preventDefault();
    // });
    
    console.log("Service Running...");

    // Spotlight
    scheduleDevice(1901, false, "5617CC");
    scheduleDevice(22101, true, "5617CC");

    // Landscape Lights
    scheduleDevice(1201, false, "5618B3");
    scheduleDevice(22102, true, "5618B3");

    // Porch Light
    scheduleDevice(1901, false, "43A5CD");
    scheduleDevice(702, true, "43A5CD");

    // Shed Outdoor Lights
    scheduleDevice(20214, false, "5103CF");
    scheduleDevice(2304, true, "5103CF");

    // Matt's Room Lights
    scheduleDevice(9301, false, "4343FF");
    scheduleDevice(1001, true, "4343FF");


}, 700);