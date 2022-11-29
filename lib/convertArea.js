let numberRound3 = function numberRound3(val) {
    let number = val.replace(/[^0-9\.]/g, "");
    let convertStr = val.replace(/[0-9\.]/g, "");

    return (Math.round(number * 1000) / 1000) + convertStr;
}

let convertArea = function convertArea(number, convertStr) {
    let resultArr = [];

    switch(convertStr) {
        case "km2":
        case "km":
        case "k" :
        case "km²":
        case "㎢":
            resultArr.push(numberRound3(number * (1e+6) + "㎡"                             ));
            resultArr.push(numberRound3(number / 2.59 + "mi²"                              ));
            resultArr.push(numberRound3(number * (1.196e+6) + "yd²"                        ));
            resultArr.push(numberRound3(number * (1.076e+7) + "ft²"                        ));
            resultArr.push(numberRound3(number * (1.55e+9) + "in²"                         ));
            resultArr.push(numberRound3(number * 100 + "㏊"                                ));
            resultArr.push(numberRound3(number * 247.1 + "acre"                            ));
            break;
        case "m2":
        case "m":
        case "m²":
        case "㎡":
            resultArr.push(numberRound3(number / (1e+6) + "㎢"                             ));
            resultArr.push(numberRound3(number / (2.59e+6) + "mi²"                         ));
            resultArr.push(numberRound3(number * (1.196) + "yd²"                           ));
            resultArr.push(numberRound3(number * (10.764) + "ft²"                          ));
            resultArr.push(numberRound3(number * (1550) + "in²"                            ));
            resultArr.push(numberRound3(number / 10000 + "㏊"                              ));
            resultArr.push(numberRound3(number / 4047 + "acre"                             ));
            break;
        case "mile2":
        case "mile²":
        case "mil":
        case "mi":
        case "mi²":
            resultArr.push(numberRound3(number * 2.59 + "㎢"                                ));
            resultArr.push(numberRound3(number * (2.59e+6) + "㎡"                           ));
            resultArr.push(numberRound3(number * (3.098e+6) + "yd²"                         ));
            resultArr.push(numberRound3(number * (2.788e+7) + "ft²"                         ));
            resultArr.push(numberRound3(number * (4.014e+9) + "in²"                         ));
            resultArr.push(numberRound3(number * 259 + "㏊"                                 ));
            resultArr.push(numberRound3(number * 640 + "acre"                               ));
            break;
        case "yard2":
        case "yard²":
        case "yard" :
        case "yar":
        case "ya":
        case "yd":
        case "y":
            resultArr.push(numberRound3(number / (1.196e+6) + "㎢"                          ));
            resultArr.push(numberRound3(number / 1.196 + "㎡"                               ));
            resultArr.push(numberRound3(number / (3.098e+6) + "mi²"                         ));
            resultArr.push(numberRound3(number * 9 + "ft²"                                  ));
            resultArr.push(numberRound3(number * 1296 + "in²"                               ));
            resultArr.push(numberRound3(number / 11960 + "㏊"                               ));
            resultArr.push(numberRound3(number / 4840 + "acre"                              ));
            break;
        case "feet2":
        case "feet":
        case "fee":
        case "fe":
        case "f":
        case "ft2":
        case "ft²":
            resultArr.push(numberRound3(number / (1.076e+7) + "㎢"                          ));
            resultArr.push(numberRound3(number / 10.764 + "㎡"                              ));
            resultArr.push(numberRound3(number / (2.788e+7) + "mi²"                         ));
            resultArr.push(numberRound3(number / 9 + "yd²"                                  ));
            resultArr.push(numberRound3(number * 144 + "in²"                                ));
            resultArr.push(numberRound3(number / 107600 + "㏊"                              ));
            resultArr.push(numberRound3(number / 43560 + "acre"                             ));
            break;
        case "inch2":
        case "inch":
        case "inc":
        case "in":
        case "in²":
        case "i":
            resultArr.push(numberRound3(number / (1.55e+9) + "㎢"                           ));
            resultArr.push(numberRound3(number / 1550 + "㎡"                                ));
            resultArr.push(numberRound3(number / (4.014e+9) + "mi²"                         ));
            resultArr.push(numberRound3(number / 1296 + "yd²"                               ));
            resultArr.push(numberRound3(number / 144 + "ft²"                                ));
            resultArr.push(numberRound3(number / (1.55e+7) + "㏊"                           ));
            resultArr.push(numberRound3(number / (6.273e+6) + "acre"                        ));
            break;
        case "㏊":
        case "ha":
        case "h":
            resultArr.push(numberRound3(number / 100 + "㎢"                                 ));
            resultArr.push(numberRound3(number * 10000 + "㎡"                               ));
            resultArr.push(numberRound3(number / 259 + "mi²"                                ));
            resultArr.push(numberRound3(number * 11960 + "yd²"                              ));
            resultArr.push(numberRound3(number * 107600 + "ft²"                             ));
            resultArr.push(numberRound3(number * (1.55e+7) + "in²"                          ));
            resultArr.push(numberRound3(number * 2.471 + "acre"                             ));
            break;
        case "acre":
        case "acr":
        case "ac":
        case "a":
            resultArr.push(numberRound3(number / 247.1 + "㎢"                                 ));
            resultArr.push(numberRound3(number * 4047 + "㎡"                               ));
            resultArr.push(numberRound3(number / 640 + "mi²"                                ));
            resultArr.push(numberRound3(number * 4840 + "yd²"                              ));
            resultArr.push(numberRound3(number * 43560 + "ft²"                             ));
            resultArr.push(numberRound3(number * (6.273e+6) + "in²"                          ));
            resultArr.push(numberRound3(number / 2.471 + "㏊"                               ));
            break;
    }

    return resultArr;
}

export default convertArea;