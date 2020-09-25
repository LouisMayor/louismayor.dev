"use strict";
exports.__esModule = true;
exports.Music = void 0;
var react_1 = require("react");
var react_player_1 = require("react-player");
exports.Music = function (_a) {
    var audioClip = _a.audioClip;
    return react_1["default"].createElement("aside", null,
        react_1["default"].createElement("div", null,
            "Music Player - ",
            audioClip),
        react_1["default"].createElement(react_player_1["default"], { url: audioClip, volume: 0.25, loop: true, muted: true, controls: true, playing: true }));
};
exports["default"] = exports.Music;
