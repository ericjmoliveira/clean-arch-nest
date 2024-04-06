import { it, expect } from 'vitest';
import { InMemoryNotesRepository } from '../repositories/in-memory-notes-repository';
import { FindNoteByIdUseCase } from './find-note-by-id-use-case';
import { CreateNoteUseCase } from './create-note-use-case';

it('should not find a note by id', async () => {
  const inMemoryNotesRepository = new InMemoryNotesRepository();
  const findNoteByIdUseCase = new FindNoteByIdUseCase(inMemoryNotesRepository);

  const note = await findNoteByIdUseCase.execute('my-id');

  expect(note).toBeUndefined();
});

it('should find a note by id', async () => {
  const inMemoryNotesRepository = new InMemoryNotesRepository();
  const createNoteUseCase = new CreateNoteUseCase(inMemoryNotesRepository);
  const findNoteByIdUseCase = new FindNoteByIdUseCase(inMemoryNotesRepository);

  const { id } = await createNoteUseCase.execute({
    title: 'Note 4',
    content: 'Content of the note 4.'
  });
  const note = await findNoteByIdUseCase.execute(id);

  expect(note.title).toBe('Note 4');
  expect(note.content).toBe('Content of the note 4.');
});
