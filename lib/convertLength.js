let numberRound3 = function numberRound3(val) {
    let number = val.replace(/[^0-9\.]/g, "");
    let convertStr = val.replace(/[0-9\.]/g, "");

    return (Math.round(number * 1000) / 1000) + convertStr;
}

let convertLength = function convertLength(number, convertStr) {

    let resultArr = [];

    switch(convertStr) {
        case "km", "k":
            resultArr.push(numberRound3(number * 1000 + "m"                                      ));
            resultArr.push(numberRound3(number * 100000 + "cm"                                   ));
            resultArr.push(numberRound3(number * (1e+6) + "mm"                                   ));
            resultArr.push(numberRound3(number * (1e+9) + "μm"                                   ));
            resultArr.push(numberRound3(number * (1e+12) + "nm"                                  ));
            resultArr.push(numberRound3(number / 1.609 * 1000 + "mile"                           ));
            resultArr.push(numberRound3(number * 1093.61 * 1000 + "yard"                         ));
            resultArr.push(numberRound3(number * 3280.84 + "feet"                                ));
            resultArr.push(numberRound3(number * 39370 + "inch"                                  ));
            resultArr.push(numberRound3(number / 1.852 + 1000 + "nmi"                            ));
            break;
        case "m":
            resultArr.push(numberRound3(number / 1000 + "km"                                     ));
            resultArr.push(numberRound3(number * 100 + "cm"                                      ));
            resultArr.push(numberRound3(number * 1000 + "mm"                                     ));
            resultArr.push(numberRound3(number * (1e+6) + "μm"                                   ));
            resultArr.push(numberRound3(number * (1e+9) + "nm"                                   ));
            resultArr.push(numberRound3(number / 1609 + "mile"                                   ));
            resultArr.push(numberRound3(number * 1.9361 + "yard"                                 ));
            resultArr.push(numberRound3(number * 3.28084 + "feet"                                ));
            resultArr.push(numberRound3(number * 39.37 + "inch"                                  ));
            resultArr.push(numberRound3(number / 1852 + "nmi"                                    ));
            break;
        case "cm":
            resultArr.push(numberRound3(number / 100000 + "km"                                   ));
            resultArr.push(numberRound3(number / 100 + "m"                                       ));
            resultArr.push(numberRound3(number * 10 + "mm"                                       ));
            resultArr.push(numberRound3(number * 10000 + "μm"                                    ));
            resultArr.push(numberRound3(number * (1e+7) + "nm"                                   ));
            resultArr.push(numberRound3(number / 160900 + "mile"                                 ));
            resultArr.push(numberRound3(number / 91.44 + "yard"                                  ));
            resultArr.push(numberRound3(number / 30.48 + "feet"                                  ));
            resultArr.push(numberRound3(number / 2.54 + "inch"                                   ));
            resultArr.push(numberRound3(number / 185200 + "nmi"                                  ));
            break;
        case "mm":
            resultArr.push(numberRound3(number / (1e+6) + "km"                                   ));
            resultArr.push(numberRound3(number / 1000 + "m"                                      ));
            resultArr.push(numberRound3(number / 10 + "cm"                                       ));
            resultArr.push(numberRound3(number * 1000 + "μm"                                     ));
            resultArr.push(numberRound3(number * (1e+6) + "nm"                                   ));
            resultArr.push(numberRound3(number / (1.609e+6) + "mile"                             ));
            resultArr.push(numberRound3(number / 914.4 + "yard"                                  ));
            resultArr.push(numberRound3(number / 304.8 + "feet"                                  ));
            resultArr.push(numberRound3(number / 25.4 + "inch"                                   ));
            resultArr.push(numberRound3(number / (1.852e+6) + "nmi"                              ));
            break;
        case "μm":
            break;
        case "nm":
            break;
        case "mile","mil" ,"mi":
            break;
        case "yard","yar", "yd":
            break;
        case "feet", "fee", "fe", "ft","f", "\'":
            break;
        case "inch", "inc", "in", "i", "\"":
            break;
        case "nmi":
            break;
    }

    return resultArr;
}

export default convertLength;