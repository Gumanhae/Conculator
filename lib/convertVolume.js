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
            resultArr.push(numberRound3(number * 4 + "US quart"                            ));
            resultArr.push(numberRound3(number * 8 + "US pint"                             ));
            resultArr.push(numberRound3(number * 15.773 + "US cup"                         ));
            resultArr.push(numberRound3(number * 128 + "US fluid ounce"                    ));
            resultArr.push(numberRound3(number * 256 + "US tablespoon"                     ));
            resultArr.push(numberRound3(number * 768 + "US teaspoon"                       ));
            resultArr.push(numberRound3(number / 264.2 + "m³"                              ));
            resultArr.push(numberRound3(number * 3.785 + "L"                               ));
            resultArr.push(numberRound3(number * 3785 + "mL"                               ));
            resultArr.push(numberRound3(number / 1.201 + "imperial gallon"                 ));
            resultArr.push(numberRound3(number * 3.331 + "imperial quart"                  ));
            resultArr.push(numberRound3(number * 6.661 + "imperial pint"                   ));
            resultArr.push(numberRound3(number * 13.323 + "imperial cup"                   ));
            resultArr.push(numberRound3(number * 133.22 + "imperial fluid ounce"           ));
            resultArr.push(numberRound3(number * 213.2 + "imperial tablespoon"             ));
            resultArr.push(numberRound3(number * 639.5 + "imperial teaspoon"               ));
            resultArr.push(numberRound3(number / 7.48 + "ft³"                              ));
            resultArr.push(numberRound3(number * 231 + "in³"                               ));
            break;
        case "us quart":
        case "u q":
        case "uq" :
            resultArr.push(numberRound3(number / 4 + "US gallon"                           ));
            resultArr.push(numberRound3(number * 2 + "US pint"                             ));
            resultArr.push(numberRound3(number * 3.943 + "US cup"                          ));
            resultArr.push(numberRound3(number * 32 + "US fluid ounce"                     ));
            resultArr.push(numberRound3(number * 64 + "US tablespoon"                      ));
            resultArr.push(numberRound3(number * 192 + "US teaspoon"                       ));
            resultArr.push(numberRound3(number / 1057 + "m³"                               ));
            resultArr.push(numberRound3(number / 1.057 + "L"                               ));
            resultArr.push(numberRound3(number * 946.4 + "mL"                              ));
            resultArr.push(numberRound3(number / 4.804 + "imperial gallon"                 ));
            resultArr.push(numberRound3(number / 1.201 + "imperial quart"                  ));
            resultArr.push(numberRound3(number * 1.665 + "imperial pint"                   ));
            resultArr.push(numberRound3(number * 3.331 + "imperial cup"                    ));
            resultArr.push(numberRound3(number * 33.307 + "imperial fluid ounce"           ));
            resultArr.push(numberRound3(number * 53.291 + "imperial tablespoon"            ));
            resultArr.push(numberRound3(number * 159.9 + "imperial teaspoon"               ));
            resultArr.push(numberRound3(number / 29.922 + "ft³"                            ));
            resultArr.push(numberRound3(number * 57.75 + "in³"                             ));
            break;
        case "us pint":
        case "u p":
        case "up":
            resultArr.push(numberRound3(number / 8 + "US gallon"                           ));
            resultArr.push(numberRound3(number / 2 + "US quart"                            ));
            resultArr.push(numberRound3(number * 1.972 + "US cup"                          ));
            resultArr.push(numberRound3(number * 16 + "US fluid ounce"                     ));
            resultArr.push(numberRound3(number * 32 + "US tablespoon"                      ));
            resultArr.push(numberRound3(number * 96 + "US teaspoon"                        ));
            resultArr.push(numberRound3(number / 2113 + "m³"                               ));
            resultArr.push(numberRound3(number / 2.113 + "L"                               ));
            resultArr.push(numberRound3(number * 473.2 + "mL"                              ));
            resultArr.push(numberRound3(number / 9.608 + "imperial gallon"                 ));
            resultArr.push(numberRound3(number / 2.402 + "imperial quart"                  ));
            resultArr.push(numberRound3(number / 1.201 + "imperial pint"                   ));
            resultArr.push(numberRound3(number * 1.665 + "imperial cup"                    ));
            resultArr.push(numberRound3(number * 16.653 + "imperial fluid ounce"           ));
            resultArr.push(numberRound3(number * 26.646 + "imperial tablespoon"            ));
            resultArr.push(numberRound3(number * 79.937 + "imperial teaspoon"              ));
            resultArr.push(numberRound3(number / 59.844 + "ft³"                            ));
            resultArr.push(numberRound3(number * 28.875 + "in³"                            ));
            break;
        case "us cup":
        case "u c":
        case "uc":
            resultArr.push(numberRound3(number / 15.772 + "US gallon"                      ));
            resultArr.push(numberRound3(number / 3.943 + "US quart"                        ));
            resultArr.push(numberRound3(number / 1.972 + "US pint"                         ));
            resultArr.push(numberRound3(number * 8.115 + "US fluid ounce"                  ));
            resultArr.push(numberRound3(number * 16.231 + "US tablespoon"                  ));
            resultArr.push(numberRound3(number * 48.692 + "US teaspoon"                    ));
            resultArr.push(numberRound3(number / 4167 + "m³"                               ));
            resultArr.push(numberRound3(number / 4.167 + "L"                               ));
            resultArr.push(numberRound3(number * 240 + "mL"                                ));
            resultArr.push(numberRound3(number / 18.942 + "imperial gallon"                ));
            resultArr.push(numberRound3(number / 4.736 + "imperial quart"                  ));
            resultArr.push(numberRound3(number / 2.368 + "imperial pint"                   ));
            resultArr.push(numberRound3(number / 1.184 + "imperial cup"                    ));
            resultArr.push(numberRound3(number * 8.447 + "imperial fluid ounce"            ));
            resultArr.push(numberRound3(number * 13.515 + "imperial tablespoon"            ));
            resultArr.push(numberRound3(number * 40.545 + "imperial teaspoon"              ));
            resultArr.push(numberRound3(number / 118 + "ft³"                               ));
            resultArr.push(numberRound3(number * 14.646 + "in³"                            ));
            break;
        case "us fluid ounce":
        case "us ounce":
        case "u o":
        case "uo":
            resultArr.push(numberRound3(number / 128 + "US gallon"                         ));
            resultArr.push(numberRound3(number / 32 + "US quart"                           ));
            resultArr.push(numberRound3(number / 16 + "US pint"                            ));
            resultArr.push(numberRound3(number / 8.115 + "US cup"                          ));
            resultArr.push(numberRound3(number * 2 + "US tablespoon"                       ));
            resultArr.push(numberRound3(number * 6 + "US teaspoon"                         ));
            resultArr.push(numberRound3(number / 33810 + "m³"                              ));
            resultArr.push(numberRound3(number / 33.814 + "L"                              ));
            resultArr.push(numberRound3(number * 29.574 + "mL"                             ));
            resultArr.push(numberRound3(number / 153.7 + "imperial gallon"                 ));
            resultArr.push(numberRound3(number / 38.43 + "imperial quart"                  ));
            resultArr.push(numberRound3(number / 19.215 + "imperial pint"                  ));
            resultArr.push(numberRound3(number / 9.608 + "imperial cup"                    ));
            resultArr.push(numberRound3(number * 1.041 + "imperial fluid ounce"            ));
            resultArr.push(numberRound3(number * 1.665 + "imperial tablespoon"             ));
            resultArr.push(numberRound3(number * 4.996 + "imperial teaspoon"               ));
            resultArr.push(numberRound3(number / 957.5 + "ft³"                             ));
            resultArr.push(numberRound3(number * 1.805 + "in³"                             ));
            break;
        case "us tablespoon":
        case "us t":
        case "u t":
        case "ut":
            resultArr.push(numberRound3(number / 256 + "US gallon"                         ));
            resultArr.push(numberRound3(number / 64 + "US quart"                           ));
            resultArr.push(numberRound3(number / 32 + "US pint"                            ));
            resultArr.push(numberRound3(number / 16.231 + "US cup"                         ));
            resultArr.push(numberRound3(number / 2 + "US fluid ounce"                      ));
            resultArr.push(numberRound3(number * 3 + "US teaspoon"                         ));
            resultArr.push(numberRound3(number / 67630 + "m³"                              ));
            resultArr.push(numberRound3(number / 67.628 + "L"                              ));
            resultArr.push(numberRound3(number * 14.787 + "mL"                             ));
            resultArr.push(numberRound3(number / 307.4 + "imperial gallon"                 ));
            resultArr.push(numberRound3(number / 76.861 + "imperial quart"                 ));
            resultArr.push(numberRound3(number / 38.43 + "imperial pint"                   ));
            resultArr.push(numberRound3(number / 19.215 + "imperial cup"                   ));
            resultArr.push(numberRound3(number / 1.922 + "imperial fluid ounce"            ));
            resultArr.push(numberRound3(number / 1.201 + "imperial tablespoon"             ));
            resultArr.push(numberRound3(number * 2.498 + "imperial teaspoon"               ));
            resultArr.push(numberRound3(number / 1915 + "ft³"                              ));
            resultArr.push(numberRound3(number / 1.108 + "in³"                             ));
            break;
        case "us teaspoon":
        case "us tea":
            resultArr.push(numberRound3(number / 768 + "US gallon"                         ));
            resultArr.push(numberRound3(number / 192 + "US quart"                          ));
            resultArr.push(numberRound3(number / 96 + "US pint"                            ));
            resultArr.push(numberRound3(number / 48.692 + "US cup"                         ));
            resultArr.push(numberRound3(number / 6 + "US fluid ounce"                      ));
            resultArr.push(numberRound3(number / 3 + "US tablespoon"                       ));
            resultArr.push(numberRound3(number / 202900 + "m³"                             ));
            resultArr.push(numberRound3(number / 202.9 + "L"                               ));
            resultArr.push(numberRound3(number * 4.929 + "mL"                              ));
            resultArr.push(numberRound3(number / 922.3 + "imperial gallon"                 ));
            resultArr.push(numberRound3(number / 230.6 + "imperial quart"                  ));
            resultArr.push(numberRound3(number / 115.3 + "imperial pint"                   ));
            resultArr.push(numberRound3(number / 57.646 + "imperial cup"                   ));
            resultArr.push(numberRound3(number / 5.765 + "imperial fluid ounce"            ));
            resultArr.push(numberRound3(number / 3.603 + "imperial tablespoon"             ));
            resultArr.push(numberRound3(number / 1.201 + "imperial teaspoon"               ));
            resultArr.push(numberRound3(number / 5745 + "ft³"                              ));
            resultArr.push(numberRound3(number / 3.325 + "in³"                             ));
            break;
        case "m3":
        case "m³":
        case "m":
            resultArr.push(numberRound3(number * 264.2 + "US gallon"                       ));
            resultArr.push(numberRound3(number * 1057 + "US quart"                         ));
            resultArr.push(numberRound3(number * 2113 + "US pint"                          ));
            resultArr.push(numberRound3(number * 4167 + "US cup"                           ));
            resultArr.push(numberRound3(number * 33810 + "US fluid ounce"                  ));
            resultArr.push(numberRound3(number * 67630 + "US tablespoon"                   ));
            resultArr.push(numberRound3(number * 202900 + "US teaspoon"                    ));
            resultArr.push(numberRound3(number * 1000 + "L"                                ));
            resultArr.push(numberRound3(number * (1e+6) + "mL"                             ));
            resultArr.push(numberRound3(number * 220 + "imperial gallon"                   ));
            resultArr.push(numberRound3(number * 879.9 + "imperial quart"                  ));
            resultArr.push(numberRound3(number * 1760 + "imperial pint"                    ));
            resultArr.push(numberRound3(number * 3520 + "imperial cup"                     ));
            resultArr.push(numberRound3(number * 35200 + "imperial fluid ounce"            ));
            resultArr.push(numberRound3(number * 56310 + "imperial tablespoon"             ));
            resultArr.push(numberRound3(number * 168900 + "imperial teaspoon"              ));
            resultArr.push(numberRound3(number * 35.315 + "ft³"                            ));
            resultArr.push(numberRound3(number * 61020 + "in³"                             ));
            break;
        case "l":
            resultArr.push(numberRound3(number / 3.785 + "US gallon"                       ));
            resultArr.push(numberRound3(number * 1.057 + "US quart"                        ));
            resultArr.push(numberRound3(number * 2.113 + "US pint"                         ));
            resultArr.push(numberRound3(number * 4.167 + "US cup"                          ));
            resultArr.push(numberRound3(number * 33.814 + "US fluid ounce"                 ));
            resultArr.push(numberRound3(number * 67.628 + "US tablespoon"                  ));
            resultArr.push(numberRound3(number * 202.9 + "US teaspoon"                     ));
            resultArr.push(numberRound3(number / 1000 + "m³"                               ));
            resultArr.push(numberRound3(number * 1000 + "mL"                               ));
            resultArr.push(numberRound3(number / 4.546 + "imperial gallon"                 ));
            resultArr.push(numberRound3(number / 1.136 + "imperial quart"                  ));
            resultArr.push(numberRound3(number * 1.76 + "imperial pint"                    ));
            resultArr.push(numberRound3(number * 3.52 + "imperial cup"                     ));
            resultArr.push(numberRound3(number * 35.195 + "imperial fluid ounce"           ));
            resultArr.push(numberRound3(number * 56.312 + "imperial tablespoon"            ));
            resultArr.push(numberRound3(number * 168.9 + "imperial teaspoon"               ));
            resultArr.push(numberRound3(number / 28.317 + "ft³"                            ));
            resultArr.push(numberRound3(number * 61.024 + "in³"                            ));
            break;
        case "ml":
            resultArr.push(numberRound3(number / 3785 + "US gallon"                        ));
            resultArr.push(numberRound3(number / 946.4 + "US quart"                        ));
            resultArr.push(numberRound3(number / 473.2 + "US pint"                         ));
            resultArr.push(numberRound3(number / 240 + "US cup"                            ));
            resultArr.push(numberRound3(number / 29.574 + "US fluid ounce"                 ));
            resultArr.push(numberRound3(number / 14.787 + "US tablespoon"                  ));
            resultArr.push(numberRound3(number / 4.929 + "US teaspoon"                     ));
            resultArr.push(numberRound3(number / (1e+6) + "m³"                             ));
            resultArr.push(numberRound3(number / 1000 + "L"                                ));
            resultArr.push(numberRound3(number / 4546 + "imperial gallon"                  ));
            resultArr.push(numberRound3(number / 1137 + "imperial quart"                   ));
            resultArr.push(numberRound3(number / 568.3 + "imperial pint"                   ));
            resultArr.push(numberRound3(number / 284.1 + "imperial cup"                    ));
            resultArr.push(numberRound3(number / 28.413 + "imperial fluid ounce"           ));
            resultArr.push(numberRound3(number / 17.758 + "imperial tablespoon"            ));
            resultArr.push(numberRound3(number / 5.919 + "imperial teaspoon"               ));
            resultArr.push(numberRound3(number / 28320 + "ft³"                             ));
            resultArr.push(numberRound3(number / 16.387 + "in³"                            ));
            break;
        case "imperial gallon":
        case "i g":
        case "ig":
            resultArr.push(numberRound3(number * 1.201 + "US gallon"                       ));
            resultArr.push(numberRound3(number * 4.804 + "US quart"                        ));
            resultArr.push(numberRound3(number * 9.608 + "US pint"                         ));
            resultArr.push(numberRound3(number * 18.942 + "US cup"                         ));
            resultArr.push(numberRound3(number * 153.7 + "US fluid ounce"                  ));
            resultArr.push(numberRound3(number * 307.4 + "US tablespoon"                   ));
            resultArr.push(numberRound3(number * 922.3 + "US teaspoon"                     ));
            resultArr.push(numberRound3(number / 220 + "m³"                                ));
            resultArr.push(numberRound3(number * 4.546 + "L"                               ));
            resultArr.push(numberRound3(number * 4546 + "mL"                               ));
            resultArr.push(numberRound3(number * 4 + "imperial quart"                      ));
            resultArr.push(numberRound3(number * 8 + "imperial pint"                       ));
            resultArr.push(numberRound3(number * 16 + "imperial cup"                       ));
            resultArr.push(numberRound3(number * 160 + "imperial fluid ounce"              ));
            resultArr.push(numberRound3(number * 256 + "imperial tablespoon"               ));
            resultArr.push(numberRound3(number * 768 + "imperial teaspoon"                 ));
            resultArr.push(numberRound3(number / 6.229 + "ft³"                             ));
            resultArr.push(numberRound3(number * 277.4 + "in³"                             ));
            break;
        case "imperial quart":
        case "i q":
        case "iq":
            resultArr.push(numberRound3(number / 3.331 + "US gallon"                       ));
            resultArr.push(numberRound3(number * 1.201 + "US quart"                        ));
            resultArr.push(numberRound3(number * 2.402 + "US pint"                         ));
            resultArr.push(numberRound3(number * 4.736 + "US cup"                          ));
            resultArr.push(numberRound3(number * 38.43 + "US fluid ounce"                  ));
            resultArr.push(numberRound3(number * 76.861 + "US tablespoon"                  ));
            resultArr.push(numberRound3(number * 230.6 + "US teaspoon"                     ));
            resultArr.push(numberRound3(number / 879.9 + "m³"                              ));
            resultArr.push(numberRound3(number * 1.137 + "L"                               ));
            resultArr.push(numberRound3(number * 1137 + "mL"                               ));
            resultArr.push(numberRound3(number / 4 + "imperial gallon"                     ));
            resultArr.push(numberRound3(number * 2 + "imperial pint"                       ));
            resultArr.push(numberRound3(number * 4 + "imperial cup"                        ));
            resultArr.push(numberRound3(number * 40 + "imperial fluid ounce"               ));
            resultArr.push(numberRound3(number * 64 + "imperial tablespoon"                ));
            resultArr.push(numberRound3(number * 192 + "imperial teaspoon"                 ));
            resultArr.push(numberRound3(number / 24.915 + "ft³"                            ));
            resultArr.push(numberRound3(number * 69.355 + "in³"                            ));
            break;
        case "imperial pint":
        case "i p":
        case "ip":
            resultArr.push(numberRound3(number / 6.661 + "US gallon"                       ));
            resultArr.push(numberRound3(number / 1.665 + "US quart"                        ));
            resultArr.push(numberRound3(number * 1.201 + "US pint"                         ));
            resultArr.push(numberRound3(number * 2.368 + "US cup"                          ));
            resultArr.push(numberRound3(number * 19.215 + "US fluid ounce"                 ));
            resultArr.push(numberRound3(number * 38.43 + "US tablespoon"                   ));
            resultArr.push(numberRound3(number * 115.3 + "US teaspoon"                     ));
            resultArr.push(numberRound3(number / 1760 + "m³"                               ));
            resultArr.push(numberRound3(number / 1.76 + "L"                                ));
            resultArr.push(numberRound3(number * 568.3 + "mL"                              ));
            resultArr.push(numberRound3(number / 8 + "imperial gallon"                     ));
            resultArr.push(numberRound3(number / 2 + "imperial quart"                      ));
            resultArr.push(numberRound3(number * 2 + "imperial cup"                        ));
            resultArr.push(numberRound3(number * 20 + "imperial fluid ounce"               ));
            resultArr.push(numberRound3(number * 32 + "imperial tablespoon"                ));
            resultArr.push(numberRound3(number * 96 + "imperial teaspoon"                  ));
            resultArr.push(numberRound3(number / 49.831 + "ft³"                            ));
            resultArr.push(numberRound3(number * 34.677 + "in³"                            ));
            break;
        case "imperial cup":
        case "i c":
        case "ic":
            resultArr.push(numberRound3(number / 13.323 + "US gallon"                      ));
            resultArr.push(numberRound3(number / 3.331 + "US quart"                        ));
            resultArr.push(numberRound3(number / 1.665 + "US pint"                         ));
            resultArr.push(numberRound3(number * 1.184 + "US cup"                          ));
            resultArr.push(numberRound3(number * 9.608 + "US fluid ounce"                  ));
            resultArr.push(numberRound3(number * 19.215 + "US tablespoon"                  ));
            resultArr.push(numberRound3(number * 57.646 + "US teaspoon"                    ));
            resultArr.push(numberRound3(number / 3520 + "m³"                               ));
            resultArr.push(numberRound3(number / 3.52 + "L"                                ));
            resultArr.push(numberRound3(number * 284.1 + "mL"                              ));
            resultArr.push(numberRound3(number / 16 + "imperial gallon"                    ));
            resultArr.push(numberRound3(number / 4 + "imperial quart"                      ));
            resultArr.push(numberRound3(number / 2 + "imperial pint"                       ));
            resultArr.push(numberRound3(number * 10 + "imperial fluid ounce"               ));
            resultArr.push(numberRound3(number * 16 + "imperial tablespoon"                ));
            resultArr.push(numberRound3(number * 48 + "imperial teaspoon"                  ));
            resultArr.push(numberRound3(number / 99.661 + "ft³"                            ));
            resultArr.push(numberRound3(number * 17.339 + "in³"                            ));
            break;
        case "imperial fluid ounce":
        case "imperial ounce":
        case "i o":
        case "io":
            resultArr.push(numberRound3(number / 133.2 + "US gallon"                       ));
            resultArr.push(numberRound3(number / 33.307 + "US quart"                       ));
            resultArr.push(numberRound3(number / 16.654 + "US pint"                        ));
            resultArr.push(numberRound3(number / 8.447 + "US cup"                          ));
            resultArr.push(numberRound3(number / 1.041 + "US fluid ounce"                  ));
            resultArr.push(numberRound3(number * 1.922 + "US tablespoon"                   ));
            resultArr.push(numberRound3(number * 5.765 + "US teaspoon"                     ));
            resultArr.push(numberRound3(number / 35200 + "m³"                              ));
            resultArr.push(numberRound3(number / 35.195 + "L"                              ));
            resultArr.push(numberRound3(number * 28.413 + "mL"                             ));
            resultArr.push(numberRound3(number / 160 + "imperial gallon"                   ));
            resultArr.push(numberRound3(number / 40 + "imperial quart"                     ));
            resultArr.push(numberRound3(number / 20 + "imperial pint"                      ));
            resultArr.push(numberRound3(number * 10 + "imperial cup"                       ));
            resultArr.push(numberRound3(number * 1.6 + "imperial tablespoon"               ));
            resultArr.push(numberRound3(number * 4.8 + "imperial teaspoon"                 ));
            resultArr.push(numberRound3(number / 996.6 + "ft³"                             ));
            resultArr.push(numberRound3(number * 1.734 + "in³"                             ));
            break;
        case "imperial tablespoon":
        case "i t":
        case "it":
            resultArr.push(numberRound3(number / 213.2 + "US gallon"                       ));
            resultArr.push(numberRound3(number / 53.291 + "US quart"                       ));
            resultArr.push(numberRound3(number / 26.646 + "US pint"                        ));
            resultArr.push(numberRound3(number / 13.515 + "US cup"                         ));
            resultArr.push(numberRound3(number / 1.665 + "US fluid ounce"                  ));
            resultArr.push(numberRound3(number * 1.201 + "US tablespoon"                   ));
            resultArr.push(numberRound3(number * 3.603 + "US teaspoon"                     ));
            resultArr.push(numberRound3(number / 56310 + "m³"                              ));
            resultArr.push(numberRound3(number / 56.312 + "L"                              ));
            resultArr.push(numberRound3(number * 17.758 + "mL"                             ));
            resultArr.push(numberRound3(number / 256 + "imperial gallon"                   ));
            resultArr.push(numberRound3(number / 64 + "imperial quart"                     ));
            resultArr.push(numberRound3(number / 32 + "imperial pint"                      ));
            resultArr.push(numberRound3(number / 16 + "imperial cup"                       ));
            resultArr.push(numberRound3(number / 1.6 + "imperial fluid ounce"              ));
            resultArr.push(numberRound3(number * 3 + "imperial teaspoon"                   ));
            resultArr.push(numberRound3(number / 1595 + "ft³"                              ));
            resultArr.push(numberRound3(number * 1.084 + "in³"                             ));
            break;
        case "imperial teaspoon":
        case "imperial tea":
            resultArr.push(numberRound3(number / 639.5 + "US gallon"                       ));
            resultArr.push(numberRound3(number / 159.9 + "US quart"                        ));
            resultArr.push(numberRound3(number / 79.937 + "US pint"                        ));
            resultArr.push(numberRound3(number / 40.545 + "US cup"                         ));
            resultArr.push(numberRound3(number / 4.996 + "US fluid ounce"                  ));
            resultArr.push(numberRound3(number / 2.498 + "US tablespoon"                   ));
            resultArr.push(numberRound3(number * 1.201 + "US teaspoon"                     ));
            resultArr.push(numberRound3(number / 168900 + "m³"                             ));
            resultArr.push(numberRound3(number / 168.9 + "L"                               ));
            resultArr.push(numberRound3(number * 5.919 + "mL"                              ));
            resultArr.push(numberRound3(number / 768 + "imperial gallon"                   ));
            resultArr.push(numberRound3(number / 192 + "imperial quart"                    ));
            resultArr.push(numberRound3(number / 96 + "imperial pint"                      ));
            resultArr.push(numberRound3(number / 48 + "imperial cup"                       ));
            resultArr.push(numberRound3(number / 4.8 + "imperial fluid ounce"              ));
            resultArr.push(numberRound3(number / 3 + "imperial tablespoon"                 ));
            resultArr.push(numberRound3(number / 4784 + "ft³"                              ));
            resultArr.push(numberRound3(number / 2.768 + "in³"                             ));
            break;
        case "ft3":
        case "ft³":
            resultArr.push(numberRound3(number * 7.481 + "US gallon"                       ));
            resultArr.push(numberRound3(number * 29.922 + "US quart"                       ));
            resultArr.push(numberRound3(number * 59.844 + "US pint"                        ));
            resultArr.push(numberRound3(number * 118 + "US cup"                            ));
            resultArr.push(numberRound3(number * 957.5 + "US fluid ounce"                  ));
            resultArr.push(numberRound3(number * 1915 + "US tablespoon"                    ));
            resultArr.push(numberRound3(number * 5745 + "US teaspoon"                      ));
            resultArr.push(numberRound3(number / 35.315 + "m³"                             ));
            resultArr.push(numberRound3(number * 28.317 + "L"                              ));
            resultArr.push(numberRound3(number * 28320 + "mL"                              ));
            resultArr.push(numberRound3(number * 6.229 + "imperial gallon"                 ));
            resultArr.push(numberRound3(number * 24.915 + "imperial quart"                 ));
            resultArr.push(numberRound3(number * 49.831 + "imperial pint"                  ));
            resultArr.push(numberRound3(number * 99.661 + "imperial cup"                   ));
            resultArr.push(numberRound3(number * 996.6 + "imperial fluid ounce"            ));
            resultArr.push(numberRound3(number * 1595 + "imperial tablespoon"              ));
            resultArr.push(numberRound3(number * 4784 + "imperial teaspoon"                ));
            resultArr.push(numberRound3(number * 1728 + "in³"                              ));
            break;
        case "in3":
        case "in³":
        case "in":
            resultArr.push(numberRound3(number / 231 + "US gallon"                         ));
            resultArr.push(numberRound3(number / 57.75 + "US quart"                        ));
            resultArr.push(numberRound3(number / 28.875 + "US pint"                        ));
            resultArr.push(numberRound3(number / 14.646 + "US cup"                         ));
            resultArr.push(numberRound3(number / 1.805 + "US fluid ounce"                  ));
            resultArr.push(numberRound3(number * 1.108 + "US tablespoon"                   ));
            resultArr.push(numberRound3(number * 3.325 + "US teaspoon"                     ));
            resultArr.push(numberRound3(number / 61020 + "m³"                              ));
            resultArr.push(numberRound3(number / 61.024 + "L"                              ));
            resultArr.push(numberRound3(number * 16.387 + "mL"                             ));
            resultArr.push(numberRound3(number / 277.4 + "imperial gallon"                 ));
            resultArr.push(numberRound3(number / 69.355 + "imperial quart"                 ));
            resultArr.push(numberRound3(number / 34.677 + "imperial pint"                  ));
            resultArr.push(numberRound3(number / 17.339 + "imperial cup"                   ));
            resultArr.push(numberRound3(number / 1.734 + "imperial fluid ounce"            ));
            resultArr.push(numberRound3(number / 1.084 + "imperial tablespoon"             ));
            resultArr.push(numberRound3(number * 2.768 + "imperial teaspoon"               ));
            resultArr.push(numberRound3(number / 1728 + "ft³"                              ));
            break;
    }

    return resultArr;
}

export default convertVolume;