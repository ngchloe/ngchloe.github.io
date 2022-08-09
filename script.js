var feetSqm = 0.0929;

function show(){
    var occupantLoadFactor = document.getElementById("typeSpace");
        toCount = parseInt(occupantLoadFactor.value);
}  

function calculate() {
    var areaInput = parseInt(document.getElementById('in').value),
        calculatedOccupants = Math.ceil(areaInput / (toCount*feetSqm));
        document.getElementById('out').innerHTML = calculatedOccupants;
}

function expand1() {
  var x = document.getElementById("divExpand1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function expand2() {
  var x = document.getElementById("divExpand2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function expand3() {
  var x = document.getElementById("divExpand3");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function equation41() {
    var GLA = parseInt(document.getElementById('in41').value),
        equationOLF = 0.00007*GLA +25*0.0929;
        document.getElementById('out41').innerHTML = equationOLF.toFixed(2);
}

