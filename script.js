var filling_prices = new Array();
    filling_prices["None"]=0;
    filling_prices["Lemon"]=5;
    filling_prices["Custard"]=5;
    filling_prices["Fudge"]=7;

function getFillingPrice()
{
    var cakeFillingPrice=0;
    //Get a reference to the form id="cakeform"
    
    //Get a reference to the select id="filling"
    var selectedFilling = document.getElementById("filling").value),
         
         
    //set cakeFilling Price equal to value user chose
    //For example filling_prices["Lemon".value] would be equal to 5

    cakeFillingPrice = filling_prices[selectedFilling.value];

    //finally we return cakeFillingPrice

    return cakeFillingPrice;
}

function calculate() {
    var panel = parseInt(document.getElementById("panel").value),
        panelv = 65,
        panelt = panel * panelv,
        derating_value = 2,
        total_hours_standby = cakeFillingPrice + (panelt * derating_value);

    document.getElementById("total_hours").innerHTML = total_hours_standby;
}
