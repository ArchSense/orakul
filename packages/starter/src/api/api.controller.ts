import { Body, Controller, Get, Post } from '@nestjs/common';
import { readFile } from 'fs/promises';
import path from 'path';
import { ScoutService } from 'src/scout/scout.service';

@Controller('api')
export class ApiController {
  constructor(private scoutService: ScoutService) { }

  @Get('/analytics')
  async fetchAnalytics() {
    const res = await this.scoutService.getAnalytics();
    return res;
  }

  @Post('/source-code')
  retrieveSourceCode(@Body() { fileId }: { fileId: string }) {
    const filePath = path.resolve(__dirname, '../', fileId);
    return readFile(filePath, { encoding: 'utf-8' });
  }
}
