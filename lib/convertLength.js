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
            resultArr.push(numberRound3(number * 1000 + "m"                                      ));
            resultArr.push(numberRound3(number * 100000 + "cm"                                   ));
            resultArr.push(numberRound3(number * (1e+6) + "mm"                                   ));
            resultArr.push(numberRound3(number * (1e+9) + "μm"                                   ));
            resultArr.push(numberRound3(number * (1e+12) + "nm"                                  ));
            resultArr.push(numberRound3(number / 1.609 + "mile"                                  ));
            resultArr.push(numberRound3(number * 1093.61 + "yard"                                ));
            resultArr.push(numberRound3(number * 3280.84 + "feet"                                ));
            resultArr.push(numberRound3(number * 39370 + "inch"                                  ));
            resultArr.push(numberRound3(number / 1.852 + "nmi"                                   ));
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
        case "um":
            resultArr.push(numberRound3(number / (1e+9) + "km"                                   ));
            resultArr.push(numberRound3(number / (1e+6) + "m"                                    ));
            resultArr.push(numberRound3(number / 10000 + "cm"                                    ));
            resultArr.push(numberRound3(number / 1000 + "mm"                                     ));
            resultArr.push(numberRound3(number * 1000 + "nm"                                     ));
            resultArr.push(numberRound3(number / (1.609e+9) + "mile"                             ));
            resultArr.push(numberRound3(number / 914400 + "yard"                                 ));
            resultArr.push(numberRound3(number / 304800 + "feet"                                 ));
            resultArr.push(numberRound3(number / 25400 + "inch"                                  ));
            resultArr.push(numberRound3(number / (1.852e+9) + "nmi"                              ));
            break;
        case "nm":
            resultArr.push(numberRound3(number / (1e+12) + "km"                                  ));
            resultArr.push(numberRound3(number / (1e+9) + "m"                                    ));
            resultArr.push(numberRound3(number / (1e+7) + "cm"                                   ));
            resultArr.push(numberRound3(number / (1e+6) + "mm"                                   ));
            resultArr.push(numberRound3(number / 1000 + "μm"                                     ));
            resultArr.push(numberRound3(number / (1.609e+12) + "mile"                            ));
            resultArr.push(numberRound3(number / (9.144e+8) + "yard"                             ));
            resultArr.push(numberRound3(number / (3.048e+8) + "feet"                             ));
            resultArr.push(numberRound3(number / (2.54e+7) + "inch"                              ));
            resultArr.push(numberRound3(number / (1.852e+12) + "nmi"                             ));
            break;
        case "mile":
        case "mil":
        case "mi":
            resultArr.push(numberRound3(number * 1.609 + "km"                                    ));
            resultArr.push(numberRound3(number * 1609 + "m"                                      ));
            resultArr.push(numberRound3(number * 160900 + "cm"                                   ));
            resultArr.push(numberRound3(number * (1.609e+6) + "mm"                               ));
            resultArr.push(numberRound3(number * (1.609e+9) + "μm"                               ));
            resultArr.push(numberRound3(number * (1.609e+12) + "nm"                              ));
            resultArr.push(numberRound3(number * 1760 + "yard"                                   ));
            resultArr.push(numberRound3(number * 5280 + "feet"                                   ));
            resultArr.push(numberRound3(number * 63360 + "inch"                                  ));
            resultArr.push(numberRound3(number / 1.151 + "nmi"                                   ));
            break;
        case "yard":
        case "yar":
        case "yd":
            resultArr.push(numberRound3(number / 1094 + "km"                                     ));
            resultArr.push(numberRound3(number / 1.094 + "m"                                     ));
            resultArr.push(numberRound3(number * 91.44 + "cm"                                    ));
            resultArr.push(numberRound3(number * 914.4 + "mm"                                    ));
            resultArr.push(numberRound3(number * 914400 + "μm"                                   ));
            resultArr.push(numberRound3(number * (9.144e+8) + "nm"                               ));
            resultArr.push(numberRound3(number / 1760 + "mile"                                   ));
            resultArr.push(numberRound3(number * 3 + "feet"                                      ));
            resultArr.push(numberRound3(number * 36 + "inch"                                     ));
            resultArr.push(numberRound3(number / 2025 + "nmi"                                    ));
            break;
        case "feet":
        case "fee":
        case "fe":
        case "ft":
        case "f":
        case "\'":
            resultArr.push(numberRound3(number / 3281 + "km"                                     ));
            resultArr.push(numberRound3(number / 3.281 + "m"                                     ));
            resultArr.push(numberRound3(number * 30.48 + "cm"                                    ));
            resultArr.push(numberRound3(number * 304.8 + "mm"                                    ));
            resultArr.push(numberRound3(number * 304800 + "μm"                                   ));
            resultArr.push(numberRound3(number * (3.048e+8) + "nm"                               ));
            resultArr.push(numberRound3(number / 5280 + "mile"                                   ));
            resultArr.push(numberRound3(number / 3 + "yard"                                      ));
            resultArr.push(numberRound3(number * 12 + "inch"                                     ));
            resultArr.push(numberRound3(number / 6076 + "nmi"                                    ));
            break;
        case "inch":
        case "inc":
        case "in":
        case "i":
        case "\"":
            resultArr.push(numberRound3(number / 39370 + "km"                                    ));
            resultArr.push(numberRound3(number / 39.37 + "m"                                     ));
            resultArr.push(numberRound3(number * 2.54 + "cm"                                     ));
            resultArr.push(numberRound3(number * 25.4 + "mm"                                     ));
            resultArr.push(numberRound3(number * 25400 + "μm"                                    ));
            resultArr.push(numberRound3(number * (2.54e+7) + "nm"                                ));
            resultArr.push(numberRound3(number / 63360 + "mile"                                  ));
            resultArr.push(numberRound3(number / 36 + "yard"                                     ));
            resultArr.push(numberRound3(number / 12 + "feet"                                     ));
            resultArr.push(numberRound3(number / 72910 + "nmi"                                   ));
            break;
        case "nmi":
            resultArr.push(numberRound3(number * 1.852 + "km"                                    ));
            resultArr.push(numberRound3(number * 1852 + "m"                                      ));
            resultArr.push(numberRound3(number * 185200 + "cm"                                   ));
            resultArr.push(numberRound3(number * (1.852e+6) + "mm"                               ));
            resultArr.push(numberRound3(number * (1.852e+9) + "μm"                               ));
            resultArr.push(numberRound3(number * (1.852e+12) + "nm"                              ));
            resultArr.push(numberRound3(number * 1.151 + "mile"                                  ));
            resultArr.push(numberRound3(number * 2025 + "yard"                                   ));
            resultArr.push(numberRound3(number * 6076 + "feet"                                   ));
            resultArr.push(numberRound3(number * 72910 + "inch"                                  ));
            break;
    }

    return resultArr;
}

export default convertLength;