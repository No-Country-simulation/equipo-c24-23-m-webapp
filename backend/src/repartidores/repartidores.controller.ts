import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { RepartidoresService } from './repartidores.service';
import { CreateRepartidorDto } from './dto';
import { UpdateRepartidorDto } from './dto';

@Controller('repartidores')
export class RepartidoresController {
  constructor(private readonly repartidoresService: RepartidoresService) {}

  @Post()
  create(@Body() createRepartidoreDto: CreateRepartidorDto) {
    return this.repartidoresService.create(createRepartidoreDto);
  }

  @Get()
  findAll() {
    return this.repartidoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.repartidoresService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateRepartidoreDto: UpdateRepartidorDto) {
    return this.repartidoresService.update(id, updateRepartidoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.repartidoresService.remove(id);
  }
}
