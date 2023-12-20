import { IsEmail, IsNotEmpty } from 'class-validator';


export class CreateUserDTO {
    @IsNotEmpty()
    username: string;
    
    @IsEmail()
    email: string;
    
    @IsNotEmpty()
    password: string;

    roles: string[];
  }