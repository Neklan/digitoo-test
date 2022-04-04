import { Controller, Delete, Get, HttpStatus, Res } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Delete('purge')
  @ApiResponse({
    description: 'Purge all items in database.',
  })
  async purgeDb(@Res() res: Response): Promise<[]> {
    await this.appService.purgeDb();
    res.status(HttpStatus.OK).json([]);
    return [];
  }
}
