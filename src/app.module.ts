import { Module } from '@nestjs/common';

import { NotesModule } from './infra/modules/notes.module';

@Module({
  imports: [NotesModule]
})
export class AppModule {}
