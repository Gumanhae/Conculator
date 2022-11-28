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
        case "㎢":
            resultArr.push(numberRound3(number * 1000 + "㎡"                                      ));
            resultArr.push(numberRound3(number * 100000 + "mi²"                                   ));
            resultArr.push(numberRound3(number * (1e+6) + "yd²"                                   ));
            resultArr.push(numberRound3(number * (1e+9) + "ft²"                                   ));
            resultArr.push(numberRound3(number * (1e+12) + "in²"                                  ));
            resultArr.push(numberRound3(number / 1.609 * 1000 + "㏊"                              ));
            resultArr.push(numberRound3(number * 1093.61 * 1000 + "acre"                          ));
            break;
    }

    return resultArr;
}

export default convertArea;