import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const Db = new PrismaClient();
const Route = Router();
Route.get("/", (req, res) => {
    res.send("Hello World");
});


Route.post("/crear", async (req, res) => {
    const { email, name, last_name, age, password } = req.body;
    try {
        const result = await Db.user.create({
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
});


Route.put("/actualizar", async (req, res) => {
    const { id, email, name, last_name, age, password } = req.body;
    try {
        const result = await Db.user.update({
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

});

Route.delete("/eliminar", async (req, res) => {
    const { id } = req.body;
    try {
        const result = await Db.user.delete({
            where: {
                id: id
            }
        });
        res.json(result);
    }
    catch (e) {
        res.send(e);
    }

});

Route.get("/listar", async (req, res) => {

    try {
        const result = await Db.user.findMany();
        res.json(result);
    }
    catch (e) {
        res.send(e);
    }
});


export default Route;