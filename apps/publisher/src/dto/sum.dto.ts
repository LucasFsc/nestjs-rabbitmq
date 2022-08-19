import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class SumDto {
  @ApiProperty({
    type: [Number],
    example: [2, 4, 6],
    description: 'The numbers to be accumulated',
  })
  @IsNumber({}, { each: true })
  data: number[];
}
