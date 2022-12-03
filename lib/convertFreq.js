let numberRound3 = function numberRound3(val) {
    let number = val.replace(/[^0-9\.]/g, "");
    let convertStr = val.replace(/[0-9\.]/g, "");

    return (Math.round(number * 1000) / 1000) + convertStr;
}

let convertFreq = function convertFreq(number, convertStr) {
    let resultArr = [];

    switch(convertStr) {
        case "c":
        case "°c":
            resultArr.push(numberRound3(((number * 9/5) + 32) + "화씨"              ));
            resultArr.push(numberRound3((number + 273.15) + "켈빈"              ));
            resultArr.push(numberRound3(((number * 9/5) + 32) + "화씨"              ));
            resultArr.push(numberRound3((number + 273.15) + "켈빈"              ));
            break;
    }

    return resultArr;
}

export default convertFreq;