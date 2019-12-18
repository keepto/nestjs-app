import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Notes } from './notes.entity'
@Entity()
export class Imgs {
  @PrimaryGeneratedColumn()
  id: number;

  // 笔记id
  @ManyToOne(type => Notes, note => note.noteUrl)
  noteId: Notes;

  // 图片地址
  @Column()
  url: string;
}