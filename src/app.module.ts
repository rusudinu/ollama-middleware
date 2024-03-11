import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { OllamaController } from './ollama.controller';
import { OllamaService } from './ollama.service';

@Module({
  imports: [HttpModule],
  controllers: [OllamaController],
  providers: [OllamaService],
})
export class AppModule {}
