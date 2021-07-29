import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiService } from './api.service';
import { ItemCreateDto, ItemUpdateDto } from './model/item.dto';

@Controller('api')
export class ApiController {
    constructor(private service: ApiService) { }
    @Get()
    async list() {
        return this.service.list();
    }

    @Get(':id')
    async getOne(@Param('id') id: string) {
        return this.service.getOne(id);
    }

    @Post()
    async create(@Body() item: ItemCreateDto) {
        return this.service.create(item);
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() item: ItemUpdateDto) {
        return this.service.update(id, item);
    }
}
