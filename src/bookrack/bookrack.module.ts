import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookrackService } from './bookrack.service';
import { BookrackController } from './bookrack.controller';
import { Bookrack } from './bookrack.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Bookrack])],
    providers: [BookrackService],
    controllers: [BookrackController],
    exports: [TypeOrmModule, BookrackService]
})
export class BookrackModule {

}
