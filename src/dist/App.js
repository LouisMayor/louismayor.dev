"use strict";
exports.__esModule = true;
var react_1 = require("react");
var music_1 = require("./components/music");
var floating_nav_bar_1 = require("./components/floating-nav-bar");
var hello_section_1 = require("./components/hello-section");
var projects_section_1 = require("./components/projects-section");
var skill_section_1 = require("./components/skill-section");
var enums_1 = require("./enums");
var logo_svg_1 = require("./logo.svg");
require("./App.css");
/* References
  http://www.mollyjameson.com
  http://hugo.fyi/#
  http://leah-lindner.com/
  http://www.joshcaratelli.com/
  https://nielsbrunekreef.com/#competencies
*/
function MusicSyncExample() {
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement("header", { className: "App-header" },
            react_1["default"].createElement("img", { src: logo_svg_1["default"], className: "App-logo", alt: "logo" }),
            react_1["default"].createElement("p", null,
                "Edit ",
                react_1["default"].createElement("code", null, "src/App.tsx"),
                " and save to reload."),
            react_1["default"].createElement("a", { className: "App-link", href: "https://reactjs.org", target: "_blank", rel: "noopener noreferrer" }, "Learn React"),
            react_1["default"].createElement(music_1["default"], { audioClip: "assets/audio/drone.wav" }))));
}
function BasicPage() {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(hello_section_1["default"], { empty: false })));
}
function ExtendedBasicPage() {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(floating_nav_bar_1["default"], null),
        react_1["default"].createElement(hello_section_1["default"], { empty: false })));
}
function TwoPage() {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(floating_nav_bar_1["default"], null),
        react_1["default"].createElement(hello_section_1["default"], { empty: false }),
        react_1["default"].createElement(projects_section_1["default"], { empty: false, tileLayout: enums_1.TileGridLayout.Horizontal })));
}
function ThreePage() {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(floating_nav_bar_1["default"], null),
        react_1["default"].createElement(hello_section_1["default"], { empty: false }),
        react_1["default"].createElement(projects_section_1["default"], { empty: false, tileLayout: enums_1.TileGridLayout.Horizontal }),
        react_1["default"].createElement(skill_section_1["default"], { empty: false })));
}
function App() {
    return (ThreePage());
}
exports["default"] = App;
