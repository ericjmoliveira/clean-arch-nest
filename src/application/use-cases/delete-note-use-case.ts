import { Injectable } from '@nestjs/common';

import { NotesRepository } from '../repositories/notes-repository';

@Injectable()
export class DeleteNoteUseCase {
  constructor(private readonly notesRepository: NotesRepository) {}

  execute(input: string) {
    return this.notesRepository.delete(input);
  }
}
