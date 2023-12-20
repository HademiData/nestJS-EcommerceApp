import { IsString } from 'class-validator';


export class FilterProductDTO {
    
    @IsString()
    search: string;

    @IsString()
    category: string;
  }