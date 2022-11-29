import convertLength from "./convertLength.js"
import convertArea from "./convertArea.js"

$(function () {
    $("#mainInput").on("keyup", function () {
        convert($(this).val(), $("#selectConvert").val());
    });

    function convert(val, convertUnit) {
        let number = val.replace(/[^0-9\.]/g, "");
        let convertStr = val.replace(/[0-9\.]/g, "").toLowerCase();

        let resultArr = [];

        switch(convertUnit) {
            case "길이": resultArr = convertLength(number, convertStr); break;
            case "면적": resultArr = convertArea(number, convertStr); break;
            case "질량": convertWeight(number, convertStr); break;
            case "부피": convertVolume(number, convertStr); break;
            case "속도": convertSpeed(number, convertStr); break;
            case "시간": convertTime(number, convertStr); break;
            case "압력": convertPressure(number, convertStr); break;
            case "에너지": convertEnergy(number, convertStr); break;
            case "연비": convertFuelEff(number, convertStr); break;
            case "온도": convertTemp(number, convertStr); break;
            case "주파수": convertFreq(number, convertStr); break;
            case "평면각": convertAngle(number, convertStr); break;
            case "데이터 크기": convertDataVolume(number, convertStr); break;
            case "데이터 전송 속도": convertDataTransSpeed(number, convertStr); break;
        }
        
        console.log(resultArr);
        // return resultArr;
    }
})
