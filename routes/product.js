import express from express
import * as controllers from "../controllers"
const router = express.router()

router.get("/products", controllers.getAllProducts())
router.get("/products/:id", controllers.getProductById())

export default router