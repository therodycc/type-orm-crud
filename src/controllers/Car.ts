import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Car } from "../entity/car.entity";



class CarController {
    get(req: Request, res: Response) {
        Car.find()
            .then((car) => {
                res.json(car)
            })
            .catch(error => res.json(error))
    }

    create(req: Request, res: Response) {
        const newCar = {
            marca: req.body.marca,
            placa: req.body.placa,
            color: req.body.color
        }
        const car = Car.create(newCar);
        Car.save(car)
            .then((carSaved) => res.json(carSaved))
            .catch(error => res.json(error))
    }

    getOne(req: Request, res: Response) {
        const response = Car.findOne(req.params.id)
            .then((car) => {
                res.json(car)
            })
            .catch(error => res.json(error))
    }

    async update(req: Request, res: Response) {
        const CarNewData = {
            marca: 'toyota updated',
            placa: 'KKJH2343',
            color: 'BLACK'
        }
        const car = await Car.findOne(req.params.id);

        if (car) {
            Car.update(req.params.id, CarNewData)
                .then((carSaved) => res.json(carSaved))
                .catch(error => res.json(error))
        }

        return res.status(404).send({ message: 'Not found'});
    }

    delete(req: Request, res: Response) {

    }
}

const carController = new CarController();
export default carController;