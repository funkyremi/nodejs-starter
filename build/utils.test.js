"use strict";

var _utils = require("./utils");

/* global test expect */
test('1 + 2 to equal 3', function () {
  expect((0, _utils.sum)(1, 2)).toBe(3);
});
test('10 / 2 to equal 5', function () {
  expect((0, _utils.divide)(10, 2)).toBe(5);
});