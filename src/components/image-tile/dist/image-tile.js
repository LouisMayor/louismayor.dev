"use strict";
exports.__esModule = true;
exports.ImageTile = void 0;
var react_1 = require("react");
exports.ImageTile = function (_a) {
    var image = _a.image, alt = _a.alt;
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", { className: "skills-row-tile" },
            react_1["default"].createElement("img", { className: "skill-image", src: image, alt: alt })),
        react_1["default"].createElement("div", { className: "skill-sub-text" },
            react_1["default"].createElement("b", null, alt))));
};
exports["default"] = exports.ImageTile;
