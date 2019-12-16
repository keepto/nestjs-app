import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Notes } from './notes.entity';
import { MESSAGE } from '../common/message';

@Injectable()
export class NotesService {
    constructor(
        @InjectRepository(Notes)
        private readonly notesRepository: Repository<Notes>,
      ) {}

      // 查找某个用户的所有笔记
      async findAll(query) {
        const data = await this.notesRepository.find(query)
        return MESSAGE.SUCCESS('', data);
      }

      // 添加笔记
      async addNote(body) {
        try {
          await this.notesRepository.insert(body);
          return MESSAGE.SUCCESS('添加成功');
        } catch (error) {
          return MESSAGE.ERROR('添加失败', error.message);
        }
      }

      // 修改笔记
      async editNote(body) {
        if (this.notesRepository.findOneOrFail(body.id)) {
          return MESSAGE.ERROR('修改失败', '不存在该条记录');
        }
        if (!body.id) {
          return MESSAGE.ERROR('修改失败', '缺少id');
        }
        try {
          await this.notesRepository.update(body.id, body);
          return MESSAGE.SUCCESS('修改成功');
        } catch (error) {
          return MESSAGE.ERROR('修改失败', error.message);
        }
      }

      // 删除笔记
      async deleteNote(body) {
        try {
          await this.notesRepository.delete(body.id);
          return MESSAGE.SUCCESS('删除成功');
        } catch (error) {
          return MESSAGE.ERROR('删除失败', error.message);
        }
      }
}
