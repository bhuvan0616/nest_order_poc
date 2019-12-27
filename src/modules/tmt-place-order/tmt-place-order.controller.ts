import { Controller, Get } from '@nestjs/common';
import { PlaceOrderService } from '../place-order/place-order.service';
import { TmtOrderCreator } from './tmt-order.creator';

@Controller('tmt-place-order')
export class TmtPlaceOrderController {
  constructor(private readonly placeOrderService: PlaceOrderService) {}

  @Get()
  placeOrder(): Promise<boolean> {
    return this.placeOrderService.placeOrder(new TmtOrderCreator());
  }
}
