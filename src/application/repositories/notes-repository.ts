import { Injectable } from '@nestjs/common';

import { Note } from 'src/domain/entities/note';
import { CreateNoteDto } from '../dtos/create-note-dto';
import { UpdateNoteDto } from '../dtos/update-note-dto';

@Injectable()
export abstract class NotesRepository {
  abstract create(data: CreateNoteDto): Promise<Note>;
  abstract getAll(): Promise<Note[]>;
  abstract findById(id: string): Promise<Note | undefined>;
  abstract update(id: string, data: UpdateNoteDto): Promise<Note>;
  abstract delete(id: string): Promise<Note>;
}
