import { Order } from './interface/Order';

export abstract class OrderCreator<T extends Order> {
  abstract async validate(): Promise<boolean>;

  abstract createOrder(): T;
}
