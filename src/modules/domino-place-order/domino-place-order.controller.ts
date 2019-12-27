import { Controller, Get } from '@nestjs/common';
import { PlaceOrderService } from '../place-order/place-order.service';
import { DominoOrderCreator } from './domino-order.creator';

@Controller('domino-place-order')
export class DominoPlaceOrderController {
  constructor(private readonly placeOrderService: PlaceOrderService) {}

  @Get()
  placeOrder(): Promise<boolean> {
    return this.placeOrderService.placeOrder(new DominoOrderCreator());
  }
}
