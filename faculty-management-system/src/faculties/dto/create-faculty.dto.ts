import { Type } from 'class-transformer';
import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
} from 'class-validator';

export class CreateFacultyDto {
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
