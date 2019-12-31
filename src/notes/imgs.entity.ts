import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Notes } from './notes.entity'
@Entity()
export class Imgs {
  @PrimaryGeneratedColumn()
  id: number;

  // 图片地址
  @Column()
  url: string;

  // 笔记id
  @ManyToOne(type => Notes, note => note.imgs)
  note: Notes;
}