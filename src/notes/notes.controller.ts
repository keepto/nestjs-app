import { Controller, Get  } from '@nestjs/common';
import { NotesService } from './notes.service'

@Controller('notes')
export class NotesController {
    constructor(private readonly NotesService: NotesService) {}

    @Get('queryList')
    findAll(): string {
        return this.NotesService.findAll();
    }
}
