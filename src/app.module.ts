import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { ServeStaticModule } from '@nestjs/serve-static';
// import { join } from 'path';
import { NotesController } from './notes/notes.controller';
import { NotesService } from './notes/notes.service';
import { NotesModule } from './notes/notes.module';
import { UploadController } from './upload/upload.controller';
import { UploadService } from './upload/upload.service';
import { UploadModule } from './upload/upload.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '12345678',
      database: 'notes',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      logging: false // 是否打印typeorm日志
    }),
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, '..', 'public'),
    // }),
    NotesModule,
    UploadModule],
  controllers: [AppController, NotesController, UploadController],
  providers: [AppService, NotesService, UploadService],
})
export class AppModule {}
