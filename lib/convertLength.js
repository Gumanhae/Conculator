let numberRound3 = function numberRound3(val) {
    let number = val.replace(/[^0-9\.]/g, "");
    let convertStr = val.replace(/[0-9\.]/g, "");

    return (Math.round(number * 1000) / 1000) + convertStr;
}

let convertLength = function convertLength(number, convertStr) {
    let resultArr = [];

    switch(convertStr) {
        case "km":
        case "k":
            resultArr.push(numberRound3(number * 1000 + "미터"                                      ));
            resultArr.push(numberRound3(number * 100000 + "센티미터"                                   ));
            resultArr.push(numberRound3(number * (1e+6) + "밀리미터"                                   ));
            resultArr.push(numberRound3(number * (1e+9) + "마이크로미터"                                   ));
            resultArr.push(numberRound3(number * (1e+12) + "나노미터"                                  ));
            resultArr.push(numberRound3(number / 1.609 + "마일"                                  ));
            resultArr.push(numberRound3(number * 1093.61 + "야드"                                ));
            resultArr.push(numberRound3(number * 3280.84 + "피트"                                ));
            resultArr.push(numberRound3(number * 39370 + "인치"                                  ));
            resultArr.push(numberRound3(number / 1.852 + "해리"                                   ));
            break;
        case "m":
            resultArr.push(numberRound3(number / 1000 + "km"                                     ));
            resultArr.push(numberRound3(number * 100 + "센티미터"                                      ));
            resultArr.push(numberRound3(number * 1000 + "밀리미터"                                     ));
            resultArr.push(numberRound3(number * (1e+6) + "마이크로미터"                                   ));
            resultArr.push(numberRound3(number * (1e+9) + "나노미터"                                   ));
            resultArr.push(numberRound3(number / 1609 + "마일"                                   ));
            resultArr.push(numberRound3(number * 1.9361 + "야드"                                 ));
            resultArr.push(numberRound3(number * 3.28084 + "피트"                                ));
            resultArr.push(numberRound3(number * 39.37 + "인치"                                  ));
            resultArr.push(numberRound3(number / 1852 + "해리"                                    ));
            break;
        case "cm":
            resultArr.push(numberRound3(number / 100000 + "km"                                   ));
            resultArr.push(numberRound3(number / 100 + "미터"                                       ));
            resultArr.push(numberRound3(number * 10 + "밀리미터"                                       ));
            resultArr.push(numberRound3(number * 10000 + "마이크로미터"                                    ));
            resultArr.push(numberRound3(number * (1e+7) + "나노미터"                                   ));
            resultArr.push(numberRound3(number / 160900 + "마일"                                 ));
            resultArr.push(numberRound3(number / 91.44 + "야드"                                  ));
            resultArr.push(numberRound3(number / 30.48 + "피트"                                  ));
            resultArr.push(numberRound3(number / 2.54 + "인치"                                   ));
            resultArr.push(numberRound3(number / 185200 + "해리"                                  ));
            break;
        case "mm":
            resultArr.push(numberRound3(number / (1e+6) + "km"                                   ));
            resultArr.push(numberRound3(number / 1000 + "미터"                                      ));
            resultArr.push(numberRound3(number / 10 + "센티미터"                                       ));
            resultArr.push(numberRound3(number * 1000 + "마이크로미터"                                     ));
            resultArr.push(numberRound3(number * (1e+6) + "나노미터"                                   ));
            resultArr.push(numberRound3(number / (1.609e+6) + "마일"                             ));
            resultArr.push(numberRound3(number / 914.4 + "야드"                                  ));
            resultArr.push(numberRound3(number / 304.8 + "피트"                                  ));
            resultArr.push(numberRound3(number / 25.4 + "인치"                                   ));
            resultArr.push(numberRound3(number / (1.852e+6) + "해리"                              ));
            break;
        case "μm":
        case "um":
            resultArr.push(numberRound3(number / (1e+9) + "km"                                   ));
            resultArr.push(numberRound3(number / (1e+6) + "미터"                                    ));
            resultArr.push(numberRound3(number / 10000 + "센티미터"                                    ));
            resultArr.push(numberRound3(number / 1000 + "밀리미터"                                     ));
            resultArr.push(numberRound3(number * 1000 + "나노미터"                                     ));
            resultArr.push(numberRound3(number / (1.609e+9) + "마일"                             ));
            resultArr.push(numberRound3(number / 914400 + "야드"                                 ));
            resultArr.push(numberRound3(number / 304800 + "피트"                                 ));
            resultArr.push(numberRound3(number / 25400 + "인치"                                  ));
            resultArr.push(numberRound3(number / (1.852e+9) + "해리"                              ));
            break;
        case "nm":
            resultArr.push(numberRound3(number / (1e+12) + "km"                                  ));
            resultArr.push(numberRound3(number / (1e+9) + "미터"                                    ));
            resultArr.push(numberRound3(number / (1e+7) + "센티미터"                                   ));
            resultArr.push(numberRound3(number / (1e+6) + "밀리미터"                                   ));
            resultArr.push(numberRound3(number / 1000 + "마이크로미터"                                     ));
            resultArr.push(numberRound3(number / (1.609e+12) + "마일"                            ));
            resultArr.push(numberRound3(number / (9.144e+8) + "야드"                             ));
            resultArr.push(numberRound3(number / (3.048e+8) + "피트"                             ));
            resultArr.push(numberRound3(number / (2.54e+7) + "인치"                              ));
            resultArr.push(numberRound3(number / (1.852e+12) + "해리"                             ));
            break;
        case "mile":
        case "mil":
        case "mi":
            resultArr.push(numberRound3(number * 1.609 + "km"                                    ));
            resultArr.push(numberRound3(number * 1609 + "미터"                                      ));
            resultArr.push(numberRound3(number * 160900 + "센티미터"                                   ));
            resultArr.push(numberRound3(number * (1.609e+6) + "밀리미터"                               ));
            resultArr.push(numberRound3(number * (1.609e+9) + "마이크로미터"                               ));
            resultArr.push(numberRound3(number * (1.609e+12) + "나노미터"                              ));
            resultArr.push(numberRound3(number * 1760 + "야드"                                   ));
            resultArr.push(numberRound3(number * 5280 + "피트"                                   ));
            resultArr.push(numberRound3(number * 63360 + "인치"                                  ));
            resultArr.push(numberRound3(number / 1.151 + "해리"                                   ));
            break;
        case "yard":
        case "yar":
        case "yd":
            resultArr.push(numberRound3(number / 1094 + "km"                                     ));
            resultArr.push(numberRound3(number / 1.094 + "미터"                                     ));
            resultArr.push(numberRound3(number * 91.44 + "센티미터"                                    ));
            resultArr.push(numberRound3(number * 914.4 + "밀리미터"                                    ));
            resultArr.push(numberRound3(number * 914400 + "마이크로미터"                                   ));
            resultArr.push(numberRound3(number * (9.144e+8) + "나노미터"                               ));
            resultArr.push(numberRound3(number / 1760 + "마일"                                   ));
            resultArr.push(numberRound3(number * 3 + "피트"                                      ));
            resultArr.push(numberRound3(number * 36 + "인치"                                     ));
            resultArr.push(numberRound3(number / 2025 + "해리"                                    ));
            break;
        case "feet":
        case "fee":
        case "fe":
        case "ft":
        case "f":
        case "\'":
            resultArr.push(numberRound3(number / 3281 + "km"                                     ));
            resultArr.push(numberRound3(number / 3.281 + "미터"                                     ));
            resultArr.push(numberRound3(number * 30.48 + "센티미터"                                    ));
            resultArr.push(numberRound3(number * 304.8 + "밀리미터"                                    ));
            resultArr.push(numberRound3(number * 304800 + "마이크로미터"                                   ));
            resultArr.push(numberRound3(number * (3.048e+8) + "나노미터"                               ));
            resultArr.push(numberRound3(number / 5280 + "마일"                                   ));
            resultArr.push(numberRound3(number / 3 + "야드"                                      ));
            resultArr.push(numberRound3(number * 12 + "인치"                                     ));
            resultArr.push(numberRound3(number / 6076 + "해리"                                    ));
            break;
        case "inch":
        case "inc":
        case "in":
        case "i":
        case "\"":
            resultArr.push(numberRound3(number / 39370 + "km"                                    ));
            resultArr.push(numberRound3(number / 39.37 + "미터"                                     ));
            resultArr.push(numberRound3(number * 2.54 + "센티미터"                                     ));
            resultArr.push(numberRound3(number * 25.4 + "밀리미터"                                     ));
            resultArr.push(numberRound3(number * 25400 + "마이크로미터"                                    ));
            resultArr.push(numberRound3(number * (2.54e+7) + "나노미터"                                ));
            resultArr.push(numberRound3(number / 63360 + "마일"                                  ));
            resultArr.push(numberRound3(number / 36 + "야드"                                     ));
            resultArr.push(numberRound3(number / 12 + "피트"                                     ));
            resultArr.push(numberRound3(number / 72910 + "해리"                                   ));
            break;
        case "nmi":
            resultArr.push(numberRound3(number * 1.852 + "km"                                    ));
            resultArr.push(numberRound3(number * 1852 + "미터"                                      ));
            resultArr.push(numberRound3(number * 185200 + "센티미터"                                   ));
            resultArr.push(numberRound3(number * (1.852e+6) + "밀리미터"                               ));
            resultArr.push(numberRound3(number * (1.852e+9) + "마이크로미터"                               ));
            resultArr.push(numberRound3(number * (1.852e+12) + "나노미터"                              ));
            resultArr.push(numberRound3(number * 1.151 + "마일"                                  ));
            resultArr.push(numberRound3(number * 2025 + "야드"                                   ));
            resultArr.push(numberRound3(number * 6076 + "피트"                                   ));
            resultArr.push(numberRound3(number * 72910 + "인치"                                  ));
            break;
    }

    return resultArr;
}

export default convertLength;