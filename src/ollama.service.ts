import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import OllamaInput from './model/ollama-input.interface';
import OllamaOutput from './model/ollama-output.interface';

@Injectable()
export class OllamaService {
  constructor(private httpService: HttpService) {}

  async callOllama(input: OllamaInput) {
    const data = await firstValueFrom(
      this.httpService.post(`http://localhost:11434/api/generate`, {
        ...input,
        stream: false,
      }),
    );
    const response = data.data;
    return {
      model: input.model,
      created_at: new Date().toISOString(),
      response: response.response.trim(),
    } as OllamaOutput;
  }
}
