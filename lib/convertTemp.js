let numberRound3 = function numberRound3(val) {
    let number = val.replace(/[^0-9\.]/g, "");
    let convertStr = val.replace(/[0-9\.]/g, "");

    return (Math.round(number * 1000) / 1000) + convertStr;
}

let convertTemp = function convertTemp(number, convertStr) {
    let resultArr = [];

    switch(convertStr) {
        case "c":
        case "°c":
            resultArr.push(numberRound3(((number * 9/5) + 32) + "화씨"              ));
            resultArr.push(numberRound3((number + 273.15) + "켈빈"              ));
            break;
        case "f":
        case "°f":
            resultArr.push(numberRound3(((number - 32) * 5/9) + "섭씨"              ));
            resultArr.push(numberRound3((((number - 32) * 5/9) + 273.15) + "켈빈"              ));
            break;
        case "k":
            resultArr.push(numberRound3(number - 273.15 + "섭씨"              ));
            resultArr.push(numberRound3((((number - 273.15) * 9/5) + 32) + "화씨"              ));
            break;
    }

    return resultArr;
}

export default convertTemp;