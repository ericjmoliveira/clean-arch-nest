import { it, expect } from 'vitest';

import { GetAllNotesUseCase } from './get-all-notes-use-case';
import { InMemoryNotesRepository } from '../repositories/in-memory-notes-repository';

it('should get all notes', async () => {
  const inMemoryNotesRepository = new InMemoryNotesRepository();
  const getAllNotesUseCase = new GetAllNotesUseCase(inMemoryNotesRepository);

  const notes = await getAllNotesUseCase.execute();

  expect(notes.length).toBe(3);
});
