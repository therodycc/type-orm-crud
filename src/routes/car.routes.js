"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Car_1 = __importDefault(require("../controllers/Car"));
class CarRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get("/", Car_1.default.get);
        this.router.get("/:id", Car_1.default.getOne);
        this.router.post("/", Car_1.default.create);
        this.router.put("/:id", Car_1.default.update);
        this.router.delete("/:id", Car_1.default.delete);
    }
}
const carRoutes = new CarRoutes();
exports.default = carRoutes.router;
