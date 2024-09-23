"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_1 = require("@prisma/client");
const Db = new client_1.PrismaClient();
const Route = (0, express_1.Router)();
Route.get("/", (req, res) => {
    res.send("Hello World");
});
Route.post("/crear", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, name, last_name, age, password } = req.body;
    try {
        const result = yield Db.user.create({
            data: {
                email,
                name,
                last_name,
                age,
                password
            }
        });
        res.json(result);
    }
    catch (e) {
        res.send(e);
    }
}));
Route.put("/actualizar", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, email, name, last_name, age, password } = req.body;
    try {
        const result = yield Db.user.update({
            where: {
                id: id
            },
            data: {
                name,
                last_name,
                age,
                password
            }
        });
        res.json(result);
    }
    catch (e) {
        res.send(e);
    }
}));
Route.delete("/eliminar", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        const result = yield Db.user.delete({
            where: {
                id: id
            }
        });
        res.json(result);
    }
    catch (e) {
        res.send(e);
    }
}));
Route.get("/listar", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield Db.user.findMany();
        res.json(result);
    }
    catch (e) {
        res.send(e);
    }
}));
exports.default = Route;
