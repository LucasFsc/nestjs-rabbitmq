import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { MultiplyByTwoDto } from './dto/multiply-by-two.dto';
import { SumDto } from './dto/sum.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @HttpCode(HttpStatus.OK)
  @Post('/sum')
  async sum(@Body() { data }: SumDto) {
    return this.appService.sum(data);
  }

  @HttpCode(HttpStatus.OK)
  @Post('/multiply_by_two')
  async multiplyByTwo(@Body() { data }: MultiplyByTwoDto) {
    return this.appService.multiplyByTwo(data);
  }
}
