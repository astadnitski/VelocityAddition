window.onload = scriptMain;

function generateOutput() {
    
    var c = 299792458;
    var u = document.getElementById("in1").value * 299792458;
    var v = document.getElementById("in2").value * 299792458;
    
    var w = document.getElementById("lblock");
    w.innerHTML = (u + v)/(1 + (u*v)/(299792458*299792458));
    
}