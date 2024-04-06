import { it, expect } from 'vitest';

import { CreateNoteUseCase } from './create-note-use-case';
import { InMemoryNotesRepository } from '../repositories/in-memory-notes-repository';

it('should create a new note', async () => {
  const inMemoryNotesRepository = new InMemoryNotesRepository();
  const createNoteUseCase = new CreateNoteUseCase(inMemoryNotesRepository);

  const note = await createNoteUseCase.execute({
    title: 'Note 4',
    content: 'Content of the note 4.'
  });

  expect(note.createdAt).toBeTruthy();
});
