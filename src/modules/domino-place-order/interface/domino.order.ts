import { Order } from '../../place-order/interface/Order';

export class DominoOrder implements Order {
  items: string[];
  name: string;
  options: string[];
  thirdParty: string;
}
