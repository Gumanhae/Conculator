let numberRound3 = function numberRound3(val) {
    let number = val.replace(/[^0-9\.]/g, "");
    let convertStr = val.replace(/[0-9\.]/g, "");

    return (Math.round(number * 1000) / 1000) + convertStr;
}

let convertWeight = function convertWeight(number, convertStr) {
    let resultArr = [];

    switch(convertStr) {
        case "ton":
        case "to":
        case "t":
            resultArr.push(numberRound3(number * 1000 + "kg"                                  ));
            resultArr.push(numberRound3(number * (1e+6) + "g"                                 ));
            resultArr.push(numberRound3(number * (1e+9) + "mg"                                ));
            resultArr.push(numberRound3(number * (1e+12) + "μg"                               ));
            resultArr.push(numberRound3(number / 1.016 + "long ton"                           ));
            resultArr.push(numberRound3(number * 1.102 + "short ton"                          ));
            resultArr.push(numberRound3(number * 157.5 + "stone"                              ));
            resultArr.push(numberRound3(number * 2205 + "lb(pound)"                           ));
            resultArr.push(numberRound3(number * 35270 + "oz(ounce)"                          ));
            break;
        case "kg":
        case "k":
            resultArr.push(numberRound3(number / 1000 + "ton"                                 ));
            resultArr.push(numberRound3(number * 1000 + "g"                                   ));
            resultArr.push(numberRound3(number * (1e+6) + "mg"                                ));
            resultArr.push(numberRound3(number * (1e+9) + "μg"                                ));
            resultArr.push(numberRound3(number / 1016 + "long ton"                            ));
            resultArr.push(numberRound3(number / 907.2 + "short ton"                          ));
            resultArr.push(numberRound3(number / 6.35 + "stone"                               ));
            resultArr.push(numberRound3(number * 2.205 + "lb(pound)"                          ));
            resultArr.push(numberRound3(number * 35.274 + "oz(ounce)"                         ));
            break;
        case "g":
            resultArr.push(numberRound3(number / (1e+6) + "ton"                               ));
            resultArr.push(numberRound3(number / 1000 + "kg"                                  ));
            resultArr.push(numberRound3(number * 1000 + "mg"                                  ));
            resultArr.push(numberRound3(number * (1e+6) + "μg"                                ));
            resultArr.push(numberRound3(number / (1.016e+6) + "long ton"                      ));
            resultArr.push(numberRound3(number / 907200 + "short ton"                         ));
            resultArr.push(numberRound3(number / 6350 + "stone"                               ));
            resultArr.push(numberRound3(number / 453.6 + "lb(pound)"                          ));
            resultArr.push(numberRound3(number / 28.35 + "oz(ounce)"                          ));
            break;
        case "mg":
        case "m":
            resultArr.push(numberRound3(number / (1e+9) + "ton"                               ));
            resultArr.push(numberRound3(number / (1e+6) + "kg"                                ));
            resultArr.push(numberRound3(number / 1000 + "g"                                   ));
            resultArr.push(numberRound3(number * 1000 + "μg"                                  ));
            resultArr.push(numberRound3(number / (1.016e+9) + "long ton"                      ));
            resultArr.push(numberRound3(number / (9.072e+8) + "short ton"                     ));
            resultArr.push(numberRound3(number / (6.35e+6) + "stone"                          ));
            resultArr.push(numberRound3(number / 453600 + "lb(pound)"                         ));
            resultArr.push(numberRound3(number / 28350 + "oz(ounce)"                          ));
            break;
        case "μg":
        case "ug":
            resultArr.push(numberRound3(number / (1e+12) + "ton"                              ));
            resultArr.push(numberRound3(number / (1e+9) + "kg"                                ));
            resultArr.push(numberRound3(number / (1e+6) + "g"                                 ));
            resultArr.push(numberRound3(number / 1000 + "mg"                                  ));
            resultArr.push(numberRound3(number / (1.016e+12) + "long ton"                     ));
            resultArr.push(numberRound3(number / (9.072e+11) + "short ton"                    ));
            resultArr.push(numberRound3(number / (6.35e+9) + "stone"                          ));
            resultArr.push(numberRound3(number / (4.536e+8) + "lb(pound)"                     ));
            resultArr.push(numberRound3(number / (2.835e+7) + "oz(ounce)"                     ));
            break;
        case "long ton":
        case "longton":
        case "lton":
        case "lt":
            resultArr.push(numberRound3(number * 1.016 + "ton"                                ));
            resultArr.push(numberRound3(number * 1016 + "kg"                                  ));
            resultArr.push(numberRound3(number * (1.016e+6) + "g"                             ));
            resultArr.push(numberRound3(number * (1.016e+9) + "mg"                            ));
            resultArr.push(numberRound3(number * (1.016e+12) + "μg"                           ));
            resultArr.push(numberRound3(number * 1.12 + "short ton"                           ));
            resultArr.push(numberRound3(number * 160 + "stone"                                ));
            resultArr.push(numberRound3(number * 2240 + "lb(pound)"                           ));
            resultArr.push(numberRound3(number * 35840 + "oz(ounce)"                          ));
            break;
        case "short ton":
        case "shortton":
        case "ston":
        case "st":
            resultArr.push(numberRound3(number / 1.102 + "ton"                                ));
            resultArr.push(numberRound3(number * 907.2 + "kg"                                 ));
            resultArr.push(numberRound3(number * 907200 + "g"                                 ));
            resultArr.push(numberRound3(number * (9.072e+8) + "mg"                            ));
            resultArr.push(numberRound3(number * (9.072e+11) + "μg"                           ));
            resultArr.push(numberRound3(number / 1.12 + "long ton"                            ));
            resultArr.push(numberRound3(number * 142.9 + "stone"                              ));
            resultArr.push(numberRound3(number * 2000 + "lb(pound)"                           ));
            resultArr.push(numberRound3(number * 32000 + "oz(ounce)"                          ));
            break;
        case "stone":
            resultArr.push(numberRound3(number / 157.5 + "ton"                                ));
            resultArr.push(numberRound3(number * 6.35 + "kg"                                  ));
            resultArr.push(numberRound3(number * 6350 + "g"                                   ));
            resultArr.push(numberRound3(number * (6.35e+6) + "mg"                             ));
            resultArr.push(numberRound3(number * (6.35e+9) + "μg"                             ));
            resultArr.push(numberRound3(number / 160 + "long ton"                             ));
            resultArr.push(numberRound3(number / 142.9 + "short ton"                          ));
            resultArr.push(numberRound3(number * 14 + "lb(pound)"                             ));
            resultArr.push(numberRound3(number * 224 + "oz(ounce)"                            ));
            break;
        case "pound":
        case "pnd":
        case "lb":
            resultArr.push(numberRound3(number / 2205 + "ton"                                 ));
            resultArr.push(numberRound3(number / 2.205 + "kg"                                 ));
            resultArr.push(numberRound3(number * 453.6 + "g"                                  ));
            resultArr.push(numberRound3(number * 453600 + "mg"                                ));
            resultArr.push(numberRound3(number * (4.536e+8) + "μg"                            ));
            resultArr.push(numberRound3(number / 2240 + "long ton"                            ));
            resultArr.push(numberRound3(number / 2000 + "short ton"                           ));
            resultArr.push(numberRound3(number / 14 + "stone"                                 ));
            resultArr.push(numberRound3(number * 16 + "oz(ounce)"                             ));
            break;
        case "ounce":
        case "once":
        case "oz":
            resultArr.push(numberRound3(number / 35270 + "ton"                                 ));
            resultArr.push(numberRound3(number / 35.274 + "kg"                                 ));
            resultArr.push(numberRound3(number * 28.35 + "g"                                  ));
            resultArr.push(numberRound3(number * 28350 + "mg"                                ));
            resultArr.push(numberRound3(number * (2.835e+7) + "μg"                            ));
            resultArr.push(numberRound3(number / 35840 + "long ton"                            ));
            resultArr.push(numberRound3(number / 32000 + "short ton"                           ));
            resultArr.push(numberRound3(number / 224 + "stone"                                 ));
            resultArr.push(numberRound3(number / 16 + "lb(pound)"                             ));
            break;
    }

    return resultArr;
}

export default convertWeight;