"use strict";

var _winston = _interopRequireDefault(require("./winston"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_winston.default.info("The result of 8 + 2 is ".concat((0, _utils.sum)(8, 2)));

_winston.default.info("The result of 10 / 2 is ".concat((0, _utils.divide)(10, 2)));