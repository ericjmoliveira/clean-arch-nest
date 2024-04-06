import { Injectable } from '@nestjs/common';

import { NotesRepository } from '../repositories/notes-repository';

@Injectable()
export class FindNoteByIdUseCase {
  constructor(private readonly notesRepository: NotesRepository) {}

  execute(input: string) {
    return this.notesRepository.findById(input);
  }
}
