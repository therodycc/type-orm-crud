import express, { Application, urlencoded } from "express";

import morgan from "morgan";
import cors from "cors";
import "reflect-metadata";
import { getConnection, createConnection } from "typeorm";
// routes
import users from "./routes/users.routes";
import carRoutes from "./routes/car.routes";



class Server {
  public app: Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  config(): void {
    this.app.set("port", process.env.PORT || 3000);
    this.app.use(morgan("dev"));
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(urlencoded({ extended: false }));
  }

  routes(): void {
    this.app.use("/api/users", users);
    this.app.use("/api/cars", carRoutes);
  }

  start(): void {
    this.app.listen(this.app.get("port"), () => {
      console.log(`Server on port ${this.app.get("port")}`);
    });
    // connection
    createConnection()
      .then((data) => {
        console.log('db is connected')
      })
      .catch(error => {
        console.log(error)
      })

  }
}

const server = new Server();
server.start();