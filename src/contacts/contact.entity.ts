import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

/* user-contact data model
// consist with: id, firstName, lastName, email, city, country */
@Entity()
export class Contact {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    city: string;

    @Column()
    country: string;
}