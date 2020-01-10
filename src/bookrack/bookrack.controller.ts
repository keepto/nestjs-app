import { Controller, Get, Post, Query, Body } from '@nestjs/common';
import { BookrackService } from './bookrack.service'

@Controller('bookrack')
export class BookrackController {
    constructor(private readonly BookrackService: BookrackService) {}

    @Get('queryList')
    findAll(@Query() query) {
        return this.BookrackService.findAll(query);
    }

    @Get('queryById')
    queryById(@Query() query) {
        return this.BookrackService.queryById(query.id);
    }

    @Post('add')
    addBook(@Body() body) {
        return this.BookrackService.editBookrack(body);
    }

    @Post('edit')
    editBook(@Body() body) {
        return this.BookrackService.editBookrack(body);
    }
}
