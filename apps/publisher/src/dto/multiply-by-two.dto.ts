import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class MultiplyByTwoDto {
  @IsNumber()
  @ApiProperty({ example: 2, description: 'The number to be multiplied' })
  data: number;
}
