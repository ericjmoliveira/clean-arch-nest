import { Note } from 'src/domain/entities/note';
import { CreateNoteDto } from '../dtos/create-note-dto';
import { NotesRepository } from './notes-repository';
import { randomUUID } from 'crypto';
import { UpdateNoteDto } from '../dtos/update-note-dto';

export class InMemoryNotesRepository implements NotesRepository {
  private notes: Note[] = [
    {
      id: randomUUID(),
      title: 'Note 1',
      content: 'Content of note 1',
      createdAt: new Date('2024-04-03T00:00:00'),
      updatedAt: new Date('2024-04-03T00:00:00')
    },
    {
      id: randomUUID(),
      title: 'Note 2',
      content: 'Content of note 2',
      createdAt: new Date('2024-04-04T00:00:00'),
      updatedAt: new Date('2024-04-04T00:00:00')
    },
    {
      id: randomUUID(),
      title: 'Note 3',
      content: 'Content of Note 3',
      createdAt: new Date('2024-04-05T00:00:00'),
      updatedAt: new Date('2024-04-05T00:00:00')
    }
  ];

  async create(data: CreateNoteDto) {
    const note = {
      id: 'my-id',
      title: data.title,
      content: data.content,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    this.notes.push(note);

    return note;
  }

  async getAll() {
    return this.notes;
  }

  async findById(id: string) {
    const note = this.notes.find((note) => note.id === id);

    if (!note) {
      return undefined;
    }

    return note;
  }

  async update(id: string, data: UpdateNoteDto) {
    this.notes = this.notes.map((note) => {
      if (note.id === id) {
        return {
          ...note,
          title: data.title ? data.title : note.title,
          content: data.content ? data.content : note.content,
          updatedAt: new Date()
        };
      }

      return note;
    });

    return this.notes.find((note) => note.id === id);
  }

  async delete(id: string) {
    const note = this.notes.find((note) => note.id === id);

    this.notes = this.notes.filter((note) => note.id !== id);

    return note;
  }
}
