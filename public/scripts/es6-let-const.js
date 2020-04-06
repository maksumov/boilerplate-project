"use strict";

var multiplier = {
  numbers: [1, 3, 7, 8, 43],
  multiplyBy: 2,
  multiply: function multiply() {
    var _this = this;

    return this.numbers.map(function (number) {
      return number * _this.multiplyBy;
    });
  }
};
console.log(multiplier.multiply());
