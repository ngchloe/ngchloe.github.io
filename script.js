var feetSqm = 0.0929;
var calculatedOccupants = 0;

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

var calculatedOccupants2 = Math.ceil(calculatedOccupants/2);

function hide() {
    document.getElementById("assemblyClass").style.display = "none";
    document.getElementById("buildingClass").style.display = "none";   
    document.getElementById("educationalClass").style.display = "none"; 
    document.getElementById("factoryClass").style.display = "none";
    document.getElementById("institutionalClass").style.display = "none";
    document.getElementById("mercantileClass").style.display = "none";
    document.getElementById("residentialClass").style.display = "none";  
    document.getElementById("storageClass").style.display = "none";
}    

function calculate() {
  var a1 = document.getElementById('a1').selected; //theater
  var a2 = document.getElementById('a2').selected; //nightclub
  var a3 = document.getElementById('a3').selected; //restaurants
  var a4 = document.getElementById('a4').selected; //casino  
  var a5 = document.getElementById('a5').selected; //auditorium
  var a6 = document.getElementById('a6').selected; //passenger terminals
  var a7 = document.getElementById('a7').selected; //places of worship
  var a8 = document.getElementById('a8').selected; //coliseums
  var a9 = document.getElementById('a9').selected; //stadiums  
  var b1 = document.getElementById('b1').selected; //buildings
  var e1 = document.getElementById('e1').selected; //educational facilities
  var f1 = document.getElementById('f1').selected; //factory and industrial
  var i1 = document.getElementById('i1').selected; //custodial care
  var i2 = document.getElementById('i2').selected; //med care recipients in hospitals or nursing homes 
  var i3 = document.getElementById('i3').selected; //employees in hospitals or nursing homes 
  var i4 = document.getElementById('i4').selected; //visitors in hospitals or nursing homes 
  var i5 = document.getElementById('i5').selected; //prisons
  var i6 = document.getElementById('i6').selected; //reformatories 
  var i7 = document.getElementById('i7').selected; //employees in reformatories  
  var i8 = document.getElementById('i8').selected; //day care   
  var m1 = document.getElementById('m1').selected; //retail stores etc 
  var r1 = document.getElementById('r1').selected; //hotels, motels etc
  var r2 = document.getElementById('r2').selected; //dormitories    
  var r3 = document.getElementById('r3').selected; //apartments   
  var r4 = document.getElementById('r4').selected; //one- and two- family dwellings  
  var r5 = document.getElementById('r5').selected; //congregate living   
  var s1 = document.getElementById('s1').selected; //structures for storage  
  
  var wcMale = 0;
  var wcFemale = 0;
  var wcTotal = 0;
  var lavMale = 0;    
  var lavFemale = 0;  
  var lavTotal = 0;
  var bathtub = 0;    
  var drinkingFountain = 0;    
  var other = 0;    
   
  //a1 = theater
  if (a1 == true) {
  	wcMale = Math.ceil(calculatedOccupants2/125);
  	wcFemale = Math.ceil(calculatedOccupants2/65);
    lavTotal = Math.ceil(calculatedOccupants/200); //total, so use calculatedOccupants
	bathtub = "-"; 
	drinkingFountain = Math.ceil(calculatedOccupants/500);
    other = "1 service sink";
  } 
  //a2 = nightclub
  else if(a2 == true) {
  	wcMale = Math.ceil(calculatedOccupants2/40);
  	wcFemale = Math.ceil(calculatedOccupants2/40);
    lavTotal = Math.ceil(calculatedOccupants/75); //total, so use calculatedOccupants
	bathtub = "-"; 
	drinkingFountain = Math.ceil(calculatedOccupants/500);
    other = "1 service sink";
  } 
  //a3 = restaurants
  else if(a3 == true) {
  	wcMale = Math.ceil(calculatedOccupants2/75);
  	wcFemale = Math.ceil(calculatedOccupants2/75);
    lavTotal = Math.ceil(calculatedOccupants/200); //total, so use calculatedOccupants
	bathtub = "-"; 
	drinkingFountain = Math.ceil(calculatedOccupants/500);
    other = "1 service sink";
  } 
  //a4 = casino
  else if(a4 == true) {
    if (calculatedOccupants2 <= 400) {
    	wcMale = Math.ceil(calculatedOccupants2/100);
        wcFemale = Math.ceil(calculatedOccupants2/50);
    }
    else {
    	wcMale = 4 + Math.ceil((calculatedOccupants2 - 400)/250);
        wcFemale = 8 + Math.ceil((calculatedOccupants2 - 400)/150);
    } 
    if (calculatedOccupants <= 750) {
    	lavTotal = Math.ceil(calculatedOccupants/250); //total, so use calculatedOccupants
    } 
    else {
    	lavTotal = 3 + Math.ceil((calculatedOccupants - 750)/500); //total, so use calculatedOccupants
    }    
	bathtub = "-"; 
	drinkingFountain = Math.ceil(calculatedOccupants/1000);
    other = "1 service sink";
  } 
  //a5 = auditorium
  else if(a5 == true) {  
    wcMale = Math.ceil(calculatedOccupants2/125);
  	wcFemale = Math.ceil(calculatedOccupants2/65);
    lavTotal = Math.ceil(calculatedOccupants/200); //total, so use calculatedOccupants
	bathtub = "-"; 
	drinkingFountain = Math.ceil(calculatedOccupants/500);
    other = "1 service sink";  
  }
  //a6 = passenger terminals
  else if(a6 == true) {  
    wcMale = Math.ceil(calculatedOccupants2/500);
  	wcFemale = Math.ceil(calculatedOccupants2/500);
    lavTotal = Math.ceil(calculatedOccupants/750); //total, so use calculatedOccupants
	bathtub = "-"; 
	drinkingFountain = Math.ceil(calculatedOccupants/1000);
    other = "1 service sink";  
  }  
  //a7 = places of worship
  else if(a7 == true) {  
    wcMale = Math.ceil(calculatedOccupants2/150);
  	wcFemale = Math.ceil(calculatedOccupants2/75);
    lavTotal = Math.ceil(calculatedOccupants/200); //total, so use calculatedOccupants
	bathtub = "-"; 
	drinkingFountain = Math.ceil(calculatedOccupants/1000);
    other = "1 service sink";  
  }    
  //a8 = coliseums
  else if(a8 == true) { 
  	var mOccupants = calculatedOccupants2;
    var fOccupants = calculatedOccupants2;
    //for the boys
    if (mOccupants <= 1500) {
    	wcMale = Math.ceil(mOccupants/75);
    }
    else {
    	wcMale = 20 + Math.ceil((mOccupants - 1500)/120);
    } 
    //for the girls
    if (fOccupants <= 1520) {
    	wcFemale = Math.ceil(fOccupants/40);
    }
    else {
    	wcFemale = 38 + Math.ceil((fOccupants - 1520)/60);
    }    
    lavMale = Math.ceil(calculatedOccupants2/200);
    lavFemale = Math.ceil(calculatedOccupants2/150);
	bathtub = "-"; 
	drinkingFountain = Math.ceil(calculatedOccupants/1000);
    other = "1 service sink";  
  }     
  //a9 = stadiums
  else if(a9 == true) { 
  	var mOccupants = calculatedOccupants2;
    var fOccupants = calculatedOccupants2;
    //for the boys
    if (mOccupants <= 1500) {
    	wcMale = Math.ceil(mOccupants/75);
    }
    else {
    	wcMale = 20 + Math.ceil((mOccupants - 1500)/120);
    } 
    if (fOccupants <= 1520) {
    	wcFemale = Math.ceil(fOccupants/40);
    }
    else {
    	wcFemale = 38 + Math.ceil((fOccupants - 1520)/60);
    }    
    lavMale = Math.ceil(calculatedOccupants2/200);
    lavFemale = Math.ceil(calculatedOccupants2/150);
	bathtub = "-"; 
	drinkingFountain = Math.ceil(calculatedOccupants/1000);
    other = "1 service sink";  
  } 
  //b1 = buildings
  else if(b1 == true) {
    if (calculatedOccupants <= 50) { 
    	wcTotal = Math.ceil(calculatedOccupants/25); //total, so use calculatedOccupants
    }
    else {
    	wcTotal = 2 + Math.ceil((calculatedOccupants - 50)/50); //total, so use calculatedOccupants
    } 
    if (calculatedOccupants <= 80) {
    	lavTotal = Math.ceil(calculatedOccupants/40); //total, so use calculatedOccupants
    } 
    else {
    	lavTotal = 2 + Math.ceil((calculatedOccupants - 80)/80); //total, so use calculatedOccupants 
	bathtub = "-"; 
	drinkingFountain = Math.ceil(calculatedOccupants/100);
    other = "1 service sink";
    }
  }  
  //e1 = educational facilities
  else if (e1 == true) {
    wcTotal = Math.ceil(calculatedOccupants/50); //total, so use calculatedOccupants
    lavTotal = Math.ceil(calculatedOccupants/50); //total, so use calculatedOccupants
	bathtub = "-"; 
	drinkingFountain = Math.ceil(calculatedOccupants/100); //total, so use calculatedOccupants
    other = "1 service sink";  
  }   
  //f1 = custodial care
  else if (f1 == true) {
    wcTotal = Math.ceil(calculatedOccupants/100); //total, so use calculatedOccupants
    lavTotal = Math.ceil(calculatedOccupants/100); //total, so use calculatedOccupants
	bathtub = Math.ceil(calculatedOccupants/8); //total, so use calculatedOccupants
	drinkingFountain = Math.ceil(calculatedOccupants/100); //total, so use calculatedOccupants
    other = "1 service sink";  
  }    
  //i2 = med care recipients
  else if (i2 == true) {
    wcTotal = "1 per room"; 
    lavTotal = "1 per room"; 
	bathtub = Math.ceil(calculatedOccupants/15); //total, so use calculatedOccupants 
	drinkingFountain = Math.ceil(calculatedOccupants/100); //total, so use calculatedOccupants
    other = "1 service sink";  
  }    
  //i3 = employees in hospitals or nursing homes
  else if (i3 == true) {
    wcTotal = Math.ceil(calculatedOccupants/25); //total, so use calculatedOccupants
    lavTotal = Math.ceil(calculatedOccupants/35); //total, so use calculatedOccupants
	bathtub = "-";  
	drinkingFountain = Math.ceil(calculatedOccupants/100); //total, so use calculatedOccupants
    other = "-";  
  }     
  //i4 = visitors in hospitals or nursing homes
  else if (i4 == true) {
    wcTotal = Math.ceil(calculatedOccupants/75); //total, so use calculatedOccupants
    lavTotal = Math.ceil(calculatedOccupants/100); //total, so use calculatedOccupants
	bathtub = "-";  
	drinkingFountain = Math.ceil(calculatedOccupants/500); //total, so use calculatedOccupants
    other = "-";  
  }     
  //i5 = prisons
  else if (i5 == true) {
    wcTotal = "1 per cell";
    lavTotal = "1 per cell";
	bathtub = Math.ceil(calculatedOccupants/15); //total, so use calculatedOccupants 
	drinkingFountain = Math.ceil(calculatedOccupants/100); //total, so use calculatedOccupants
    other = "1 service sink";  
  }     
  //i6 = reformatories
  else if (i6 == true) {
    wcTotal = Math.ceil(calculatedOccupants/15); //total, so use calculatedOccupants
    lavTotal = Math.ceil(calculatedOccupants/15); //total, so use calculatedOccupants
	bathtub = Math.ceil(calculatedOccupants/15); //total, so use calculatedOccupants 
	drinkingFountain = Math.ceil(calculatedOccupants/100); //total, so use calculatedOccupants
    other = "1 service sink";  
  }     
  //i7 = employees in reformatories
  else if (i7 == true) {
    wcTotal = Math.ceil(calculatedOccupants/25); //total, so use calculatedOccupants
    lavTotal = Math.ceil(calculatedOccupants/35); //total, so use calculatedOccupants
	bathtub = "-"; 
	drinkingFountain = Math.ceil(calculatedOccupants/100); //total, so use calculatedOccupants
    other = "1 service sink";  
  }     
  //i8 = day care
  else if (i8 == true) {
    wcTotal = Math.ceil(calculatedOccupants/15); //total, so use calculatedOccupants
    lavTotal = Math.ceil(calculatedOccupants/15); //total, so use calculatedOccupants
	bathtub = 1; //total, so use calculatedOccupants 
	drinkingFountain = Math.ceil(calculatedOccupants/100); //total, so use calculatedOccupants
    other = "1 service sink";  
  }  
  //m1 = retail stores etc 
  else if (m1 == true) {
    wcTotal = Math.ceil(calculatedOccupants/500); //total, so use calculatedOccupants
    lavTotal = Math.ceil(calculatedOccupants/750); //total, so use calculatedOccupants
	bathtub = "-"; 
	drinkingFountain = Math.ceil(calculatedOccupants/1000); //total, so use calculatedOccupants
    other = "1 service sink";  
  }  
  //r1 = hotels, motels etc 
  else if (r1 == true) {
    wcTotal = "1 per sleeping unit";
    lavTotal = "1 per sleeping unit";
	bathtub = "1 per sleeping unit";
	drinkingFountain = "-"; 
    other = "1 service sink";  
  }    
  //r2 = dormitories 
  else if (r2 == true) {
    wcTotal = Math.ceil(calculatedOccupants/10); //total, so use calculatedOccupants
    lavTotal = Math.ceil(calculatedOccupants/10); //total, so use calculatedOccupants
	bathtub = Math.ceil(calculatedOccupants/8); //total, so use calculatedOccupants 
	drinkingFountain = Math.ceil(calculatedOccupants/100); //total, so use calculatedOccupants
    other = "1 service sink";  
  }    
  //r3 = apartments 
  else if (r3 == true) {
    wcTotal = "1 per dwelling unit";
    lavTotal = "1 per dwelling unit";
	bathtub = "1 per dwelling unit";
	drinkingFountain = "-"; 
    other = "1 kitchen sink per dwelling unit; 1 automatic clothes washer connection per 20 dwelling units";  
  }   
  //r4 = one- and two- family dwellings
  else if (r4 == true) {
    wcTotal = "1 per dwelling unit";
    lavTotal = Math.ceil(calculatedOccupants/10); //total, so use calculatedOccupants
	bathtub = "1 per dwelling unit";
	drinkingFountain = "-"; 
    other = "1 kitchen sink per dwelling unit; 1 automatic clothes washer connection per 1 dwelling unit";  
  }     
  //r5 = congregate living 
  else if (r5 == true) {
    wcTotal = Math.ceil(calculatedOccupants/10); //total, so use calculatedOccupants
    lavTotal = Math.ceil(calculatedOccupants/10); //total, so use calculatedOccupants
	bathtub = Math.ceil(calculatedOccupants/8); //total, so use calculatedOccupants 
	drinkingFountain = Math.ceil(calculatedOccupants/100); //total, so use calculatedOccupants  
    other = "1 service sink";  
  }    
  //s1 = structures for storage
  else if (s1 == true) {
    wcTotal = Math.ceil(calculatedOccupants/100); //total, so use calculatedOccupants
    lavTotal = Math.ceil(calculatedOccupants/100); //total, so use calculatedOccupants
	bathtub = "-"; //total, so use calculatedOccupants 
	drinkingFountain = Math.ceil(calculatedOccupants/1000); //total, so use calculatedOccupants  
    other = "1 service sink";  
  }  
    
  else {
  document.getElementById('msg').innerHTML = "Please select an option";
  }
  
  document.getElementById('wcTotal').innerHTML = wcTotal; 
  document.getElementById('wcMale').innerHTML = wcMale;  
  document.getElementById('wcFemale').innerHTML = wcFemale;
  document.getElementById('lavTotal').innerHTML = lavTotal;  
  document.getElementById('lavMale').innerHTML = lavMale;
  document.getElementById('lavFemale').innerHTML = lavFemale;
  document.getElementById('bathtub').innerHTML = bathtub;
  document.getElementById('drinkingFountain').innerHTML = drinkingFountain;        
  document.getElementById('other').innerHTML = other;   
  
  document.getElementById("myForm").reset();
  
}

function check() {
    var dropdown = document.getElementById("allClass");
    var current_value = dropdown.options[dropdown.selectedIndex].value;

    if (current_value == "assembly") {
        document.getElementById("assemblyClass").style.display = "block";
        document.getElementById("buildingClass").style.display = "none";
        document.getElementById("educationalClass").style.display = "none";
        document.getElementById("factoryClass").style.display = "none";
        document.getElementById("institutionalClass").style.display = "none";
        document.getElementById("mercantileClass").style.display = "none";
        document.getElementById("residentialClass").style.display = "none";  
        document.getElementById("storageClass").style.display = "none";
    }  
    else if (current_value == "business") {
        document.getElementById("assemblyClass").style.display = "none";
        document.getElementById("buildingClass").style.display = "block";
        document.getElementById("educationalClass").style.display = "none";
        document.getElementById("factoryClass").style.display = "none";
        document.getElementById("institutionalClass").style.display = "none";
        document.getElementById("mercantileClass").style.display = "none";
        document.getElementById("residentialClass").style.display = "none";  
        document.getElementById("storageClass").style.display = "none";
    }     
    else if (current_value == "educational") {
        document.getElementById("assemblyClass").style.display = "none";
        document.getElementById("buildingClass").style.display = "none";
        document.getElementById("educationalClass").style.display = "block";
        document.getElementById("factoryClass").style.display = "none";
        document.getElementById("institutionalClass").style.display = "none";
        document.getElementById("mercantileClass").style.display = "none";
        document.getElementById("residentialClass").style.display = "none";  
        document.getElementById("storageClass").style.display = "none";
    }     
    else if (current_value == "factory") {
        document.getElementById("assemblyClass").style.display = "none";
        document.getElementById("buildingClass").style.display = "none";
        document.getElementById("educationalClass").style.display = "none";
        document.getElementById("factoryClass").style.display = "block";
        document.getElementById("institutionalClass").style.display = "none";
        document.getElementById("mercantileClass").style.display = "none";
        document.getElementById("residentialClass").style.display = "none";  
        document.getElementById("storageClass").style.display = "none";
    }   
    else if (current_value == "institutional") {
        document.getElementById("assemblyClass").style.display = "none";
        document.getElementById("buildingClass").style.display = "none";
        document.getElementById("educationalClass").style.display = "none";
        document.getElementById("factoryClass").style.display = "none";
        document.getElementById("institutionalClass").style.display = "block";
        document.getElementById("mercantileClass").style.display = "none";
        document.getElementById("residentialClass").style.display = "none";  
        document.getElementById("storageClass").style.display = "none";
    }
    else if (current_value == "mercantile") {
        document.getElementById("assemblyClass").style.display = "none";
        document.getElementById("buildingClass").style.display = "none";
        document.getElementById("educationalClass").style.display = "none";
        document.getElementById("factoryClass").style.display = "none";
        document.getElementById("institutionalClass").style.display = "none";
        document.getElementById("mercantileClass").style.display = "block";
        document.getElementById("residentialClass").style.display = "none";        
        document.getElementById("storageClass").style.display = "none";
    }
    else if (current_value == "residential") {
        document.getElementById("assemblyClass").style.display = "none";
        document.getElementById("buildingClass").style.display = "none";
        document.getElementById("educationalClass").style.display = "none";
        document.getElementById("factoryClass").style.display = "none";
        document.getElementById("institutionalClass").style.display = "none";
        document.getElementById("mercantileClass").style.display = "none";
        document.getElementById("residentialClass").style.display = "block";        
        document.getElementById("storageClass").style.display = "none";
    }
    else if (current_value == "storage") {
        document.getElementById("assemblyClass").style.display = "none";
        document.getElementById("buildingClass").style.display = "none";
        document.getElementById("educationalClass").style.display = "none";
        document.getElementById("factoryClass").style.display = "none";
        document.getElementById("institutionalClass").style.display = "none";
        document.getElementById("mercantileClass").style.display = "none";
        document.getElementById("residentialClass").style.display = "none";        
        document.getElementById("storageClass").style.display = "block";
    }

}

