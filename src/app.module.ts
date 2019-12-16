import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { NotesController } from './notes/notes.controller';
import { NotesService } from './notes/notes.service';
import { NotesModule } from './notes/notes.module';

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
      synchronize: false
    }),
    NotesModule],
  controllers: [AppController],
  providers: [AppService, NotesService],
})
export class AppModule {}
