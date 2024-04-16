import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Databaze } from './databaze/databaze';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, Databaze],
})
export class AppModule {}
