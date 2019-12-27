import { Module } from '@nestjs/common';
import { PlaceOrderService } from './place-order.service';

@Module({
  providers: [PlaceOrderService],
  exports: [PlaceOrderService],
})
export class PlaceOrderModule {
}
