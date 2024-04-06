import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

import { CreateNoteDto } from 'src/application/dtos/create-note-dto';
import { UpdateNoteDto } from 'src/application/dtos/update-note-dto';
import { CreateNoteUseCase } from 'src/application/use-cases/create-note-use-case';
import { DeleteNoteUseCase } from 'src/application/use-cases/delete-note-use-case';
import { FindNoteByIdUseCase } from 'src/application/use-cases/find-note-by-id-use-case';
import { GetAllNotesUseCase } from 'src/application/use-cases/get-all-notes-use-case';
import { UpdateNoteUseCase } from 'src/application/use-cases/update-note-use-case';

@Controller('/notes')
export class NotesController {
  constructor(
    private readonly getAllNotesUseCase: GetAllNotesUseCase,
    private readonly findNoteByIdUseCase: FindNoteByIdUseCase,
    private readonly createNoteUseCase: CreateNoteUseCase,
    private readonly updateNoteUseCase: UpdateNoteUseCase,
    private readonly deleteNoteUseCase: DeleteNoteUseCase
  ) {}

  @Get()
  async getAll() {
    const notes = await this.getAllNotesUseCase.execute();

    return {
      notes
    };
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    const note = await this.findNoteByIdUseCase.execute(id);

    return {
      note
    };
  }

  @Post()
  async create(@Body() createNoteDto: CreateNoteDto) {
    const note = await this.createNoteUseCase.execute(createNoteDto);

    return {
      note
    };
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateNoteDto: UpdateNoteDto) {
    const note = await this.updateNoteUseCase.execute({ id, data: updateNoteDto });

    return {
      note
    };
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const note = await this.deleteNoteUseCase.execute(id);

    return {
      note
    };
  }
}
