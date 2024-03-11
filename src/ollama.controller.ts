import { Body, Controller, Post } from '@nestjs/common';
import OllamaInput from './model/ollama-input.interface';
import { OllamaService } from './ollama.service';

@Controller()
export class OllamaController {
  constructor(private readonly ollamaService: OllamaService) {}

  @Post()
  callOllama(@Body() ollamaInput: OllamaInput) {
    return this.ollamaService.callOllama(ollamaInput);
  }
}
