import { BaseEntity, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Transform } from 'class-transformer';

export abstract class AbstractEntity extends BaseEntity {
    @Transform((value: any) => DateTimeFormat(value))
    @CreateDateColumn({ nullable: true })
    public created_at: Date;

    @Transform((value: any) => DateTimeFormat(value))
    @UpdateDateColumn({ nullable: true })
    public updated_at: Date;
}

export function DateFormat(value: Date): any {
    return value;
}

export function DateTimeFormat(value: Date, millisecond: boolean = false): any {
    return value;
}
