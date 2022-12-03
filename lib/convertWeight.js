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
            resultArr.push(numberRound3(number * 1000 + "킬로그램"                                  ));
            resultArr.push(numberRound3(number * (1e+6) + "그램"                                 ));
            resultArr.push(numberRound3(number * (1e+9) + "밀리그램"                                ));
            resultArr.push(numberRound3(number * (1e+12) + "마이크로그램"                               ));
            resultArr.push(numberRound3(number / 1.016 + "롱톤"                           ));
            resultArr.push(numberRound3(number * 1.102 + "미국 톤"                          ));
            resultArr.push(numberRound3(number * 157.5 + "스톤"                              ));
            resultArr.push(numberRound3(number * 2205 + "파운드"                           ));
            resultArr.push(numberRound3(number * 35270 + "온스"                          ));
            break;
        case "kg":
        case "k":
            resultArr.push(numberRound3(number / 1000 + "톤"                                 ));
            resultArr.push(numberRound3(number * 1000 + "그램"                                   ));
            resultArr.push(numberRound3(number * (1e+6) + "밀리그램"                                ));
            resultArr.push(numberRound3(number * (1e+9) + "마이크로그램"                                ));
            resultArr.push(numberRound3(number / 1016 + "롱톤"                            ));
            resultArr.push(numberRound3(number / 907.2 + "미국 톤"                          ));
            resultArr.push(numberRound3(number / 6.35 + "스톤"                               ));
            resultArr.push(numberRound3(number * 2.205 + "파운드"                          ));
            resultArr.push(numberRound3(number * 35.274 + "온스"                         ));
            break;
        case "g":
            resultArr.push(numberRound3(number / (1e+6) + "톤"                               ));
            resultArr.push(numberRound3(number / 1000 + "킬로그램"                                  ));
            resultArr.push(numberRound3(number * 1000 + "밀리그램"                                  ));
            resultArr.push(numberRound3(number * (1e+6) + "마이크로그램"                                ));
            resultArr.push(numberRound3(number / (1.016e+6) + "롱톤"                      ));
            resultArr.push(numberRound3(number / 907200 + "미국 톤"                         ));
            resultArr.push(numberRound3(number / 6350 + "스톤"                               ));
            resultArr.push(numberRound3(number / 453.6 + "파운드"                          ));
            resultArr.push(numberRound3(number / 28.35 + "온스"                          ));
            break;
        case "mg":
        case "m":
            resultArr.push(numberRound3(number / (1e+9) + "톤"                               ));
            resultArr.push(numberRound3(number / (1e+6) + "킬로그램"                                ));
            resultArr.push(numberRound3(number / 1000 + "그램"                                   ));
            resultArr.push(numberRound3(number * 1000 + "마이크로그램"                                  ));
            resultArr.push(numberRound3(number / (1.016e+9) + "롱톤"                      ));
            resultArr.push(numberRound3(number / (9.072e+8) + "미국 톤"                     ));
            resultArr.push(numberRound3(number / (6.35e+6) + "스톤"                          ));
            resultArr.push(numberRound3(number / 453600 + "파운드"                         ));
            resultArr.push(numberRound3(number / 28350 + "온스"                          ));
            break;
        case "μg":
        case "ug":
            resultArr.push(numberRound3(number / (1e+12) + "톤"                              ));
            resultArr.push(numberRound3(number / (1e+9) + "킬로그램"                                ));
            resultArr.push(numberRound3(number / (1e+6) + "그램"                                 ));
            resultArr.push(numberRound3(number / 1000 + "밀리그램"                                  ));
            resultArr.push(numberRound3(number / (1.016e+12) + "롱톤"                     ));
            resultArr.push(numberRound3(number / (9.072e+11) + "미국 톤"                    ));
            resultArr.push(numberRound3(number / (6.35e+9) + "스톤"                          ));
            resultArr.push(numberRound3(number / (4.536e+8) + "파운드"                     ));
            resultArr.push(numberRound3(number / (2.835e+7) + "온스"                     ));
            break;
        case "long ton":
        case "longton":
        case "lton":
        case "lt":
            resultArr.push(numberRound3(number * 1.016 + "톤"                                ));
            resultArr.push(numberRound3(number * 1016 + "킬로그램"                                  ));
            resultArr.push(numberRound3(number * (1.016e+6) + "그램"                             ));
            resultArr.push(numberRound3(number * (1.016e+9) + "밀리그램"                            ));
            resultArr.push(numberRound3(number * (1.016e+12) + "마이크로그램"                           ));
            resultArr.push(numberRound3(number * 1.12 + "미국 톤"                           ));
            resultArr.push(numberRound3(number * 160 + "스톤"                                ));
            resultArr.push(numberRound3(number * 2240 + "파운드"                           ));
            resultArr.push(numberRound3(number * 35840 + "온스"                          ));
            break;
        case "short ton":
        case "shortton":
        case "ston":
        case "st":
            resultArr.push(numberRound3(number / 1.102 + "톤"                                ));
            resultArr.push(numberRound3(number * 907.2 + "킬로그램"                                 ));
            resultArr.push(numberRound3(number * 907200 + "그램"                                 ));
            resultArr.push(numberRound3(number * (9.072e+8) + "밀리그램"                            ));
            resultArr.push(numberRound3(number * (9.072e+11) + "마이크로그램"                           ));
            resultArr.push(numberRound3(number / 1.12 + "롱톤"                            ));
            resultArr.push(numberRound3(number * 142.9 + "스톤"                              ));
            resultArr.push(numberRound3(number * 2000 + "파운드"                           ));
            resultArr.push(numberRound3(number * 32000 + "온스"                          ));
            break;
        case "stone":
            resultArr.push(numberRound3(number / 157.5 + "톤"                                ));
            resultArr.push(numberRound3(number * 6.35 + "킬로그램"                                  ));
            resultArr.push(numberRound3(number * 6350 + "그램"                                   ));
            resultArr.push(numberRound3(number * (6.35e+6) + "밀리그램"                             ));
            resultArr.push(numberRound3(number * (6.35e+9) + "마이크로그램"                             ));
            resultArr.push(numberRound3(number / 160 + "롱톤"                             ));
            resultArr.push(numberRound3(number / 142.9 + "미국 톤"                          ));
            resultArr.push(numberRound3(number * 14 + "파운드"                             ));
            resultArr.push(numberRound3(number * 224 + "온스"                            ));
            break;
        case "pound":
        case "pnd":
        case "lb":
            resultArr.push(numberRound3(number / 2205 + "톤"                                 ));
            resultArr.push(numberRound3(number / 2.205 + "킬로그램"                                 ));
            resultArr.push(numberRound3(number * 453.6 + "그램"                                  ));
            resultArr.push(numberRound3(number * 453600 + "밀리그램"                                ));
            resultArr.push(numberRound3(number * (4.536e+8) + "마이크로그램"                            ));
            resultArr.push(numberRound3(number / 2240 + "롱톤"                            ));
            resultArr.push(numberRound3(number / 2000 + "미국 톤"                           ));
            resultArr.push(numberRound3(number / 14 + "스톤"                                 ));
            resultArr.push(numberRound3(number * 16 + "온스"                             ));
            break;
        case "ounce":
        case "once":
        case "oz":
            resultArr.push(numberRound3(number / 35270 + "톤"                                 ));
            resultArr.push(numberRound3(number / 35.274 + "킬로그램"                                 ));
            resultArr.push(numberRound3(number * 28.35 + "그램"                                  ));
            resultArr.push(numberRound3(number * 28350 + "밀리그램"                                ));
            resultArr.push(numberRound3(number * (2.835e+7) + "마이크로그램"                            ));
            resultArr.push(numberRound3(number / 35840 + "롱톤"                            ));
            resultArr.push(numberRound3(number / 32000 + "미국 톤"                           ));
            resultArr.push(numberRound3(number / 224 + "스톤"                                 ));
            resultArr.push(numberRound3(number / 16 + "파운드"                             ));
            break;
    }

    return resultArr;
}

export default convertWeight;