import { Injectable } from '@nestjs/common';
import { PlaceOrderService } from '../place-order/place-order.service';
import { OrderCreator } from '../place-order/OrderCreator';
import { TmtOrder } from './interface/tmt.order';

@Injectable()
export class TmtPlaceOrderService implements OrderCreator<TmtOrder> {
  constructor(private readonly placeOrderService: PlaceOrderService) {}

  placeOrder() {
    return this.placeOrderService.placeOrder(this);
  }

  createOrder(): TmtOrder {
    return {
      items: ['item1', 'item2', 'item3'],
      name: 'Pizza',
      options: ['option1', 'option2', 'option3'],
      orderFrom: 'TmmmT',
    };
  }

  async validate(): Promise<boolean> {
    return true;
  }
}
