let numberRound3 = function numberRound3(val) {
    let number = val.replace(/[^0-9\.]/g, "");
    let convertStr = val.replace(/[0-9\.]/g, "");

    return (Math.round(number * 1000) / 1000) + convertStr;
}

let convertAngle = function convertAngle(number, convertStr) {
    let resultArr = [];

    switch(convertStr) {
        case "hertz":
        case "hz":
            resultArr.push(numberRound3(number / 1000 + "킬로헤르츠"              ));
            resultArr.push(numberRound3(number / (1e+6) + "메가헤르츠"              ));
            resultArr.push(numberRound3(number / (1e+9) + "기가헤르츠"              ));
            break;
        case "kilohertz":
        case "khz":
            resultArr.push(numberRound3(number * 1000 + "헤르츠"              ));
            resultArr.push(numberRound3(number / 1000 + "메가헤르츠"              ));
            resultArr.push(numberRound3(number / (1e+6) + "기가헤르츠"              ));
            break;
        case "megahertz":
        case "mhz":
            resultArr.push(numberRound3(number * (1e+6) + "헤르츠"              ));
            resultArr.push(numberRound3(number * 1000 + "킬로헤르츠"              ));
            resultArr.push(numberRound3(number / 1000 + "기가헤르츠"              ));
            break;
        case "gigahertz":
        case "ghz":
            resultArr.push(numberRound3(number * (1e+9) + "헤르츠"              ));
            resultArr.push(numberRound3(number * (1e+6) + "킬로헤르츠"              ));
            resultArr.push(numberRound3(number * 1000 + "메가헤르츠"              ));
            break;



    }

    return resultArr;
}

export default convertAngle;