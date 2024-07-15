"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProviderFormat = exports.ProviderQuality = exports.ProviderExtraSupport = void 0;
var ProviderExtraSupport;
(function (ProviderExtraSupport) {
    ProviderExtraSupport[ProviderExtraSupport["discover"] = 0] = "discover";
})(ProviderExtraSupport || (exports.ProviderExtraSupport = ProviderExtraSupport = {}));
var ProviderQuality;
(function (ProviderQuality) {
    ProviderQuality[ProviderQuality["automatic"] = 0] = "automatic";
    ProviderQuality[ProviderQuality["360p"] = 1] = "360p";
    ProviderQuality[ProviderQuality["480p"] = 2] = "480p";
    ProviderQuality[ProviderQuality["720p"] = 3] = "720p";
    ProviderQuality[ProviderQuality["1080p"] = 4] = "1080p";
    ProviderQuality[ProviderQuality["4k"] = 5] = "4k";
})(ProviderQuality || (exports.ProviderQuality = ProviderQuality = {}));
var ProviderFormat;
(function (ProviderFormat) {
    ProviderFormat[ProviderFormat["mp4"] = 0] = "mp4";
    ProviderFormat[ProviderFormat["hls"] = 1] = "hls";
    ProviderFormat[ProviderFormat["dash"] = 2] = "dash";
})(ProviderFormat || (exports.ProviderFormat = ProviderFormat = {}));
