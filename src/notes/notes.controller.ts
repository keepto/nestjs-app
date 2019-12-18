import { Controller, Get, Post, Query, Body, UseInterceptors, UploadedFile, UploadedFiles  } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express'
import { NotesService } from './notes.service'

@Controller('notes')
export class NotesController {
    constructor(private readonly NotesService: NotesService) {}

    @Get('queryList')
    findAll(@Query() query) {
        return this.NotesService.findAll(query);
    }

    @Post('add')
    addNote(@Body() body) {
        return this.NotesService.addNote(body);
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
