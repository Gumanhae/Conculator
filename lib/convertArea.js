let numberRound3 = function numberRound3(val) {
    let number = val.replace(/[^0-9\.]/g, "");
    let convertStr = val.replace(/[0-9\.]/g, "");

    return (Math.round(number * 1000) / 1000) + " " + convertStr;
}

let convertArea = function convertArea(number, convertStr) {
    let resultArr = [];

    switch(convertStr) {
        case "km2":
        case "km":
        case "k" :
        case "km²":
        case "㎢":
            resultArr.push(numberRound3(number * (1e+6) + "제곱미터"                             ));
            resultArr.push(numberRound3(number / 2.59 + "제곱마일"                              ));
            resultArr.push(numberRound3(number * (1.196e+6) + "제곱야드"                        ));
            resultArr.push(numberRound3(number * (1.076e+7) + "제곱피트"                        ));
            resultArr.push(numberRound3(number * (1.55e+9) + "제곱인치"                         ));
            resultArr.push(numberRound3(number * 100 + "헥타르"                                ));
            resultArr.push(numberRound3(number * 247.1 + "에이커"                            ));
            break;
        case "m2":
        case "m":
        case "m²":
        case "㎡":
            resultArr.push(numberRound3(number / (1e+6) + "제곱킬로미터"                             ));
            resultArr.push(numberRound3(number / (2.59e+6) + "제곱마일"                         ));
            resultArr.push(numberRound3(number * (1.196) + "제곱야드"                           ));
            resultArr.push(numberRound3(number * (10.764) + "제곱피트"                          ));
            resultArr.push(numberRound3(number * (1550) + "제곱인치"                            ));
            resultArr.push(numberRound3(number / 10000 + "헥타르"                              ));
            resultArr.push(numberRound3(number / 4047 + "에이커"                             ));
            break;
        case "mile2":
        case "mile²":
        case "mil":
        case "mi":
        case "mi²":
            resultArr.push(numberRound3(number * 2.59 + "제곱킬로미터"                                ));
            resultArr.push(numberRound3(number * (2.59e+6) + "제곱미터"                           ));
            resultArr.push(numberRound3(number * (3.098e+6) + "제곱야드"                         ));
            resultArr.push(numberRound3(number * (2.788e+7) + "제곱피트"                         ));
            resultArr.push(numberRound3(number * (4.014e+9) + "제곱인치"                         ));
            resultArr.push(numberRound3(number * 259 + "헥타르"                                 ));
            resultArr.push(numberRound3(number * 640 + "에이커"                               ));
            break;
        case "yard2":
        case "yard²":
        case "yard" :
        case "yar":
        case "ya":
        case "yd":
        case "yd²":
        case "y":
            resultArr.push(numberRound3(number / (1.196e+6) + "제곱킬로미터"                          ));
            resultArr.push(numberRound3(number / 1.196 + "제곱미터"                               ));
            resultArr.push(numberRound3(number / (3.098e+6) + "제곱마일"                         ));
            resultArr.push(numberRound3(number * 9 + "제곱피트"                                  ));
            resultArr.push(numberRound3(number * 1296 + "제곱인치"                               ));
            resultArr.push(numberRound3(number / 11960 + "헥타르"                               ));
            resultArr.push(numberRound3(number / 4840 + "에이커"                              ));
            break;
        case "feet2":
        case "feet":
        case "fee":
        case "fe":
        case "f":
        case "ft2":
        case "ft²":
            resultArr.push(numberRound3(number / (1.076e+7) + "제곱킬로미터"                          ));
            resultArr.push(numberRound3(number / 10.764 + "제곱미터"                              ));
            resultArr.push(numberRound3(number / (2.788e+7) + "제곱마일"                         ));
            resultArr.push(numberRound3(number / 9 + "제곱야드"                                  ));
            resultArr.push(numberRound3(number * 144 + "제곱인치"                                ));
            resultArr.push(numberRound3(number / 107600 + "헥타르"                              ));
            resultArr.push(numberRound3(number / 43560 + "에이커"                             ));
            break;
        case "inch2":
        case "inch":
        case "inc":
        case "in":
        case "in²":
        case "i":
            resultArr.push(numberRound3(number / (1.55e+9) + "제곱킬로미터"                           ));
            resultArr.push(numberRound3(number / 1550 + "제곱미터"                                ));
            resultArr.push(numberRound3(number / (4.014e+9) + "제곱마일"                         ));
            resultArr.push(numberRound3(number / 1296 + "제곱야드"                               ));
            resultArr.push(numberRound3(number / 144 + "제곱피트"                                ));
            resultArr.push(numberRound3(number / (1.55e+7) + "헥타르"                           ));
            resultArr.push(numberRound3(number / (6.273e+6) + "에이커"                        ));
            break;
        case "㏊":
        case "ha":
        case "h":
            resultArr.push(numberRound3(number / 100 + "제곱킬로미터"                                 ));
            resultArr.push(numberRound3(number * 10000 + "제곱미터"                               ));
            resultArr.push(numberRound3(number / 259 + "제곱마일"                                ));
            resultArr.push(numberRound3(number * 11960 + "제곱야드"                              ));
            resultArr.push(numberRound3(number * 107600 + "제곱피트"                             ));
            resultArr.push(numberRound3(number * (1.55e+7) + "제곱인치"                          ));
            resultArr.push(numberRound3(number * 2.471 + "에이커"                             ));
            break;
        case "acre":
        case "acr":
        case "ac":
        case "a":
            resultArr.push(numberRound3(number / 247.1 + "제곱킬로미터"                                 ));
            resultArr.push(numberRound3(number * 4047 + "제곱미터"                               ));
            resultArr.push(numberRound3(number / 640 + "제곱마일"                                ));
            resultArr.push(numberRound3(number * 4840 + "제곱야드"                              ));
            resultArr.push(numberRound3(number * 43560 + "제곱피트"                             ));
            resultArr.push(numberRound3(number * (6.273e+6) + "제곱인치"                          ));
            resultArr.push(numberRound3(number / 2.471 + "헥타르"                               ));
            break;
    }

    return resultArr;
}

export default convertArea;