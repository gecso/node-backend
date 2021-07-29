import { Injectable } from '@nestjs/common';
import { ItemCreateDto, ItemDto, ItemStatus, ItemUpdateDto } from './model/item.dto';
import { InjectModel } from '@nestjs/mongoose';
import { IItem, ITEM_SCHEMA_ID } from './model/item.schema';
import { Model } from 'mongoose';

@Injectable()
export class ApiService {
    constructor(@InjectModel(ITEM_SCHEMA_ID) private itemModel: Model<ItemDto & Document>) { }

    async list(): Promise<ItemDto[]> {
        const items = await this.itemModel.find().exec();
        return items;
    }

    async getOne(id: string): Promise<ItemDto> {
        return await this.itemModel.findById(id);
    }

    async create(item: ItemCreateDto): Promise<ItemDto> {
        const created = new this.itemModel(item);
        return created.save();
    }

    async update(id: string, item: ItemUpdateDto): Promise<ItemDto> {
        const doc = await this.itemModel.findById(id);
        for (const key in item) {
            if (Object.prototype.hasOwnProperty.call(item, key)) {
                const value = item[key];
                if(value) {
                   doc[key] = value;
                }                
            }
        }

        await doc.save();
        return doc;
    }
}
