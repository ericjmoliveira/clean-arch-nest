import { Injectable } from '@nestjs/common';

import { CreateNoteDto } from '../dtos/create-note-dto';
import { NotesRepository } from '../repositories/notes-repository';

@Injectable()
export class CreateNoteUseCase {
  constructor(private readonly notesRepository: NotesRepository) {}

  execute(input: CreateNoteDto) {
    return this.notesRepository.create(input);
  }
}
