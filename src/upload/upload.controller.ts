import { Controller, Post, Body, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadService } from './upload.service';
import multer = require('multer');

@Controller('upload')
export class UploadController {
    constructor(private readonly UploadService: UploadService) {}

    @Post()
    @UseInterceptors(FileInterceptor('file', {
        storage: multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, `${__dirname}/../../public/images`);  // 定位到dist文件下的中当前文件位置 dist/upload
            },
            filename: (req, file, cb) => {
                console.log(file)
                cb(null, file.originalname);
            },
        }),
    }))
    uploadImg(@UploadedFile() file, @Body() body) {
        return this.UploadService.uploadImg(file, body)
    }
}
