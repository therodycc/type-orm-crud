import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Car } from "../entity/car.entity";



class CarController {
    async get(req: Request, res: Response) {
        try {
            const response = Car.find();
            res.json(response)
        } catch (error) {
            res.json(error)
        }
    }

    async create(req: Request, res: Response) {
        const newCar = {
            name: 'El carrote',
            marca: 'buggatti',
            placa: '123ASD12',
            color:'blue'
        }

        const car = Car.create(newCar);
        const result = await Car.save(car);
        return res.json(result)
    }

    getOne(req: Request, res: Response) {

    }

    update(req: Request, res: Response) {

    }

    delete(req: Request, res: Response) {

    }
}

const carController = new CarController();
export default carController;