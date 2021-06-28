'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const PROTECTION_RATE = 0.02;
const BASE_CHARGE_RATE = 0.1;
const SCALE_CHARGE_BASE_RATE = 0.1;
const SCALE_CHARGE_LIMIT = 20;

exports.Condition = void 0;
(function (Condition) {
  Condition["MINT"] = "mint";
  Condition["LIKE_NEW"] = "likeNew";
  Condition["USED"] = "used";
  Condition["POOR"] = "poor";
})(exports.Condition || (exports.Condition = {}));
exports.Region = void 0;
(function (Region) {
  Region["PAL"] = "pal";
  Region["NTSCU"] = "ntscu";
  Region["NTSCC"] = "ntscc";
  Region["NTSCJ"] = "ntscj";
})(exports.Region || (exports.Region = {}));

exports.BASE_CHARGE_RATE = BASE_CHARGE_RATE;
exports.PROTECTION_RATE = PROTECTION_RATE;
exports.SCALE_CHARGE_BASE_RATE = SCALE_CHARGE_BASE_RATE;
exports.SCALE_CHARGE_LIMIT = SCALE_CHARGE_LIMIT;
