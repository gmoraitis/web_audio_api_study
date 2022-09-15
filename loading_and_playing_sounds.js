
const audioCtx2 = new AudioContext(); //___Initializes web audio api

let osc2;

function playOsc(oscType, freq) {
    if (osc2) {
        osc2.stop(audioCtx2.currentTime); 
        console.log("Stopped");
        osc2 = undefined;
    } else {
        osc2 = audioCtx2.createOscillator();
        osc2.type = oscType;
        osc2.frequency.value = freq; 

        osc2.connect(audioCtx2.destination); 
        osc2.start(audioCtx2.currentTime); 
        console.log("Start")
    }
}
document.getElementById('start2').addEventListener("click", function () {
    playOsc("sine", 660);
});