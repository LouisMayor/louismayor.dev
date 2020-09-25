"use strict";
exports.__esModule = true;
exports.SkillSection = void 0;
var react_1 = require("react");
var image_tile_1 = require("../image-tile");
exports.SkillSection = function (_a) {
    var empty = _a.empty;
    if (empty) {
        return (react_1["default"].createElement("div", null));
    }
    return (react_1["default"].createElement("section", { id: "skills" },
        react_1["default"].createElement("div", { className: "skills" },
            react_1["default"].createElement("div", { className: "skills-title" }, " Skills "),
            react_1["default"].createElement("div", { className: "skills-row-container" },
                react_1["default"].createElement("div", { className: "skills-row-title" },
                    react_1["default"].createElement("b", null, "Languages")),
                react_1["default"].createElement("div", { className: "skills-row-grid" },
                    react_1["default"].createElement(image_tile_1["default"], { alt: "C++", image: "assets/imgs/logos/iso cplusplus.png" }),
                    react_1["default"].createElement(image_tile_1["default"], { alt: "C#", image: "assets/imgs/logos/csharp.png" }),
                    react_1["default"].createElement(image_tile_1["default"], { alt: "Typescript", image: "assets/imgs/logos/typescript.png" }),
                    react_1["default"].createElement(image_tile_1["default"], { alt: "HLSL", image: "assets/imgs/logos/HLSL-Logo.png" }),
                    react_1["default"].createElement(image_tile_1["default"], { alt: "GLSL", image: "assets/imgs/logos/GLSL-Logo.png" }))),
            react_1["default"].createElement("div", { className: "skills-row-container" },
                react_1["default"].createElement("div", { className: "skills-row-title" },
                    react_1["default"].createElement("b", null, "Engines/APIs")),
                react_1["default"].createElement("div", { className: "skills-row-grid" },
                    react_1["default"].createElement(image_tile_1["default"], { alt: "Unreal Engine 4", image: "assets/imgs/logos/unrealengine.png" }),
                    react_1["default"].createElement(image_tile_1["default"], { alt: "Unity", image: "assets/imgs/logos/unity engine.png" }),
                    react_1["default"].createElement(image_tile_1["default"], { alt: "Vulkan", image: "assets/imgs/logos/vulkan.png" }),
                    react_1["default"].createElement(image_tile_1["default"], { alt: "DirectX 11", image: "assets/imgs/logos/directx11.png" }),
                    react_1["default"].createElement(image_tile_1["default"], { alt: "Git", image: "assets/imgs/logos/git.png" }))))));
};
exports["default"] = exports.SkillSection;
