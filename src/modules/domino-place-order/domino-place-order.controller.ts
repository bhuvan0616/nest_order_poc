import { Controller, Get } from '@nestjs/common';
import { DominoPlaceOrderService } from './domino-place-order.service';
import { DominoOrder } from './interface/domino.order';

@Controller('domino-place-order')
export class DominoPlaceOrderController {
  constructor(
    private readonly dominoPlaceOrderService: DominoPlaceOrderService,
  ) {}

  @Get()
  placeOrder(): Promise<DominoOrder> {
    return this.dominoPlaceOrderService.placeOrder();
  }
}
