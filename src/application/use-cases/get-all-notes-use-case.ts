import { Injectable } from '@nestjs/common';

import { NotesRepository } from '../repositories/notes-repository';

@Injectable()
export class GetAllNotesUseCase {
  constructor(private readonly notesRepository: NotesRepository) {}

  async execute() {
    return await this.notesRepository.getAll();
  }
}
