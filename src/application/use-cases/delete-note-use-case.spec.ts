import { it, expect } from 'vitest';

import { InMemoryNotesRepository } from '../repositories/in-memory-notes-repository';
import { CreateNoteUseCase } from './create-note-use-case';
import { DeleteNoteUseCase } from './delete-note-use-case';
import { GetAllNotesUseCase } from './get-all-notes-use-case';

it('should update a note', async () => {
  const inMemoryNotesRepository = new InMemoryNotesRepository();
  const createNoteUseCase = new CreateNoteUseCase(inMemoryNotesRepository);
  const deleteNoteUseCase = new DeleteNoteUseCase(inMemoryNotesRepository);
  const getAllNotesUseCase = new GetAllNotesUseCase(inMemoryNotesRepository);

  const notes = await getAllNotesUseCase.execute();
  const { id } = await createNoteUseCase.execute({
    title: 'Note 4',
    content: 'Content of the note 4.'
  });
  const note = await deleteNoteUseCase.execute(id);

  expect(note.id).toBe(id);
  expect((await getAllNotesUseCase.execute()).length).toBe(notes.length - 1);
});
