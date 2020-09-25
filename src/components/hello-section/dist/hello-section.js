"use strict";
exports.__esModule = true;
exports.HelloSection = void 0;
var react_1 = require("react");
require("../../App.css");
exports.HelloSection = function (_a) {
    var empty = _a.empty;
    if (empty) {
        return (react_1["default"].createElement("div", null));
    }
    return (react_1["default"].createElement("section", { id: "header" },
        react_1["default"].createElement("div", { className: "header" },
            react_1["default"].createElement("div", { className: "header_inner" },
                react_1["default"].createElement("div", { className: "header-welcome" }, " Welcome "),
                react_1["default"].createElement("div", { className: "header_parallax" },
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("div", { className: "header-aboutme-title" }, " About Me! "),
                        react_1["default"].createElement("div", { className: "header-aboutme-body" },
                            react_1["default"].createElement("br", null),
                            "Hi, my name is Louis",
                            react_1["default"].createElement("br", null),
                            react_1["default"].createElement("br", null),
                            "I am a First class honours graduate, I primarily work with C++, and have a keen interest in Computer Graphics")))))));
};
exports["default"] = exports.HelloSection;
