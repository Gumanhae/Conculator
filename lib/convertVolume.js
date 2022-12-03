let numberRound3 = function numberRound3(val) {
    let number = val.replace(/[^0-9\.]/g, "");
    let convertStr = val.replace(/[0-9\.]/g, "");

    return (Math.round(number * 1000) / 1000) + convertStr;
}

let convertVolume = function convertVolume(number, convertStr) {
    let resultArr = [];

    switch(convertStr) {
        case "us gallon":
        case "u g":
        case "ug":
            resultArr.push(numberRound3(number * 4 + "미국 액량 쿼트"                            ));
            resultArr.push(numberRound3(number * 8 + "미국 액량 파인트"                             ));
            resultArr.push(numberRound3(number * 15.773 + "미국 컵"                         ));
            resultArr.push(numberRound3(number * 128 + "미국 플루이드 온스"                    ));
            resultArr.push(numberRound3(number * 256 + "미국 테이블스푼"                     ));
            resultArr.push(numberRound3(number * 768 + "미국 티스푼"                       ));
            resultArr.push(numberRound3(number / 264.2 + "세제곱미터"                              ));
            resultArr.push(numberRound3(number * 3.785 + "리터"                               ));
            resultArr.push(numberRound3(number * 3785 + "밀리리터"                               ));
            resultArr.push(numberRound3(number / 1.201 + "영국 갤런"                 ));
            resultArr.push(numberRound3(number * 3.331 + "영국 쿼트"                  ));
            resultArr.push(numberRound3(number * 6.661 + "영국 파인트"                   ));
            resultArr.push(numberRound3(number * 13.323 + "영국 컵"                   ));
            resultArr.push(numberRound3(number * 133.22 + "영국 플루이드 온스"           ));
            resultArr.push(numberRound3(number * 213.2 + "영국 테이블스푼"             ));
            resultArr.push(numberRound3(number * 639.5 + "영국 티스푼"               ));
            resultArr.push(numberRound3(number / 7.48 + "세제곱피트"                              ));
            resultArr.push(numberRound3(number * 231 + "세제곱인치"                               ));
            break;
        case "us quart":
        case "u q":
        case "uq" :
            resultArr.push(numberRound3(number / 4 + "미국 액량 갤런"                           ));
            resultArr.push(numberRound3(number * 2 + "미국 액량 파인트"                             ));
            resultArr.push(numberRound3(number * 3.943 + "미국 컵"                          ));
            resultArr.push(numberRound3(number * 32 + "미국 플루이드 온스"                     ));
            resultArr.push(numberRound3(number * 64 + "미국 테이블스푼"                      ));
            resultArr.push(numberRound3(number * 192 + "미국 티스푼"                       ));
            resultArr.push(numberRound3(number / 1057 + "세제곱미터"                               ));
            resultArr.push(numberRound3(number / 1.057 + "리터"                               ));
            resultArr.push(numberRound3(number * 946.4 + "밀리리터"                              ));
            resultArr.push(numberRound3(number / 4.804 + "영국 갤런"                 ));
            resultArr.push(numberRound3(number / 1.201 + "영국 쿼트"                  ));
            resultArr.push(numberRound3(number * 1.665 + "영국 파인트"                   ));
            resultArr.push(numberRound3(number * 3.331 + "영국 컵"                    ));
            resultArr.push(numberRound3(number * 33.307 + "영국 플루이드 온스"           ));
            resultArr.push(numberRound3(number * 53.291 + "영국 테이블스푼"            ));
            resultArr.push(numberRound3(number * 159.9 + "영국 티스푼"               ));
            resultArr.push(numberRound3(number / 29.922 + "세제곱피트"                            ));
            resultArr.push(numberRound3(number * 57.75 + "세제곱인치"                             ));
            break;
        case "us pint":
        case "u p":
        case "up":
            resultArr.push(numberRound3(number / 8 + "미국 액량 갤런"                           ));
            resultArr.push(numberRound3(number / 2 + "미국 액량 쿼트"                            ));
            resultArr.push(numberRound3(number * 1.972 + "미국 컵"                          ));
            resultArr.push(numberRound3(number * 16 + "미국 플루이드 온스"                     ));
            resultArr.push(numberRound3(number * 32 + "미국 테이블스푼"                      ));
            resultArr.push(numberRound3(number * 96 + "미국 티스푼"                        ));
            resultArr.push(numberRound3(number / 2113 + "세제곱미터"                               ));
            resultArr.push(numberRound3(number / 2.113 + "리터"                               ));
            resultArr.push(numberRound3(number * 473.2 + "밀리리터"                              ));
            resultArr.push(numberRound3(number / 9.608 + "영국 갤런"                 ));
            resultArr.push(numberRound3(number / 2.402 + "영국 쿼트"                  ));
            resultArr.push(numberRound3(number / 1.201 + "영국 파인트"                   ));
            resultArr.push(numberRound3(number * 1.665 + "영국 컵"                    ));
            resultArr.push(numberRound3(number * 16.653 + "영국 플루이드 온스"           ));
            resultArr.push(numberRound3(number * 26.646 + "영국 테이블스푼"            ));
            resultArr.push(numberRound3(number * 79.937 + "영국 티스푼"              ));
            resultArr.push(numberRound3(number / 59.844 + "세제곱피트"                            ));
            resultArr.push(numberRound3(number * 28.875 + "세제곱인치"                            ));
            break;
        case "us cup":
        case "u c":
        case "uc":
            resultArr.push(numberRound3(number / 15.772 + "미국 액량 갤런"                      ));
            resultArr.push(numberRound3(number / 3.943 + "미국 액량 쿼트"                        ));
            resultArr.push(numberRound3(number / 1.972 + "미국 액량 파인트"                         ));
            resultArr.push(numberRound3(number * 8.115 + "미국 플루이드 온스"                  ));
            resultArr.push(numberRound3(number * 16.231 + "미국 테이블스푼"                  ));
            resultArr.push(numberRound3(number * 48.692 + "미국 티스푼"                    ));
            resultArr.push(numberRound3(number / 4167 + "세제곱미터"                               ));
            resultArr.push(numberRound3(number / 4.167 + "리터"                               ));
            resultArr.push(numberRound3(number * 240 + "밀리리터"                                ));
            resultArr.push(numberRound3(number / 18.942 + "영국 갤런"                ));
            resultArr.push(numberRound3(number / 4.736 + "영국 쿼트"                  ));
            resultArr.push(numberRound3(number / 2.368 + "영국 파인트"                   ));
            resultArr.push(numberRound3(number / 1.184 + "영국 컵"                    ));
            resultArr.push(numberRound3(number * 8.447 + "영국 플루이드 온스"            ));
            resultArr.push(numberRound3(number * 13.515 + "영국 테이블스푼"            ));
            resultArr.push(numberRound3(number * 40.545 + "영국 티스푼"              ));
            resultArr.push(numberRound3(number / 118 + "세제곱피트"                               ));
            resultArr.push(numberRound3(number * 14.646 + "세제곱인치"                            ));
            break;
        case "us fluid ounce":
        case "us ounce":
        case "u o":
        case "uo":
            resultArr.push(numberRound3(number / 128 + "미국 액량 갤런"                         ));
            resultArr.push(numberRound3(number / 32 + "미국 액량 쿼트"                           ));
            resultArr.push(numberRound3(number / 16 + "미국 액량 파인트"                            ));
            resultArr.push(numberRound3(number / 8.115 + "미국 컵"                          ));
            resultArr.push(numberRound3(number * 2 + "미국 테이블스푼"                       ));
            resultArr.push(numberRound3(number * 6 + "미국 티스푼"                         ));
            resultArr.push(numberRound3(number / 33810 + "세제곱미터"                              ));
            resultArr.push(numberRound3(number / 33.814 + "리터"                              ));
            resultArr.push(numberRound3(number * 29.574 + "밀리리터"                             ));
            resultArr.push(numberRound3(number / 153.7 + "영국 갤런"                 ));
            resultArr.push(numberRound3(number / 38.43 + "영국 쿼트"                  ));
            resultArr.push(numberRound3(number / 19.215 + "영국 파인트"                  ));
            resultArr.push(numberRound3(number / 9.608 + "영국 컵"                    ));
            resultArr.push(numberRound3(number * 1.041 + "영국 플루이드 온스"            ));
            resultArr.push(numberRound3(number * 1.665 + "영국 테이블스푼"             ));
            resultArr.push(numberRound3(number * 4.996 + "영국 티스푼"               ));
            resultArr.push(numberRound3(number / 957.5 + "세제곱피트"                             ));
            resultArr.push(numberRound3(number * 1.805 + "세제곱인치"                             ));
            break;
        case "us tablespoon":
        case "us t":
        case "u t":
        case "ut":
            resultArr.push(numberRound3(number / 256 + "미국 액량 갤런"                         ));
            resultArr.push(numberRound3(number / 64 + "미국 액량 쿼트"                           ));
            resultArr.push(numberRound3(number / 32 + "미국 액량 파인트"                            ));
            resultArr.push(numberRound3(number / 16.231 + "미국 컵"                         ));
            resultArr.push(numberRound3(number / 2 + "미국 플루이드 온스"                      ));
            resultArr.push(numberRound3(number * 3 + "미국 티스푼"                         ));
            resultArr.push(numberRound3(number / 67630 + "세제곱미터"                              ));
            resultArr.push(numberRound3(number / 67.628 + "리터"                              ));
            resultArr.push(numberRound3(number * 14.787 + "밀리리터"                             ));
            resultArr.push(numberRound3(number / 307.4 + "영국 갤런"                 ));
            resultArr.push(numberRound3(number / 76.861 + "영국 쿼트"                 ));
            resultArr.push(numberRound3(number / 38.43 + "영국 파인트"                   ));
            resultArr.push(numberRound3(number / 19.215 + "영국 컵"                   ));
            resultArr.push(numberRound3(number / 1.922 + "영국 플루이드 온스"            ));
            resultArr.push(numberRound3(number / 1.201 + "영국 테이블스푼"             ));
            resultArr.push(numberRound3(number * 2.498 + "영국 티스푼"               ));
            resultArr.push(numberRound3(number / 1915 + "세제곱피트"                              ));
            resultArr.push(numberRound3(number / 1.108 + "세제곱인치"                             ));
            break;
        case "us teaspoon":
        case "us tea":
            resultArr.push(numberRound3(number / 768 + "미국 액량 갤런"                         ));
            resultArr.push(numberRound3(number / 192 + "미국 액량 쿼트"                          ));
            resultArr.push(numberRound3(number / 96 + "미국 액량 파인트"                            ));
            resultArr.push(numberRound3(number / 48.692 + "미국 컵"                         ));
            resultArr.push(numberRound3(number / 6 + "미국 플루이드 온스"                      ));
            resultArr.push(numberRound3(number / 3 + "미국 테이블스푼"                       ));
            resultArr.push(numberRound3(number / 202900 + "세제곱미터"                             ));
            resultArr.push(numberRound3(number / 202.9 + "리터"                               ));
            resultArr.push(numberRound3(number * 4.929 + "밀리리터"                              ));
            resultArr.push(numberRound3(number / 922.3 + "영국 갤런"                 ));
            resultArr.push(numberRound3(number / 230.6 + "영국 쿼트"                  ));
            resultArr.push(numberRound3(number / 115.3 + "영국 파인트"                   ));
            resultArr.push(numberRound3(number / 57.646 + "영국 컵"                   ));
            resultArr.push(numberRound3(number / 5.765 + "영국 플루이드 온스"            ));
            resultArr.push(numberRound3(number / 3.603 + "영국 테이블스푼"             ));
            resultArr.push(numberRound3(number / 1.201 + "영국 티스푼"               ));
            resultArr.push(numberRound3(number / 5745 + "세제곱피트"                              ));
            resultArr.push(numberRound3(number / 3.325 + "세제곱인치"                             ));
            break;
        case "m3":
        case "m³":
        case "m":
            resultArr.push(numberRound3(number * 264.2 + "미국 액량 갤런"                       ));
            resultArr.push(numberRound3(number * 1057 + "미국 액량 쿼트"                         ));
            resultArr.push(numberRound3(number * 2113 + "미국 액량 파인트"                          ));
            resultArr.push(numberRound3(number * 4167 + "미국 컵"                           ));
            resultArr.push(numberRound3(number * 33810 + "미국 플루이드 온스"                  ));
            resultArr.push(numberRound3(number * 67630 + "미국 테이블스푼"                   ));
            resultArr.push(numberRound3(number * 202900 + "미국 티스푼"                    ));
            resultArr.push(numberRound3(number * 1000 + "리터"                                ));
            resultArr.push(numberRound3(number * (1e+6) + "밀리리터"                             ));
            resultArr.push(numberRound3(number * 220 + "영국 갤런"                   ));
            resultArr.push(numberRound3(number * 879.9 + "영국 쿼트"                  ));
            resultArr.push(numberRound3(number * 1760 + "영국 파인트"                    ));
            resultArr.push(numberRound3(number * 3520 + "영국 컵"                     ));
            resultArr.push(numberRound3(number * 35200 + "영국 플루이드 온스"            ));
            resultArr.push(numberRound3(number * 56310 + "영국 테이블스푼"             ));
            resultArr.push(numberRound3(number * 168900 + "영국 티스푼"              ));
            resultArr.push(numberRound3(number * 35.315 + "세제곱피트"                            ));
            resultArr.push(numberRound3(number * 61020 + "세제곱인치"                             ));
            break;
        case "l":
            resultArr.push(numberRound3(number / 3.785 + "미국 액량 갤런"                       ));
            resultArr.push(numberRound3(number * 1.057 + "미국 액량 쿼트"                        ));
            resultArr.push(numberRound3(number * 2.113 + "미국 액량 파인트"                         ));
            resultArr.push(numberRound3(number * 4.167 + "미국 컵"                          ));
            resultArr.push(numberRound3(number * 33.814 + "미국 플루이드 온스"                 ));
            resultArr.push(numberRound3(number * 67.628 + "미국 테이블스푼"                  ));
            resultArr.push(numberRound3(number * 202.9 + "미국 티스푼"                     ));
            resultArr.push(numberRound3(number / 1000 + "세제곱미터"                               ));
            resultArr.push(numberRound3(number * 1000 + "밀리리터"                               ));
            resultArr.push(numberRound3(number / 4.546 + "영국 갤런"                 ));
            resultArr.push(numberRound3(number / 1.136 + "영국 쿼트"                  ));
            resultArr.push(numberRound3(number * 1.76 + "영국 파인트"                    ));
            resultArr.push(numberRound3(number * 3.52 + "영국 컵"                     ));
            resultArr.push(numberRound3(number * 35.195 + "영국 플루이드 온스"           ));
            resultArr.push(numberRound3(number * 56.312 + "영국 테이블스푼"            ));
            resultArr.push(numberRound3(number * 168.9 + "영국 티스푼"               ));
            resultArr.push(numberRound3(number / 28.317 + "세제곱피트"                            ));
            resultArr.push(numberRound3(number * 61.024 + "세제곱인치"                            ));
            break;
        case "ml":
            resultArr.push(numberRound3(number / 3785 + "미국 액량 갤런"                        ));
            resultArr.push(numberRound3(number / 946.4 + "미국 액량 쿼트"                        ));
            resultArr.push(numberRound3(number / 473.2 + "미국 액량 파인트"                         ));
            resultArr.push(numberRound3(number / 240 + "미국 컵"                            ));
            resultArr.push(numberRound3(number / 29.574 + "미국 플루이드 온스"                 ));
            resultArr.push(numberRound3(number / 14.787 + "미국 테이블스푼"                  ));
            resultArr.push(numberRound3(number / 4.929 + "미국 티스푼"                     ));
            resultArr.push(numberRound3(number / (1e+6) + "세제곱미터"                             ));
            resultArr.push(numberRound3(number / 1000 + "리터"                                ));
            resultArr.push(numberRound3(number / 4546 + "영국 갤런"                  ));
            resultArr.push(numberRound3(number / 1137 + "영국 쿼트"                   ));
            resultArr.push(numberRound3(number / 568.3 + "영국 파인트"                   ));
            resultArr.push(numberRound3(number / 284.1 + "영국 컵"                    ));
            resultArr.push(numberRound3(number / 28.413 + "영국 플루이드 온스"           ));
            resultArr.push(numberRound3(number / 17.758 + "영국 테이블스푼"            ));
            resultArr.push(numberRound3(number / 5.919 + "영국 티스푼"               ));
            resultArr.push(numberRound3(number / 28320 + "세제곱피트"                             ));
            resultArr.push(numberRound3(number / 16.387 + "세제곱인치"                            ));
            break;
        case "imperial gallon":
        case "i g":
        case "ig":
            resultArr.push(numberRound3(number * 1.201 + "미국 액량 갤런"                       ));
            resultArr.push(numberRound3(number * 4.804 + "미국 액량 쿼트"                        ));
            resultArr.push(numberRound3(number * 9.608 + "미국 액량 파인트"                         ));
            resultArr.push(numberRound3(number * 18.942 + "미국 컵"                         ));
            resultArr.push(numberRound3(number * 153.7 + "미국 플루이드 온스"                  ));
            resultArr.push(numberRound3(number * 307.4 + "미국 테이블스푼"                   ));
            resultArr.push(numberRound3(number * 922.3 + "미국 티스푼"                     ));
            resultArr.push(numberRound3(number / 220 + "세제곱미터"                                ));
            resultArr.push(numberRound3(number * 4.546 + "리터"                               ));
            resultArr.push(numberRound3(number * 4546 + "밀리리터"                               ));
            resultArr.push(numberRound3(number * 4 + "영국 쿼트"                      ));
            resultArr.push(numberRound3(number * 8 + "영국 파인트"                       ));
            resultArr.push(numberRound3(number * 16 + "영국 컵"                       ));
            resultArr.push(numberRound3(number * 160 + "영국 플루이드 온스"              ));
            resultArr.push(numberRound3(number * 256 + "영국 테이블스푼"               ));
            resultArr.push(numberRound3(number * 768 + "영국 티스푼"                 ));
            resultArr.push(numberRound3(number / 6.229 + "세제곱피트"                             ));
            resultArr.push(numberRound3(number * 277.4 + "세제곱인치"                             ));
            break;
        case "imperial quart":
        case "i q":
        case "iq":
            resultArr.push(numberRound3(number / 3.331 + "미국 액량 갤런"                       ));
            resultArr.push(numberRound3(number * 1.201 + "미국 액량 쿼트"                        ));
            resultArr.push(numberRound3(number * 2.402 + "미국 액량 파인트"                         ));
            resultArr.push(numberRound3(number * 4.736 + "미국 컵"                          ));
            resultArr.push(numberRound3(number * 38.43 + "미국 플루이드 온스"                  ));
            resultArr.push(numberRound3(number * 76.861 + "미국 테이블스푼"                  ));
            resultArr.push(numberRound3(number * 230.6 + "미국 티스푼"                     ));
            resultArr.push(numberRound3(number / 879.9 + "세제곱미터"                              ));
            resultArr.push(numberRound3(number * 1.137 + "리터"                               ));
            resultArr.push(numberRound3(number * 1137 + "밀리리터"                               ));
            resultArr.push(numberRound3(number / 4 + "영국 갤런"                     ));
            resultArr.push(numberRound3(number * 2 + "영국 파인트"                       ));
            resultArr.push(numberRound3(number * 4 + "영국 컵"                        ));
            resultArr.push(numberRound3(number * 40 + "영국 플루이드 온스"               ));
            resultArr.push(numberRound3(number * 64 + "영국 테이블스푼"                ));
            resultArr.push(numberRound3(number * 192 + "영국 티스푼"                 ));
            resultArr.push(numberRound3(number / 24.915 + "세제곱피트"                            ));
            resultArr.push(numberRound3(number * 69.355 + "세제곱인치"                            ));
            break;
        case "imperial pint":
        case "i p":
        case "ip":
            resultArr.push(numberRound3(number / 6.661 + "미국 액량 갤런"                       ));
            resultArr.push(numberRound3(number / 1.665 + "미국 액량 쿼트"                        ));
            resultArr.push(numberRound3(number * 1.201 + "미국 액량 파인트"                         ));
            resultArr.push(numberRound3(number * 2.368 + "미국 컵"                          ));
            resultArr.push(numberRound3(number * 19.215 + "미국 플루이드 온스"                 ));
            resultArr.push(numberRound3(number * 38.43 + "미국 테이블스푼"                   ));
            resultArr.push(numberRound3(number * 115.3 + "미국 티스푼"                     ));
            resultArr.push(numberRound3(number / 1760 + "세제곱미터"                               ));
            resultArr.push(numberRound3(number / 1.76 + "리터"                                ));
            resultArr.push(numberRound3(number * 568.3 + "밀리리터"                              ));
            resultArr.push(numberRound3(number / 8 + "영국 갤런"                     ));
            resultArr.push(numberRound3(number / 2 + "영국 쿼트"                      ));
            resultArr.push(numberRound3(number * 2 + "영국 컵"                        ));
            resultArr.push(numberRound3(number * 20 + "영국 플루이드 온스"               ));
            resultArr.push(numberRound3(number * 32 + "영국 테이블스푼"                ));
            resultArr.push(numberRound3(number * 96 + "영국 티스푼"                  ));
            resultArr.push(numberRound3(number / 49.831 + "세제곱피트"                            ));
            resultArr.push(numberRound3(number * 34.677 + "세제곱인치"                            ));
            break;
        case "imperial cup":
        case "i c":
        case "ic":
            resultArr.push(numberRound3(number / 13.323 + "미국 액량 갤런"                      ));
            resultArr.push(numberRound3(number / 3.331 + "미국 액량 쿼트"                        ));
            resultArr.push(numberRound3(number / 1.665 + "미국 액량 파인트"                         ));
            resultArr.push(numberRound3(number * 1.184 + "미국 컵"                          ));
            resultArr.push(numberRound3(number * 9.608 + "미국 플루이드 온스"                  ));
            resultArr.push(numberRound3(number * 19.215 + "미국 테이블스푼"                  ));
            resultArr.push(numberRound3(number * 57.646 + "미국 티스푼"                    ));
            resultArr.push(numberRound3(number / 3520 + "세제곱미터"                               ));
            resultArr.push(numberRound3(number / 3.52 + "리터"                                ));
            resultArr.push(numberRound3(number * 284.1 + "밀리리터"                              ));
            resultArr.push(numberRound3(number / 16 + "영국 갤런"                    ));
            resultArr.push(numberRound3(number / 4 + "영국 쿼트"                      ));
            resultArr.push(numberRound3(number / 2 + "영국 파인트"                       ));
            resultArr.push(numberRound3(number * 10 + "영국 플루이드 온스"               ));
            resultArr.push(numberRound3(number * 16 + "영국 테이블스푼"                ));
            resultArr.push(numberRound3(number * 48 + "영국 티스푼"                  ));
            resultArr.push(numberRound3(number / 99.661 + "세제곱피트"                            ));
            resultArr.push(numberRound3(number * 17.339 + "세제곱인치"                            ));
            break;
        case "imperial fluid ounce":
        case "imperial ounce":
        case "i o":
        case "io":
            resultArr.push(numberRound3(number / 133.2 + "미국 액량 갤런"                       ));
            resultArr.push(numberRound3(number / 33.307 + "미국 액량 쿼트"                       ));
            resultArr.push(numberRound3(number / 16.654 + "미국 액량 파인트"                        ));
            resultArr.push(numberRound3(number / 8.447 + "미국 컵"                          ));
            resultArr.push(numberRound3(number / 1.041 + "미국 플루이드 온스"                  ));
            resultArr.push(numberRound3(number * 1.922 + "미국 테이블스푼"                   ));
            resultArr.push(numberRound3(number * 5.765 + "미국 티스푼"                     ));
            resultArr.push(numberRound3(number / 35200 + "세제곱미터"                              ));
            resultArr.push(numberRound3(number / 35.195 + "리터"                              ));
            resultArr.push(numberRound3(number * 28.413 + "밀리리터"                             ));
            resultArr.push(numberRound3(number / 160 + "영국 갤런"                   ));
            resultArr.push(numberRound3(number / 40 + "영국 쿼트"                     ));
            resultArr.push(numberRound3(number / 20 + "영국 파인트"                      ));
            resultArr.push(numberRound3(number * 10 + "영국 컵"                       ));
            resultArr.push(numberRound3(number * 1.6 + "영국 테이블스푼"               ));
            resultArr.push(numberRound3(number * 4.8 + "영국 티스푼"                 ));
            resultArr.push(numberRound3(number / 996.6 + "세제곱피트"                             ));
            resultArr.push(numberRound3(number * 1.734 + "세제곱인치"                             ));
            break;
        case "imperial tablespoon":
        case "i t":
        case "it":
            resultArr.push(numberRound3(number / 213.2 + "미국 액량 갤런"                       ));
            resultArr.push(numberRound3(number / 53.291 + "미국 액량 쿼트"                       ));
            resultArr.push(numberRound3(number / 26.646 + "미국 액량 파인트"                        ));
            resultArr.push(numberRound3(number / 13.515 + "미국 컵"                         ));
            resultArr.push(numberRound3(number / 1.665 + "미국 플루이드 온스"                  ));
            resultArr.push(numberRound3(number * 1.201 + "미국 테이블스푼"                   ));
            resultArr.push(numberRound3(number * 3.603 + "미국 티스푼"                     ));
            resultArr.push(numberRound3(number / 56310 + "세제곱미터"                              ));
            resultArr.push(numberRound3(number / 56.312 + "리터"                              ));
            resultArr.push(numberRound3(number * 17.758 + "밀리리터"                             ));
            resultArr.push(numberRound3(number / 256 + "영국 갤런"                   ));
            resultArr.push(numberRound3(number / 64 + "영국 쿼트"                     ));
            resultArr.push(numberRound3(number / 32 + "영국 파인트"                      ));
            resultArr.push(numberRound3(number / 16 + "영국 컵"                       ));
            resultArr.push(numberRound3(number / 1.6 + "영국 플루이드 온스"              ));
            resultArr.push(numberRound3(number * 3 + "영국 티스푼"                   ));
            resultArr.push(numberRound3(number / 1595 + "세제곱피트"                              ));
            resultArr.push(numberRound3(number * 1.084 + "세제곱인치"                             ));
            break;
        case "imperial teaspoon":
        case "imperial tea":
            resultArr.push(numberRound3(number / 639.5 + "미국 액량 갤런"                       ));
            resultArr.push(numberRound3(number / 159.9 + "미국 액량 쿼트"                        ));
            resultArr.push(numberRound3(number / 79.937 + "미국 액량 파인트"                        ));
            resultArr.push(numberRound3(number / 40.545 + "미국 컵"                         ));
            resultArr.push(numberRound3(number / 4.996 + "미국 플루이드 온스"                  ));
            resultArr.push(numberRound3(number / 2.498 + "미국 테이블스푼"                   ));
            resultArr.push(numberRound3(number * 1.201 + "미국 티스푼"                     ));
            resultArr.push(numberRound3(number / 168900 + "세제곱미터"                             ));
            resultArr.push(numberRound3(number / 168.9 + "리터"                               ));
            resultArr.push(numberRound3(number * 5.919 + "밀리리터"                              ));
            resultArr.push(numberRound3(number / 768 + "영국 갤런"                   ));
            resultArr.push(numberRound3(number / 192 + "영국 쿼트"                    ));
            resultArr.push(numberRound3(number / 96 + "영국 파인트"                      ));
            resultArr.push(numberRound3(number / 48 + "영국 컵"                       ));
            resultArr.push(numberRound3(number / 4.8 + "영국 플루이드 온스"              ));
            resultArr.push(numberRound3(number / 3 + "영국 테이블스푼"                 ));
            resultArr.push(numberRound3(number / 4784 + "세제곱피트"                              ));
            resultArr.push(numberRound3(number / 2.768 + "세제곱인치"                             ));
            break;
        case "ft3":
        case "ft³":
            resultArr.push(numberRound3(number * 7.481 + "미국 액량 갤런"                       ));
            resultArr.push(numberRound3(number * 29.922 + "미국 액량 쿼트"                       ));
            resultArr.push(numberRound3(number * 59.844 + "미국 액량 파인트"                        ));
            resultArr.push(numberRound3(number * 118 + "미국 컵"                            ));
            resultArr.push(numberRound3(number * 957.5 + "미국 플루이드 온스"                  ));
            resultArr.push(numberRound3(number * 1915 + "미국 테이블스푼"                    ));
            resultArr.push(numberRound3(number * 5745 + "미국 티스푼"                      ));
            resultArr.push(numberRound3(number / 35.315 + "세제곱미터"                             ));
            resultArr.push(numberRound3(number * 28.317 + "리터"                              ));
            resultArr.push(numberRound3(number * 28320 + "밀리리터"                              ));
            resultArr.push(numberRound3(number * 6.229 + "영국 갤런"                 ));
            resultArr.push(numberRound3(number * 24.915 + "영국 쿼트"                 ));
            resultArr.push(numberRound3(number * 49.831 + "영국 파인트"                  ));
            resultArr.push(numberRound3(number * 99.661 + "영국 컵"                   ));
            resultArr.push(numberRound3(number * 996.6 + "영국 플루이드 온스"            ));
            resultArr.push(numberRound3(number * 1595 + "영국 테이블스푼"              ));
            resultArr.push(numberRound3(number * 4784 + "영국 티스푼"                ));
            resultArr.push(numberRound3(number * 1728 + "세제곱인치"                              ));
            break;
        case "in3":
        case "in³":
        case "in":
            resultArr.push(numberRound3(number / 231 + "미국 액량 갤런"                         ));
            resultArr.push(numberRound3(number / 57.75 + "미국 액량 쿼트"                        ));
            resultArr.push(numberRound3(number / 28.875 + "미국 액량 파인트"                        ));
            resultArr.push(numberRound3(number / 14.646 + "미국 컵"                         ));
            resultArr.push(numberRound3(number / 1.805 + "미국 플루이드 온스"                  ));
            resultArr.push(numberRound3(number * 1.108 + "미국 테이블스푼"                   ));
            resultArr.push(numberRound3(number * 3.325 + "미국 티스푼"                     ));
            resultArr.push(numberRound3(number / 61020 + "세제곱미터"                              ));
            resultArr.push(numberRound3(number / 61.024 + "리터"                              ));
            resultArr.push(numberRound3(number * 16.387 + "밀리리터"                             ));
            resultArr.push(numberRound3(number / 277.4 + "영국 갤런"                 ));
            resultArr.push(numberRound3(number / 69.355 + "영국 쿼트"                 ));
            resultArr.push(numberRound3(number / 34.677 + "영국 파인트"                  ));
            resultArr.push(numberRound3(number / 17.339 + "영국 컵"                   ));
            resultArr.push(numberRound3(number / 1.734 + "영국 플루이드 온스"            ));
            resultArr.push(numberRound3(number / 1.084 + "영국 테이블스푼"             ));
            resultArr.push(numberRound3(number * 2.768 + "영국 티스푼"               ));
            resultArr.push(numberRound3(number / 1728 + "세제곱피트"                              ));
            break;
    }

    return resultArr;
}

export default convertVolume;