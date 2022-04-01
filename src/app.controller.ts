import { Controller, Delete, Get, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Delete()
  async purgeDb(@Res() res: Response) {
    await this.appService.purgeDb();
    res.status(HttpStatus.OK).json([]);
  }
}
