import { OrderCreator } from '../place-order/OrderCreator';
import { TmtOrder } from './interface/tmt.order';

export class TmtOrderCreator extends OrderCreator<TmtOrder> {
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
