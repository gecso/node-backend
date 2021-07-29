import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './api/api.module';
import { MongooseModule } from '@nestjs/mongoose';

const db = process.env.DATABASE || 'mongodb://localhost/osome';

@Module({
  imports: [MongooseModule.forRoot(db), ApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
