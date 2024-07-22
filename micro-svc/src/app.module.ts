import { Module } from '@nestjs/common';
import { HelloController } from './hero.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [HelloController],
  providers: [AppService],
})
export class AppModule {}
