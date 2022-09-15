// var contextClass = (window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.oAudioContext || window.msAudioContext);
// if (contextClass) {
//     // Web Audio API is available. 
//     var context = new contextClass();
// } else {
//     // Web Audio API is not available. Ask the user to use a supported browser.
// }


// document.getElementById('start').addEventListener('click', function () {

//     // Setup all nodes
//     let osc = context.createOscillator();
//     osc.type = "sine";
//     osc.connect(context.destination);
//     osc.start(context.currentTime);
// });

// Make the stop button

const audioContext = new AudioContext(); //___Initializes web audio api
let osc;

function playOsc(oscType, freq) {
    if (osc) {
        osc.stop(audioContext.currentTime); 
        console.log("Stopped");
        osc = undefined;
    } else {
        osc = audioContext.createOscillator();
        osc.type = oscType;
        osc.frequency.value = freq; 
        osc.connect(audioContext.destination); 
        osc.start(audioContext.currentTime); 
        console.log("Start")
    }
}
document.getElementById('start').addEventListener("click", function () {
    playOsc("sine", 330);
});

