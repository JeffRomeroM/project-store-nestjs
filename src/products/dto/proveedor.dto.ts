import { IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from "class-validator";

export class CreateProveedorDto {
    @IsNotEmpty()
    @IsNumber()
    id?: number;
  
    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    proveedor: string;
    
    @IsDateString()
    @IsOptional()
    created_at: string;
  
    @IsNumber()
    @IsNotEmpty()
    user_id: number;
  
  }