import { Module } from '@nestjs/common';
import { ScoutModule } from 'src/scout/scout.module';
import { ApiController } from './api.controller';

@Module({
  imports: [ScoutModule],
  controllers: [ApiController],
})
export class ApiModule {}
