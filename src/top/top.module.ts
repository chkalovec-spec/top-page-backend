import { Module } from '@nestjs/common';
import { TopController } from './top.controller';

@Module({
  controllers: [TopController],
})
export class TopModule {}
