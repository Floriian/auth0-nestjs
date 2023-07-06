import { Controller, Get, UseGuards } from '@nestjs/common';
import { LinksService } from './links.service';
import { JwtGuard } from '../auth/guards/jwt.guard';

@Controller('links')
export class LinksController {
  constructor(private readonly linksService: LinksService) {}

  @Get()
  @UseGuards(JwtGuard)
  getLinks() {
    return this.linksService.getLinks();
  }
}
