var filling_prices = new Array();
    filling_prices["None"]=0;
    filling_prices["Lemon"]=5;
    filling_prices["Custard"]=5;
    filling_prices["Fudge"]=7;

function getFillingPrice()
{
    var cakeFillingPrice=0;
    var selectedFilling = document.elements("filling").value),
    cakeFillingPrice = filling_prices[selectedFilling.value];

    //finally we return cakeFillingPrice

    return cakeFillingPrice;
}

function calculate() {
    var totalpanel = 0
        panel = parseInt(document.getElementById("panel").value),
        panelv = 65,
        panelt = panel * panelv,
        derating_value = 2
        totalpanel = panelt * derating_value;
    return totalpanel 
    
    var totalprice = getFillingPrice() + totalpanel     


    document.getElementById("total_hours").innerHTML = totalprice;
}
