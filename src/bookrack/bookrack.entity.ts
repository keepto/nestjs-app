import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Notes } from '../notes/notes.entity'
@Entity()
export class Bookrack {
  @PrimaryGeneratedColumn()
  id: number;

   // 书名
   @Column()
   bookName: string;

   // 作者
  @Column()
  writer: string;
  
  // 封面地址
  @Column()
  url: string;

  // 笔记id
  @OneToMany(type => Notes, note => note.book)
  note: Notes[];
}