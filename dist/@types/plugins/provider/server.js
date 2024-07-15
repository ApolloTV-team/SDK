"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProviderServerSkipType = exports.ProviderServerSubtitleFormat = void 0;
var ProviderServerSubtitleFormat;
(function (ProviderServerSubtitleFormat) {
    ProviderServerSubtitleFormat[ProviderServerSubtitleFormat["vtt"] = 0] = "vtt";
    ProviderServerSubtitleFormat[ProviderServerSubtitleFormat["srt"] = 1] = "srt";
    ProviderServerSubtitleFormat[ProviderServerSubtitleFormat["ass"] = 2] = "ass";
})(ProviderServerSubtitleFormat || (exports.ProviderServerSubtitleFormat = ProviderServerSubtitleFormat = {}));
var ProviderServerSkipType;
(function (ProviderServerSkipType) {
    ProviderServerSkipType[ProviderServerSkipType["opening"] = 0] = "opening";
    ProviderServerSkipType[ProviderServerSkipType["ending"] = 1] = "ending";
    ProviderServerSkipType[ProviderServerSkipType["recap"] = 2] = "recap";
})(ProviderServerSkipType || (exports.ProviderServerSkipType = ProviderServerSkipType = {}));
