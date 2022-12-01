let numberRound3 = function numberRound3(val) {
    let number = val.replace(/[^0-9\.]/g, "");
    let convertStr = val.replace(/[0-9\.]/g, "");

    return (Math.round(number * 1000) / 1000) + convertStr;
}

let convertSpeed = function convertSpeed(number, convertStr) {
    let resultArr = [];

    switch(convertStr) {
        case "mi/h":
        case "mih":
        case "mph":
            resultArr.push(numberRound3(number * 1.467 + "ft/s"                                  ));
            resultArr.push(numberRound3(number / 2.237 + "m/s"                                   ));
            resultArr.push(numberRound3(number * 1.609 + "km/h"                                  ));
            resultArr.push(numberRound3(number / 1.151 + "Knot"                                  ));
            break;
        case "ft/s":
        case "fts":
        case "ft":
            resultArr.push(numberRound3(number / 1.467 + "mi/h"                                  ));
            resultArr.push(numberRound3(number / 3.281 + "m/s"                                   ));
            resultArr.push(numberRound3(number * 1.097 + "km/h"                                  ));
            resultArr.push(numberRound3(number / 1.688 + "Knot"                                  ));
            break;
        case "m/s":
        case "ms":
            resultArr.push(numberRound3(number * 2.237 + "mi/h"                                  ));
            resultArr.push(numberRound3(number * 3.281 + "ft/s"                                  ));
            resultArr.push(numberRound3(number * 3.6 + "km/h"                                    ));
            resultArr.push(numberRound3(number * 1.944 + "Knot"                                  ));
            break;
        case "km/h":
        case "kmh":
        case "km":
            resultArr.push(numberRound3(number / 1.609 + "mi/h"                                  ));
            resultArr.push(numberRound3(number / 1.097 + "ft/s"                                  ));
            resultArr.push(numberRound3(number / 3.6 + "m/s"                                     ));
            resultArr.push(numberRound3(number / 1.852 + "Knot"                                  ));
            break;
        case "knot":
        case "note":
        case "kn":
            resultArr.push(numberRound3(number * 1.151 + "mi/h"                                  ));
            resultArr.push(numberRound3(number * 1.688 + "ft/s"                                  ));
            resultArr.push(numberRound3(number / 1.944 + "m/s"                                   ));
            resultArr.push(numberRound3(number * 1.852 + "km/h"                                  ));
            break;
    }

    return resultArr;
}

export default convertSpeed;