import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render("index.hbs")
  root(): { message: string; }{
    return { message: "Hello nesst"}
  }
  getHello(): string {
    return this.appService.getHello();
  }
 
}
