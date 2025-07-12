document.getElementById("calculateBtn").addEventListener("click", function () {
    let tonnage = parseFloat(document.getElementById("tonnage").value);
    let hours = parseFloat(document.getElementById("hours").value);
    let star = parseInt(document.getElementById("star").value);
    let tariff = parseFloat(document.getElementById("tariff").value);
    let coolingCapacity = parseFloat(document.getElementById("coolingCapacity").value);

    let powerConsumptionChart = {
        "1-3": 1.0, "1-5": 0.8,
        "1.5-3": 1.5, "1.5-5": 1.2,
        "2-3": 2.0, "2-5": 1.6
    };

    let key = `${tonnage}-${star}`;
    let powerConsumption = powerConsumptionChart[key];

    if (isNaN(tonnage) || isNaN(hours) || isNaN(tariff) || !powerConsumption) {
        document.getElementById("result").innerText = "Please enter valid inputs!";
        return;
    }

    let dailyConsumption = powerConsumption * hours;
    let monthlyBill = dailyConsumption * 30 * tariff;

    document.getElementById("result").innerText = `Cooling Capacity: ${coolingCapacity}W\nDaily Consumption: ${dailyConsumption.toFixed(2)} kWh\nEstimated Monthly Bill: ₹${monthlyBill.toFixed(2)}`;
});

// Reset Button Functionality
document.getElementById("resetBtn").addEventListener("click", function () {
    document.getElementById("tonnage").value = "";
    document.getElementById("hours").value = "";
    document.getElementById("star").value = "";
    document.getElementById("tariff").value = "";
    document.getElementById("coolingCapacity").value = "";
    document.getElementById("result").innerText = "";
});
