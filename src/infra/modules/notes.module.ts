import { Module } from '@nestjs/common';

import { NotesController } from '../controllers/notes.controller';
import { GetAllNotesUseCase } from 'src/application/use-cases/get-all-notes-use-case';
import { FindNoteByIdUseCase } from 'src/application/use-cases/find-note-by-id-use-case';
import { CreateNoteUseCase } from 'src/application/use-cases/create-note-use-case';
import { UpdateNoteUseCase } from 'src/application/use-cases/update-note-use-case';
import { DeleteNoteUseCase } from 'src/application/use-cases/delete-note-use-case';
import { NotesRepository } from 'src/application/repositories/notes-repository';
import { PrismaRepository } from '../repositories/prisma.repository';
import { PrismaService } from '../services/prisma.service';

@Module({
  controllers: [NotesController],
  providers: [
    GetAllNotesUseCase,
    FindNoteByIdUseCase,
    CreateNoteUseCase,
    UpdateNoteUseCase,
    DeleteNoteUseCase,
    PrismaService,
    { provide: NotesRepository, useClass: PrismaRepository }
  ]
})
export class NotesModule {}
