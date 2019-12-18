import { Injectable } from '@nestjs/common';
import { MESSAGE } from '../common/message';

@Injectable()
export class UploadService {
    // 上传图片
    async uploadImg(file, body) {
        // console.log(file, body)
        file.url = `/images/${file.filename}`
        return MESSAGE.SUCCESS('上传成功', file);
      }
}
