'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

exports.OauthProvider = void 0;
(function (OauthProvider) {
  OauthProvider["GOOGLE"] = "google";
})(exports.OauthProvider || (exports.OauthProvider = {}));
exports.KycStatus = void 0;
(function (KycStatus) {
  KycStatus["NONE"] = "none";
  KycStatus["CREATED"] = "created";
  KycStatus["VERIFYING"] = "verifying";
  KycStatus["VERIFIED"] = "verified";
  KycStatus["FAILED"] = "failed";
  KycStatus["OUTDATED"] = "outdated";
})(exports.KycStatus || (exports.KycStatus = {}));
