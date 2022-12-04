import convertLength   from "./convertLength.js";
import convertArea     from "./convertArea.js";
import convertWeight   from "./convertWeight.js";
import convertVolume   from "./convertVolume.js";
import convertSpeed    from "./convertSpeed.js";
import convertPressure from "./convertPressure.js";
import convertEnergy   from "./convertEnergy.js";
import convertFuelEff  from "./convertFuelEff.js";
import convertTemp     from "./convertTemp.js";
import convertFreq     from "./convertFreq.js";

$(function () {
    $("#mainInput").on("keyup", function () {
        let resultArr = convert($(this).val(), $("#selectConvert").val());

        displayArr(resultArr);
    });

    function convert(val, convertUnit) {
        let number = val.replace(/[^0-9\.]/g, "");
        let convertStr = val.replace(/[0-9\.]/g, "").toLowerCase();

        let resultArr = [];

        switch(convertUnit) {
            case "길이": resultArr = convertLength(number, convertStr); break;
            case "면적": resultArr = convertArea(number, convertStr); break;
            case "질량": resultArr = convertWeight(number, convertStr); break;
            case "부피": resultArr = convertVolume(number, convertStr); break;
            case "속도": resultArr = convertSpeed(number, convertStr); break;
            case "압력": resultArr = convertPressure(number, convertStr); break;
            case "에너지": resultArr = convertEnergy(number, convertStr); break;
            case "연비": resultArr = convertFuelEff(number, convertStr); break;
            case "온도": resultArr = convertTemp(number, convertStr); break;
            case "주파수": resultArr = convertFreq(number, convertStr); break;
        }
        
        return resultArr;
    }

    function displayArr(resultArr) {
        if(resultArr.length != 0) {
            $("#convertedList").empty();

            for(let idx in resultArr) {
                setTimeout(function() {
                    $("#convertedList").append('<div class="card convertedResult"> <div class="card-body"> <h5 class="card-title">' + resultArr[idx] + '</h5> </div> </div>');
                }, 50*idx)
            }
        }
    }
})
