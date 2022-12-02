let numberRound3 = function numberRound3(val) {
    let number = val.replace(/[^0-9\.]/g, "");
    let convertStr = val.replace(/[0-9\.]/g, "");

    return (Math.round(number * 1000) / 1000) + convertStr;
}

let convertPressure = function convertPressure(number, convertStr) {
    let resultArr = [];

    switch(convertStr) {
        case "bar":
            resultArr.push(numberRound3(number * 14.504 + "psi"                       ));
            resultArr.push(numberRound3(number * 750.1 + "torr"                       ));
            resultArr.push(numberRound3(number * 100000 + "pascal"                    ));
            resultArr.push(numberRound3(number / 1.013 + "atm"                        ));
            break;
        case "psi":
        case "ps":
            resultArr.push(numberRound3(number / 14.504 + "bar"                       ));
            resultArr.push(numberRound3(number * 51.715 + "torr"                      ));
            resultArr.push(numberRound3(number * 6895 + "pascal"                      ));
            resultArr.push(numberRound3(number / 14.696 + "atm"                       ));
            break;
        case "torr":
        case "tor":
            resultArr.push(numberRound3(number / 750.1 + "bar"                        ));
            resultArr.push(numberRound3(number / 51.715 + "psi"                       ));
            resultArr.push(numberRound3(number * 133.3 + "pascal"                     ));
            resultArr.push(numberRound3(number / 760 + "atm"                          ));
            break;
        case "pascal":
        case "pas":
        case "pa":
            resultArr.push(numberRound3(number / 100000 + "bar"                       ));
            resultArr.push(numberRound3(number / 6895 + "psi"                         ));
            resultArr.push(numberRound3(number / 133.3 + "torr"                       ));
            resultArr.push(numberRound3(number / 101300 + "atm"                       ));
            break;
        case "atm":
        case "at":
            resultArr.push(numberRound3(number * 1.013 + "bar"                        ));
            resultArr.push(numberRound3(number * 14.696 + "psi"                       ));
            resultArr.push(numberRound3(number * 760 + "torr"                         ));
            resultArr.push(numberRound3(number * 101300 + "pascal"                    ));
            break;
    }

    return resultArr;
}