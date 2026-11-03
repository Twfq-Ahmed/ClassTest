import { Type } from 'class-transformer';
import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateFacultyDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(14)
  id: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  expertise: string;

  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  @Type(() => Number)
  noOfPublication: number;
}
