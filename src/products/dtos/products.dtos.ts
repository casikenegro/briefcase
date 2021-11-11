import {
  IsString,
  IsNumber,
  IsUrl,
  IsNotEmpty,
  IsPositive,
} from 'class-validator';
import { PartialType } from '@nestjs/swagger';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Name of Product',
  })
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Description of Product',
    required: false,
  })
  readonly description: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  @ApiProperty()
  readonly price: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  readonly stock: number;

  @IsUrl()
  @IsNotEmpty()
  @ApiProperty()
  readonly image: string;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}
