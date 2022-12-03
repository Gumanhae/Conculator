let numberRound3 = function numberRound3(val) {
    let number = val.replace(/[^0-9\.]/g, "");
    let convertStr = val.replace(/[0-9\.]/g, "");

    return (Math.round(number * 1000) / 1000) + convertStr;
}

let convertFuelEff = function convertFuelEff(number, convertStr) {
    let resultArr = [];

    switch(convertStr) {
        case "gallon":
            resultArr.push(numberRound3(number * 1.201 + "영국 갤런 당 마일"              ));
            resultArr.push(numberRound3(number / 2.352 + "리터 당 킬로미터"                        ));
            break;
        case "imperial gallon":
            resultArr.push(numberRound3(number / 1.201 + "갤런 당 마일"              ));
            resultArr.push(numberRound3(number / 2.825 + "리터 당 킬로미터"                        ));
            break;
        case "km per liter":
        case "km":
            resultArr.push(numberRound3(number * 2.352 + "갤런 당 마일"              ));
            resultArr.push(numberRound3(number * 2.825 + "영국 갤런 당 마일"                        ));
            break;
    }

    return resultArr;
}

export default convertFuelEff;