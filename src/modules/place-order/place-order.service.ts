import { Injectable, Logger } from '@nestjs/common';
import { OrderCreator } from './OrderCreator';
import { Order } from './interface/Order';

@Injectable()
export class PlaceOrderService {

  async placeOrder<T extends Order>(
    orderCreator: OrderCreator<T>,
  ): Promise<boolean> {
    const isValidOrder = await orderCreator.validate();
    if (isValidOrder) {
      Logger.debug(
        `Order Created Successfully, ${JSON.stringify(
          orderCreator.createOrder(),
        )}`,
        'PlaceOrderService',
      );
    }
    return isValidOrder;
  }
}
