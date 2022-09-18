import audioCtx from './script.js';
// const audioCtx2 = new AudioContext(); //___Initializes web audio api

let osc2;

function playOsc(oscType, freq) {
    if (osc2) {
        osc2.stop(audioCtx.currentTime); 
        console.log("Stopped");
        osc2 = undefined;
    } else {
        osc2 = audioCtx.createOscillator();
        osc2.type = oscType;
        osc2.frequency.value = freq; 

        osc2.connect(audioCtx.destination); 
        osc2.start(audioCtx.currentTime); 
        console.log("Start")
    }
}
document.getElementById('start2').addEventListener("click", function () {
    playOsc("sine", 660);
});


console.log(audioCtx);