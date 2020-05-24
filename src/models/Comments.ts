import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('comments')
class Comments {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;

    @Column('text')
    comment: string;
}

export default Comments;
