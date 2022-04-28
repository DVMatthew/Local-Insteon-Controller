var express = require('express');
var router = express.Router();
var axios = require('axios');
const { route } = require('express/lib/application');

const HUB_URL = "http://192.168.1.6:25105";

// const DEVICE_ID = "4343FF";

const HUB_TOKEN = 'TXVnZ2xlc3c6bEZLalFFQWI=\r\n';

router.get("/", (req, res) => {
    res.render("index");
});

router.post("/", (req, res) => {
    var ON_LINK = `${HUB_URL}/3?0262${DEVICE_ID}0F11FF=I=3`;
    var OFF_LINK = `${HUB_URL}/3?0262${DEVICE_ID}0F13FF=I=3`;

    axios.post(ON_LINK)
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });
});

router.get("/command", (req, res) => {
    res.render("command");
})

router.post("/spotOn", (req, res) => {
    var DEVICE_ID = "4343FF"
    var ON_LINK = `${HUB_URL}/3?0262${DEVICE_ID}0F11FF=I=3`;

    const time = new Date().toLocaleTimeString();

    const options =  {
        headers: {'Authorization': 'Basic TXVnZ2xlc3c6bEZLalFFQWI='}
    }

    axios.post(ON_LINK, {}, options).then((response) => {
        console.log(`Time Stamp: ${time} \nDevice: ${DEVICE_ID} is now ON`);
        res.redirect("/");
    })
    .catch((err) => {
        console.log(err);
    });
});

router.post("/spotOff", (req, res) => {
    var DEVICE_ID = "4343FF"
    var ON_LINK = `${HUB_URL}/3?0262${DEVICE_ID}0F13FF=I=3`;

    const time = new Date().toLocaleTimeString();

    const options =  {
        headers: {'Authorization': 'Basic TXVnZ2xlc3c6bEZLalFFQWI='}
    }

    axios.post(ON_LINK, {}, options).then((response) => {
        console.log(`Time Stamp: ${time} \nDevice: ${DEVICE_ID} is now ON`);
        res.redirect("/");
    })
    .catch((err) => {
        console.log(err);
    });
});

router.post("/command", (req, res) => {
    var DEVICE_ID = req.body.deviceID;
    res.render("command")

    // var DEVICE_ID = req.body.deviceID;
    var DIM_LINK = `${HUB_URL}/3?02624343FF0F119F=I=3`;
    var BEEP_LINK = `${HUB_URL}/3?0262${DEVICE_ID}0F30FF=I=3`;
    /* 
    
    /3?0262 (Send Command to a Insteon device)
    4343FF (Insteon device ID)
    0F (Constant Flag Bytes)
    0F11 (F is stands for the X in a byte code 0(x)11) (This command is for dimming)
    9F (This sets the dim level)

    */

    const options = {
        headers: {'Authorization': 'Basic TXVnZ2xlc3c6bEZLalFFQWI='}
    }

    axios.post(BEEP_LINK, {}, options)
    .then(response => {
        console.log(response)
    })
    .catch((err) => {
        console.log(err);
    });

});

router.post("/dim", (req, res) => {
    // var DEVICE_ID = req.body.deviceID;
    var DIM_LINK = `${HUB_URL}/3?02624343FF0F119F=I=3`;

    const options = {
        headers: {'Authorization': 'Basic TXVnZ2xlc3c6bEZLalFFQWI='}
    }

    axios.post(DIM_LINK, {}, options)
    .then(response => {
        console.log(response)
    })
    .catch((err) => {
        console.log(err);
    });

});

router.post("/off", (req, res) => {2
    var DEVICE_ID = req.body.deviceID;
    var OFF_LINK = `${HUB_URL}/3?0262${DEVICE_ID}0F13FF=I=3`;

    const options =  {
        headers: {'Authorization': 'Basic TXVnZ2xlc3c6bEZLalFFQWI='}
    }

    const time = new Date().toLocaleTimeString();

    axios.post(OFF_LINK, {}, options)
    .then((response) => {
        console.log(`Time Stamp: ${time} \nDevice: ${DEVICE_ID} is now OFF`)
        res.redirect("/");
    })
    .catch((err) => {
        console.log(err);
    });

})

router.post("/on", (req, res) => {
    var DEVICE_ID = req.body.deviceID;
    var ON_LINK = `${HUB_URL}/3?0262${DEVICE_ID}0F11FF=I=3`;

    const time = new Date().toLocaleTimeString();

    const options =  {
        headers: {'Authorization': 'Basic TXVnZ2xlc3c6bEZLalFFQWI='}
    }

    axios.post(ON_LINK, {}, options).then((response) => {
        console.log(`Time Stamp: ${time} \nDevice: ${DEVICE_ID} is now ON`);
        res.redirect("/");
    })
    .catch((err) => {
        console.log(err);
    });


})
module.exports = router;