import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max, MinLength, IsString, IsDefined } from "class-validator";

/* user-contact data model
// consist with: id, firstName, lastName, email, city, country */
@Entity()
export class Contact {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsString()
    @IsDefined()
    firstName: string;

    @Column()
    @IsString()
    @IsDefined()
    lastName: string;

    @Column()
    @IsString()
    @IsEmail()
    @IsDefined()
    email: string;

    @Column()
    @MinLength(11)
    phone: string;

    @Column()
    @IsString()
    city: string;

    @Column()
    @IsString()
    country: string;
}
