"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const module_js_1 = __importDefault(require("./module.js"));
const value = (0, module_js_1.default)(1, 2);
console.log(value);
console.log((0, module_js_1.default)(5, 5));
const div = document.querySelector('.a');
div.innerHTML = '감자~z';
