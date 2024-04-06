import { Injectable } from '@nestjs/common';

import { UpdateNoteDto } from '../dtos/update-note-dto';
import { NotesRepository } from '../repositories/notes-repository';

@Injectable()
export class UpdateNoteUseCase {
  constructor(private readonly notesRepository: NotesRepository) {}

  execute(input: { id: string; data: UpdateNoteDto }) {
    return this.notesRepository.update(input.id, input.data);
  }
}
