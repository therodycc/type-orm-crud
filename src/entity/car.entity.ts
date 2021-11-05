import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity()
export class Car extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    marca: string;

    @Column()
    placa: string;

    @Column()
    color: string;

}

