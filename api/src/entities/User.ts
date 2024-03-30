import { BeforeInsert, BeforeUpdate, Column, Entity, ObjectIdColumn } from "typeorm";
import { AbstractEntity } from "./AbstractEntity";
import { ObjectId } from 'mongodb';
import { Transform } from 'class-transformer';
import { isEmpty, toString } from 'lodash';
import { IsEmail } from 'class-validator';
import { hashPassword } from '../lib/core/helpers/password';

@Entity('users')
export class User extends AbstractEntity {
    @ObjectIdColumn()
    @Transform((data) => toString(data.value))
    _id: ObjectId;

    @Column({ nullable: true })
    first_name: string;

    @Column({ nullable: true })
    last_name: string;

    @Column({ unique: true })
    @IsEmail({}, { message: 'Please use a valid email address.' })
    email: string;

    @Column()
    password: string;

    @BeforeInsert()
    @BeforeUpdate()
    public async hashPassword(): Promise<void> {
        !isEmpty(this.password) && (this.password = await hashPassword(this.password));
    }
}
