import { it, expect } from 'vitest';
import { InMemoryNotesRepository } from '../repositories/in-memory-notes-repository';
import { CreateNoteUseCase } from './create-note-use-case';
import { UpdateNoteUseCase } from './update-note-use-case';

it('should update a note', async () => {
  const inMemoryNotesRepository = new InMemoryNotesRepository();
  const createNoteUseCase = new CreateNoteUseCase(inMemoryNotesRepository);
  const updateNoteUseCase = new UpdateNoteUseCase(inMemoryNotesRepository);

  const { id } = await createNoteUseCase.execute({
    title: 'Note 4',
    content: 'Content of the note 4.'
  });

  const { title } = await updateNoteUseCase.execute({
    id,
    data: { title: 'Update note 4 title.' }
  });

  expect(title).toBe('Update note 4 title.');
});
