import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { Order } from './interface/Order';
import { OrderCreator } from './OrderCreator';

@Injectable()
export class PlaceOrderService {
  async placeOrder<T extends Order>(orderCreator: OrderCreator<T>): Promise<T> {
    const isValidOrder = orderCreator.validate();
    const order = orderCreator.createOrder();

    if (isValidOrder) {
      Logger.debug(
        `Order Created Successfully, ${JSON.stringify(order)}`,
        'PlaceOrderService',
      );
      return order;
    } else {
      throw new BadRequestException('order invalid');
    }
  }
}
