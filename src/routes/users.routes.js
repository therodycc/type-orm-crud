"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_1 = __importDefault(require("../controllers/User"));
class UsersRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get("/", User_1.default.get);
        this.router.get("/:id", User_1.default.getOne);
        this.router.post("/", User_1.default.create);
        this.router.put("/:id", User_1.default.update);
        this.router.delete("/:id", User_1.default.delete);
    }
}
const usersRoutes = new UsersRoutes();
exports.default = usersRoutes.router;
