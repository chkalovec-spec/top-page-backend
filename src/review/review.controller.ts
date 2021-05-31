import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ReviewModel } from './review.model';

@Controller('review')
export class ReviewController {
  @Post('create')
  async create(@Body() dto: Omit<ReviewModel, '_id'>) {}

  @Get(':id')
  async get(@Param('id') id: string) {}

  @Delete('byProduct/:productId')
  async delete(@Param('productId') productId: string) {}
}
