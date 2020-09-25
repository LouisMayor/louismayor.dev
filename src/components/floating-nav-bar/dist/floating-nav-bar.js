"use strict";
exports.__esModule = true;
exports.FloatingNavBar = void 0;
var react_1 = require("react");
var react_scroll_1 = require("react-scroll");
/*  Custom nav bar icons
    https://stackoverflow.com/questions/22617280/how-to-add-own-icons-in-bootstrap-navbar/22618064
*/
exports.FloatingNavBar = function (_a) {
    return (react_1["default"].createElement("section", { id: "nav-bar" },
        react_1["default"].createElement("nav", { className: "navbar navbar-expand navbar-inverse navbar-fixed-top flex-nowrap flex-row" },
            react_1["default"].createElement("div", { className: "navbar-collapse collapse" },
                react_1["default"].createElement("ul", { className: "nav navbar-nav flex-row" },
                    react_1["default"].createElement("li", null,
                        react_1["default"].createElement(react_scroll_1.Link, { activeClass: "active", to: "header", spy: true, smooth: true, offset: 0, duration: 500 }, "Home")),
                    react_1["default"].createElement("li", null,
                        react_1["default"].createElement(react_scroll_1.Link, { activeClass: "active", to: "projects", spy: true, smooth: true, offset: 0, duration: 500 }, "Projects")),
                    react_1["default"].createElement("li", null,
                        react_1["default"].createElement(react_scroll_1.Link, { activeClass: "active", to: "skills", spy: true, smooth: true, offset: 0, duration: 500 }, "Skills")))))));
};
exports["default"] = exports.FloatingNavBar;
