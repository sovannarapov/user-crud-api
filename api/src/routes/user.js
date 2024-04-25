import { Router } from "express"
import { UserController } from '../controllers/UserController'

const userController = new UserController()
const router = new Router()

router
  .get("/users", async (req, res) => {
    const data = await userController.getUsers()
    res.json(data)
  })
  .get("/users/:id", async (req, res) => {
    const data = await userController.getUserById(req.params.id)
    res.json(data)
  })
  .post("/users", async (req, res) => {
    const data = await userController.createUser(req.body)
    res.json(data)
  })
  .put("/users", async (req, res) => {
    const data = await userController.updateUser(req.body)
    res.json(data)
  })
  .delete("/users/:id", async (req, res) => {
    const data = await userController.deleteUser(req.params.id)
    res.json(data)
  })

export default router
