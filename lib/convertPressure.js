let numberRound3 = function numberRound3(val) {
    let number = val.replace(/[^0-9\.]/g, "");
    let convertStr = val.replace(/[0-9\.]/g, "");

    return (Math.round(number * 1000) / 1000) + " " + convertStr;
}

let convertPressure = function convertPressure(number, convertStr) {
    let resultArr = [];

    switch(convertStr) {
        case "bar":
            resultArr.push(numberRound3(number * 14.504 + "제곱인치 당 파운드힘"                       ));
            resultArr.push(numberRound3(number * 750.1 + "토르"                       ));
            resultArr.push(numberRound3(number * 100000 + "파스칼"                    ));
            resultArr.push(numberRound3(number / 1.013 + "atm"                        ));
            break;
        case "psi":
        case "ps":
            resultArr.push(numberRound3(number / 14.504 + "바"                       ));
            resultArr.push(numberRound3(number * 51.715 + "토르"                      ));
            resultArr.push(numberRound3(number * 6895 + "파스칼"                      ));
            resultArr.push(numberRound3(number / 14.696 + "atm"                       ));
            break;
        case "torr":
        case "tor":
            resultArr.push(numberRound3(number / 750.1 + "바"                        ));
            resultArr.push(numberRound3(number / 51.715 + "제곱인치 당 파운드힘"                       ));
            resultArr.push(numberRound3(number * 133.3 + "파스칼"                     ));
            resultArr.push(numberRound3(number / 760 + "atm"                          ));
            break;
        case "pascal":
        case "pas":
        case "pa":
            resultArr.push(numberRound3(number / 100000 + "바"                       ));
            resultArr.push(numberRound3(number / 6895 + "제곱인치 당 파운드힘"                         ));
            resultArr.push(numberRound3(number / 133.3 + "토르"                       ));
            resultArr.push(numberRound3(number / 101300 + "atm"                       ));
            break;
        case "atm":
        case "at":
            resultArr.push(numberRound3(number * 1.013 + "바"                        ));
            resultArr.push(numberRound3(number * 14.696 + "제곱인치 당 파운드힘"                       ));
            resultArr.push(numberRound3(number * 760 + "토르"                         ));
            resultArr.push(numberRound3(number * 101300 + "파스칼"                    ));
            break;
    }

    return resultArr;
}

export default convertPressure;