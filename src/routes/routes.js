import { Router } from "express";

import UsuarioController from "../controllers/UsuarioController.js";

const routes = Router();

routes.get("/", UsuarioController.recomendarUsuario);

export default routes;
