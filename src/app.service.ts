import { Injectable, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config'; // 👈 Import ConfigType
import config from './config';
@Injectable()
export class AppService {
  constructor(
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}
  getHello(): string {
    const apiKey = this.configService.apiKey;
    return `Hello World! ${apiKey}`;
  }
}
