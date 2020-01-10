import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bookrack } from './bookrack.entity'
import { MESSAGE } from '../common/message';

@Injectable()
export class BookrackService {
    constructor(
        @InjectRepository(Bookrack)
        private readonly bookrackRepository: Repository<Bookrack>
      ) {}

      // 查找某个用户的书架
      async findAll(query) {
        console.log('query:',query)
        const data = await this.bookrackRepository.find(query)
        return MESSAGE.SUCCESS('成功', data);
      }

      // 查询
      async queryById(id) {
        console.log('id:',id)
        const data = await this.bookrackRepository.findOne(id)
        return MESSAGE.SUCCESS('成功', data);
      }

      // 添加/编辑书
      async editBookrack(body) {
        try {
          console.log(body)
          const note = await this.bookrackRepository.save(body);
          return MESSAGE.SUCCESS('操作成功', note);
        } catch (error) {
          return MESSAGE.ERROR('操作失败', error.message);
        }
      }
}
