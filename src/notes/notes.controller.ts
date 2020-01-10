import { Controller, Get, Post, Query, Body } from '@nestjs/common';
import { NotesService } from './notes.service'

@Controller('notes')
export class NotesController {
    constructor(private readonly NotesService: NotesService) {}

    @Get('queryList')
    findAll(@Query() query) {
        return this.NotesService.findAll(query);
    }

    @Get('queryById')
    queryById(@Query() query) {
        console.log(query)
        return this.NotesService.queryById(query.id);
    }

    @Post('add')
    addNote(@Body() body) {
        return this.NotesService.editNote(body);
    }

    @Post('edit')
    editNote(@Body() body) {
        return this.NotesService.editNote(body);
    }

    @Post('delete')
    deleteNote(@Body() body) {
        return this.NotesService.deleteNote(body);
    }

}
