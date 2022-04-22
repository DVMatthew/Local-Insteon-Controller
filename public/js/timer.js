document.getElementById("onForm").addEventListener("click", (e) => {
    e.preventDefault();
});


function spotLightOff() {
    $.post("http://192.168.1.26:8080/off", {
        deviceID: "5617CC" 
    }, (data, status) => {
        console.log("Data: " + data + "\n Status: " + status);
    })
};


function runOnInterval(interval_in_ms, function_to_run, only_run_once = false){
    setTimeout(()=>{
        function_to_run();
        if (!only_run_once) runOnInterval(...arguments);
    }, interval_in_ms - ((Date.now() - (new Date().getTimezoneOffset() * 6e4)) % interval_in_ms));
}

// runOnInterval(60000, spotLightOff, true);
