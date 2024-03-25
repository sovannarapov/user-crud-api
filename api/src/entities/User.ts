import { BeforeInsert, BeforeUpdate, Column, Entity, ObjectIdColumn, Unique } from "typeorm";
import { AbstractEntity } from "./AbstractEntity";
import { ObjectId } from 'mongodb';
import { Transform } from 'class-transformer';
import { isEmpty, toString } from 'lodash';
import { IsEmail } from 'class-validator';
import { hashPassword } from '../lib/core/helpers/password';

@Entity('users')
@Unique(['email'])
export class User extends AbstractEntity {
  @ObjectIdColumn()
  @Transform((data) => toString(data.value))
  _id: ObjectId;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
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
