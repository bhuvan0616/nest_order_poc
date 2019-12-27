import { Module } from '@nestjs/common';
import { TmtPlaceOrderController } from './tmt-place-order.controller';
import { PlaceOrderModule } from '../place-order/place-order.module';
import { PlaceOrderService } from '../place-order/place-order.service';

@Module({
  imports: [PlaceOrderModule],
  controllers: [TmtPlaceOrderController],
  providers: [PlaceOrderService],
})
export class TmtPlaceOrderModule {}
