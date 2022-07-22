var filling_prices = new Array();
    filling_prices["None"]=0;
    filling_prices["Lemon"]=5;
    filling_prices["Custard"]=5;
    filling_prices["Fudge"]=7;

function getFillingPrice() {
    var cakeFillingPrice=0;
    
    var selectedFilling = document.elements("filling").value),
        cakeFillingPrice = filling_prices[selectedFilling.value];

    //finally we return cakeFillingPrice

    document.getElementById("total_cake").innerHTML = cakeFillingPrice;
}


function calculate() {
    var panel = parseInt(document.getElementById("panel").value),
        panelv = 65,
        panelt = panel * panelv,
        derating_value = 2,
        total_hours_standby = panelt * derating_value;

    document.getElementById("total_hours").innerHTML = total_hours_standby;
}
