import { Controller, Delete, HttpStatus, Res, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { Response } from 'express';
import { AppService } from './app.service';
import { AuthGuard } from './auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Delete('purge')
  @UseGuards(AuthGuard)
  @ApiResponse({
    description:
      'Purge all items in database.\n Use `topsecrettoken` for Authorization header.',
  })
  @ApiBearerAuth()
  async purgeDb(@Res() res: Response): Promise<[]> {
    await this.appService.purgeDb();
    res.status(HttpStatus.OK).json([]);
    return [];
  }
}
