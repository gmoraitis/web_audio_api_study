
const audioCtx = new AudioContext(); //___Initializes web audio api
let osc;

function playOsc(oscType, freq) {
    if (osc) {
        osc.stop(audioCtx.currentTime); 
        console.log("Stopped");
        osc = undefined;
    } else {
        osc = audioCtx.createOscillator();
        osc.type = oscType;
        osc.frequency.value = freq; 
        osc.connect(audioCtx.destination); 
        osc.start(audioCtx.currentTime); 
        console.log("Start")
    }
}
document.getElementById('start1').addEventListener("click", function () {
    playOsc("sine", 330);
});

