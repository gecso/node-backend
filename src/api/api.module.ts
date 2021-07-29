import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Mongoose } from 'mongoose';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';
import { ItemSchema, ITEM_SCHEMA_ID } from './model/item.schema';



@Module({
  imports: [MongooseModule.forFeature([
    { name: ITEM_SCHEMA_ID, schema: ItemSchema }
  ])],
  controllers: [ApiController],
  providers: [ApiService]
})
export class ApiModule {}
