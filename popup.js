
// access the power button from the html
const powerBtn = document.getElementById("powerBtn")

// access the variable indicating whether the extension is on or off from chrome storage
// chrome.storage.sync.get('extensionIsOn', function(status){
chrome.storage.sync.get({extensionIsOn: true}, function(status){

    // switch the power button to be on or off depending on whether or not the extension is on or off
    powerBtn.checked = status.extensionIsOn;

    // check for when the power button is clicked
    powerBtn.addEventListener("click", () => {

        // autoclose the popup window (extension interface) as soon as user clicks power on or off
        window.close();

        // set the value of the extensionIsOn equal to whether or not the power button is on or off
        status.extensionIsOn = powerBtn.checked;
        
        // save the new value of extensionIsOn back to chrome storage
        chrome.storage.sync.set({'extensionIsOn': status.extensionIsOn});

        /**
        if the extension is off after the power button has been clicked, then save this to a variable
        so that Content.js can reload the website
        */
        if (!status.extensionIsOn) {
            chrome.storage.sync.set({'justTurnedOff': true});
        }

    });

})