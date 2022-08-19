import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Services } from './common/enum/services.enum';

@Injectable()
export class AppService {
  constructor(@Inject(Services.MATH_SERVICE) private client: ClientProxy) {}

  async multiplyByTwo(data: number) {
    return this.client.emit('multiply_by_two', { data });
  }

  async sum(data: number[]) {
    return await this.client.send({ cmd: 'sum' }, data);
  }
}
