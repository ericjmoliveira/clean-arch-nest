import { Injectable } from '@nestjs/common';

import { CreateNoteDto } from 'src/application/dtos/create-note-dto';
import { UpdateNoteDto } from 'src/application/dtos/update-note-dto';
import { NotesRepository } from 'src/application/repositories/notes-repository';
import { PrismaService } from '../services/prisma.service';

@Injectable()
export class PrismaRepository implements NotesRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: CreateNoteDto) {
    return this.prismaService.note.create({ data });
  }

  async getAll() {
    return await this.prismaService.note.findMany();
  }

  async findById(id: string) {
    return this.prismaService.note.findUnique({ where: { id } });
  }

  async update(id: string, data: UpdateNoteDto) {
    return this.prismaService.note.update({ data, where: { id } });
  }

  async delete(id: string) {
    return this.prismaService.note.delete({ where: { id } });
  }
}
