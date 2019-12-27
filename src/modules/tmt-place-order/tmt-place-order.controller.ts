import { Controller, Get } from '@nestjs/common';
import { TmtPlaceOrderService } from './tmt-place-order.service';
import { TmtOrder } from './interface/tmt.order';

@Controller('tmt-place-order')
export class TmtPlaceOrderController {
  constructor(private readonly tmtPlaceOrderService: TmtPlaceOrderService) {}

  @Get()
  placeOrder(): Promise<TmtOrder> {
    return this.tmtPlaceOrderService.placeOrder();
  }
}
