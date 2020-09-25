"use strict";
exports.__esModule = true;
exports.ProjectsSection = void 0;
var react_1 = require("react");
var project_tile_1 = require("../project-tile");
function TestProElement() {
    return react_1["default"].createElement(project_tile_1["default"], { empty: false, name: "Some Project", desc: "dfsjfhfhsdjfhisdifdjsifids gjfgjdfjigj gjid jgijd ijgijdhgijfigj jigfjgi jgi ojgikfjgijfd gjifj jgifdjgifjdg jhgidjifgj ghh hgjh gjfigj ojigjdifjg ijgifjgif", platforms: "PC, Xbox One, Playstation 4 and Nintendo Switch", image: "assets/imgs/inner_bg.png" });
}
function TestPerElement() {
    return react_1["default"].createElement(project_tile_1["default"], { empty: false, name: "Some Project", desc: "dfsjfhfhsdjfhisdifdjsifids gjfgjdfjigj gjid jgijd ijgijdhgijfigj jigfjgi jgi ojgikfjgijfd gjifj jgifdjgifjdg jhgidjifgj ghh hgjh gjfigj ojigjdifjg ijgifjgif", platforms: "", image: "assets/imgs/inner_bg.png" });
}
var container_pro = "project-pro-tile-container";
var container_per = "project-per-tile-container";
exports.ProjectsSection = function (_a) {
    var empty = _a.empty;
    if (empty) {
        return (react_1["default"].createElement("div", null));
    }
    return (react_1["default"].createElement("section", { id: "projects" },
        react_1["default"].createElement("div", { className: "projects" },
            react_1["default"].createElement("div", { className: "projects-pro" }, " Professional Projects "),
            react_1["default"].createElement("div", { className: container_pro },
                react_1["default"].createElement(project_tile_1["default"], { empty: false, name: "Sackboy", desc: "Sackboy: A Big Adventure is an upcoming platform game developed by Sumo Digital and published by Sony Interactive Entertainment for the PlayStation 5. Part of the LittleBigPlanet series.", platforms: "Playstation 4 and 5", image: "assets/imgs/professional/sackboy.jpg" }),
                react_1["default"].createElement(project_tile_1["default"], { empty: false, name: "Battletoads", desc: "The wait is over! Rash, Zitz and Pimple are returning at last to smash-hit their way through an all-new action-packed adventure of choreographed chaos, and couch co-op may never be the same again.", platforms: "Xbox One, Windows Store and Steam", image: "assets/imgs/professional/battletoads.jpeg" }),
                react_1["default"].createElement(project_tile_1["default"], { empty: false, name: "Two Point Hospital", desc: "Design stunning hospitals, cure peculiar illnesses and manage troublesome staff as you spread your budding healthcare organisation across Two Point County.", platforms: "PC, Xbox One, Playstation 4 and Nintendo Switch", image: "assets/imgs/professional/tph.jpg" })),
            react_1["default"].createElement("div", { className: "projects-per" }, " Personal Projects "),
            react_1["default"].createElement("div", { className: container_per },
                TestPerElement(),
                TestPerElement(),
                TestPerElement()))));
};
exports["default"] = exports.ProjectsSection;
