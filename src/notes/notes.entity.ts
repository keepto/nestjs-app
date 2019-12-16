import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Notes {
  @PrimaryGeneratedColumn()
  id: number;

  // 用户id
  @Column('varchar')
  user_id: string;

  // 书名
  @Column('varchar')
  book_name: string;

  // 封面id
  @Column('varchar')
  cover_url: string;

  // 作者
  @Column('varchar')
  book_author: string;

  // 笔记内容
  @Column('varchar')
  note_txt: string;

  // 修改日期
  @Column('datetime')
  update_time: Date;
}