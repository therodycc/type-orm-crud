import { Router } from "express";
import carController from "../controllers/Car";

class CarRoutes {
  public router: Router = Router();
  constructor() {
    this.config();
  }
  config(): void {
    this.router.get("/", carController.get);
    this.router.get("/:id", carController.getOne);
    this.router.post("/", carController.create);
    this.router.put("/:id", carController.update);
    this.router.delete("/:id", carController.delete);
  }
}

const carRoutes = new CarRoutes();
export default carRoutes.router;
