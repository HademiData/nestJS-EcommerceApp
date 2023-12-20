import { Injectable } from '@nestjs/common';
import { Product } from 'prisma/schema.prisma';
import { CreateProductDTO } from './dtos/create-product.dto';
import { FilterProductDTO } from './dtos/filter-product.dto';
import { PrismaService } from 'prisma/prisma.service';


@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) { }
  
  async getFilteredProducts(filterProductDTO: FilterProductDTO) {
    const { category, search } = filterProductDTO;
    let products = await this.getAllProducts();

    if (search) {
      products = products.filter(product => 
        product.name.includes(search) ||
        product.description.includes(search)
      );
    }

    if (category) {
      products = products.filter(product => product.category === category);
    }
    return products;
  }

  async getAllProducts() {
    const products = await this.prisma.product.findMany();
    return products;
  }
 
  async getProduct(id: string) {
    const product = await this.prisma.product.findUnique({
      where: { id: id },
    });
    
    return product;
  }

  async addProduct(createProductDTO: CreateProductDTO) {
    const newProduct = await this.prisma.product.create({
      data: createProductDTO,
    });

    return newProduct;
  }


  async updateProduct(id: string, createProductDTO: CreateProductDTO) {
    const updatedProduct = await this.prisma.product.update({
      where: { id: id },
      data: createProductDTO,
    });

    return updatedProduct;
  }


  async deleteProduct(id: string){
    const deletedProduct = await this.prisma.product.delete({
      where: { id: id },
    });

    return deletedProduct;
  }
}



