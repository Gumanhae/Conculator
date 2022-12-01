let numberRound3 = function numberRound3(val) {
    let number = val.replace(/[^0-9\.]/g, "");
    let convertStr = val.replace(/[0-9\.]/g, "");

    return (Math.round(number * 1000) / 1000) + convertStr;
}

let convertTime = function convertTime(number, convertStr) {
    let resultArr = [];

    switch(convertStr) {

    }

    return resultArr;
}

export default convertTime;