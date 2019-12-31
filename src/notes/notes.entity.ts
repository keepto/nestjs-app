import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { Imgs } from './imgs.entity'
import { Bookrack } from '../bookrack/bookrack.entity'
@Entity()
export class Notes {
  @PrimaryGeneratedColumn()
  id: number;

  // 用户id
  @Column()
  userId: string;

  // 书名
  @ManyToOne(type => Bookrack, bookrack => bookrack.note)
  bookrack: Bookrack;

  // 笔记内容
  @Column({
    length: 300,
    nullable: true
  })
  noteTxt: string;

  // 修改日期
  @Column({
    nullable: true
  })
  updateTime: Date;

  // 上传图片
  @OneToMany(type => Imgs, img => img.note, {
    cascade:true
  })
  imgs: Imgs[];
}