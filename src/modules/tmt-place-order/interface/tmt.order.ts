import { Order } from '../../place-order/interface/Order';

export class TmtOrder implements Order {
  orderFrom: string;
  items: string[];
  name: string;
  options: string[];
}
