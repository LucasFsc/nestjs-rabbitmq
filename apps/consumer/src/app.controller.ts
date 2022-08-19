import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  @MessagePattern({ cmd: 'sum' })
  async sum(data: number[]): Promise<number> {
    return (data || []).reduce((a, b) => a + b);
  }

  @EventPattern('multiply_by_two')
  async multiplyByTwo({ data }: Record<string, number>) {
    console.log(data * 2);
  }
}
