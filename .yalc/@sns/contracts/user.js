'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

exports.OauthProvider = void 0;
(function (OauthProvider) {
  OauthProvider["GOOGLE"] = "google";
})(exports.OauthProvider || (exports.OauthProvider = {}));
exports.UserLevel = void 0;
(function (UserLevel) {
  UserLevel[UserLevel["BLOCKED"] = 0] = "BLOCKED";
  UserLevel[UserLevel["USER"] = 1] = "USER";
  UserLevel[UserLevel["ADMIN"] = 9] = "ADMIN";
})(exports.UserLevel || (exports.UserLevel = {}));
