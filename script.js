function calculate() {
    var panel = parseInt(document.getElementById("panel").value),
        panelv = 65,
        panelt = panel * panelv,
        derating_value = 2,
        total_hours_standby = panelt * derating_value;

    document.getElementById("total_hours").innerHTML = total_hours_standby;
}
