import { OrderCreator } from '../place-order/OrderCreator';
import { DominoOrder } from './interface/domino.order';
import { Injectable, Logger } from '@nestjs/common';
import { PlaceOrderService } from '../place-order/place-order.service';

@Injectable()
export class DominoPlaceOrderService implements OrderCreator<DominoOrder> {
  constructor(private readonly placeOrderService: PlaceOrderService) {}

  placeOrder(): Promise<DominoOrder> {
    return this.placeOrderService.placeOrder(this);
  }

  createOrder(): DominoOrder {
    return {
      items: ['item1', 'item2', 'item3'],
      name: 'Pizza',
      options: ['option1', 'option2', 'option3'],
      thirdParty: 'Dominos',
    };
  }

  async validate(): Promise<boolean> {
    return true;
  }

  alertBeforeOrder(): string {
    Logger.debug('dominos alert');
    return '';
  }
}
