"use strict";
exports.__esModule = true;
var money = 10000;
var buyACar = function (car) {
    return new Promise((function (resolve, rejects) {
        setTimeout(function () {
            if (money >= 10000) {
                resolve("can buy " + car);
            }
            else {
                rejects("Do not enough money");
            }
        }, 100);
    }));
};
money = 1000001;
var promise = buyACar("Vinfast").then(function (value) {
    console.log(value);
}, function (error) {
    console.log(error);
});
