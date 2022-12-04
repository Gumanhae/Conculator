let numberRound3 = function numberRound3(val) {
    let number = val.replace(/[^0-9\.]/g, "");
    let convertStr = val.replace(/[0-9\.]/g, "");

    return (Math.round(number * 1000) / 1000) + " " + convertStr;
}

let convertEnergy = function convertEnergy(number, convertStr) {
    let resultArr = [];

    switch(convertStr) {
        case "j":
            resultArr.push(numberRound3(number / 1000 + "킬로줄"                    ));
            resultArr.push(numberRound3(number / 4.184 + "그램 칼로리"              ));
            resultArr.push(numberRound3(number / 4184 + "킬로 칼로리"                        ));
            resultArr.push(numberRound3(number / 3600 + "와트시"                       ));
            resultArr.push(numberRound3(number / (3.6e+6) + "킬로 와트시"                       ));
            resultArr.push(numberRound3(number * (6.242e+18) + "전자볼트"                    ));
            resultArr.push(numberRound3(number / 1055 + "영국 열 단위"                        ));
            resultArr.push(numberRound3(number / (1.055e+8) + "미국 섬"                       ));
            resultArr.push(numberRound3(number / 1.356 + "풋파운드"                       ));
            break;
        case "kj":
            resultArr.push(numberRound3(number * 1000 + "줄"                    ));
            resultArr.push(numberRound3(number * 239 + "그램 칼로리"              ));
            resultArr.push(numberRound3(number / 4.184 + "킬로 칼로리"                        ));
            resultArr.push(numberRound3(number / 3.6 + "와트시"                       ));
            resultArr.push(numberRound3(number / 3600 + "킬로 와트시"                       ));
            resultArr.push(numberRound3(number * (6.242e+21) + "전자볼트"                    ));
            resultArr.push(numberRound3(number / 1.055 + "영국 열 단위"                        ));
            resultArr.push(numberRound3(number / 105500 + "미국 섬"                       ));
            resultArr.push(numberRound3(number * 737.6 + "풋파운드"                       ));
            break;
        case "g calorie":
        case "g c":
        case "gc":
            resultArr.push(numberRound3(number * 4.184 + "줄"                    ));
            resultArr.push(numberRound3(number / 239 + "킬로줄"              ));
            resultArr.push(numberRound3(number / 1000 + "킬로 칼로리"                        ));
            resultArr.push(numberRound3(number / 860.4 + "와트시"                       ));
            resultArr.push(numberRound3(number / 860400 + "킬로 와트시"                       ));
            resultArr.push(numberRound3(number * (2.611e+19) + "전자볼트"                    ));
            resultArr.push(numberRound3(number / 252.2 + "영국 열 단위"                        ));
            resultArr.push(numberRound3(number / (2.521e+7) + "미국 섬"                       ));
            resultArr.push(numberRound3(number * 3.086 + "풋파운드"                       ));
            break;
        case "k calorie":
        case "k c":
        case "kc":
            resultArr.push(numberRound3(number * 4184 + "줄"                    ));
            resultArr.push(numberRound3(number * 4.184 + "킬로줄"              ));
            resultArr.push(numberRound3(number * 1000 + "그램 칼로리"                        ));
            resultArr.push(numberRound3(number * 1.162 + "와트시"                       ));
            resultArr.push(numberRound3(number / 860.4 + "킬로 와트시"                       ));
            resultArr.push(numberRound3(number * (2.611e+22) + "전자볼트"                    ));
            resultArr.push(numberRound3(number * 3.966 + "영국 열 단위"                        ));
            resultArr.push(numberRound3(number / 25210 + "미국 섬"                       ));
            resultArr.push(numberRound3(number * 3086 + "풋파운드"                       ));
            break;
        case "wh":
            resultArr.push(numberRound3(number * 3600 + "줄"                    ));
            resultArr.push(numberRound3(number * 3.6 + "킬로줄"              ));
            resultArr.push(numberRound3(number * 860.4 + "그램 칼로리"                        ));
            resultArr.push(numberRound3(number / 1.162 + "킬로 칼로리"                       ));
            resultArr.push(numberRound3(number / 1000 + "킬로 와트시"                       ));
            resultArr.push(numberRound3(number * (2.247e+22) + "전자볼트"                    ));
            resultArr.push(numberRound3(number * 3.412 + "영국 열 단위"                        ));
            resultArr.push(numberRound3(number / 29300 + "미국 섬"                       ));
            resultArr.push(numberRound3(number * 2655 + "풋파운드"                       ));
            break;
        case "kwh":
            resultArr.push(numberRound3(number * (3.6e+6) + "줄"                    ));
            resultArr.push(numberRound3(number * 3600 + "킬로줄"              ));
            resultArr.push(numberRound3(number * 860400 + "그램 칼로리"                        ));
            resultArr.push(numberRound3(number * 860.4 + "킬로 칼로리"                       ));
            resultArr.push(numberRound3(number * 1000 + "와트시"                       ));
            resultArr.push(numberRound3(number * (2.247e+25) + "전자볼트"                    ));
            resultArr.push(numberRound3(number * 3412 + "영국 열 단위"                        ));
            resultArr.push(numberRound3(number / 29.3 + "미국 섬"                       ));
            resultArr.push(numberRound3(number * (2.655e+6) + "풋파운드"                       ));
            break;
        case "ev":
            resultArr.push(numberRound3(number / (6.242e+18) + "줄"                    ));
            resultArr.push(numberRound3(number / (6.242e+21) + "킬로줄"              ));
            resultArr.push(numberRound3(number / (2.611e+19) + "그램 칼로리"                        ));
            resultArr.push(numberRound3(number / (2.611e+22) + "킬로 칼로리"                       ));
            resultArr.push(numberRound3(number / (2.247e+22) + "와트시"                       ));
            resultArr.push(numberRound3(number / (2.247e+25) + "킬로 와트시"                    ));
            resultArr.push(numberRound3(number / (6.585e+21) + "영국 열 단위"                        ));
            resultArr.push(numberRound3(number / (6.584e+26) + "미국 섬"                       ));
            resultArr.push(numberRound3(number / (8.462e+18) + "풋파운드"                       ));
            break;
        case "btu":
            resultArr.push(numberRound3(number * 1055 + "줄"                    ));
            resultArr.push(numberRound3(number * 1.055 + "킬로줄"              ));
            resultArr.push(numberRound3(number * 252.2 + "그램 칼로리"                        ));
            resultArr.push(numberRound3(number / 3.966 + "킬로 칼로리"                       ));
            resultArr.push(numberRound3(number / 3.412 + "와트시"                       ));
            resultArr.push(numberRound3(number / 3412 + "킬로 와트시"                    ));
            resultArr.push(numberRound3(number * (6.585e+21) + "전자볼트"                        ));
            resultArr.push(numberRound3(number / 99980 + "미국 섬"                       ));
            resultArr.push(numberRound3(number * 778.2 + "풋파운드"                       ));
            break;
        case "us therm":
        case "ustherm":
        case "therm":
            resultArr.push(numberRound3(number * (1.055e+8) + "줄"                    ));
            resultArr.push(numberRound3(number * 105500 + "킬로줄"              ));
            resultArr.push(numberRound3(number * (2.521e+7) + "그램 칼로리"                        ));
            resultArr.push(numberRound3(number * 25210 + "킬로 칼로리"                       ));
            resultArr.push(numberRound3(number * 29300 + "와트시"                       ));
            resultArr.push(numberRound3(number * 29.3 + "킬로 와트시"                    ));
            resultArr.push(numberRound3(number * (6.584e+26) + "전자볼트"                        ));
            resultArr.push(numberRound3(number * 99980 + "영국 열 단위"                       ));
            resultArr.push(numberRound3(number * (7.78e+7) + "풋파운드"                       ));
            break;
        case "foot pound":
        case "footpound":
        case "fp":
            resultArr.push(numberRound3(number * 1.356 + "줄"                    ));
            resultArr.push(numberRound3(number / 737.6 + "킬로줄"              ));
            resultArr.push(numberRound3(number / 3.086 + "그램 칼로리"                        ));
            resultArr.push(numberRound3(number / 3086 + "킬로 칼로리"                       ));
            resultArr.push(numberRound3(number / 2655 + "와트시"                       ));
            resultArr.push(numberRound3(number / (2.655e+6) + "킬로 와트시"                    ));
            resultArr.push(numberRound3(number * (8.462e+18) + "전자볼트"                        ));
            resultArr.push(numberRound3(number / 778.2 + "영국 열 단위"                       ));
            resultArr.push(numberRound3(number / (7.78e+7) + "미국 섬"                       ));
            break;
    }

    return resultArr;
}

export default convertEnergy;