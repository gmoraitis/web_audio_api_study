var contextClass = (window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.oAudioContext || window.msAudioContext);
if (contextClass) {
    // Web Audio API is available. 
    var context = new contextClass();
} else {
    // Web Audio API is not available. Ask the user to use a supported browser.
}


document.getElementById('start').addEventListener('click', function () {

    // Setup all nodes
    let osc = context.createOscillator();
    osc.type = "sine";
    osc.connect(context.destination);
    osc.start(context.currentTime);
});

// Make the stop button