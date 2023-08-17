import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsNumber()
  id?: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(300)
  description: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsNumber()
  @IsNotEmpty()
  stock: number;
}
