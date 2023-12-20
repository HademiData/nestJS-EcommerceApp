import { Injectable } from '@nestjs/common';
import { ItemDTO } from './dtos/item.dto';
import { Cart } from 'prisma/schema.prisma';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class CartService {
  constructor( private prisma: PrismaService) { }


  async createCart(userId: string, itemDTO: ItemDTO, subTotalPrice: number, totalPrice: number) {
    const newCart = await this.prisma.cart.create({
      userId,
      items: [{ ...itemDTO, subTotalPrice }],
      totalPrice
    });
    return newCart;
  }

  async getCart(userId:string) {
    const cart = await this.prisma.cart.findUnique({
      where: { userId },
    });

    return cart;
  }

  async deleteCart(userId: string) {
    const deletedCart = await this.prisma.cart.delete({
      where: { userId },
    });

    return deletedCart;
  }
  
  private recalculateCart(cart: Cart) {
    cart.totalPrice = 0;
    cart.items.forEach(item => {
      cart.totalPrice += item.quantity * item.price;
    });
  }


  async addItemToCart(userId: string, itemDTO: ItemDTO){
    const { productId, quantity, price } = itemDTO;
    const subTotalPrice = quantity * price;

    const cart = await this.getCart(userId);

    if (cart) {
      const itemIndex = cart.items.findIndex((item) => item.productId === productId);

      if (itemIndex > -1) {
        let item = cart.items[itemIndex];
        item.quantity += quantity;
        item.subTotalPrice = item.quantity * item.price;

        cart.items[itemIndex] = item;
        this.recalculateCart(cart);

        return this.prisma.cart.update({
          where: { userId },
          data: cart,
        });
      } else {
        const updatedCart = await this.prisma.cart.update({
          where: { userId },
          data: {
            items: {
              create: [{ ...itemDTO, subTotalPrice }],
            },
          },
        });

        this.recalculateCart(updatedCart);

        return updatedCart;
      }
    } else {
      const newCart = await this.createCart(userId, itemDTO, subTotalPrice, price);
      return newCart;
    }
  }



  async removeItemFromCart(userId: string, productId: string){
    
    const cart = await this.getCart(userId);

    if (cart) {
      const itemIndex = cart.items.findIndex((item) => item.productId === productId);

      if (itemIndex > -1) {
        cart.items.splice(itemIndex, 1);
        this.recalculateCart(cart);

        return this.prisma.cart.update({
          where: { userId },
          data: cart,
        });
        }
    }else{
        return 'Cart not found';
      }
  }
}