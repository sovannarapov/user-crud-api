import { Router } from "express"
import UserController from '../controller/user.controller.js'

const userController = new UserController
const router = new Router()

router
  .get("/users", (_req, res) =>
    userController.getUsers().then((data) => res.json(data)),
  )
  .get("/users/:id", (req, res) =>
    userController.getUserById(req.params.id).then((data) => res.json(data)),
  )
  .post("/users", (req, res) =>
    userController.createUser(req.body).then((data) => res.json(data)),
  )
  .put("/users", (req, res) =>
    userController.updateUser(req.body).then((data) => res.json(data)),
  )
  .delete("/users/:id", (req, res) =>
    userController.deleteUser(req.params.id).then((data) => res.json(data)),
  )

export default router
