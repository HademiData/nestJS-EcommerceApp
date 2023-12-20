import { IsString, IsNotEmpty } from 'class-validator';

export class CreateProductDTO {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    description: string;
    
    @IsNotEmpty()
    price: number;

    @IsString()
    @IsNotEmpty()
    category: string;
  }