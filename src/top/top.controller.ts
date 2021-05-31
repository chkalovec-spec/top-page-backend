import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { TopCategories, TopModel } from './top.model';

@Controller('top')
export class TopController {
  @Post('create')
  async create(@Body() dto: Omit<TopModel, '_id'>) {}

  @Get(':id')
  async get(@Param('id') id: string) {}

  @Delete(':id')
  async delete(@Param('id') id: string) {}

  @Patch(':id')
  async patch(@Param('id') id: string, @Body() dto: TopModel) {}

  @Get()
  async findTop(@Query() firstCategory: TopCategories, limit: number) {}
}
