import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import { Imgs } from './imgs.entity'
@Entity()
export class Notes {
  @PrimaryGeneratedColumn()
  id: number;

  // 用户id
  @Column()
  userId: string;

  // 书名
  @Column()
  bookName: string;

  // 封面id
  @Column()
  coverUrl: string;

  // 作者
  @Column()
  writer: string;

  // 上传图片
  @OneToMany(type => Imgs, img => img.noteId)
  @JoinColumn()
  noteUrl?: Imgs[];

  // 笔记内容
  @Column()
  noteTxt: string;

  // 修改日期
  @Column()
  updateTime: Date;
}