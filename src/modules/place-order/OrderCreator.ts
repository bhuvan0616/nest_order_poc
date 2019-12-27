import { Order } from './interface/Order';

export interface OrderCreator<T extends Order> {
  validate(): Promise<boolean>;

  createOrder?(): T;
}
