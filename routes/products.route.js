import express from 'express'
import * as productController from '../controllers/productController.js' 

const productRoute = express.Router();

productRoute.get("/", productController.getAll)
productRoute.get("/:id", productController.getID)
productRoute.put("/update" , productController.update)
productRoute.post("/create", productController.create)
productRoute.delete("/delete", productController.distoy)
export default productRoute;