"use strict";
exports.__esModule = true;
exports.ProjectTile = void 0;
var react_1 = require("react");
function ReleasedOn(platformString) {
    if (platformString.length === 0) {
        return "";
    }
    return "Released on " + platformString;
}
exports.ProjectTile = function (_a) {
    var empty = _a.empty, name = _a.name, desc = _a.desc, platforms = _a.platforms, image = _a.image;
    if (empty) {
        return (react_1["default"].createElement("div", null));
    }
    return react_1["default"].createElement("div", { className: "project-tile" },
        react_1["default"].createElement("div", { className: "project-image-tile" },
            react_1["default"].createElement("img", { className: "project-image", src: image })),
        react_1["default"].createElement("div", { className: "project-desc-tile" },
            react_1["default"].createElement("b", null, name),
            react_1["default"].createElement("br", null),
            desc,
            react_1["default"].createElement("br", null),
            ReleasedOn(platforms)));
};
exports["default"] = exports.ProjectTile;
