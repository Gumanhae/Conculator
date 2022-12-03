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
            resultArr.push(numberRound3(number * 1.467 + "초당 피트"                                  ));
            resultArr.push(numberRound3(number / 2.237 + "미터 매 초"                                   ));
            resultArr.push(numberRound3(number * 1.609 + "시간당 킬로미터"                                  ));
            resultArr.push(numberRound3(number / 1.151 + "노트"                                  ));
            break;
        case "ft/s":
        case "fts":
        case "ft":
            resultArr.push(numberRound3(number / 1.467 + "시간당 마일"                                  ));
            resultArr.push(numberRound3(number / 3.281 + "미터 매 초"                                   ));
            resultArr.push(numberRound3(number * 1.097 + "시간당 킬로미터"                                  ));
            resultArr.push(numberRound3(number / 1.688 + "노트"                                  ));
            break;
        case "m/s":
        case "ms":
            resultArr.push(numberRound3(number * 2.237 + "시간당 마일"                                  ));
            resultArr.push(numberRound3(number * 3.281 + "초당 피트"                                  ));
            resultArr.push(numberRound3(number * 3.6 + "시간당 킬로미터"                                    ));
            resultArr.push(numberRound3(number * 1.944 + "노트"                                  ));
            break;
        case "km/h":
        case "kmh":
        case "km":
            resultArr.push(numberRound3(number / 1.609 + "시간당 마일"                                  ));
            resultArr.push(numberRound3(number / 1.097 + "초당 피트"                                  ));
            resultArr.push(numberRound3(number / 3.6 + "미터 매 초"                                     ));
            resultArr.push(numberRound3(number / 1.852 + "노트"                                  ));
            break;
        case "knot":
        case "note":
        case "kn":
            resultArr.push(numberRound3(number * 1.151 + "시간당 마일"                                  ));
            resultArr.push(numberRound3(number * 1.688 + "초당 피트"                                  ));
            resultArr.push(numberRound3(number / 1.944 + "미터 매 초"                                   ));
            resultArr.push(numberRound3(number * 1.852 + "시간당 킬로미터"                                  ));
            break;
    }

    return resultArr;
}

export default convertSpeed;