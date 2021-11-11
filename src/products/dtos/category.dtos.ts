import { IsString, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/swagger';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly name: string;
}

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {}
