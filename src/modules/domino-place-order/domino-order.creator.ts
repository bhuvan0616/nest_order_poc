import { OrderCreator } from '../place-order/OrderCreator';
import { DominoOrder } from './interface/domino.order';

export class DominoOrderCreator extends OrderCreator<DominoOrder> {
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
}
